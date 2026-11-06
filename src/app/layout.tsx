import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rumah Ramah Indonesia | Ruang Temu, Kolaborasi, dan Aksi",
  description:
    "Company Profile Rumah Ramah Indonesia. Ruang temu, kolaborasi, dan aksi. Merawat keberagaman, menguatkan persatuan. Bersama untuk Indonesia.",
  icons: {
    icon: "/RRI_Polos.png",
    shortcut: "/RRI_Polos.png",
    apple: "/RRI_Polos.png",
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
      className={`${sansFont.variable} ${serifFont.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/RRI_Polos.png" type="image/png" />
        <link rel="apple-touch-icon" href="/RRI_Polos.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var saved = localStorage.getItem('rri_theme');
                if (saved === 'warm' || saved === 'light' || saved === 'dark') {
                  document.documentElement.setAttribute('data-theme', saved);
                } else {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              } catch(e){}
            })()`,
          }}
        />
      </head>
      <body className="min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
