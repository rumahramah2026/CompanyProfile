"use client";

import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { PILLARS } from "@/data/site";

export function PillarShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(0);

  const activePillar = PILLARS[activeIndex];

  return (
    <section
      id="pilar"
      className="border-y border-[var(--border-hairline)] bg-[var(--bg-alt)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col gap-4 border-b border-[var(--border-hairline)] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[var(--accent)]">
              02 — Tiga Pilar Gerakan
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[0.94] font-bold tracking-tight uppercase text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              <span className="block">Dari Perjumpaan</span>
              <span className="block pl-8 sm:pl-14">Menuju Aksi Nyata</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
            Tiga langkah yang saling terhubung: mempertemukan warga lintas latar,
            merajut kerja bersama, lalu menghadirkannya langsung di masyarakat.
          </p>
        </div>

        {/* Desktop: EIGER-inspired asymmetric editorial split + interactive panels */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12">
          <div
            key={activePillar.id}
            className="animate-panel-in col-span-5 flex flex-col justify-between py-2"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-bold tracking-[0.2em] text-[var(--text-muted)]">
                  {activePillar.number} / 0{PILLARS.length}
                </span>
                <span
                  className="h-px flex-1"
                  style={{ backgroundColor: activePillar.accentHex }}
                />
              </div>

              <h3 className="mt-6 font-display text-5xl leading-[0.9] font-extrabold tracking-tight uppercase text-[var(--text-primary)]">
                <span className="block">{activePillar.titleTop}</span>
                <span className="block pl-10">{activePillar.titleBottom}</span>
              </h3>

              <p className="mt-5 text-base font-medium text-[var(--text-primary)]">
                {activePillar.tagline}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                {activePillar.description}
              </p>
            </div>

            <div className="mt-10">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)]">
                Fokus Kegiatan
              </p>
              <ul className="divide-y divide-[var(--border-hairline)] border-y border-[var(--border-hairline)]">
                {activePillar.activities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-between py-3 text-sm text-[var(--text-primary)]"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[var(--text-muted)]" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="col-span-7 flex h-[480px] gap-3"
            role="tablist"
            aria-label="Pilih pilar Rumah Ramah Indonesia"
          >
            {PILLARS.map((pillar, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden border p-6 text-left transition-all duration-500 ease-out focus:outline-none ${
                    isActive
                      ? "flex-[2.2] border-transparent bg-[var(--panel-active-bg)] text-[var(--panel-active-text)]"
                      : "flex-1 border-[var(--border-hairline)] bg-[var(--panel-bg)] text-[var(--text-primary)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1 transition-opacity duration-300"
                    style={{
                      backgroundColor: pillar.accentHex,
                      opacity: isActive ? 1 : 0.45,
                    }}
                  />

                  <div className="flex w-full items-start justify-between">
                    <span
                      className={`font-display text-3xl font-bold tracking-wider ${
                        isActive
                          ? "text-[var(--panel-active-text)]"
                          : "text-[var(--text-muted)] group-hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {pillar.number}
                    </span>
                    <span
                      className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${
                        isActive
                          ? "text-[var(--panel-active-muted)]"
                          : "text-[var(--text-muted)]"
                      }`}
                    >
                      {isActive ? "Aktif" : "Pilih"}
                    </span>
                  </div>

                  <div>
                    <div
                      className={`font-display leading-[0.9] font-extrabold uppercase transition-all duration-300 ${
                        isActive ? "text-4xl xl:text-5xl" : "text-2xl xl:text-3xl"
                      }`}
                    >
                      <span className="block">{pillar.titleTop}</span>
                      <span className={isActive ? "block pl-6" : "block pl-3"}>
                        {pillar.titleBottom}
                      </span>
                    </div>

                    {isActive && (
                      <p className="mt-5 max-w-xs border-t border-white/15 pt-4 text-xs leading-relaxed text-[var(--panel-active-muted)]">
                        {pillar.tagline}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet: Clean editorial hairline accordion */}
        <div className="divide-y divide-[var(--border-hairline)] border-y border-[var(--border-hairline)] lg:hidden">
          {PILLARS.map((pillar, index) => {
            const isOpen = mobileOpenIndex === index;
            return (
              <div key={pillar.id} className="py-5">
                <button
                  type="button"
                  onClick={() =>
                    setMobileOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className="font-display text-xl font-bold"
                      style={{ color: pillar.accentHex }}
                    >
                      {pillar.number}
                    </span>
                    <span className="font-display text-3xl font-bold tracking-tight uppercase text-[var(--text-primary)]">
                      {pillar.titleTop} {pillar.titleBottom}
                    </span>
                  </div>
                  <span className="text-[var(--text-muted)]">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 space-y-4 pl-9">
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {pillar.tagline}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {pillar.description}
                    </p>
                    <ul className="divide-y divide-[var(--border-hairline)] border-t border-[var(--border-hairline)] pt-1">
                      {pillar.activities.map((item) => (
                        <li
                          key={item}
                          className="py-2.5 text-xs font-medium text-[var(--text-primary)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
