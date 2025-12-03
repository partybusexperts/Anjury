import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { brandInfo } from "@/data/site-content";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://wowdulce.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WOW Dulce | Tortas artesanales en Táchira",
    template: "%s | WOW Dulce",
  },
  description:
    "WOW Dulce crea tortas personalizadas, dulces típicos y mesas de postres llenas de color en San Cristóbal y ciudades cercanas.",
  keywords: [
    "tortas en tachira",
    "pasteleria san cristobal",
    "mesas de postres",
    "dulces tipicos",
    "wow dulce",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "WOW Dulce | Tortas artesanales en Táchira",
    description:
      "Tortas personalizadas, dulces típicos y mesas coloridas hechas por Anjury en Estado Táchira.",
    url: siteUrl,
    siteName: "WOW Dulce",
    type: "website",
    locale: "es_VE",
  },
  twitter: {
    card: "summary_large_image",
    title: "WOW Dulce",
    description:
      "Tortas y dulces llenos de color, sabor y amor tachirense. Pide la tuya con Anjury.",
  },
  authors: [{ name: brandInfo.owner }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-swirls text-dulce-cacao antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 px-4 py-10">
            <div className="mx-auto w-full max-w-6xl">{children}</div>
          </main>
          <SiteFooter />
        </div>
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
