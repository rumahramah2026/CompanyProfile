"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let rafId = 0;

    const applyDrift = () => {
      rafId = 0;
      const isDesktop = window.innerWidth >= 768;
      if (!isDesktop) {
        if (line1Ref.current) line1Ref.current.style.transform = "";
        if (line2Ref.current) line2Ref.current.style.transform = "";
        if (line3Ref.current) line3Ref.current.style.transform = "";
        return;
      }

      const range = Math.max(window.innerHeight * 0.85, 520);
      const progress = Math.min(Math.max(window.scrollY / range, 0), 1.15);

      if (line1Ref.current) {
        line1Ref.current.style.transform = `translate3d(${(-progress * 26).toFixed(2)}px, 0, 0)`;
      }
      if (line2Ref.current) {
        line2Ref.current.style.transform = `translate3d(${(progress * 18).toFixed(2)}px, 0, 0)`;
      }
      if (line3Ref.current) {
        line3Ref.current.style.transform = `translate3d(${(progress * 34).toFixed(2)}px, 0, 0)`;
      }
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(applyDrift);
      }
    };

    applyDrift();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="beranda"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-between overflow-x-clip border-b border-[var(--border-hairline)] bg-[var(--bg-page)] px-5 pt-6 pb-8 sm:px-8 sm:pt-8 sm:pb-10 lg:min-h-[min(820px,calc(100vh-4rem))] lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 text-[11px] font-medium tracking-[0.22em] uppercase">
          <span className="text-[var(--accent)]">
            Keberagaman Untuk Persatuan
          </span>
          <span className="text-[var(--text-muted)]">Nusantara</span>
        </div>
        <div className="animate-hairline-draw h-px w-full bg-[var(--border-hairline)]" />
      </div>

      <div className="mx-auto my-auto w-full max-w-7xl py-8 sm:py-10">
        <h1 className="font-display text-[clamp(3.25rem,11vw,8.75rem)] leading-[0.86] font-extrabold tracking-tight uppercase text-[var(--text-primary)]">
          <span ref={line1Ref} className="block will-change-transform">
            <span className="block overflow-hidden pb-1">
              <span
                className="animate-hero-line block"
                style={{ animationDelay: "40ms" }}
              >
                Ruang Temu,
              </span>
            </span>
          </span>

          <span
            ref={line2Ref}
            className="block pl-[6%] will-change-transform sm:pl-[10%]"
          >
            <span className="block overflow-hidden pb-1">
              <span
                className="animate-hero-line block"
                style={{ animationDelay: "140ms" }}
              >
                Kolaborasi,
              </span>
            </span>
          </span>

          <span
            ref={line3Ref}
            className="block pl-[12%] text-[var(--accent)] will-change-transform sm:pl-[20%]"
          >
            <span className="block overflow-hidden pb-1">
              <span
                className="animate-hero-line block"
                style={{ animationDelay: "240ms" }}
              >
                Dan Aksi.
              </span>
            </span>
          </span>
        </h1>
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div
          className="animate-hairline-draw mb-7 h-px w-full bg-[var(--border-hairline)]"
          style={{ animationDelay: "160ms" }}
        />

        <div className="grid w-full items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-lg leading-snug font-medium text-[var(--text-primary)] sm:text-xl">
              Merawat keberagaman, menguatkan persatuan.
            </p>
            <p className="mt-2 text-base font-medium text-[var(--text-secondary)]">
              Bersama untuk Indonesia
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 lg:col-span-6 lg:justify-end">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#agenda"
                className="inline-flex items-center gap-2 bg-[var(--btn-primary-bg)] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[var(--btn-primary-text)] transition-opacity hover:opacity-85"
              >
                Lihat Agenda
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
              <a
                href="#tentang"
                className="inline-flex items-center gap-2 border border-[var(--border-strong)] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] uppercase text-[var(--text-primary)] transition-colors hover:border-[var(--text-primary)]"
              >
                Tentang RRI
              </a>
            </div>

            <div
              aria-hidden="true"
              className="hidden items-center gap-3 sm:flex"
            >
              <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[var(--text-muted)]">
                Gulir
              </span>
              <div className="relative h-10 w-px overflow-hidden bg-[var(--border-hairline)]">
                <div className="animate-scroll-line h-full w-full bg-[var(--accent)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
