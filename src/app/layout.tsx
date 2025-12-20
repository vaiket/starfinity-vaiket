import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import Header + Footer
import Header from "./(home)/components/Header";
import Footer from "./(home)/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starfinity Navigator",
  description: "Empowering startup founders with clarity & direction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main>{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
