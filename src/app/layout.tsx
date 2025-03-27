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
  title: "Refurbished Laptops & Desktops | A&T Services Inc.",
  description: "Buy high-quality refurbished laptops & desktops from A&T Services Inc. Enjoy free shipping, 1-year warranty, and quick support across India",
  openGraph: {
    title: "Refurbished Laptops & Desktops | A&T Services Inc.",
    description: "Buy high-quality refurbished laptops & desktops from A&T Services Inc. Enjoy free shipping, 1-year warranty, and quick support across India.",
    url: "https://www.antservices.in/",
    siteName: "A&T Services Inc.",
    images: [
      {
        url: "https://www.antservices.in/web/image/website/1/logo/A%26T%20Services?unique=5a54c48",
        width: 250,
        height: 250,
        alt: "Refurbished Laptops & Desktops - A&T Services Inc.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refurbished Laptops & Desktops | A&T Services Inc.",
    site: "@yourTwitterHandle",
    description: "Buy high-quality refurbished laptops & desktops from A&T Services Inc. Enjoy free shipping, 1-year warranty, and quick support across India.",
    images: ["https://www.antservices.in/web/image/website/1/logo/A%26T%20Services?unique=5a54c48"]
  },
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
