import { client } from "@/sanity/lib/client"
import ProductList from "./ProductList"


interface ProductType {
  title: string,
  image: string,
  price: number,
  sale?: boolean,
  salePercentage?: number,
  slug: {
    current: string
  },
  quantity:number
}

const query = `*[_type == "product"]{
  title,
  image,
  price,
  sale,
  salePercentage,
  slug{
    current
  }
}[0...4]`

const FeatureProducts = async () => {
  const productData: ProductType[] = await client.fetch(query)
  return (
    <>
      <div className="w-[1440px] mx-auto max-w-[90%] my-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-lg lg:text-3xl font-semibold text-main">Featured Products</h2>
          <ProductList productData={productData} />
        </div>
      </div>
    </>
  )
}

export default FeatureProducts