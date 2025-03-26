import LP from "@/components/LP";
import Head from "next/head";

export interface apiCategoryRes {
  sequence: number,
  name: string,
  categoryPageUrl: string
}

export interface apiProductRes {
  sequence: number,
  title: string,
  description: string,
  imagePath: string,
  imageAltTitle: string,
  price: string,
  category: string,
  productPageUrl: string
}

export interface apiRes { 
  categories: apiCategoryRes[],
  products: apiProductRes[] 
}

export default async function Home() {
  let props: apiRes = { 
    categories: [],
    products: [] 
  };
  try {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LIVE}/get_top_performing`,{ cache: "no-store" });
    const res = await fetch(`https://www.antservices.in/get_top_performing`,{ cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch data");
    props = await res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <>
      {/* Dynamic SEO Metadata */}
      <Head>
        <title>A&T Landing Page Demo | HardReload</title>
        <meta name="description" content="This is a demo for A&T Landing Page." />
        <meta property="og:title" content="A&T Landing Page | HardReload" />
        <meta property="og:description" content="This is a demo for A&T Landing Page." />
        {/* <meta property="og:image" content="https://netbizlabs.com/a+content/image1.jpg" /> */}
        <meta property="og:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQG7g6qdNynOwg/company-logo_100_100/company-logo_100_100/0/1724951451490/hardreload_logo?e=1748476800&v=beta&t=tYaVxlyeFRv7af27GZjKKiZp8VoYgRK6YH1BNmk75Ww" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atlp-demo-7c9p.vercel.app" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="A&T Landing Page | HardReload" />
        <meta name="twitter:title" content="A&T Landing Page | HardReload" />
        <meta name="twitter:description" content="This is a demo for A&T Landing Page." />
        {/* <meta name="twitter:image" content="https://netbizlabs.com/a+content/image1.jpg" /> */}
        <meta name="twitter:image" content="https://media.licdn.com/dms/image/v2/D4D0BAQG7g6qdNynOwg/company-logo_100_100/company-logo_100_100/0/1724951451490/hardreload_logo?e=1748476800&v=beta&t=tYaVxlyeFRv7af27GZjKKiZp8VoYgRK6YH1BNmk75Ww" />
      </Head>
      <LP products={props.products} categories={props.categories} />
    </>
  );
}
