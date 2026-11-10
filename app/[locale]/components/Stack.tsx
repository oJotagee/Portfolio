"use client";

import { useTranslations } from "next-intl";
import { stack } from "@/lib/data";
import * as Si from "react-icons/si";
import SectionHeader from "./SectionHeader";

type SiIconName = keyof typeof Si;

function Tech({ name, icon }: { name: string; icon: string | null }) {
  const Icon = icon ? (Si[icon as SiIconName] as React.ElementType) : null;

  return (
    <li className="flex items-center gap-3 text-sm text-ink">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-base text-faint">
        {Icon ? <Icon aria-hidden /> : <span aria-hidden className="font-mono text-xs">/</span>}
      </span>
      {name}
    </li>
  );
}

export default function Stack() {
  const t = useTranslations("stack");

  const categories = [
    { key: "frontend", items: stack.frontend },
    { key: "backend", items: stack.backend },
    { key: "databases", items: stack.databases },
    { key: "devops", items: stack.devops },
  ] as const;

  return (
    <section id="stack" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <SectionHeader
        index="03"
        label={t("label")}
        title={t("title")}
        description={t("subtitle")}
      />

      <div>
        {categories.map(({ key, items }) => (
          <div
            key={key}
            className="grid grid-cols-1 gap-6 border-t border-line py-8 lg:grid-cols-[1fr_2fr] lg:gap-16"
          >
            <h3 className="font-mono text-xs tracking-widest text-faint uppercase">
              {t(`categories.${key}`)}
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
              {items.map((tech) => (
                <Tech key={tech.name} {...tech} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
