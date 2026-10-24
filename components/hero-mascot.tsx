'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

/**
 * HeroMascot — Interactive pixel-art mascot avatar that:
 * 1. Tracks cursor position and looks toward the cursor (8 directions + center)
 * 2. Reacts to clicks/taps with fun expressions (blink, heart, sparkle, etc.)
 * 3. Uses sprite sheets: mascot-directions.webp (3×3) and mascot-reactions.webp (3×3)
 * 
 * Inspired by ramx.in's HeroMascot implementation.
 */

// Direction sprite order (3×3 grid, row-major):
// [0] up-left    [1] up       [2] up-right
// [3] left       [4] center   [5] right
// [6] down-left  [7] down     [8] down-right
const DIRECTION_ORDER = [
    'up-left', 'up', 'up-right',
    'left', 'center', 'right',
    'down-left', 'down', 'down-right',
];

// Reaction sprite order (3×3 grid, row-major):
// [0] blink  [1] heart    [2] sparkle
// [3] gasp   [4] star     [5] blush
// [6] sleep  [7] dizzy    [8] laugh
const REACTION_ORDER = ['blink', 'heart', 'sparkle', 'gasp', 'star', 'blush', 'sleep', 'dizzy', 'laugh'];

// Click cycle: fun expressions directly triggered per click (blink is reserved for natural eye blinks)
const CLICK_REACTIONS = ['heart', 'sparkle', 'star', 'blush', 'laugh', 'gasp'];

interface HeroMascotProps {
    size?: number;
    className?: string;
    label?: string;
}

function getDirectionIndex(direction: string): number {
    const idx = DIRECTION_ORDER.indexOf(direction);
    return idx === -1 ? 4 : idx; // default to center
}

function getReactionIndex(reaction: string): number {
    const idx = REACTION_ORDER.indexOf(reaction);
    return idx === -1 ? 0 : idx;
}


