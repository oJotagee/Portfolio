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
        <div className="flex items-center gap-4">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-500/40 bg-orange-500/10 text-[11px] font-bold tracking-wider text-orange-300">
            JG
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border border-zinc-950 bg-emerald-400" />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold leading-tight text-white">
              {profile.name} {profile.lastName}
            </p>
            <p className="text-[11px] tracking-wide text-zinc-500 uppercase">
              {profile.title}
            </p>
            <p className="text-xs text-zinc-500">{profile.location}</p>
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
