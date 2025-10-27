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
  title: "Sebastián Barrera | Desarrollador Full Stack, Ingeniero de Software",
  description: "Desarrollador full stack profesional especializado en creación de páginas web, aplicaciones móviles y sistemas backend. Ingeniero de software con experiencia en Next.js, React Native, Node.js, Angular, Vue.js. Transformo ideas en soluciones digitales escalables y de alto rendimiento.",
  keywords: [
    "Sebastián Barrera",
    "desarrollador full stack",
    "creador de páginas web",
    "ingeniero de software",
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
  authors: [{ name: "Sebastián Barrera", url: "https://sebastian-portafolio.vercel.app" }],
  creator: "Sebastián Barrera",
  publisher: "Sebastián Barrera",
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
    canonical: "https://sebastian-portafolio.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://sebastian-portafolio.vercel.app",
    siteName: "Sebastián Barrera Portfolio",
    title: "Sebastián Barrera | Desarrollador Full Stack, Ingeniero de Software",
    description: "Desarrollador full stack profesional especializado en creación de páginas web, aplicaciones móviles y sistemas backend. Transformo ideas en soluciones digitales escalables.",
    images: [
      {
        url: "/logos/logoND.png",
        width: 1200,
        height: 630,
        alt: "Sebastián Barrera - Desarrollo de Software Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastián Barrera | Desarrollador Full Stack, Ingeniero de Software",
    description: "Desarrollador full stack profesional especializado en creación de páginas web y aplicaciones móviles. Next.js, React Native, Node.js.",
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
