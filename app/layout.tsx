import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Stashify",
  description: "Inventory Management for Exporters",
  openGraph: {
    title: "Stashify",
    description: "Inventory Management for Exporters",
    url: "https://stashify.weekendlabs.in",
    type: "website",
    images: [
      {
        url: "https://stashify.weekendlabs.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stashify App Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stashify",
    description: "Inventory Management for Exporters",
    images: ["https://stashify.weekendlabs.in/og-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
