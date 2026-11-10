import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { profile } from "@/lib/data";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const t = useTranslations("contact");

  const links = [
    { icon: FaLinkedinIn, label: "LinkedIn", href: `https://${profile.linkedin}` },
    { icon: FaGithub, label: "GitHub", href: `https://${profile.github}` },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-6 pt-24 pb-28">
      <SectionHeader
        index="04"
        label={t("label")}
        title={t("title")}
        description={t("description")}
      />

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md border border-ink px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-canvas"
        >
          {t("cta")}
          <ArrowRight size={15} />
        </a>

        {links.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <Icon size={15} aria-hidden />
            {label}
          </a>
        ))}
      </div>

      <p className="mt-8 font-mono text-sm text-faint">{profile.email}</p>
    </section>
  );
}
