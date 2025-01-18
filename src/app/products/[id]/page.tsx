import { client } from "@/sanity/lib/client"
import FeatureProducts from "@/app/components/FeatureProducts";
import ProductDetails from "@/app/components/ProductDetail";
import { ProductType } from "@/app/lib/type";


interface Params {
  id: string;
}

const page = async ({ params }: { params: Params }) => {
  let slug = `"${params.id}"`;

  const query = `*[_type == "products" && _id == ${slug}][0]`
  const productData: ProductType = await client.fetch(query)

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