'use client'
import FlipLink from "./fliplink";
import { siteConfig } from "@/lib/config/site-config";
import Link from "next/link";
import RotatingTagline from "@/components/rotating-tagline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Mail } from "lucide-react";

const Footer = () => {
    return (
        <>
            <footer className="w-full border-b border-border bg-bg-primary">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card">
                        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                            {/* Column 1 (Left - blank on desktop) */}
                            <div className="hidden md:block md:col-span-1 border-r border-border" />

                            {/* Column 2 (Middle - content) */}
                            <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center pt-10 pb-8 px-4">
                                <div className="w-full flex flex-col gap-4 max-w-[340px]">
                                    {/* Built by */}
                                    <div className="flex w-full">
                                        <div className="w-[45%] shrink-0 text-right pr-4 text-text-muted font-mono text-xs sm:text-sm">
                                            developed by
                                        </div>
                                        <div className="flex-1 text-left text-text-secondary font-mono text-xs sm:text-sm">
                                            <a
                                                href={siteConfig.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-text-primary transition-colors underline decoration-border/60 hover:decoration-text-primary"
                                            >
                                                {siteConfig.name}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Education */}
                                    <div className="flex w-full">
                                        <div className="w-[45%] shrink-0 text-right pr-4 text-text-muted font-mono text-xs sm:text-sm">
                                            education
                                        </div>
                                        <div className="flex-1 text-left text-text-secondary font-mono text-xs sm:text-sm flex flex-col gap-0.5">
                                            <span className="text-text-primary font-medium">GLA University</span>
                                            <span className="text-text-muted text-[11px]">B.Tech CSE (2023–2027)</span>
                                        </div>
                                    </div>


                                    {/* Focus */}
                                    <div className="flex w-full">
                                        <div className="w-[45%] shrink-0 text-right pr-4 text-text-muted font-mono text-xs sm:text-sm">
                                            focus
                                        </div>
                                        <div className="flex-1 text-left text-text-secondary font-mono text-xs sm:text-sm">
                                            <span>Full-Stack & DSA</span>
                                        </div>
                                    </div>

                                    {/* Status */}
                                    <div className="flex w-full">
                                        <div className="w-[45%] shrink-0 text-right pr-4 text-text-muted font-mono text-xs sm:text-sm">
                                            availability
                                        </div>
                                        <div className="flex-1 text-left font-mono text-xs sm:text-sm flex items-center gap-1.5 text-emerald-500">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                                            <span>Open for SDE Internships</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3 (Right - blank spacer on desktop) */}
                            <div className="hidden md:block md:col-span-1 border-l border-border relative select-none pointer-events-none" />
                        </div>

                        {/* Social links row */}
                        <div className="grid grid-cols-1 md:grid-cols-4 w-full border-t border-border">
                            {/* Blank Left spacer on desktop */}
                            <div className="hidden md:block md:col-span-1 border-r border-border" />

                            {/* Social box grid (Middle) */}
                            <div className="col-span-1 md:col-span-2 grid grid-cols-4 w-full font-mono text-xs sm:text-sm">
                                <a
                                    href={siteConfig.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-1.5 py-4 border-r border-border hover:bg-hover-bg hover:text-text-primary text-text-muted transition-colors cursor-pointer group"
                                >
                                    <FaGithub className="h-3.5 w-3.5" />
                                    <span>github</span>
                                </a>
                                <a
                                    href={siteConfig.links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-1.5 py-4 border-r border-border hover:bg-hover-bg hover:text-text-primary text-text-muted transition-colors cursor-pointer group"
                                >
                                    <FaLinkedin className="h-3.5 w-3.5 text-[#0a66c2]" />
                                    <span>linkedin</span>
                                </a>
                                <a
                                    href={siteConfig.links.leetcode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-1.5 py-4 border-r border-border hover:bg-hover-bg hover:text-text-primary text-text-muted transition-colors cursor-pointer group"
                                >
                                    <SiLeetcode className="h-3.5 w-3.5 text-[#ffa116]" />
                                    <span>leetcode</span>
                                </a>
                                <a
                                    href={`mailto:${siteConfig.links.email}`}
                                    className="flex items-center justify-center gap-1.5 py-4 hover:bg-hover-bg hover:text-text-primary text-text-muted transition-colors cursor-pointer group"
                                >
                                    <Mail className="h-3.5 w-3.5" />
                                    <span>email</span>
                                </a>
                            </div>

                            {/* Blank Right spacer on desktop */}
                            <div className="hidden md:block md:col-span-1 border-l border-border" />
                        </div>
                    </div>
                </div>

            </footer>

            {/* Bottom Colophon Box */}
            <div className="w-full border-b border-border bg-bg-primary mb-12">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border border-border border-y-0 bg-bg-card relative">
                        {/* FIG. 02 Label */}
                        <div className="absolute top-3 right-4 font-mono text-[10px] text-text-muted opacity-60 tracking-wider pointer-events-none select-none">
                            FIG. 02
                        </div>

                        {/* Main content row */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 py-7 px-4 sm:px-6">
                            {/* Left Section */}
                            <div className="flex flex-col gap-1.5">
                                <h2 className="font-display font-bold text-text-primary text-lg sm:text-xl lg:text-2xl">
                                    <FlipLink>{siteConfig.name}</FlipLink>
                                </h2>
                                <p className="font-mono text-xs sm:text-sm text-text-secondary overflow-hidden">
                                    <RotatingTagline />
                                </p>
                            </div>

                            {/* Right Section: Navigation Links */}
                            <div className="flex items-center gap-4 font-mono text-xs sm:text-sm">
                                <Link
                                    href="/projects"
                                    className="text-text-secondary hover:text-text-primary transition-colors"
                                >
                                    Projects
                                </Link>
                                <span className="text-border">/</span>
                                <Link
                                    href="/experience"
                                    className="text-text-secondary hover:text-text-primary transition-colors"
                                >
                                    Experience
                                </Link>
                                <span className="text-border">/</span>
                                <Link
                                    href="/resume"
                                    className="text-text-secondary hover:text-text-primary transition-colors"
                                >
                                    Resume
                                </Link>
                            </div>
                        </div>

                        {/* Bottom Copyright Row */}
                        <div className="border-t border-border py-3 text-center">
                            <p className="text-xs text-text-secondary font-mono">
                                © {new Date().getFullYear()} {siteConfig.name}. Designed & Built for Software Engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;