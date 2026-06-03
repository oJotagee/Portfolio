import { useTranslations } from "next-intl";
import { profile } from "@/lib/data";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="bg-zinc-900 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold tracking-widest text-orange-500 uppercase">
          {t("label")}
        </p>
        <h2 className="mb-6 text-4xl font-bold text-white">{t("title")}</h2>
        <p className="mb-12 text-lg leading-relaxed text-zinc-400">
          {t("description")}
        </p>

        <div className="flex gap-12">
          <div>
            <p className="text-5xl font-bold text-white">
              {profile.yearsExperience}+
            </p>
            <p className="mt-1 text-sm text-zinc-400">{t("yearsLabel")}</p>
          </div>
          <div className="w-px bg-zinc-800" />
          <div>
            <p className="text-5xl font-bold text-white">
              {profile.projectsDelivered}+
            </p>
            <p className="mt-1 text-sm text-zinc-400">{t("projectsLabel")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
