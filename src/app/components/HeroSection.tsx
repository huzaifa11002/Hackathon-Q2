
import Image from "next/image"
import HeroImg from "../../../public/hero-img.png"
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./Button";
const HeroSection = () => {
    return (
        <>
        {/* HeroSection */}
            <div className="w-[1440px] mx-auto max-w-full h-[850px] sm:h-fit sm:max-w-[90%] sm:flex-row sm:justify-between sm:items-center flex flex-col gap-10 px-10 py-20 bg-sky rounded-es-[30px]">
                <div className="text-main flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        <span className="uppercase text-sm font-medium">Welcome to chairy</span>
                        <h1 className="text-4xl font-bold lg:text-6xl">Best Furniture <br /> Collection for your <br /> interior.</h1>
                    </div>
                    <div className="w-fit group">
                        <Button value="shop now" iconRight={<IoIosArrowRoundForward className="w-[24px] h-[24px]"/>}/>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image src={HeroImg} alt="hero-img" className="w-full md:w-[300px] xs:w-[300px]"/>
                </div>
            </div>
        </>
    )
}

export default HeroSection