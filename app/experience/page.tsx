import SectionDivider from "@/components/section-divider";
import { Briefcase, CheckCircle2, GraduationCap, Trophy, ExternalLink } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { siteConfig } from "@/lib/config/site-config";


export const metadata = {
    title: "Experience",
    description: "Professional software development experience and engineering background of Gopal Varshney.",
};

export default function ExperiencePage() {
    return (
        <div className="w-full">
            {/* ── Page Header Box ── */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-6 sm:py-8 flex flex-col justify-between gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                            03 / Professional Background
                        </span>
                        <h1 className="font-display text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl">
                            Experience & Education
                        </h1>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xl">
                            A transparent account of my software development internship, academic foundation at GLA University, and technical problem-solving track record.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Section: Internship Experience ── */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card p-5 sm:p-7 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-accent-blue" />
                            <h2 className="font-mono text-xs uppercase tracking-wider text-text-muted font-semibold">
                                Work Experience
                            </h2>
                        </div>

                        {/* Experience Card: Stratbeans Consulting */}
                        <div className="rounded-lg border border-border bg-bg-primary/50 p-5 sm:p-6 transition-all hover:border-text-muted/40">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4 mb-4">
                                <div>
                                    <h3 className="font-display text-lg sm:text-xl font-bold text-text-primary flex items-center gap-2">
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

                            {/* Responsibilities & Real Context */}
                            <div className="space-y-3 mb-5">
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

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                                {["PHP", "Laravel", "Blade Templates", "JavaScript", "CSS", "Postman", "REST APIs"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-mono text-[11px] px-2.5 py-0.5 rounded border border-border bg-bg-card text-text-secondary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section: Education ── */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card p-5 sm:p-7 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-accent-blue" />
                            <h2 className="font-mono text-xs uppercase tracking-wider text-text-muted font-semibold">
                                Education
                            </h2>
                        </div>

                        <div className="rounded-lg border border-border bg-bg-primary/50 p-5 sm:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4 mb-4">
                                <div>
                                    <h3 className="font-display text-lg sm:text-xl font-bold text-text-primary flex items-center gap-2">
                                        <GraduationCap className="h-5 w-5 text-accent-blue shrink-0" />
                                        GLA University
                                    </h3>
                                    <p className="font-mono text-xs sm:text-sm text-text-secondary mt-0.5">
                                        B.Tech in Computer Science and Engineering • Mathura, Uttar Pradesh
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 font-mono text-[11px] text-text-muted">
                                    <span className="px-2.5 py-1 rounded border border-border bg-(--color-surface-elevated) text-emerald-500 font-semibold">
                                        CGPA: 8.88 / 10
                                    </span>
                                    <span className="px-2.5 py-1 rounded border border-border bg-(--color-surface-elevated)">
                                        2023 – 2027 (Expected)
                                    </span>
                                </div>
                            </div>

                            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                                Currently pursuing degree with coursework emphasizing core computer science principles and software engineering rigor.
                            </p>

                            <div>
                                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-2 font-semibold">
                                    Relevant Coursework:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Data Structures & Algorithms",
                                        "Object-Oriented Programming (OOP)",
                                        "Database Management Systems (DBMS)",
                                        "Operating Systems",
                                        "Software Engineering",
                                    ].map((course) => (
                                        <span
                                            key={course}
                                            className="font-mono text-xs px-2.5 py-1 rounded border border-border bg-bg-card text-text-primary"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section: Problem Solving & Achievements ── */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card p-5 sm:p-7 space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-accent-blue" />
                            <h2 className="font-mono text-xs uppercase tracking-wider text-text-muted font-semibold">
                                Problem Solving & Algorithms
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* LeetCode Profile Box */}
                            <a
                                href={siteConfig.links.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-lg border border-border bg-bg-primary/50 p-5 transition-all hover:border-text-muted/50 hover:bg-hover-bg block"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <SiLeetcode className="h-5 w-5 text-[#ffa116]" />
                                        <span className="font-display font-bold text-text-primary text-base">
                                            LeetCode
                                        </span>
                                    </div>
                                    <ExternalLink className="h-3.5 w-3.5 text-text-muted group-hover:text-text-primary transition-colors" />
                                </div>
                                <div className="space-y-1 mb-3">
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-mono text-2xl font-bold text-text-primary">
                                            950+
                                        </span>
                                        <span className="font-mono text-xs text-text-muted">
                                            problems solved
                                        </span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-mono text-lg font-semibold text-emerald-500">
                                            1737
                                        </span>
                                        <span className="font-mono text-xs text-text-muted">
                                            contest rating
                                        </span>
                                    </div>
                                </div>
                                <p className="text-xs text-text-muted leading-relaxed">
                                    Focus on arrays, dynamic programming, trees, and graphs in Java. Consistent participation in timed contests.
                                </p>
                            </a>

                            {/* Codeforces Profile Box */}
                            <a
                                href={siteConfig.links.codeforces}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-lg border border-border bg-bg-primary/50 p-5 transition-all hover:border-text-muted/50 hover:bg-hover-bg block"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="h-5 w-5 text-accent-blue" />
                                        <span className="font-display font-bold text-text-primary text-base">
                                            Codeforces
                                        </span>
                                    </div>
                                    <ExternalLink className="h-3.5 w-3.5 text-text-muted group-hover:text-text-primary transition-colors" />
                                </div>
                                <div className="space-y-1 mb-3">
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-mono text-base font-semibold text-text-primary">
                                            @GopalVar
                                        </span>
                                    </div>
                                    <p className="font-mono text-xs text-text-muted">
                                        Competitive programming profile
                                    </p>
                                </div>
                                <p className="text-xs text-text-muted leading-relaxed">
                                    Practicing competitive programming, speed accuracy, and space-time complexity analysis.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <SectionDivider />
        </div>
    );
}
