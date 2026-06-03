"use client";

import { useTranslations } from "next-intl";
import { stack } from "@/lib/data";
import * as Si from "react-icons/si";

type SiIconName = keyof typeof Si;

function TechBadge({ name, icon }: { name: string; icon: string | null }) {
  const Icon = icon ? (Si[icon as SiIconName] as React.ElementType) : null;

  return (
    <div className="flex items-center gap-3 py-2">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 text-base text-zinc-300">
        {Icon ? <Icon /> : <span className="text-[9px] font-bold text-orange-400 leading-none text-center">{name.slice(0, 3)}</span>}
      </span>
      <span className="text-sm text-zinc-300">{name}</span>
    </div>
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
    <section id="stack" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold tracking-widest text-orange-500 uppercase">
          {t("label")}
        </p>
        <h2 className="mb-4 text-4xl font-bold text-white">{t("title")}</h2>
        <p className="mb-16 text-zinc-400">{t("subtitle")}</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ key, items }) => (
            <div
              key={key}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="mb-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                <h3 className="text-xs font-semibold tracking-widest text-orange-500 uppercase">
                  {t(`categories.${key}`)}
                </h3>
              </div>
              <div className="mt-4 divide-y divide-zinc-800/50">
                {items.map((tech) => (
                  <TechBadge key={tech.name} {...tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
