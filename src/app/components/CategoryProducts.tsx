import CategoryCard from "./CategoryCard"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Products from "../products/page"

interface categoryType {
  _id: string,
  title: string,
  image: string,
  products: number,
}

const query = `*[_type == "categories"]{
  _id,
  title,
  image,
  products,
}`

const CategoryProducts = async () => {

  const data: categoryType[] = await client.fetch(query)
  return (
    <>
      <div className="w-[1440px] mx-auto max-w-[90%] my-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-lg lg:text-3xl font-semibold text-main capitalize">top categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {data.map((category, index) => (
            <Link href={`/category/${category._id}`} key={index}>
              <CategoryCard {...category} image={urlFor(category.image).url()} products={category.products}/>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryProducts