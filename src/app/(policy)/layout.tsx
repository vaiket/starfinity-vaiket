import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const GA_ID = "G-V2JNMQTLMK";

export const metadata: Metadata = {
  title: "Eazygrow Venture",
  description: "Empowering startup founders with clarity & direction",
};

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script
          src="https://www.noupe.com/embed/019c953c22017c1099313578a583f5165c12.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
