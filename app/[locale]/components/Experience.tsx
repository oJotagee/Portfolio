import { useTranslations } from "next-intl";
import { experiences } from "@/lib/data";

export default function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="bg-zinc-900 dark:bg-zinc-900 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold tracking-widest text-orange-500 uppercase">
          {t("label")}
        </p>
        <h2 className="mb-16 text-4xl font-bold text-white dark:text-white">
          {t("title")}
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-px bg-zinc-800" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8">
                <div className="absolute -left-1.25 top-2 h-3 w-3 rounded-full border-2 border-orange-500 bg-zinc-900" />

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 dark:bg-zinc-950/60 p-6">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      {exp.current && (
                        <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-green-800 bg-green-950/50 px-2.5 py-0.5 text-xs font-medium text-green-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                          {t("current")}
                        </span>
                      )}
                      <h3 className="mt-1 text-xl font-bold text-white dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium text-orange-400">
                        {t(`items.${exp.key}.role`)}
                      </p>
                      <p className="mt-0.5 text-xs text-zinc-500">{t(`items.${exp.key}.location`)}</p>
                    </div>
                    <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400 whitespace-nowrap">
                      {t(`items.${exp.key}.period`)}
                    </span>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                    {t(`items.${exp.key}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-700/60 px-3 py-1 text-xs text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
