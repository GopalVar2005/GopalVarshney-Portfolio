'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

/**
 * CursorTrackingLogo — A "GV" monogram logo that subtly tilts
 * toward the user's cursor, creating a 3D parallax effect similar
 * to ramx.in's interactive logo.
 */
export default function CursorTrackingLogo() {
    const logoRef = useRef<HTMLAnchorElement>(null);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
    const rafRef = useRef<number | null>(null);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!logoRef.current) return;

        // Cancel any pending frame
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        rafRef.current = requestAnimationFrame(() => {
            const rect = logoRef.current!.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Distance from cursor to logo center, normalized
            const deltaX = (e.clientX - centerX) / window.innerWidth;
            const deltaY = (e.clientY - centerY) / window.innerHeight;

            // Clamp tilt to ±15 degrees for subtle elegance
            const maxTilt = 15;
            const rotateY = deltaX * maxTilt * 2;
            const rotateX = -deltaY * maxTilt * 2;

            setTilt({
                rotateX: Math.max(-maxTilt, Math.min(maxTilt, rotateX)),
                rotateY: Math.max(-maxTilt, Math.min(maxTilt, rotateY)),
            });
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        setTilt({ rotateX: 0, rotateY: 0 });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [handleMouseMove, handleMouseLeave]);

    return (
        <Link
            ref={logoRef}
            href="/"
            className="relative flex items-center gap-1 group"
            aria-label="Go to homepage"
            style={{ perspective: '600px' }}
        >
            <span
                className="tiny5-font text-3xl font-extrabold text-text-primary group-hover:text-accent-blue transition-colors duration-200"
                style={{
                    display: 'inline-block',
                    transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                    transition: 'transform 0.15s ease-out, color 0.2s',
                    willChange: 'transform',
                    transformStyle: 'preserve-3d',
                }}
            >
                GV
            </span>
        </Link>
    );
}
