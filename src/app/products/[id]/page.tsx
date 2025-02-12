import { client } from "@/sanity/lib/client"
import FeatureProducts from "@/app/components/FeatureProducts";
import ProductDetails from "@/app/components/ProductDetail";
import { ProductType } from "@/app/types/type";
import { Suspense } from "react";


interface Params {
  id: string;
}

const page = async ({ params }: { params: Params }) => {

  const query = `*[_type == "products" && _id == "${params.id}"][0]`
  const productData: ProductType = await client.fetch(query)

  return (
    <>
      <div className="w-[1440px] mx-auto max-w-[90%] my-20">

        <Suspense>
        <ProductDetails productData={productData} />
        </Suspense>

        <Suspense>
        {await FeatureProducts()}
        </Suspense>
        
      </div>
    </>
  )
}

export default page