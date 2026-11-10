import { useTranslations } from "next-intl";
import { experiences } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <SectionHeader index="01" label={t("label")} title={t("title")} />

      <ol>
        {experiences.map((exp) => (
          <li
            key={exp.id}
            className="grid grid-cols-1 gap-4 border-t border-line py-10 lg:grid-cols-[1fr_2fr] lg:gap-16"
          >
            <div className="font-mono text-sm">
              <p className="text-ink">{t(`items.${exp.key}.period`)}</p>
              <p className="mt-1 text-faint">{t(`items.${exp.key}.location`)}</p>
              {exp.current && (
                <p className="mt-3 inline-flex items-center gap-2 text-xs tracking-widest text-ink uppercase">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink" />
                  {t("current")}
                </p>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-ink">
                {exp.company}
              </h3>
              <p className="mt-1 text-muted">{t(`items.${exp.key}.role`)}</p>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
                {t(`items.${exp.key}.description`)}
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-faint">
                {exp.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
