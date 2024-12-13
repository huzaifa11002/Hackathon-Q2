import Card from "../components/Card"
import Link from "next/link"
import Image from "next/image"
import Image1 from "../../../public/Image.png"
import Image2 from "../../../public/Image (1).png"
import Image3 from "../../../public/Image (2).png"
import Image4 from "../../../public/Image (3).png"
export default function Products(){
    return(
        <>
    <div className="w-[1440px] mx-auto max-w-[90%] my-20">
    <div className="flex flex-col gap-10">
    <h2 className="text-lg lg:text-3xl font-semibold text-main">All Products</h2>  
    <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <Card title="Library Stool Chair" price="$20" value="new" bg="bg-[#01AD5A] px-3 py-1" image={Image1}/>
    <Card title="Library Stool Chair" price="$20" value="sale" discount="$30" bg="bg-[#F5813F] px-3 py-1" image={Image2}/>
    <Card title="Library Stool Chair" price="$20" image={Image3}/>
    <Card title="Library Stool Chair" price="$20" image={Image4}/>
    <Card title="Library Stool Chair" price="$20" value="new" bg="bg-[#01AD5A] px-3 py-1" image={Image1}/>
    <Card title="Library Stool Chair" price="$20" value="sale" discount="$30" bg="bg-[#F5813F] px-3 py-1" image={Image2}/>
    <Card title="Library Stool Chair" price="$20" image={Image3}/>
    <Card title="Library Stool Chair" price="$20" image={Image4}/>
    <Card title="Library Stool Chair" price="$20" value="new" bg="bg-[#01AD5A] px-3 py-1" image={Image1}/>
    <Card title="Library Stool Chair" price="$20" value="sale" discount="$30" bg="bg-[#F5813F] px-3 py-1" image={Image2}/>
    <Card title="Library Stool Chair" price="$20" image={Image3}/>
    <Card title="Library Stool Chair" price="$20" image={Image4}/>
    </div>
    </div>
    </div>
    <div className="w-full bg-sky py-10">
        <div className="w-[1440px] mx-auto max-w-[90%] my-20 flex flex-col gap-10">
        <div className="flex justify-center flex-col gap-10 sm:w-[70%] md:w-[60%] lg:w-[70%] xl:w-[60%] w-full mx-auto text-center">
        <h2 className="text-lg sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-main capitalize">or subscribe to the newsletter</h2>
            <div className="flex flex-row items-center gap-5">
                <input type="email" placeholder="Email Address..." className="w-full text-xs lg:text-sm xl:text-base border-b border-main bg-transparent outline-none placeholder:text-gray"/>
                <button type="submit" className="uppercase text-xs lg:text-sm xl:text-base border-b border-main">submit</button>
            </div>
        </div>

        <div className="flex justify-center flex-col gap-10 text-center">
        <h2 className="text-lg sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-main capitalize">follow products and discounts on instagram</h2>
            <div className="grid grid-cols-5 gap-5">
                <Image src={Image1} alt="img"/>
                <Image src={Image2} alt="img"/>
                <Image src={Image3} alt="img"/>
                <Image src={Image4} alt="img"/>
                <Image src={Image1} alt="img"/>
            </div>
        </div>
        </div>
    </div>
        </>
    )
}