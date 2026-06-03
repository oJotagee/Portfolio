import { profile } from "@/lib/data";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const socialLinks = [
  {
    href: `https://${profile.linkedin}`,
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: `https://${profile.github}`,
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    icon: MdOutlineEmail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-5">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
            JG
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-tight">
              {profile.name} {profile.lastName}
            </p>
            <p className="text-xs text-zinc-500">
              {profile.title} · BR
            </p>
          </div>
        </div>

        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} João Guilherme Santos Oliveira
        </p>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 text-zinc-500 transition-colors hover:border-orange-500/50 hover:text-orange-400"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
