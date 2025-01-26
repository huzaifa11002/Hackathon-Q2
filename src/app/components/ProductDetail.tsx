'use client'
import { useEffect, useState } from 'react';
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Image as IImage } from "sanity";
import Count from "@/app/components/Count";
import AddToCart from "@/app/components/AddToCart";
import { ProductType } from '../lib/type';
import { useRouter } from "next/router";
interface ProductDetailsProps {
    productData: ProductType;
    error?:any;
}

const ProductDetails= ({ productData, error}:ProductDetailsProps) => {

  const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (error || !productData) {
        return (
            <div>
                <h2 className="text-lg lg:text-3xl font-semibold text-main capitalize">Product Not Found</h2>
                <p className="text-xs lg:text-base">We couldn't find the product you are looking for</p>
            </div>
        );
    }

  

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
    };

    const getBadgeClass = (badge:string) => {
      switch (badge) {
        case 'Sales':
          return 'bg-[#F5813F]';
        case 'New':
          return 'bg-green-500';
        default:
          return 'bg-gray-500';
      }
    };

    return (
        <>
      <div className="w-[1440px] mx-auto max-w-[90%] my-20">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 xl:gap-0">
          <div className="w-full flex justify-center md:w-1/2">
            <div className="relative w-[500px] xl:h-[500px] h-fit">
              <Image src={urlFor(productData.image).url()} alt="product-img" width={500} height={500} className="xl:h-[500px] h-fit object-contain object-top" />
              {productData.badge &&
          (
            <span className={`absolute top-3 left-3 capitalize text-white rounded-lg text-xs lg:text-sm xl:text-base bg-[#F5813F] px-3 py-1 ${getBadgeClass(productData.badge)}`}>
                {productData.badge}
            </span>
          )
        }
            </div>
          </div>
          <div className="flex flex-col lg:gap-10 gap-5 w-full md:w-1/2">
            <div className="flex flex-col lg:gap-10 gap-5">
              <h2 className="text-lg lg:text-3xl font-semibold text-main capitalize">{productData.title}</h2>
              <div className='flex gap-3 items-center'>
              {productData.priceWithoutDiscount !== null ? (
                <>
                  <p className='text-xs lg:text-sm xl:text-base'>{`$${productData.price}`}</p>
                  <p className='line-through text-gray text-xs lg:text-sm xl:text-base'>{`$${productData.priceWithoutDiscount}`}</p>
                </>
              ) : (
                <p className='text-xs lg:text-sm xl:text-base'>{`$${productData.price}`}</p>
              )}
              </div>
            </div>
            <div className="py-5 border-t border-gray text-gray flex flex-col lg:gap-10 gap-5">
              <p className="text-xs lg:text-base">{productData.description}</p>
              <Count setQuantity={handleQuantityChange} />
              <AddToCart product={{ title: productData.title, price: productData.price, image: urlFor(productData.image).url(), _id: productData._id, quantity:quantity }} />
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default ProductDetails;