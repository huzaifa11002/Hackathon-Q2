'use client'
import { useState } from 'react';
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Image as IImage } from "sanity";
import Count from "@/app/components/Count";
import AddToCart from "@/app/components/AddToCart";

interface ProductType {
    title: string;
    desc: string;
    image: IImage;
    price: number;
    sale?: boolean;
    salePercentage?: number;
    slug: {
        current: string;
    };
}

interface ProductDetailsProps {
    productData: ProductType;
}

const ProductDetails= ({ productData }:ProductDetailsProps) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
    };

    const discountedPrice = productData.sale && productData.salePercentage ? productData.price * (1 - (productData.salePercentage ?? 0) / 100) : '';

    return (
        <>
      <div className="w-[1440px] mx-auto max-w-[90%] my-20">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 xl:gap-0">
          <div className="w-full flex justify-center md:w-1/2">
            <div className="relative w-[500px] xl:h-[500px] h-fit">
              <Image src={urlFor(productData.image).url()} alt="product-img" width={500} height={500} className="xl:h-[500px] h-fit object-contain object-top" />
              {productData.sale ?
                (
                  <span className={`absolute top-3 left-3 capitalize text-white rounded-lg text-xs lg:text-sm xl:text-base bg-[#F5813F] px-3 py-1`}>sale</span>
                )
                :
                (
                  null
                )
              }
            </div>
          </div>
          <div className="flex flex-col lg:gap-10 gap-5 w-full md:w-1/2">
            <div className="flex flex-col lg:gap-10 gap-5">
              <h2 className="text-lg lg:text-3xl font-semibold text-main capitalize">{productData.title}</h2>
              <div className='flex gap-3 items-center'>
                {productData.sale ?
                  (
                    <>
                      <span className='px-5 py-3 text-xs lg:text-base bg-primary text-white capitalize rounded-3xl w-fit'>${discountedPrice}.00 USD</span>
                      <span className='line-through px-5 py-3 text-xs lg:text-base bg-red-500 text-white capitalize rounded-3xl w-fit'>{`$${productData.price}`}.00 USD</span>
                    </>

                  )
                  :
                  (
                    <span className='px-5 py-3 text-xs lg:text-base bg-primary text-white capitalize rounded-3xl w-fit'>${productData.price}.00 USD</span>
                  )
                }
              </div>
            </div>
            <div className="py-5 border-t border-gray text-gray flex flex-col lg:gap-10 gap-5">
              <p className="text-xs lg:text-base">{productData.desc}</p>
              <Count setQuantity={handleQuantityChange} />
              <AddToCart product={{ title: productData.title, price: productData.price, image: urlFor(productData.image).url(), slug: productData.slug, quantity:quantity }} />
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default ProductDetails;