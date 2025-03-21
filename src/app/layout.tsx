import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "@/styles/css/bulma/css/bulma.min.css";
import "@/styles/css/style.css";
import "@/styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import Head from "next/head";

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
      {/* Dynamic SEO Metadata */}
      <Head>
        <title>Visualizer Demo | HardReload</title>
        <meta name="description" content="This is a demo for visualizer." />
        <meta property="og:title" content="Visualizer Demo | HardReload" />
        <meta property="og:description" content="This is a demo for visualizer." />
        {/* <meta property="og:image" content="https://netbizlabs.com/a+content/image1.jpg" /> */}
        <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQG7g6qdNynOwg/company-logo_100_100/company-logo_100_100/0/1724951451490/hardreload_logo?e=1748476800&v=beta&t=tYaVxlyeFRv7af27GZjKKiZp8VoYgRK6YH1BNmk75Ww" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visualizer-demo.vercel.app" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="SMart Card" />
        <meta name="twitter:title" content="Visualizer Demo | HardReload" />
        <meta name="twitter:description" content="This is a demo for visualizer." />
        {/* <meta name="twitter:image" content="https://netbizlabs.com/a+content/image1.jpg" /> */}
        <meta name="twitter:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQG7g6qdNynOwg/company-logo_100_100/company-logo_100_100/0/1724951451490/hardreload_logo?e=1748476800&v=beta&t=tYaVxlyeFRv7af27GZjKKiZp8VoYgRK6YH1BNmk75Ww" />
      </Head>
        {children}
        {/* whatsapp widget */}
          <Script src="https://d2jyl60qlhb39o.cloudfront.net/integration-plugin.js" id="wa-widget" widget-id="HHhzjs" />
        {/* whatsapp widget end */}
      </body>
    </html>
  );
}
