import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AgendaSection } from "@/components/AgendaSection";
import { InstagramIcon, TikTokIcon } from "@/components/Icons";
import { Navbar } from "@/components/Navbar";
import { PillarShowcase } from "@/components/PillarShowcase";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SOCIAL_LINKS } from "@/data/site";

const COMMITMENTS = [
  {
    code: "01",
    title: "Keberagaman yang Dirawat",
    detail:
      "Menjaga ruang perjumpaan agar perbedaan latar belakang, budaya, dan keyakinan hadir sebagai kekuatan bersama.",
  },
  {
    code: "02",
    title: "Dialog yang Setara",
    detail:
      "Mendudukkan warga, komunitas, tokoh lintas iman, dan generasi muda dalam percakapan yang terbuka dan saling menghormati.",
  },
  {
    code: "03",
    title: "Aksi untuk Publik",
    detail:
      "Menggerakkan kegiatan sosial, kebudayaan, dan doa bersama yang berdampak langsung bagi kehidupan bermasyarakat.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <Navbar />

      <main>
        {/* HERO — Monumental EIGER-inspired editorial opening */}
        <section
          id="beranda"
          className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-between border-b border-[var(--border-hairline)] bg-[var(--bg-page)] px-5 pt-6 pb-8 sm:px-8 sm:pt-8 sm:pb-10 lg:min-h-[min(820px,calc(100vh-4rem))] lg:px-12"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-b border-[var(--border-hairline)] pb-4 text-[11px] font-medium tracking-[0.22em] uppercase">
            <span className="text-[var(--accent)]">
              Keberagaman Untuk Persatuan
            </span>
            <span className="text-[var(--text-muted)]">Nusantara</span>
          </div>

          <div className="mx-auto my-auto w-full max-w-7xl py-8 sm:py-10">
            <h1 className="font-display text-[clamp(3.25rem,11vw,8.75rem)] leading-[0.86] font-extrabold tracking-tight uppercase text-[var(--text-primary)]">
              <span className="block">Ruang Temu,</span>
              <span className="block pl-[6%] sm:pl-[10%]">Kolaborasi,</span>
              <span className="block pl-[12%] text-[var(--accent)] sm:pl-[20%]">
                Dan Aksi.
              </span>
            </h1>
          </div>

          <div className="mx-auto grid w-full max-w-7xl items-end gap-8 border-t border-[var(--border-hairline)] pt-7 lg:grid-cols-12">
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
        </section>

        {/* TENTANG — Sticky visual plaque + editorial narrative (#story-section cadence) */}
        <section id="tentang" className="bg-[var(--bg-page)] py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
            {/* Left Sticky Brand Plaque — ensures charcoal text inside RRI.png stays sharp on every theme */}
            <div className="lg:sticky lg:top-24 lg:col-span-5">
              <div className="border border-[var(--plaque-border)] bg-[var(--plaque-bg)] p-8 sm:p-12">
                <Image
                  src="/RRI.png"
                  alt="Logo resmi Rumah Ramah Indonesia"
                  width={463}
                  height={539}
                  className="mx-auto h-auto w-full max-w-[260px] object-contain"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-b border-[var(--border-hairline)] pb-3 text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--text-muted)]">
                <span>Identitas Resmi</span>
                <span>Rumah Ramah Indonesia</span>
              </div>
            </div>

            {/* Right Editorial Narrative */}
            <ScrollReveal className="lg:col-span-7">
              <p className="text-xs font-medium tracking-[0.22em] uppercase text-[var(--accent)]">
                01 — Tentang Rumah Ramah Indonesia
              </p>

              <h2 className="mt-4 font-display text-4xl leading-[0.92] font-bold tracking-tight uppercase text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
                <span className="block">Menjaga Rumah</span>
                <span className="block pl-8 sm:pl-14">Kebangsaan Bersama</span>
              </h2>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--text-secondary)]">
                <p>
                  Rumah Ramah Indonesia lahir sebagai ruang perjumpaan warga
                  lintas komunitas, iman, profesi, dan generasi. Kami percaya
                  persatuan Indonesia tumbuh dari kebiasaan saling mendengar,
                  bertemu langsung, dan bekerja bersama di tengah perbedaan.
                </p>
                <p>
                  Alih-alih berjalan sendiri-sendiri, inisiatif masyarakat sipil,
                  tokoh lintas agama, pegiat sosial, serta anak muda dipertemukan
                  dalam suasana yang teduh, setara, dan berorientasi pada
                  manfaat nyata bagi publik.
                </p>
              </div>

              <div className="mt-12 divide-y divide-[var(--border-hairline)] border-y border-[var(--border-hairline)]">
                {COMMITMENTS.map((item) => (
                  <div
                    key={item.code}
                    className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-12 sm:gap-6"
                  >
                    <div className="flex items-baseline gap-3 sm:col-span-5">
                      <span className="font-display text-base font-bold text-[var(--accent)]">
                        {item.code}
                      </span>
                      <h3 className="text-sm font-semibold tracking-wide text-[var(--text-primary)]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:col-span-7">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* TIGA PILAR — Interactive EIGER-style Showcase */}
        <ScrollReveal>
          <PillarShowcase />
        </ScrollReveal>

        {/* AGENDA — Flyer & Exhibition Lightbox */}
        <ScrollReveal>
          <AgendaSection />
        </ScrollReveal>

        {/* KONTAK — Calm editorial channel section without placeholder cards */}
        <section
          id="kontak"
          className="border-t border-[var(--border-hairline)] bg-[var(--bg-alt)] py-24 sm:py-32"
        >
          <ScrollReveal className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[var(--accent)]">
              04 — Terhubung Bersama
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[0.94] font-bold tracking-tight uppercase text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              Ikuti Kabar &amp; Kegiatan Resmi
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              Seluruh pengumuman agenda terbuka, dokumentasi kegiatan, dan
              undangan kolaborasi disampaikan langsung melalui kanal media sosial
              resmi Rumah Ramah Indonesia.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href={SOCIAL_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-[var(--border-strong)] bg-[var(--bg-page)] px-6 py-4 text-left transition-colors hover:border-[var(--text-primary)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-hairline)] text-[var(--text-primary)] transition-colors group-hover:bg-[var(--btn-primary-bg)] group-hover:text-[var(--btn-primary-text)]">
                  <InstagramIcon className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-[10px] font-medium tracking-[0.18em] uppercase text-[var(--text-muted)]">
                    {SOCIAL_LINKS.instagram.label}
                  </span>
                  <span className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]">
                    {SOCIAL_LINKS.instagram.handle}
                    <ArrowUpRight className="h-3.5 w-3.5 text-[var(--text-muted)]" />
                  </span>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-[var(--border-strong)] bg-[var(--bg-page)] px-6 py-4 text-left transition-colors hover:border-[var(--text-primary)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-hairline)] text-[var(--text-primary)] transition-colors group-hover:bg-[var(--btn-primary-bg)] group-hover:text-[var(--btn-primary-text)]">
                  <TikTokIcon className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-[10px] font-medium tracking-[0.18em] uppercase text-[var(--text-muted)]">
                    {SOCIAL_LINKS.tiktok.label}
                  </span>
                  <span className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)]">
                    {SOCIAL_LINKS.tiktok.handle}
                    <ArrowUpRight className="h-3.5 w-3.5 text-[var(--text-muted)]" />
                  </span>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-page)] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <Image
              src="/RRI_Polos.png"
              alt="Lambang Rumah Ramah Indonesia"
              width={28}
              height={30}
              className="h-7 w-auto object-contain"
            />
            <div>
              <p className="font-display text-base font-bold tracking-[0.06em] uppercase text-[var(--text-primary)]">
                Rumah Ramah Indonesia
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Ruang temu, kolaborasi, dan aksi. Bersama untuk Indonesia
              </p>
            </div>
          </div>

          <p className="text-xs text-[var(--text-muted)]">
            &copy; 2026 Rumah Ramah Indonesia.
          </p>
        </div>
      </footer>
    </div>
  );
}
