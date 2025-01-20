import Image from "next/image"
import Cate1 from "../../../public/item-category 1.png"
import Cate2 from "../../../public/card (2).png"
import Cate3 from "../../../public/card.png"
import Cate4 from "../../../public/card (1).png"

const Arrival = () => {
    return (

        <div className="w-[1440px] mx-auto max-w-[90%] my-20">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-2 sm:row-span-2 row-span-3 flex justify-center items-center">
                    <h2 className="xl:text-3xl lg:text-xl sm:text-base text-3xl font-medium -rotate-90 whitespace-nowrap">Explore new and popular styles</h2>
                </div>
                <div className="sm:col-span-5 col-span-10 row-span-2">
                    <Image src={Cate1} alt="category" className="w-full object-contain object-top" />
                </div>
                <div className=" grid grid-cols-2 gap-5 col-span-10 sm:col-span-5">
                    <Image src={Cate2} alt="category" className="w-full object-contain object-top" />
                    <Image src={Cate3} alt="category" className="w-full object-contain object-top" />
                    <Image src={Cate4} alt="category" className="w-full object-contain object-top" />
                    <Image src={Cate3} alt="category" className="w-full object-contain object-top" />
                </div>
            </div>
        </div>



    )
}

export default Arrival