import { useTranslations } from "next-intl";
import { profile } from "@/lib/data";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  const t = useTranslations("contact");

  const links = [
    {
      icon: MdOutlineEmail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      value: profile.linkedin,
      href: `https://${profile.linkedin}`,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: profile.github,
      href: `https://${profile.github}`,
    },
  ];

  return (
    <section id="contact" className="bg-zinc-900 dark:bg-zinc-900 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-widest text-orange-500 uppercase">
              {t("label")}
            </p>
            <h2 className="mb-6 text-4xl font-bold text-white dark:text-white">
              {t("title")}
            </h2>
            <p className="text-zinc-400">{t("description")}</p>
          </div>

          <div className="flex flex-col gap-4">
            {links.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950/50 p-4 transition-colors hover:border-orange-500/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <Icon size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                    {label}
                  </p>
                  <p className="truncate text-sm text-zinc-300 group-hover:text-white transition-colors">
                    {value}
                  </p>
                </div>
                <span className="text-zinc-600 group-hover:text-orange-400 transition-colors">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
