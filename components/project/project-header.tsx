"use client";

import { motion } from "framer-motion";

const ProjectHeader = ({
    projectCount,
}: {
    projectCount: number;
}) => {
    return (
        <div className="w-full">
            {/* Title + Count */}
            <div className="w-full border-b border-border">
                <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
                    <div className="border-x border-border bg-bg-card px-5 py-6 sm:py-8">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-2">
                            My Work
                        </span>
                        <motion.h1
                            className="font-display text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl mb-3"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            Projects{" "}
                            <span className="align-super text-xs font-normal text-text-muted sm:text-sm">
                                ({projectCount})
                            </span>
                        </motion.h1>
                        <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                            A collection of my personal and professional projects, showcasing software engineering, interactive web applications, and open-source software.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;
