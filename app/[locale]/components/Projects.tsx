import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const statusMark: Record<string, string> = {
  completed: "●",
  "in-progress": "◐",
  paused: "○",
};

function repoPath(url: string) {
  return url.replace(/^https?:\/\/github\.com\//, "");
}

function hostPath(url: string) {
  return url.replace(/^https?:\/\//, "");
}

export default function Projects() {
  const t = useTranslations("projects");
  const total = String(projects.length).padStart(2, "0");

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24">
      <SectionHeader
        index="02"
        label={t("label")}
        title={t("title")}
        description={t("subtitle")}
      />

      <div>
        {projects.map((project, i) => {
          const rows: { label: string; value: string }[] = [
            {
              label: "status",
              value: `${statusMark[project.status] ?? "○"} ${t(`status.${project.status}`)}`,
            },
            { label: "stack", value: project.tags.join(" · ") },
            { label: "repo", value: repoPath(project.github) },
          ];
          if (project.demo) rows.push({ label: "demo", value: hostPath(project.demo) });

          return (
            <article
              key={project.id}
              className="grid grid-cols-1 gap-8 border-t border-line py-12 lg:grid-cols-2 lg:gap-16"
            >
              <div>
                <h3 className="text-3xl font-semibold tracking-tight text-ink">
                  {project.name}
                </h3>
                <p className="mt-1 text-muted">{t(`items.${project.key}.subtitle`)}</p>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
                  {t(`items.${project.key}.description`)}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-ink px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-canvas"
                  >
                    {t("viewCode")}
                    <ArrowUpRight size={15} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2 py-2 text-sm text-muted transition-colors hover:text-ink"
                    >
                      {t("viewDemo")}
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>

              <div className="self-start rounded-lg border border-line bg-surface font-mono text-sm">
                <div className="flex items-center justify-between border-b border-line px-4 py-3 text-xs text-faint">
                  <span>
                    <span className="text-ink">~/{project.key}</span>
                    {project.featured && <span> · {t("featured")}</span>}
                  </span>
                  <span>
                    {String(i + 1).padStart(2, "0")}/{total}
                  </span>
                </div>
                <dl className="grid grid-cols-[4rem_1fr] gap-x-4 gap-y-3 px-4 py-4">
                  {rows.map(({ label, value }) => (
                    <div key={label} className="col-span-2 grid grid-cols-subgrid">
                      <dt className="text-faint">{label}</dt>
                      <dd className="min-w-0 break-words text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
