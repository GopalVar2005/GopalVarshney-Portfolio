import { Download, ExternalLink, FileText, CheckCircle2 } from "lucide-react";
import SectionDivider from "@/components/section-divider";


export const metadata = {
  title: "Resume",
  description: "Official resume of Gopal Varshney, Computer Science student and Software Developer.",
};

export default function ResumePage() {
  const resumeUrl = "/Gopal_Varshney_Resume.pdf";

  return (
    <div className="w-full" data-page="resume">
      {/* ── Page Header Box ── */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card px-5 py-6 sm:py-8 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted block mb-2">
                04 / Curriculum Vitae
              </span>
              <h1 className="font-display text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl mb-2">
                Resume
              </h1>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xl">
                Official resume detailing software engineering projects, technical skills, problem-solving track record, and educational background.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href={resumeUrl}
                download="Gopal_Varshney_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-md bg-text-primary px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-bg-primary transition hover:opacity-90 shadow-xs"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-(--color-surface-elevated) px-3 py-2.5 text-xs font-mono font-semibold text-text-secondary hover:text-text-primary hover:border-text-muted transition-all"
                title="Open in new tab"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="hidden sm:inline">Open</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Document Preview Container ── */}
      <div className="w-full border-b border-border">
        <div className="mx-auto w-full max-w-200 px-4 sm:px-6">
          <div className="border-x border-border bg-bg-card p-4 sm:p-6">
            <div className="w-full rounded-lg border border-border bg-bg-primary overflow-hidden shadow-xs">
              {/* Document Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-(--color-surface-elevated) select-none">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-accent-blue" />
                  <span className="font-mono text-xs font-medium text-text-primary">
                    Gopal_Varshney_Resume.pdf
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-emerald-500 font-medium">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified
                  </span>
                </div>
              </div>

              {/* Mobile quick action bar */}
              <div className="sm:hidden px-4 py-2 border-b border-border bg-bg-secondary/60 flex items-center justify-between text-xs font-mono">
                <span className="text-text-muted">Mobile screen?</span>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Full PDF</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Native PDF Embed Object */}
              <div className="w-full h-[75vh] min-h-[500px] bg-bg-secondary flex items-center justify-center">
                <object
                  data={`${resumeUrl}#toolbar=0&navpanes=0`}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  {/* Fallback for browsers without inline PDF display */}
                  <div className="p-8 text-center flex flex-col items-center justify-center gap-4">
                    <FileText className="h-12 w-12 text-text-muted" />
                    <div>
                      <p className="font-display font-semibold text-text-primary text-base mb-1">
                        PDF Preview
                      </p>
                      <p className="font-mono text-xs text-text-secondary max-w-sm mx-auto">
                        Your browser doesn&apos;t support embedded PDFs directly. You can view or download it below.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={resumeUrl}
                        download="Gopal_Varshney_Resume.pdf"
                        className="inline-flex items-center gap-2 rounded-md bg-text-primary px-4 py-2 text-xs font-mono font-semibold uppercase text-bg-primary"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Download PDF
                      </a>
                      <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-card px-3.5 py-2 text-xs font-mono font-semibold text-text-primary"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Open Fullscreen
                      </a>
                    </div>
                  </div>
                </object>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider />
    </div>
  );
}