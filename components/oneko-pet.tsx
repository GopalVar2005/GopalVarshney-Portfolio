"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

export default function OnekoPet() {
    const pathname = usePathname();
    const isResume = pathname === "/resume";

    useEffect(() => {
        // Force dog variant (user's preferred pet)
        if (typeof window !== "undefined") {
            localStorage.setItem("oneko:variant", JSON.stringify("dog"));
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("oneko:route-change", { detail: pathname }));
        }
        const neko = document.getElementById("oneko");
        if (neko) {
            if (isResume) {
                neko.style.display = "none";
                neko.style.visibility = "hidden";
            } else {
                neko.style.display = "block";
                neko.style.visibility = "visible";
            }
        }
    }, [isResume, pathname]);

    return (
        <>
            <Script
                src="/oneko/oneko.js"
                strategy="afterInteractive"
            />
            {isResume && (
                <style>{`#oneko { display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; }`}</style>
            )}
        </>
    );
}
