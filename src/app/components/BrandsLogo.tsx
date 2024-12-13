import Image from "next/image"
import Brand1 from "../../../public/brand1.png"
import Brand2 from "../../../public/brand2.png"
import Brand3 from "../../../public/brand3.png"
import Brand4 from "../../../public/brand4.png"
import Brand5 from "../../../public/brand5.png"
import Brand6 from "../../../public/brand6.png"
import Brand7 from "../../../public/brand7.png"

const BrandsLogo = () => {
  return (
    <>
    {/* Brand Logo */}
      <div className="w-[1440px] mx-auto max-w-[90%] grid grid-cols-3 md:grid-cols-7 gap-5 my-20">
        <div className="flex justify-center items-center">
          <Image src={Brand1} alt="Brand Logo" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={Brand2} alt="Brand Logo" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={Brand3} alt="Brand Logo" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={Brand4} alt="Brand Logo" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={Brand5} alt="Brand Logo" />
        </div>
        <div className="flex justify-center items-center">
          <Image src={Brand6} alt="Brand Logo" />
        </div>
        <div className="md:hidden"></div>
        <div className="flex justify-center items-center">
          <Image src={Brand7} alt="Brand Logo" />
        </div>
        <div className="md:hidden"></div>

      </div>
    </>
  )
}

export default BrandsLogo