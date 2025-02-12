import { client } from "@/sanity/lib/client"
import ProductList from "./ProductList"
import { ProductType } from "../types/type"


const query = `*[_type == "products"]{
   _id,
  title,
  image,
  price,
  badge,
  priceWithoutDiscount
  }[0...8]`

const Products = async () => {
 const productData: ProductType[] = await client.fetch(query)
  return (
    <div className="w-[1440px] mx-auto max-w-[90%] my-20">
      <div className="flex flex-col gap-10">
        <h2 className="text-lg lg:text-3xl font-semibold text-main text-center">Products</h2>
        <ProductList productData={productData} />
      </div>
    </div>
  )
}

export default Products