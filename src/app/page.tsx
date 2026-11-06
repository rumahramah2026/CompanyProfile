"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Users,
  Handshake,
  Zap,
  ArrowRight,
  Menu,
  X,
  Mail,
  MapPin,
  MessageSquare,
  Moon,
  Sun,
  Coffee,
  Calendar,
  Clock,
  ZoomIn,
  Download,
  Share2,
} from "lucide-react";

type ThemeMode = "dark" | "warm" | "light";

interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  occasion: string;
  date: string;
  time: string;
  registrationTime: string;
  location: string;
  speakers: string[];
  flyerUrl: string;
  isFeatured?: boolean;
}

const EVENTS_LIST: EventItem[] = [
  {
    id: "doa-bersama-indonesia-raya",
    category: "Doa Bersama",
    title: "INDONESIA RAYA",
    subtitle: "Merawat Persatuan, Mendoakan Indonesia",
    occasion: "Dalam rangka memperingati Hari Pahlawan Nasional",
    date: "10 November 2026",
    time: "14.00 WIB",
    registrationTime: "13.00 WIB",
    location: "Auditorium Perpustakaan Nasional, Jakarta",
    speakers: [
      "Menteri Agama Republik Indonesia",
      "Abah Iwan Abdulrachman",
      "Para Tokoh Lintas Agama",
    ],
    flyerUrl: "/events/doa-bersama-indonesia-raya.jpg",
    isFeatured: true,
  },
];

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.81 4.47 6.27 6.27 0 0 0 1.86-4.47V8.71a8.21 8.21 0 0 0 4.73 1.5v-3.4a4.86 4.86 0 0 1-.81-.12z" />
    </svg>
  );
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>("dark");
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);

  useEffect(() => {
    // Read theme from html data-theme attribute set by early script or localStorage
    const saved = localStorage.getItem("rri_theme") as ThemeMode | null;
    if (saved === "warm" || saved === "light" || saved === "dark") {
      setCurrentTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const active = document.documentElement.getAttribute("data-theme") as ThemeMode | null;
      if (active) setCurrentTheme(active);
    }
  }, []);

  const handleThemeChange = (theme: ThemeMode) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("rri_theme", theme);
    } catch {}
  };

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-sans antialiased selection:bg-amber-500/20">
      {/* ── Navigation ────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[var(--bg-nav)] backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="relative w-8 h-8">
              <Image
                src="/RRI_Polos.png"
                alt="Logo Rumah Ramah Indonesia"
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-sm font-semibold tracking-wider text-[var(--text-primary)] uppercase">
              Rumah Ramah Indonesia
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
            <a href="#tentang" className="hover:text-[var(--text-primary)] transition-colors">
              Tentang
            </a>
            <a href="#pilar" className="hover:text-[var(--text-primary)] transition-colors">
              Tiga Pilar
            </a>
            <a href="#fokus" className="hover:text-[var(--text-primary)] transition-colors">
              Fokus Kerja
            </a>
            <a href="#event" className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1.5">
              <span>Event & Agenda</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            </a>
            <a href="#kontak" className="hover:text-[var(--text-primary)] transition-colors">
              Kontak
            </a>
          </nav>

          {/* Desktop Right Side: Theme Switcher & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* 3-State Theme Switcher */}
            <div className="flex items-center p-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs">
              <button
                onClick={() => handleThemeChange("dark")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all text-[11px] font-medium ${
                  currentTheme === "dark"
                    ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
                title="Mode Gelap"
              >
                <Moon className="w-3 h-3" />
                <span>Dark</span>
              </button>

              <button
                onClick={() => handleThemeChange("warm")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all text-[11px] font-medium ${
                  currentTheme === "warm"
                    ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
                title="Mode Hangat (Warm Paper)"
              >
                <Coffee className="w-3 h-3" />
                <span>Warm</span>
              </button>

              <button
                onClick={() => handleThemeChange("light")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all text-[11px] font-medium ${
                  currentTheme === "light"
                    ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-sm"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
                title="Mode Terang"
              >
                <Sun className="w-3 h-3" />
                <span>Light</span>
              </button>
            </div>

            <a
              href="#kontak"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[var(--btn-secondary-bg)] hover:bg-[var(--bg-card-hover)] text-xs font-medium text-[var(--btn-secondary-text)] transition border border-[var(--btn-secondary-border)]"
            >
              <span>Hubungi Kami</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-lg"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[var(--bg-nav)] border-b border-[var(--border-color)] px-6 py-5 space-y-4 text-sm">
            {/* Theme switcher on mobile */}
            <div className="pb-3 border-b border-[var(--border-subtle)]">
              <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold block mb-2">
                Pilih Tampilan:
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleThemeChange("dark")}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-lg border text-xs font-medium ${
                    currentTheme === "dark"
                      ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-transparent"
                      : "bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-color)]"
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Dark</span>
                </button>
                <button
                  onClick={() => handleThemeChange("warm")}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-lg border text-xs font-medium ${
                    currentTheme === "warm"
                      ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-transparent"
                      : "bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-color)]"
                  }`}
                >
                  <Coffee className="w-3.5 h-3.5" />
                  <span>Warm</span>
                </button>
                <button
                  onClick={() => handleThemeChange("light")}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-lg border text-xs font-medium ${
                    currentTheme === "light"
                      ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-transparent"
                      : "bg-[var(--bg-card)] text-[var(--text-muted)] border-[var(--border-color)]"
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Light</span>
                </button>
              </div>
            </div>

            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 font-medium"
            >
              Tentang
            </a>
            <a
              href="#pilar"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 font-medium"
            >
              Tiga Pilar
            </a>
            <a
              href="#fokus"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 font-medium"
            >
              Fokus Kerja
            </a>
            <a
              href="#event"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 font-medium flex items-center justify-between"
            >
              <span>Event & Agenda</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-500">
                Ada Acara
              </span>
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 font-medium"
            >
              Kontak
            </a>

            {/* Social links in mobile drawer */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/rumahramahindonesia/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@rramahindonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 px-6 border-b border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto text-left md:text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--accent-badge-border)] bg-[var(--accent-badge-bg)] text-xs font-medium text-[var(--text-muted)] mb-8">
            <span>🇲🇨</span>
            <span>Profil Resmi Organisasi</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-tight mb-6">
            Ruang temu, kolaborasi, dan aksi.
          </h1>

          <p className="text-xl sm:text-2xl text-[var(--text-secondary)] font-normal mb-8">
            Merawat keberagaman, menguatkan persatuan.
          </p>

          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl md:mx-auto leading-relaxed mb-10">
            Rumah Ramah Indonesia adalah wadah bersama untuk mempertemukan gagasan,
            membangun kemitraan antarpihak, dan menjalankan program nyata yang
            inklusif bagi masyarakat.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start md:justify-center gap-3">
            <a
              href="#event"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-semibold text-sm hover:opacity-90 transition shadow-sm"
            >
              <span>Agenda Acara Terbaru</span>
              <Calendar className="w-4 h-4 opacity-70" />
            </a>
            <a
              href="#tentang"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--bg-card-hover)] text-sm font-medium text-[var(--btn-secondary-text)] transition"
            >
              Tentang Kami
            </a>
          </div>
        </div>
      </section>

      {/* ── TENTANG KAMI ────────────────────────────────────────────── */}
      <section id="tentang" className="py-24 px-6 border-b border-[var(--border-color)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Visual Logo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex flex-col items-center text-center w-full max-w-sm shadow-sm">
                <div className="relative w-44 h-44 mb-4">
                  <Image
                    src="/RRI.png"
                    alt="Logo Rumah Ramah Indonesia"
                    fill
                    className="object-contain"
                    sizes="176px"
                  />
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Enam figur merangkul dalam satu lingkaran: simbol persatuan dalam keberagaman.
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold block mb-3">
                Tentang Kami
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6 leading-snug">
                Membangun Kebersamaan Melalui Kerja Nyata
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                <p>
                  Rumah Ramah Indonesia (RRI) berdiri dengan tujuan sederhana: menyediakan
                  ruang yang aman, terbuka, dan setara bagi berbagai kalangan untuk saling
                  terhubung dan bekerja sama.
                </p>
                <p>
                  Kami meyakini bahwa persatuan Indonesia dirawat bukan melalui teori,
                  melainkan lewat kebiasaan berdialog, mendengarkan perbedaan, dan
                  menjalankan inisiatif bersama untuk kepentingan umum.
                </p>
                <p>
                  RRI terbuka untuk berjejaring dengan komunitas, pegiat sosial, akademisi,
                  dan lembaga publik dalam merealisasikan program-program yang bermanfaat langsung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIGA PILAR ──────────────────────────────────────────────── */}
      <section id="pilar" className="py-24 px-6 border-b border-[var(--border-color)]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold block mb-3">
              Prinsip Kerja
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Tiga Pilar Gerakan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pilar 1 */}
            <div className="p-8 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-color)] transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--text-primary)] flex items-center justify-center mb-6">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">1. Ruang Temu</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  Menyediakan ruang dialog yang setara bagi berbagai latar belakang
                  untuk saling mendengar, bertukar pandangan, dan memperkuat rasa saling percaya.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-medium">
                Dialog & Keterbukaan
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="p-8 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-color)] transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--text-primary)] flex items-center justify-center mb-6">
                  <Handshake className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">2. Ruang Kolaborasi</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  Menghubungkan sumber daya, keahlian, dan jejaring antarpihak untuk
                  merancang solusi bersama atas kebutuhan sosial di lapangan.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-medium">
                Kemitraan & Sinergi
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="p-8 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-color)] transition-all flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--text-primary)] flex items-center justify-center mb-6">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">3. Ruang Aksi</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  Menjalankan program dan aktivitas nyata yang terukur, inklusif,
                  serta berkesinambungan bagi masyarakat.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-medium">
                Eksekusi Program
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOKUS KERJA ─────────────────────────────────────────────── */}
      <section id="fokus" className="py-24 px-6 border-b border-[var(--border-color)]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold block mb-3">
              Aktivitas
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[var(--text-primary)]">
              Fokus Program
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                Forum Diskusi & Pertemuan Terbuka
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Penyelenggaraan sesi diskusi rutin mengenai isu keberagaman, toleransi,
                dan kerja sama kebangsaan dengan mengundang narasumber dan komunitas lintas sektor.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                Pengembangan Kapasitas Komunitas
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Pelatihan dasar fasilitasi, manajemen kegiatan sosial, dan komunikasi publik
                untuk penggerak muda di berbagai daerah.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                Inisiatif Kolaboratif Lapangan
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Menghubungkan kebutuhan langsung komunitas lokal dengan mitra yang
                memiliki kompetensi dan kapasitas pendukung.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                Kampanye Ruang Ramah & Inklusif
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Sosialisasi ruang publik yang ramah bagi anak, lansia, dan penyandang disabilitas
                serta etika bermedia sosial yang sehat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENT & AGENDA (DENGAN FLYER RESMI) ──────────────────────── */}
      <section id="event" className="py-24 px-6 border-b border-[var(--border-color)] bg-[var(--bg-card)]/40">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">
                Event & Agenda
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
              Kegiatan & Agenda Mendatang
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl leading-relaxed">
              Setiap acara dirancang sebagai sarana perjumpaan bermakna. Klik flyer untuk melihat tampilan penuh atau hubungi narahubung untuk informasi pendaftaran.
            </p>
          </div>

          {/* Event Cards */}
          <div className="space-y-12">
            {EVENTS_LIST.map((evt) => (
              <div
                key={evt.id}
                className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Flyer Visual Thumbnail */}
                  <div className="lg:col-span-5 flex flex-col items-center">
                    <div
                      onClick={() => setSelectedFlyer(evt.flyerUrl)}
                      className="group relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4.2] rounded-xl overflow-hidden border border-[var(--border-color)] cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                    >
                      <Image
                        src={evt.flyerUrl}
                        alt={`Flyer ${evt.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 280px, 320px"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-2 p-4 text-center">
                        <ZoomIn className="w-8 h-8" />
                        <span className="text-xs font-semibold uppercase tracking-wider">
                          Klik untuk Memperbesar
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() => setSelectedFlyer(evt.flyerUrl)}
                        className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] font-medium transition"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Lihat Flyer Penuh</span>
                      </button>
                      <span className="text-xs text-[var(--border-color)]">•</span>
                      <a
                        href={evt.flyerUrl}
                        download="Flyer-Doa-Bersama-Indonesia-Raya.jpg"
                        className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] font-medium transition"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Unduh Flyer</span>
                      </a>
                    </div>
                  </div>

                  {/* Event Details Content */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Category Badge & Occasion */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[11px] font-semibold text-[var(--text-primary)]">
                          {evt.category}
                        </span>
                        <span className="text-xs text-[var(--text-muted)]">
                          {evt.occasion}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-1 leading-tight">
                        {evt.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[var(--text-secondary)] italic mb-6">
                        “{evt.subtitle}”
                      </p>

                      {/* Key Event Details */}
                      <div className="space-y-3 mb-6 p-4 rounded-xl bg-[var(--bg-page)]/60 border border-[var(--border-subtle)]">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs text-[var(--text-muted)] block">Hari & Tanggal</span>
                            <span className="text-sm font-semibold text-[var(--text-primary)]">
                              {evt.date}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs text-[var(--text-muted)] block">Waktu Acara</span>
                            <span className="text-sm font-medium text-[var(--text-primary)]">
                              {evt.time} <span className="text-xs text-[var(--text-muted)] font-normal">(Registrasi: {evt.registrationTime})</span>
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs text-[var(--text-muted)] block">Lokasi Kegiatan</span>
                            <span className="text-sm font-medium text-[var(--text-primary)]">
                              {evt.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Speakers / Tokoh */}
                      <div className="mb-6">
                        <span className="text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)] block mb-2">
                          Bersama Para Tokoh:
                        </span>
                        <ul className="space-y-1">
                          {evt.speakers.map((spk, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                              <span>{spk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action & Flyer Preview Button */}
                    <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedFlyer(evt.flyerUrl)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-semibold text-xs transition shadow-sm hover:opacity-90"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Lihat Flyer Acara</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KONTAK ──────────────────────────────────────────────────── */}
      <section id="kontak" className="py-24 px-6 border-b border-[var(--border-color)]">
        <div className="max-w-3xl mx-auto text-left md:text-center">
          <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold block mb-3">
            Komunikasi
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Terhubung Bersama Kami
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mb-10 leading-relaxed">
            Silakan terhubung dengan kami melalui kanal media sosial resmi berikut. Jalur kontak resmi lainnya akan segera kami perbarui.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-10">
            <a
              href="https://www.instagram.com/rumahramahindonesia/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--btn-secondary-border)] transition flex items-center gap-3 shadow-sm group"
            >
              <InstagramIcon className="w-5 h-5 text-[var(--text-primary)] shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div>
                <p className="text-xs text-[var(--text-muted)]">Instagram Resmi</p>
                <p className="text-sm font-medium text-[var(--text-primary)]">@rumahramahindonesia</p>
              </div>
            </a>

            <a
              href="https://www.tiktok.com/@rramahindonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--btn-secondary-border)] transition flex items-center gap-3 shadow-sm group"
            >
              <TikTokIcon className="w-5 h-5 text-[var(--text-primary)] shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div>
                <p className="text-xs text-[var(--text-muted)]">TikTok Resmi</p>
                <p className="text-sm font-medium text-[var(--text-primary)]">@rramahindonesia</p>
              </div>
            </a>

            <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center gap-3 shadow-sm opacity-60">
              <Mail className="w-5 h-5 text-[var(--text-muted)] shrink-0" />
              <div>
                <p className="text-xs text-[var(--text-muted)]">Email</p>
                <p className="text-sm font-medium text-[var(--text-muted)] italic">Segera Hadir</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center gap-3 shadow-sm opacity-60">
              <MessageSquare className="w-5 h-5 text-[var(--text-muted)] shrink-0" />
              <div>
                <p className="text-xs text-[var(--text-muted)]">WhatsApp</p>
                <p className="text-sm font-medium text-[var(--text-muted)] italic">Segera Hadir</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-center gap-2 text-xs text-[var(--text-muted)]">
            <MapPin className="w-4 h-4 opacity-70 shrink-0" />
            <span>Indonesia</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="py-10 px-6 bg-[var(--bg-page)] transition-colors duration-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6">
              <Image
                src="/RRI_Polos.png"
                alt="Logo Footer"
                fill
                sizes="24px"
                className="object-contain"
              />
            </div>
            <span className="font-medium text-[var(--text-primary)]">
              Rumah Ramah Indonesia
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/rumahramahindonesia/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
              aria-label="Instagram @rumahramahindonesia"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.tiktok.com/@rramahindonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[var(--btn-secondary-bg)] border border-[var(--btn-secondary-border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
              aria-label="TikTok @rramahindonesia"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>

          <p>© 2026 Rumah Ramah Indonesia.</p>
        </div>
      </footer>

      {/* ── MODAL LIGHTBOX FLYER ────────────────────────────────────── */}
      {selectedFlyer && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedFlyer(null)}
        >
          <div
            className="relative max-w-2xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[80vh] aspect-[3/4.2] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-neutral-900">
              <Image
                src={selectedFlyer}
                alt="Flyer Acara Lengkap"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 flex items-center gap-4">
              <a
                href={selectedFlyer}
                download="Flyer-Event-Rumah-Ramah-Indonesia.jpg"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-neutral-900 font-semibold text-xs shadow-md hover:bg-neutral-200 transition"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Gambar Flyer</span>
              </a>

              <button
                onClick={() => setSelectedFlyer(null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-800 text-white font-medium text-xs hover:bg-neutral-700 transition border border-white/10"
              >
                <X className="w-4 h-4" />
                <span>Tutup</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
