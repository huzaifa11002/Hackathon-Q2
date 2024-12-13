import Card from "./Card"
import Link from "next/link"
import Image1 from "../../../public/Image.png"
import Image2 from "../../../public/Image (1).png"
import Image3 from "../../../public/Image (2).png"
import Image4 from "../../../public/Image (9).png"
import Image5 from "../../../public/Image (10).png"
import Image6 from "../../../public/Image (8).png"
import Image7 from "../../../public/Image (1).png"

const Products = () => {
  return (
    <div className="w-[1440px] mx-auto max-w-[90%] my-20">
    <div className="flex flex-col gap-10">    
    <h2 className="text-lg lg:text-3xl font-semibold text-main text-center">Products</h2>
    <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Card title="Library Stool Chair" price="$20" value="new" bg="bg-[#01AD5A] px-3 py-1" image={Image1}/>
    <Card title="Library Stool Chair" price="$20"  value="sale" discount="$30" bg="bg-[#F5813F] px-3 py-1" image={Image2}/>
    <Card title="Library Stool Chair" price="$20" image={Image3}/>
    <Card title="Library Stool Chair" price="$20" image={Image4}/>
    <Card title="Library Stool Chair" price="$20" value="new" bg="bg-[#01AD5A] px-3 py-1" image={Image5}/>
    <Card title="Library Stool Chair" price="$20" value="sale" discount="$30" bg="bg-[#F5813F] px-3 py-1" image={Image6}/>
    <Card title="Library Stool Chair" price="$20" image={Image7}/>
    <Card title="Library Stool Chair" price="$20" image={Image1}/>
    </div>
    </div>
    </div>
  )
}

export default Products