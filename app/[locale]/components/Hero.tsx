"use client";

import { TypeAnimation } from "react-type-animation";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  const t = useTranslations("hero");

  const roles = t.raw("roles") as string[];
  const sequence: (string | number)[] = [];
  roles.forEach((role) => {
    sequence.push(role, 2000);
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center bg-zinc-950 dark:bg-zinc-950 px-6 pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_50%,rgba(249,115,22,0.08),transparent)]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          <span className="text-xs font-medium tracking-widest text-zinc-400 uppercase">
            {t("available")}
          </span>
        </div>

        <p className="mb-2 text-lg text-zinc-400">{t("greeting")}</p>

        <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
          {profile.name}
        </h1>
        <h1 className="text-6xl font-bold tracking-tight text-zinc-400 sm:text-7xl lg:text-8xl italic">
          {profile.lastName}
        </h1>

        <div className="mt-6 flex h-10 items-center gap-3">
          <span className="text-zinc-600">—</span>
          <div className="text-xl font-light text-orange-400 sm:text-2xl">
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            {t("cta")}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-orange-500 hover:text-white"
          >
            {t("ctaSecondary")}
          </a>
        </div>


      </div>

      <a
        href="#experience"
        aria-label={t("scrollHint")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600 hover:text-orange-400 transition-colors"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
