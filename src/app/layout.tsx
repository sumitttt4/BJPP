import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "localhost:3000";

const metadataBase = new URL(
  siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`,
);

export const metadata: Metadata = {
  metadataBase,
  title: "Baddie Janta Party",
  description: "A national movement for glow ups, clarity, confidence, and slay policies only.",
  openGraph: {
    title: "Baddie Janta Party",
    description: "Power to the people. Vote hot. Slay policies only.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Baddie Janta Party campaign poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baddie Janta Party",
    description: "Power to the people. Vote hot. Slay policies only.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-white text-brand-black font-sans min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
