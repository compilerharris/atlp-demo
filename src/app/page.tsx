import LP from "@/components/LP";

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
    const res = await fetch(`https://www.antservices.in/get_top_performing`,{ cache: "force-cache", next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch data");
    props = await res.json();
    
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <>
      <LP products={props.products} categories={props.categories} />
    </>
  );
}
