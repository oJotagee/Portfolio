"use client";

import { useEffect, useState } from "react";

export default function AppLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("app-loaded")) {
      setIsVisible(false);
      return;
    }

    const waitBeforeExit = window.setTimeout(() => {
      setIsFading(true);
    }, 450);

    const removeLoader = window.setTimeout(() => {
      sessionStorage.setItem("app-loaded", "1");
      setIsVisible(false);
    }, 850);

    return () => {
      window.clearTimeout(waitBeforeExit);
      window.clearTimeout(removeLoader);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-live="polite"
      aria-label="Loading application"
      className={`fixed inset-0 z-100 flex items-center justify-center bg-canvas transition-opacity duration-400 ${isFading ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <p className="font-mono text-sm text-muted">
        jg/dev<span className="animate-blink ml-0.5 text-ink">_</span>
      </p>
    </div>
  );
}
