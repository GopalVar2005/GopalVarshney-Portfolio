import { Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ExperienceSection() {
    return (
        <section className="w-full">
            {/* Header Box */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 pt-4 pb-4 flex items-center justify-between">
                        <div>
                            <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block mb-0.5">
                                02 / Work Experience
                            </span>
                            <h2 className="font-display text-lg sm:text-2xl font-bold text-text-primary">
                                Industry Internship
                            </h2>
                        </div>
                        <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs text-text-muted uppercase tracking-wider px-2.5 py-1 rounded border border-border bg-(--color-surface-elevated)">
                            <Briefcase size={12} className="text-accent-blue" />
                            Work Experience
                        </span>
                    </div>
                </div>
            </div>

            {/* Content Box */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card p-5 sm:p-6">
                        <div className="rounded-lg border border-border bg-bg-primary/50 p-5 sm:p-6 transition-all hover:border-text-muted/40">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4 mb-4">
                                <div>
                                    <h3 className="font-display text-base sm:text-lg font-bold text-text-primary flex items-center gap-2">
                                        <Briefcase className="h-4 w-4 text-accent-blue shrink-0" />
                                        Software Engineer Intern
                                    </h3>
                                    <p className="font-mono text-xs sm:text-sm text-text-secondary mt-0.5">
                                        Stratbeans Consulting Pvt. Ltd. • July 2026 – Present
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 font-mono text-[11px] text-text-muted">
                                    <span className="px-2.5 py-1 rounded border border-border bg-(--color-surface-elevated)">
                                        Internship
                                    </span>
                                </div>
                            </div>

                            {/* Practical Engineering Responsibilities */}
                            <div className="space-y-2.5 mb-4">
                                <div className="flex items-start gap-2.5">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                                        Contributed to backend and frontend improvements across assessment, learning-path, and skill-management workflows in an enterprise learning platform.
                                    </p>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                                        Debugged and resolved functional, validation, UI, and data-integrity issues across multiple modules, improving feature reliability.
                                    </p>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                                        Implemented and validated application changes using structured test cases and browser-based testing to support stable UAT releases.
                                    </p>
                                </div>
                            </div>

                            {/* Tech Stack Pills & Link */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-border/40">
                                <div className="flex flex-wrap gap-1.5">
                                    {["PHP", "Laravel", "JavaScript", "Postman", "REST APIs"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="font-mono text-[11px] px-2.5 py-0.5 rounded border border-border bg-bg-card text-text-secondary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href="/experience"
                                    className="font-mono text-xs text-accent-blue hover:underline inline-flex items-center gap-1 group shrink-0"
                                >
                                    <span>Full background</span>
                                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
