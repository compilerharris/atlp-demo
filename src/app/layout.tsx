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
    site: "@antservices_inc",
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
      <head>
        {/* GA Script in Head */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V7BJX1E5SH" />
        <Script id="ga-head" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V7BJX1E5SH');
          `}
        </Script>
        <Script id="ga-script">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M5CCP7V');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5CCP7V" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </ noscript>
        {children}
        {/* whatsapp widget */}
          {/* <Script src="https://d2jyl60qlhb39o.cloudfront.net/integration-plugin.js" id="wa-widget" widget-id="HHhzjs" /> */}
        {/* whatsapp widget end */}
      </body>
    </html>
  );
}
