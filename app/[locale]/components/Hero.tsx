"use client";

import { TypeAnimation } from "react-type-animation";
import { useTranslations } from "next-intl";
import { ArrowDown, ArrowRight } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  const t = useTranslations("hero");

  const roles = t.raw("roles") as string[];
  const sequence: (string | number)[] = [];
  roles.forEach((role) => {
    sequence.push(role, 2000);
  });

  const meta = [
    { label: t("years"), value: `${profile.yearsExperience}+` },
    { label: t("projects"), value: `${profile.projectsDelivered}+` },
  ];

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 pb-20"
    >
      <p className="mb-10 flex items-center gap-2 font-mono text-xs tracking-widest text-faint uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-ink" />
        {t("available")}
      </p>

      <p className="mb-3 text-lg text-muted">{t("greeting")}</p>

      <h1 className="text-6xl leading-[0.95] font-semibold tracking-tighter text-ink sm:text-7xl lg:text-8xl">
        {profile.name}
        <br />
        <span className="text-faint">{profile.lastName}</span>
      </h1>

      <div className="mt-8 flex h-8 items-center gap-3 font-mono text-base text-ink sm:text-lg">
        <span className="text-faint">$</span>
        <TypeAnimation
          sequence={sequence}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{t("bio")}</p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md border border-ink px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-canvas"
        >
          {t("cta")}
          <ArrowRight size={15} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md border border-line-strong px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:border-ink hover:text-ink"
        >
          {t("ctaSecondary")}
        </a>
      </div>

      <dl className="mt-20 grid max-w-md grid-cols-2 border-t border-line">
        {meta.map(({ label, value }) => (
          <div key={label} className="pt-4">
            <dd className="text-3xl font-semibold tracking-tight text-ink">{value}</dd>
            <dt className="mt-1 font-mono text-xs tracking-widest text-faint uppercase">
              {label}
            </dt>
          </div>
        ))}
      </dl>

      <a
        href="#experience"
        aria-label={t("scrollHint")}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-faint transition-colors hover:text-ink sm:block"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
