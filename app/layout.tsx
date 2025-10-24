import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexDev | Desarrollador de Software, Creador de Páginas Web, Ingeniero en Software",
  description: "Desarrollador de software profesional especializado en creación de páginas web, aplicaciones móviles y sistemas backend. Ingeniero en software con experiencia en Next.js, React Native, Node.js, Angular, Vue.js. Transformamos ideas en soluciones digitales escalables y de alto rendimiento.",
  keywords: [
    "desarrollador de software",
    "creador de páginas web",
    "ingeniero en software",
    "desarrollo web profesional",
    "desarrollo de aplicaciones móviles",
    "programador full stack",
    "desarrollo Next.js",
    "desarrollo React Native",
    "creación de sitios web",
    "desarrollo backend",
    "programador México",
    "desarrollador freelance",
    "soluciones digitales",
    "software a medida"
  ],
  authors: [{ name: "NexDev", url: "https://nexdev-portfolio-phi.vercel.app" }],
  creator: "NexDev",
  publisher: "NexDev",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nexdev-portfolio-phi.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://nexdev-portfolio-phi.vercel.app",
    siteName: "NexDev",
    title: "NexDev | Desarrollador de Software, Creador de Páginas Web, Ingeniero en Software",
    description: "Desarrollador de software profesional especializado en creación de páginas web, aplicaciones móviles y sistemas backend. Transformamos ideas en soluciones digitales escalables.",
    images: [
      {
        url: "/logos/logoND.png",
        width: 1200,
        height: 630,
        alt: "NexDev - Desarrollo de Software Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexDev | Desarrollador de Software, Creador de Páginas Web",
    description: "Desarrollador de software profesional especializado en creación de páginas web y aplicaciones móviles. Next.js, React Native, Node.js.",
    images: ["/logos/logoND.png"],
  },
  verification: {
    google: "4sPdVfA71z6-YE56qVPXqH91B--YCB7zx8rUzFjcB_o",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
