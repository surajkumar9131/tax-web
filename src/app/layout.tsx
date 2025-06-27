import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KK Tax Legal - Professional Tax & Legal Services | PAN India",
  description: "Established in 1994, KK Tax Legal provides expert tax planning, GST compliance, corporate legal advisory, and litigation support across India. Trusted by businesses and individuals for 30+ years.",
  keywords: "tax services, legal services, GST compliance, income tax, corporate law, tax planning, legal advisory, India",
  authors: [{ name: "KK Tax Legal" }],
  creator: "KK Tax Legal",
  publisher: "KK Tax Legal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kktaxlegal.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KK Tax Legal - Professional Tax & Legal Services",
    description: "Expert tax planning, GST compliance, and legal advisory services across India. 30+ years of trusted experience.",
    url: "https://kktaxlegal.com",
    siteName: "KK Tax Legal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KK Tax Legal - Professional Tax & Legal Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KK Tax Legal - Professional Tax & Legal Services",
    description: "Expert tax planning, GST compliance, and legal advisory services across India.",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
