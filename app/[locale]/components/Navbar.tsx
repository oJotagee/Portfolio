"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#experience", label: t("experience") },
    { href: "#projects", label: t("projects") },
    { href: "#stack", label: t("stack") },
    { href: "#contact", label: t("contact") },
  ];

  const otherLocale = locale === "pt" ? "en" : "pt";
  const withoutLocale = pathname.replace(/^\/(pt|en)/, "") || "/";
  const localePath = `/${otherLocale}${withoutLocale}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-bold tracking-wider text-white">
          João<span className="text-orange-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={localePath}
            className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-400 transition-colors hover:border-orange-500 hover:text-orange-400"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <button
            className="text-zinc-400 hover:text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-zinc-400 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