export default function HeroMascot({ size = 120, className = '', label = "Gopal's mascot" }: HeroMascotProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const innerRef = useRef<HTMLSpanElement>(null);
    const [direction, setDirection] = useState('center');
    const [reaction, setReaction] = useState<string | null>(null);
    const clickCountRef = useRef(0);
    const clickTimeRef = useRef(0);
    const reactionIndexRef = useRef(0);
    const timeoutsRef = useRef<number[]>([]);

    const reactionRef = useRef<string | null>(null);
    const lastMousePosRef = useRef<{ x: number; y: number } | null>(null);

    // Keep reactionRef synchronized with reaction state
    useEffect(() => {
        reactionRef.current = reaction;
    }, [reaction]);

    // Calculate direction from cursor coordinates
    const updateDirectionFromCoords = useCallback((clientX: number, clientY: number) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = clientX - cx;
        const dy = clientY - cy;

        // Dead zone — if cursor is very close, look center
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 30) {
            setDirection('center');
            return;
        }

        // Determine direction using angle (-180 to 180)
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        let dir: string;
        if (angle >= -22.5 && angle < 22.5) dir = 'right';
        else if (angle >= 22.5 && angle < 67.5) dir = 'down-right';
        else if (angle >= 67.5 && angle < 112.5) dir = 'down';
        else if (angle >= 112.5 && angle < 157.5) dir = 'down-left';
        else if (angle >= 157.5 || angle < -157.5) dir = 'left';
        else if (angle >= -157.5 && angle < -112.5) dir = 'up-left';
        else if (angle >= -112.5 && angle < -67.5) dir = 'up';
        else dir = 'up-right';

        setDirection(dir);
    }, []);

    // Clear all pending timeouts
    const clearTimeouts = useCallback(() => {
        timeoutsRef.current.forEach(id => window.clearTimeout(id));
        timeoutsRef.current = [];
    }, []);

    // Handle mouse move — always track position, update direction
    const handleMouseMove = useCallback((e: MouseEvent) => {
        lastMousePosRef.current = { x: e.clientX, y: e.clientY };
        updateDirectionFromCoords(e.clientX, e.clientY);
    }, [updateDirectionFromCoords]);

    // Handle click — directly trigger ONE mood per click (exactly like ramx.in)
    const handleClick = useCallback(() => {
        clearTimeouts();

        const now = Date.now();
        // Track rapid clicks for dizzy reaction (4 clicks within 900ms)
        if (now - clickTimeRef.current < 900) {
            clickCountRef.current += 1;
        } else {
            clickCountRef.current = 1;
        }
        clickTimeRef.current = now;

        // Reset to cursor direction when reaction ends
        const finishReaction = () => {
            setReaction(null);
            reactionRef.current = null;
            if (lastMousePosRef.current) {
                updateDirectionFromCoords(lastMousePosRef.current.x, lastMousePosRef.current.y);
            }
        };

        // If 4+ rapid clicks, trigger dizzy mood
        if (clickCountRef.current >= 4) {
            clickCountRef.current = 0;
            setReaction('dizzy');
            reactionRef.current = 'dizzy';
            const t = window.setTimeout(finishReaction, 1600);
            timeoutsRef.current.push(t);
            return;
        }

        // ONE click = ONE mood directly (clean cycle: heart -> sparkle -> star -> blush -> laugh -> gasp)
        const currentMood = CLICK_REACTIONS[reactionIndexRef.current % CLICK_REACTIONS.length];
        reactionIndexRef.current += 1;

        setReaction(currentMood);
        reactionRef.current = currentMood;

        // Hold the mood for 1500ms before returning to cursor tracking
        const t = window.setTimeout(finishReaction, 1500);
        timeoutsRef.current.push(t);

        // Bouncy playful animation on click
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && innerRef.current) {
            innerRef.current.animate(
                [
                    { transform: 'scale(1)', offset: 0 },
                    { transform: 'scale(0.86)', offset: 0.2 },
                    { transform: 'scale(1.12)', offset: 0.5 },
                    { transform: 'scale(0.97)', offset: 0.75 },
                    { transform: 'scale(1)', offset: 1 },
                ],
                { duration: 400, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
            );
        }
    }, [clearTimeouts, updateDirectionFromCoords]);
    // Set up mouse listener ONCE on mount, clean up timeouts only on unmount
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeouts();
        };
    }, [handleMouseMove, clearTimeouts]);

    // Sprite positioning
    const dirIdx = getDirectionIndex(direction);
    const dirCol = dirIdx % 3;
    const dirRow = Math.floor(dirIdx / 3);

    const activeReaction = reaction;
    const reactIdx = activeReaction ? getReactionIndex(activeReaction) : 0;
    const reactCol = reactIdx % 3;
    const reactRow = Math.floor(reactIdx / 3);

    const spriteStyle = (col: number, row: number): React.CSSProperties => ({
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        backgroundSize: '300% 300%',
        backgroundPosition: `${col * 50}% ${row * 50}%`,
        imageRendering: 'pixelated',
        transition: 'opacity 0.08s ease',
    });

    return (
        <button
            ref={buttonRef}
            type="button"
            onClick={handleClick}
            aria-label={`Boop the ${label}`}
            className={className}
            style={{
                position: 'relative',
                display: 'block',
                flexShrink: 0,
                width: size,
                height: size,
                padding: 0,
                border: 0,
                background: 'transparent',
                appearance: 'none',
                cursor: 'pointer',
                userSelect: 'none',
            }}
        >
            <span
                ref={innerRef}
                style={{
                    position: 'relative',
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    transformOrigin: '50% 78%',
                }}
            >
                {/* Direction sprite — visible when no reaction */}
                <span
                    style={{
                        ...spriteStyle(dirCol, dirRow),
                        backgroundImage: `url(/mascots/mascot-directions.webp?v=2)`,
                        opacity: activeReaction ? 0 : 1,
                    }}
                />
                {/* Reaction sprite — visible during reaction */}
                <span
                    style={{
                        ...spriteStyle(reactCol, reactRow),
                        backgroundImage: `url(/mascots/mascot-reactions.webp?v=2)`,
                        opacity: activeReaction ? 1 : 0,
                    }}
                />
            </span>
        </button>
    );
}
