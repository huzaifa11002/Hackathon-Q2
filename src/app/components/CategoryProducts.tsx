import CategoryCard from "./CategoryCard"
import Link from "next/link"
import Image4 from "../../../public/Image (4).png"
import Image5 from "../../../public/Image (5).png"
import Image6 from "../../../public/Image (6).png"

const CategoryProducts = () => {
  return (
    <>
      <div className="w-[1440px] mx-auto max-w-[90%] my-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-lg lg:text-3xl font-semibold text-main capitalize">top categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <CategoryCard title="Library Stool Chair" products="123 products" image={Image4} />
            <CategoryCard title="Library Stool Chair" products="123 products" image={Image5} />
            <CategoryCard title="Library Stool Chair" products="123 products" image={Image6} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryProducts