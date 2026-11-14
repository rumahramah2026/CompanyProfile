"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NAV_LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#pilar", label: "Tiga Pilar" },
  { href: "#agenda", label: "Agenda" },
  { href: "#kontak", label: "Kontak" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-hairline)] bg-[var(--bg-nav)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#beranda"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Kembali ke beranda Rumah Ramah Indonesia"
        >
          <Image
            src="/RRI_Polos.png"
            alt="Lambang Rumah Ramah Indonesia"
            width={34}
            height={36}
            className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-[0.06em] uppercase text-[var(--text-primary)]">
              Rumah Ramah
            </span>
            <span className="mt-0.5 text-[10px] font-medium tracking-[0.22em] uppercase text-[var(--text-muted)]">
              Indonesia
            </span>
          </div>
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.16em] uppercase text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <ThemeSwitcher />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeSwitcher />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center border border-[var(--border-hairline)] text-[var(--text-primary)]"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigasi seluler"
          className="border-t border-[var(--border-hairline)] bg-[var(--bg-page)] md:hidden"
        >
          <div className="flex flex-col divide-y divide-[var(--border-hairline)] px-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-xs font-medium tracking-[0.18em] uppercase text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
