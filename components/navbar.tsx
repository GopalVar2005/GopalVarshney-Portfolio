'use client'
import { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import CursorTrackingLogo from "./cursor-tracking-logo";

// Clean, professional navigation items for Gopal Varshney
const navItems = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Resume", to: "/resume" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const { theme, toggleTheme } = useTheme();
    const pathname = usePathname();

    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileButtonRef = useRef<HTMLButtonElement>(null);

    // Close mobile menu on outside click, scroll, or Escape key
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
            const target = e.target as Node;
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(target) &&
                mobileButtonRef.current &&
                !mobileButtonRef.current.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            setIsOpen(false);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("pointerdown", handleOutsideClick);
        document.addEventListener("keydown", handleKeyDown);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            document.removeEventListener("pointerdown", handleOutsideClick);
            document.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-bg-primary/80 backdrop-blur transition-colors duration-300">
            <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                <div className="grid h-12 grid-cols-2 items-center border-x border-border px-4">
                    {/* Brand Logo initials — cursor-tracking 3D tilt */}
                    <CursorTrackingLogo />

                    <div className="flex items-center justify-end gap-5">
                        {/* Desktop Navigation Links */}
                        <nav
                            className="hidden items-center gap-6 text-sm font-medium text-text-secondary md:flex font-mono"
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            {navItems.map((item) => {
                                const isActive = pathname === item.to;
                                const showDot = hoveredItem
                                    ? hoveredItem === item.to
                                    : isActive;

                                return (
                                    <Link
                                        key={item.to}
                                        href={item.to}
                                        onMouseEnter={() => setHoveredItem(item.to)}
                                        onFocus={() => setHoveredItem(item.to)}
                                        className={`relative text-xs uppercase tracking-wider font-semibold transition-colors py-1 ${
                                            isActive || hoveredItem === item.to
                                                ? "text-text-primary"
                                                : "text-text-muted hover:text-text-primary"
                                        }`}
                                    >
                                        {item.label}
                                        {showDot && (
                                            <motion.span
                                                layoutId="nav-dot"
                                                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-blue"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 35,
                                                }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Theme Toggle Button */}
                        <button
                            type="button"
                            className="group flex h-8 w-8 items-center justify-center rounded-md text-text-secondary transition-all duration-200 hover:text-text-primary focus:outline-none"
                            aria-label="Toggle theme"
                            onClick={toggleTheme}
                        >
                            {theme === "dark" ? (
                                <Sun className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                            ) : (
                                <Moon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
                            )}
                        </button>

                        {/* Mobile Hamburger Button */}
                        <button
                            ref={mobileButtonRef}
                            type="button"
                            className="flex items-center rounded-md border border-border bg-btn-bg p-1.5 text-text-secondary transition hover:border-border hover:text-text-primary md:hidden cursor-pointer"
                            onClick={() => setIsOpen((prev) => !prev)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            {isOpen ? (
                                <X className="h-4 w-4" />
                            ) : (
                                <Menu className="h-4 w-4" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer & Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 top-12 z-40 bg-black/30 backdrop-blur-[2px] md:hidden"
                            aria-hidden="true"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 right-0 top-full mt-2 px-4 md:hidden z-50"
                        >
                            <div ref={mobileMenuRef} className="mx-auto w-full max-w-200">
                                <div className="rounded-xl border border-border bg-bg-card/95 p-3 shadow-xl backdrop-blur-lg">
                                    <div className="flex flex-col gap-1 text-sm font-medium font-mono">
                                        {navItems.map((item) => {
                                            const isActive = pathname === item.to;
                                            return (
                                                <Link
                                                    key={item.to}
                                                    href={item.to}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-colors ${
                                                        isActive
                                                            ? "bg-btn-bg text-text-primary"
                                                            : "text-text-secondary hover:bg-hover-bg hover:text-text-primary"
                                                    }`}
                                                >
                                                    <span>{item.label}</span>
                                                    {isActive && (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                                                    )}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;