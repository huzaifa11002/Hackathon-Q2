import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import CategoryCard from "../components/CategoryCard";
import { Suspense } from "react";

interface categoryType {
  _id: string,
  title: string,
  image: string,
  products:number,
}

const query = `*[_type == "categories"]{
    _id,
    title,
    image,
    products,
}`

const page = async () => {
  const data: categoryType[] = await client.fetch(query)
  return (
    <>
      <div className="w-[1440px] mx-auto max-w-[90%] my-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-lg lg:text-3xl font-semibold text-main capitalize">all categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {
              data.map((category, index) => {
                return (
                  <Link href={`/category/${category._id}`} key={index}>
                    <Suspense>
                    <CategoryCard {...category} image={urlFor(category.image).url()} />
                    </Suspense>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default page