"use client";

import { apiProductRes } from "@/app/page";
import Image from "next/image";

export default function Products({ products }: { products: apiProductRes[] }) {

  const redirectToWhatsapp = (e: React.MouseEvent<HTMLAnchorElement>, productName: string) => {
      e.preventDefault();
      const phoneNumber = '+919599090603';
      const message = encodeURIComponent(`Hey A&T Services Inc. Team,\n\nI am interested to buy ${productName}.\n\nPlease provide more details.`);
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }
  
  return (
    <section className="products overview-section top-bottom-padding" id="products">
      <div className="object object-03" data-movement-desktop="-100" data-movement-mobile="-100">
        <Image src="/assets/images/object-01.svg" width={1920} height={1000} alt='Element' />
      </div>
      <div className="object object-04" data-movement-desktop="-150" data-movement-mobile="-150">
        <Image src="/assets/images/object-03.svg" width={1920} height={1000} alt='Element' />
      </div>
      <div className="wrp-1 is-bg-red inner-top-bottom-padding">
        <div className="container">
          <div className="heading-wrapper pt-0 is-relative">
            <h3 className="heading-01 margin-b fade-in-anim">Products</h3>
            <h2 className="heading-02 text-line-section">
              <span className="text-line-wrp mob-2-line">
                <span className="text-line">BEST SELLING PRODUCTS</span>
              </span>
            </h2>
          </div>
          <div className="card-holder">
            {
              products.map((product: apiProductRes, index: number) => {
                return (
                  <div className="card fade-in-anim" data-delay="0" key={index}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_URL_LIVE}${product.imagePath}`} width={1920} height={1000} alt={product.imageAltTitle} title={product.imageAltTitle} />
                    <p className="title">{product.title}</p>
                    <p className="price">₹ {product.price}</p>
                    <div className="cta">
                      <a href={`${process.env.NEXT_PUBLIC_BASE_URL_LIVE}${product.productPageUrl}`} target="_blank" className="btn btn-red">Buy Now</a>
                      <a onClick={(e)=>{redirectToWhatsapp(e, product.title)}} className="btn">Chat Now</a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}
