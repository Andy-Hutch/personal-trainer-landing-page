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
  title: "Your Custom App Title",
  description: "A description of your app for SEO purposes",
  openGraph: {
    title: "Your Open Graph Title",
    description: "Your Open Graph Description",
    images: "/path-to-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Twitter Title",
    description: "Your Twitter Description",
    images: "/path-to-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

