"use client";

import { apiProductRes } from "@/app/page";
import Image from "next/image";


interface ProductsProps {
  products: apiProductRes[];
  openContactForm: (url: string) => void;
}

export default function Products({ products, openContactForm }: ProductsProps) {

  const redirectToWhatsapp = (productName: string) => {
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
                    <Image src={`https://www.antservices.in${product.imagePath}`} width={1920} height={1000} sizes="(max-width: 768px) 400px" alt={product.imageAltTitle} title={product.imageAltTitle} />
                    <p className="title">{product.title}</p>
                    <p className="price">₹ {product.price}</p>
                    <div className="cta">
                      <button onClick={() => openContactForm(`https://www.antservices.in${product.productPageUrl}`)} className="btn btn-red">Buy Now</button>
                      <button onClick={()=>{redirectToWhatsapp(product.title)}} className="btn">Chat Now</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="readMore">
              <a href={"https://www.antservices.in/shop"} target='_blank' className="btn subBtn hover-target">know more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
