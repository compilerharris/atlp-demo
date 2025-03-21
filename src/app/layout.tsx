import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "@/styles/css/bulma/css/bulma.min.css";
import "@/styles/css/style.css";
import "@/styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A&T Services Inc.",
  description: "A&T Services Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        {/* whatsapp widget */}
          <Script src="https://d2jyl60qlhb39o.cloudfront.net/integration-plugin.js" id="wa-widget" widget-id="HHhzjs" />
        {/* whatsapp widget end */}
      </body>
    </html>
  );
}
