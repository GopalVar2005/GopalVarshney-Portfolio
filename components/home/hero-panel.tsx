import FlipLink from "../fliplink";
import { siteConfig } from "@/lib/config/site-config";
import LiveClock from "./live-clock";
import RotatingTagline from "@/components/rotating-tagline";
import HeroMascot from "@/components/hero-mascot";
import { Quote } from "lucide-react";

const HeroPanel = () => {
    return (
        <div className="w-full">
            {/* Top border line spanning full screen width */}
            <div className="h-px w-full bg-border" />

            <section className="mx-auto w-full max-w-200 px-4 sm:px-6 relative z-5">
                <div className="border-x border-border bg-bg-card">

                    {/* Info card — interactive mascot in left column */}
                    <div className="flex items-stretch bg-bg-card relative z-0" style={{ height: "140px" }}>
                        <div className="w-28 sm:w-36 shrink-0 border-r border-border flex items-center justify-center p-2 bg-bg-secondary/30 relative">
                            <HeroMascot size={105} label="Gopal's mascot" />
                        </div>
                        <div className="flex-1 flex flex-col">
                            {/* Row 1: Styled quote on left, LiveClock on right */}
                            <div className="border-b border-border h-13 flex items-center justify-between gap-3 px-3 sm:px-4 bg-bg-secondary/25">
                                <div className="flex items-center gap-2 min-w-0">
                                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-blue/10 border border-accent-blue/20">
                                        <Quote className="h-2.5 w-2.5 text-accent-blue rotate-180" />
                                    </div>
                                    <span className="font-serif italic text-xs sm:text-sm md:text-[15px] text-text-primary tracking-wide select-none truncate">
                                        “a war against yourself.”
                                    </span>
                                </div>
                                <div className="shrink-0 pl-2">
                                    <LiveClock />
                                </div>
                            </div>

                            {/* Row 2: Name row with generous height so descenders are never clipped */}
                            <div className="border-b border-border h-12 flex items-center px-2">
                                <h2 className="font-display text-lg font-bold text-text-primary sm:text-2xl lg:text-3xl leading-none">
                                    <FlipLink>{siteConfig.name}</FlipLink>
                                </h2>
                            </div>

                            {/* Row 3: Tagline row */}
                            <div className="h-10 flex items-center px-2 text-xs sm:text-sm text-text-secondary font-mono overflow-hidden">
                                <RotatingTagline />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HeroPanel;
