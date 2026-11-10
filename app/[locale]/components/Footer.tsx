import { profile } from "@/lib/data";

const socialLinks = [
  { href: `https://${profile.github}`, label: "GitHub" },
  { href: `https://${profile.linkedin}`, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm">
        <p className="font-mono font-semibold text-ink">
          jg<span className="text-faint">/</span>dev
        </p>

        <p className="text-faint">
          {profile.name} {profile.lastName} · {profile.location} · {new Date().getFullYear()}
        </p>

        <ul className="flex items-center gap-5">
          {socialLinks.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-ink"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
