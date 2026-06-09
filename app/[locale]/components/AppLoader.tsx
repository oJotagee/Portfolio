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
      className={`fixed inset-0 z-100 flex items-center justify-center bg-zinc-950 transition-opacity duration-400 ${isFading ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <span className="absolute inset-0 rounded-full border-2 border-zinc-700" />
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-orange-500" />
        </div>
        <p className="text-xs tracking-[0.28em] text-zinc-400 uppercase">Carregando</p>
      </div>
    </div>
  );
}
