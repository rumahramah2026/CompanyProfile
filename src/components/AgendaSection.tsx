"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Download,
  MapPin,
  Share2,
  X,
  ZoomIn,
} from "lucide-react";
import { PlateCropMarks } from "@/components/PlateCropMarks";
import { EVENTS, SOCIAL_LINKS, type EventFlyerItem } from "@/data/site";

export function AgendaSection() {
  const [selectedFlyer, setSelectedFlyer] = useState<EventFlyerItem | null>(
    null,
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleShare = async (event: EventFlyerItem) => {
    const shareText = `${event.category}: ${event.title} — ${event.subtitle}\nTanggal: ${event.date}\nWaktu: ${event.time} (Registrasi mulai ${event.registrationTime})\nLokasi: ${event.location}\nhttps://rumahramah.id/#agenda`;

    if (
      typeof navigator !== "undefined" &&
      typeof navigator.share === "function"
    ) {
      try {
        await navigator.share({
          title: `${event.category}: ${event.title} — Rumah Ramah Indonesia`,
          text: shareText,
          url: "https://rumahramah.id/#agenda",
        });
        return;
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      setCopiedId(event.id);
      window.setTimeout(() => {
        setCopiedId((current) => (current === event.id ? null : current));
      }, 2200);
    } catch {
      // Abaikan jika izin clipboard dibatasi browser
    }
  };

  useEffect(() => {
    if (!selectedFlyer) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedFlyer(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedFlyer]);

  return (
    <section id="agenda" className="bg-[var(--bg-page)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col gap-4 border-b border-[var(--border-hairline)] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[var(--accent)]">
              03 — Agenda &amp; Kegiatan
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[0.94] font-bold tracking-tight uppercase text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              <span className="block">Ruang Kebersamaan</span>
              <span className="block pl-8 sm:pl-14">Di Tengah Publik</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
            Informasi kegiatan terbuka dan perjumpaan warga bersama Rumah Ramah
            Indonesia. Klik poster untuk melihat rincian ukuran penuh.
          </p>
        </div>

        <div className="space-y-20">
          {EVENTS.map((event) => (
            <article
              key={event.id}
              className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14"
            >
              {/* Left: Flyer Poster Exhibition Frame */}
              <div className="lg:col-span-5">
                <div className="relative border border-[var(--border-hairline)] bg-[var(--bg-elevated)] p-4 sm:p-5">
                  <PlateCropMarks />

                  <div className="mb-3 flex items-center justify-between text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--text-muted)]">
                    <span>Materi Publik</span>
                    <span>{event.date}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedFlyer(event)}
                    aria-label={`Perbesar poster ${event.title}`}
                    className="group relative block w-full cursor-zoom-in overflow-hidden bg-[var(--bg-alt)] focus:outline-none"
                    style={{
                      aspectRatio: `${event.flyerWidth} / ${event.flyerHeight}`,
                    }}
                  >
                    <Image
                      src={event.flyerUrl}
                      alt={`Poster resmi ${event.category}: ${event.title} — ${event.subtitle}`}
                      width={event.flyerWidth}
                      height={event.flyerHeight}
                      className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    <span className="pointer-events-none absolute right-3 bottom-3 inline-flex items-center gap-1.5 border border-white/20 bg-black/75 px-3 py-1.5 text-[11px] font-medium tracking-[0.12em] uppercase text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ZoomIn className="h-3.5 w-3.5" />
                      Perbesar
                    </span>
                  </button>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-hairline)] pt-3">
                    <button
                      type="button"
                      onClick={() => setSelectedFlyer(event)}
                      className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium tracking-[0.12em] uppercase text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
                    >
                      <ZoomIn className="h-3.5 w-3.5" />
                      Lihat Ukuran Penuh
                    </button>

                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => handleShare(event)}
                        className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium tracking-[0.12em] uppercase text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                      >
                        {copiedId === event.id ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-[var(--accent)]" />
                            <span>Info Disalin</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="h-3.5 w-3.5" />
                            <span>Bagikan</span>
                          </>
                        )}
                      </button>

                      <a
                        href={event.flyerUrl}
                        download
                        className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.12em] uppercase text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Unduh
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Editorial Details & Hairline Ledger */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium tracking-[0.18em] uppercase text-[var(--accent)]">
                  <span>{event.category}</span>
                  <span aria-hidden="true" className="text-[var(--text-muted)]">
                    /
                  </span>
                  <span className="text-[var(--text-muted)]">
                    {event.occasion}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-5xl leading-[0.9] font-extrabold tracking-tight uppercase text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
                  {event.title}
                </h3>

                <p className="mt-4 text-lg font-medium text-[var(--text-secondary)] sm:text-xl">
                  {event.subtitle}
                </p>

                <dl className="mt-10 divide-y divide-[var(--border-hairline)] border-y border-[var(--border-hairline)]">
                  <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                    <dt className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--text-muted)] sm:col-span-4">
                      Tanggal
                    </dt>
                    <dd className="text-sm font-medium text-[var(--text-primary)] sm:col-span-8">
                      {event.date}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                    <dt className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--text-muted)] sm:col-span-4">
                      Waktu Pelaksanaan
                    </dt>
                    <dd className="text-sm font-medium text-[var(--text-primary)] sm:col-span-8">
                      {event.time}
                      <span className="ml-2 text-[var(--text-muted)]">
                        (Registrasi mulai {event.registrationTime})
                      </span>
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-12 sm:gap-4">
                    <dt className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--text-muted)] sm:col-span-4">
                      Lokasi
                    </dt>
                    <dd className="text-sm font-medium text-[var(--text-primary)] sm:col-span-8">
                      <a
                        href={
                          event.locationUrl ??
                          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-wrap items-baseline justify-between gap-2 transition-colors hover:text-[var(--accent)]"
                      >
                        <span className="group-hover:underline">
                          {event.location}
                        </span>
                        <span className="inline-flex items-center gap-1 border-b border-[var(--border-strong)] pb-0.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-[var(--text-secondary)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                          <MapPin className="h-3 w-3" />
                          Buka Peta
                          <ArrowUpRight className="h-3 w-3" />
                        </span>
                      </a>
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:gap-4">
                    <dt className="text-xs font-medium tracking-[0.18em] uppercase text-[var(--text-muted)] sm:col-span-4">
                      Hadir Bersama
                    </dt>
                    <dd className="sm:col-span-8">
                      <ul className="space-y-1.5 text-sm font-medium text-[var(--text-primary)]">
                        {event.speakers.map((speaker) => (
                          <li key={speaker}>{speaker}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-col gap-4 border border-[var(--border-hairline)] bg-[var(--bg-alt)] p-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-xs leading-relaxed text-[var(--text-secondary)]">
                    Pembaruan jadwal dan dokumentasi kegiatan disampaikan melalui
                    kanal media sosial resmi Rumah Ramah Indonesia.
                  </p>
                  <div className="flex shrink-0 items-center gap-4">
                    <a
                      href={SOCIAL_LINKS.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 border-b border-[var(--border-strong)] pb-0.5 text-xs font-semibold tracking-[0.14em] uppercase text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      Instagram
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.tiktok.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 border-b border-[var(--border-strong)] pb-0.5 text-xs font-semibold tracking-[0.14em] uppercase text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      TikTok
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedFlyer && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Pratinjau poster ${selectedFlyer.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setSelectedFlyer(null)}
        >
          <div
            className="animate-modal-zoom relative flex max-h-full max-w-4xl flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex w-full items-center justify-between gap-4 text-white">
              <div className="min-w-0">
                <p className="truncate text-[11px] font-medium tracking-[0.18em] uppercase text-white/60">
                  {selectedFlyer.category} — {selectedFlyer.date}
                </p>
                <p className="truncate font-display text-xl font-bold tracking-wide uppercase">
                  {selectedFlyer.title}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={selectedFlyer.flyerUrl}
                  download
                  className="inline-flex items-center gap-1.5 border border-white/25 px-3 py-1.5 text-xs font-medium tracking-[0.12em] uppercase text-white transition-colors hover:bg-white hover:text-black"
                >
                  <Download className="h-3.5 w-3.5" />
                  Unduh
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedFlyer(null)}
                  aria-label="Tutup pratinjau poster"
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-black"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="overflow-hidden border border-white/15 bg-black">
              <Image
                src={selectedFlyer.flyerUrl}
                alt={`Poster penuh ${selectedFlyer.title}`}
                width={selectedFlyer.flyerWidth}
                height={selectedFlyer.flyerHeight}
                className="max-h-[82vh] w-auto object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
