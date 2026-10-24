import { Trophy, ExternalLink, Code2 } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { siteConfig } from "@/lib/config/site-config";
import Link from "next/link";

const ProblemSolvingSection = () => {
    return (
        <section className="w-full">
            {/* Header Box */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 pt-4 pb-4 flex items-center justify-between">
                        <div>
                            <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block mb-0.5">
                                04 / Algorithms & Academics
                            </span>
                            <h2 className="font-display text-lg sm:text-2xl font-bold text-text-primary flex items-center gap-2">
                                Problem Solving & Fundamentals
                            </h2>
                        </div>
                        <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-text-muted uppercase tracking-wider px-2.5 py-1 rounded border border-border bg-(--color-surface-elevated)">
                            <Code2 size={12} className="text-accent-blue" />
                            DSA & Contests
                        </span>
                    </div>
                </div>
            </div>

            {/* Content Box */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card p-5 sm:p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* LeetCode Card */}
                            <a
                                href={siteConfig.links.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-lg border border-border bg-bg-primary/50 p-5 transition-all hover:border-text-muted/50 hover:bg-hover-bg flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <SiLeetcode className="h-5 w-5 text-[#ffa116]" />
                                            <span className="font-display font-bold text-text-primary text-base">
                                                LeetCode
                                            </span>
                                        </div>
                                        <ExternalLink className="h-3.5 w-3.5 text-text-muted group-hover:text-text-primary transition-colors" />
                                    </div>
                                    <div className="flex items-baseline gap-3 mb-2">
                                        <div>
                                            <span className="font-mono text-2xl font-bold text-text-primary">
                                                950+
                                            </span>
                                            <span className="font-mono text-[11px] text-text-muted ml-1">
                                                solved
                                            </span>
                                        </div>
                                        <div className="border-l border-border pl-3">
                                            <span className="font-mono text-xl font-bold text-emerald-500">
                                                1737
                                            </span>
                                            <span className="font-mono text-[11px] text-text-muted ml-1">
                                                rating
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-text-secondary leading-relaxed">
                                        Regularly solving algorithmic problems in Java and participating in timed weekly contests.
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-border/50 font-mono text-[11px] text-accent-blue flex items-center justify-between">
                                    <span>View profile</span>
                                    <span>→</span>
                                </div>
                            </a>

                            {/* Academic & Experience Teaser */}
                            <Link
                                href="/experience"
                                className="group rounded-lg border border-border bg-bg-primary/50 p-5 transition-all hover:border-text-muted/50 hover:bg-hover-bg flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <Trophy className="h-5 w-5 text-accent-blue" />
                                            <span className="font-display font-bold text-text-primary text-base">
                                                Education & Coursework
                                            </span>
                                        </div>
                                        <ExternalLink className="h-3.5 w-3.5 text-text-muted group-hover:text-text-primary transition-colors" />
                                    </div>
                                    <div className="space-y-1.5 mb-3">
                                        <p className="font-mono text-xs text-text-primary font-semibold">
                                            GLA University, Mathura
                                        </p>
                                        <p className="font-mono text-xs text-text-muted">
                                            B.Tech CSE • CGPA: <span className="text-emerald-500 font-bold">8.88 / 10</span>
                                        </p>
                                    </div>
                                    <p className="text-xs text-text-secondary leading-relaxed">
                                        Coursework emphasizing Data Structures, Algorithms, Object-Oriented Programming, DBMS, and Operating Systems.
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-border/50 font-mono text-[11px] text-accent-blue flex items-center justify-between">
                                    <span>View internship & coursework</span>
                                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolvingSection;
