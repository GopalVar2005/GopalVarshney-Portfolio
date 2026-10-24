import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site-config";
import NowTeaser from "./now-teaser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FileText, Mail, ArrowUpRight, Trophy, Code2, GraduationCap } from "lucide-react";

const IntroSection = async () => {
  return (
    <section className="w-full">
      {/* ── Social Profiles Bar ── */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card px-5 py-3 flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-(--color-surface-elevated) px-3 py-1.5 text-xs font-mono font-semibold text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200"
              >
                <FaLinkedin className="h-3.5 w-3.5 text-[#0a66c2]" />
                LinkedIn
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-(--color-surface-elevated) px-3 py-1.5 text-xs font-mono font-semibold text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200"
              >
                <FaGithub className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href={siteConfig.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-(--color-surface-elevated) px-3 py-1.5 text-xs font-mono font-semibold text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200"
              >
                <SiLeetcode className="h-3.5 w-3.5 text-[#ffa116]" />
                LeetCode
              </a>
              <Link
                href="/resume"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-(--color-surface-elevated) px-3 py-1.5 text-xs font-mono font-semibold text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200"
              >
                <FileText className="h-3.5 w-3.5 text-accent-blue" />
                Resume
              </Link>
            </div>

            <a
              href={`mailto:${siteConfig.links.email}`}
              className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-accent-blue hover:underline transition-all group shrink-0"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Get in touch</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* ── 01 // BIO Header Box ── */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card px-5 pt-4 pb-4">
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted block mb-1">
              01 / Background
            </span>
            <h2 className="font-display text-lg sm:text-2xl lg:text-3xl font-bold text-text-primary">
              Where I&apos;m at
            </h2>
          </div>
        </div>
      </div>

      {/* Bullets List Box */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card p-4 sm:p-5">
            <ul className="space-y-3.5">
              {siteConfig.bio.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue opacity-85" />
                  <p className="text-xs sm:text-sm leading-relaxed text-text-secondary">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* High-Impact Engineering Metrics Grid (Replaces Empty GitHub Calendar) */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {/* Stat 1: LeetCode */}
              <div className="p-4 sm:p-5 flex flex-col justify-between gap-2">
                <div className="flex items-center justify-between text-text-muted">
                  <span className="font-mono text-[9px] uppercase tracking-widest">
                    ALGORITHMS
                  </span>
                  <Code2 size={13} className="text-[#ffa116]" />
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-text-primary">
                    950+
                  </div>
                  <div className="font-mono text-[11px] text-text-muted mt-0.5">
                    LeetCode Problems Solved
                  </div>
                </div>
              </div>

              {/* Stat 2: Contest Rating */}
              <div className="p-4 sm:p-5 flex flex-col justify-between gap-2">
                <div className="flex items-center justify-between text-text-muted">
                  <span className="font-mono text-[9px] uppercase tracking-widest">
                    COMPETITIVE
                  </span>
                  <Trophy size={13} className="text-accent-blue" />
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-emerald-500">
                    1737
                  </div>
                  <div className="font-mono text-[11px] text-text-muted mt-0.5">
                    Contest Rating (Top 12%)
                  </div>
                </div>
              </div>

              {/* Stat 3: Academics */}
              <div className="p-4 sm:p-5 flex flex-col justify-between gap-2">
                <div className="flex items-center justify-between text-text-muted">
                  <span className="font-mono text-[9px] uppercase tracking-widest">
                    ACADEMICS
                  </span>
                  <GraduationCap size={14} className="text-text-primary" />
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-bold text-text-primary">
                    8.88 <span className="text-xs text-text-muted font-normal">/ 10</span>
                  </div>
                  <div className="font-mono text-[11px] text-text-muted mt-0.5">
                    B.Tech CSE · GLA University
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {siteConfig.features.showNowSection && (
        <NowTeaser />
      )}
    </section>
  );
};

export default IntroSection;
