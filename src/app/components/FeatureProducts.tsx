import Card from "./Card"
import Link from "next/link"
import Image1 from "../../../public/Image.png"
import Image2 from "../../../public/Image (1).png"
import Image3 from "../../../public/Image (2).png"
import Image4 from "../../../public/Image (3).png"

const FeatureProducts = () => {
  return (
    <>
    <div className="w-[1440px] mx-auto max-w-[90%] my-20">
    <div className="flex flex-col gap-10">    
    <h2 className="text-lg lg:text-3xl font-semibold text-main">Featured Products</h2>
    <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Card title="Library Stool Chair" price="$20" value="new" bg="bg-[#01AD5A] px-3 py-1" image={Image1}/>
    <Card title="Library Stool Chair" price="$20" value="sale" discount="$30" bg="bg-[#F5813F] px-3 py-1" image={Image2}/>
    <Card title="Library Stool Chair" price="$20" image={Image3}/>
    <Card title="Library Stool Chair" price="$20" image={Image4}/>
    </div>
    </div>
    </div>
    </>
  )
}

export default FeatureProducts