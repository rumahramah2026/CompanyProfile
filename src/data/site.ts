export interface PillarItem {
  id: string;
  number: string;
  titleTop: string;
  titleBottom: string;
  tagline: string;
  description: string;
  activities: string[];
  accentHex: string;
}

export interface EventFlyerItem {
  id: string;
  category: string;
  occasion: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  registrationTime: string;
  location: string;
  speakers: string[];
  flyerUrl: string;
  flyerWidth: number;
  flyerHeight: number;
}

export const SOCIAL_LINKS = {
  instagram: {
    label: "Instagram",
    handle: "@rumahramahindonesia",
    url: "https://www.instagram.com/rumahramahindonesia/",
  },
  tiktok: {
    label: "TikTok",
    handle: "@rramahindonesia",
    url: "https://www.tiktok.com/@rramahindonesia",
  },
} as const;

export const PILLARS: PillarItem[] = [
  {
    id: "ruang-temu",
    number: "01",
    titleTop: "Ruang",
    titleBottom: "Temu",
    tagline: "Dialog yang aman dan setara bagi semua kalangan",
    description:
      "Menghadirkan forum yang terbuka agar masyarakat dari beragam latar belakang dapat saling menyapa, bertukar pandangan, dan membangun rasa saling percaya.",
    activities: [
      "Diskusi publik lintas komunitas",
      "Pertemuan tokoh masyarakat dan warga",
      "Dialog kebangsaan yang terbuka",
    ],
    accentHex: "#F59E0B",
  },
  {
    id: "ruang-kolaborasi",
    number: "02",
    titleTop: "Ruang",
    titleBottom: "Kolaborasi",
    tagline: "Kerja bersama lintas komunitas dan pegiat",
    description:
      "Mempertemukan kapasitas komunitas, akademisi, pegiat sosial, dan relawan untuk merancang kegiatan yang saling menguatkan.",
    activities: [
      "Kerja sama program lintas organisasi",
      "Pertukaran gagasan dan sumber daya",
      "Dukungan inisiatif kepemudaan daerah",
    ],
    accentHex: "#16A34A",
  },
  {
    id: "ruang-aksi",
    number: "03",
    titleTop: "Ruang",
    titleBottom: "Aksi",
    tagline: "Langkah nyata yang memberi manfaat langsung",
    description:
      "Menjalankan agenda nyata di tengah masyarakat—dari doa bersama, kegiatan sosial, hingga gerakan ruang publik yang ramah bagi semua.",
    activities: [
      "Agenda kebersamaan dan doa bersama",
      "Kegiatan sosial kemasyarakatan",
      "Edukasi ruang publik yang inklusif",
    ],
    accentHex: "#B83238",
  },
];

export const EVENTS: EventFlyerItem[] = [
  {
    id: "doa-bersama-indonesia-raya-2026",
    category: "Doa Bersama",
    occasion: "Memperingati Hari Pahlawan Nasional",
    title: "INDONESIA RAYA",
    subtitle: "Merawat Persatuan, Mendoakan Indonesia",
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
    flyerWidth: 818,
    flyerHeight: 1024,
  },
];
