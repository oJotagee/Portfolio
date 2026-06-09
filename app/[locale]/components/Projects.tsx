import { useTranslations } from "next-intl";
import { projects } from "@/lib/data";
import { ExternalLink, GitFork } from "lucide-react";

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="bg-zinc-900 dark:bg-zinc-900 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold tracking-widest text-orange-500 uppercase">
          {t("label")}
        </p>
        <h2 className="mb-4 text-4xl font-bold text-white dark:text-white">
          {t("title")}
        </h2>
        <p className="mb-16 text-zinc-400">{t("subtitle")}</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/50 dark:bg-zinc-950/50 p-6 transition-colors hover:border-orange-500/40"
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm italic text-orange-400">
                    {t(`items.${project.key}.subtitle`)}
                  </p>
                </div>
                {project.featured && (
                  <span className="shrink-0 rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-0.5 text-xs text-orange-400">
                    {t("featured")}
                  </span>
                )}
              </div>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400">
                {t(`items.${project.key}.description`)}
              </p>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-700/60 px-2.5 py-0.5 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 border-t border-zinc-800 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-orange-400"
                >
                  <GitFork size={13} />
                  {t("viewCode")}
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-orange-400"
                  >
                    <ExternalLink size={13} />
                    {t("viewDemo")}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
