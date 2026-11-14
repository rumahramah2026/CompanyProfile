import type { Metadata } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rumahramah.id"),
  title: "Rumah Ramah Indonesia",
  description:
    "Ruang temu, kolaborasi, dan aksi. Merawat keberagaman, menguatkan persatuan. Bersama untuk Indonesia.",
  icons: {
    icon: [
      { url: "/RRI_Polos.png", type: "image/png" },
    ],
    shortcut: "/RRI_Polos.png",
    apple: "/RRI_Polos.png",
  },
  openGraph: {
    title: "Rumah Ramah Indonesia",
    description:
      "Ruang temu, kolaborasi, dan aksi. Merawat keberagaman, menguatkan persatuan. Bersama untuk Indonesia.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumah Ramah Indonesia",
    description:
      "Ruang temu, kolaborasi, dan aksi. Merawat keberagaman, menguatkan persatuan. Bersama untuk Indonesia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-theme="dark"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${barlowCondensed.variable}`}
    >
      <head>
        <link rel="icon" href="/RRI_Polos.png" type="image/png" />
        <link rel="apple-touch-icon" href="/RRI_Polos.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('rri_theme');if(t==='dark'||t==='warm'||t==='light'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased selection:bg-[var(--accent)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
