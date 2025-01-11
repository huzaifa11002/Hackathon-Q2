import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Button from "@/app/components/Button";
import AddToCart from "@/app/components/AddToCart";
import Image from "next/image";
import { Image as IImage } from "sanity";
import FeatureProducts from "@/app/components/FeatureProducts";
import Count from "@/app/components/Count";
import ProductDetails from "@/app/components/ProductDetail";
interface Params {
  id: string;
}

interface ProductType {
  title: string,
  desc: string,
  image: IImage,
  price: number,
  sale?: boolean,
  salePercentage?: number,
  slug: {
    current: string;
  };
}
const page = async ({ params }: { params: Params }) => {
  let slug = `"${params.id}"`;

  const query = `*[_type == "product" && slug.current == ${slug}][0]`
  const productData: ProductType = await client.fetch(query)

  const discountedPrice = productData.sale && productData.salePercentage ? productData.price * (1 - (productData.salePercentage ?? 0) / 100) : '';

  return (
    <>
      <div className="w-[1440px] mx-auto max-w-[90%] my-20">
        <ProductDetails productData={productData} />
        {await FeatureProducts()}
      </div>
    </>
  )
}

export default page