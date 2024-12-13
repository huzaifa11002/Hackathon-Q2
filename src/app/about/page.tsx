import AboutImg from "../../../public/about-img.png"
import Image from "next/image"
import Link from "next/link"
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsWindowDock } from "react-icons/bs"
import { PiPlant } from "react-icons/pi";
import FeatureCard from "../components/FeatureCard";
import Card1 from "../../../public/Large.png"
import Card2 from "../../../public/Photo.png"
import Card3 from "../../../public/Photo (1).png"
export default function About() {
    return (
        <>
        <title>About</title>
            <div className="w-[1440px] mx-auto max-w-[90%] my-10 flex flex-col gap-20">
                <div className="flex flex-col-reverse md:flex-row justify-between gap-10">
                    <div className="w-full flex flex-col justify-between gap-10 p-10 md:p-5 lg:p-10 text-white bg-[#007580] md:w-1/2">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-xl lg:text-3xl font-bold capitalize">About Us - Comforty</h2>
                            <p className="text-xs lg:text-sm xl:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio magni accusantium aliquam iure facilis culpa quidem,
                                architecto amet provident odio ipsam perspiciatis repellendus cupiditate, mollitia illo, nisi dignissimos veritatis sapiente?</p>
                        </div>
                        <div className="w-fit">
                            <Link href="/products" className="px-5 py-3 bg-[#258992] text-xs lg:text-base">View Collection</Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image src={AboutImg} alt="about-img" className="w-full object-contain object-top" />
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <h2 className="text-xl lg:text-3xl font-bold text-main capitalize text-center">what makes our brand different</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-[#007580]">
                        <div className="flex flex-col gap-5 justify-center sm:justify-start bg-[#f9f9f9] p-5">
                            <TbTruckDelivery className="w-[24px] h-[24px]" />
                            <h4 className="text-sm lg:text-lg">Next day as standard</h4>
                            <p className="text-xs lg:text-sm xl:text-base">Order before 3pm and get your order the next day as standard</p>
                        </div>
                        <div className="flex flex-col justify-center sm:justify-start gap-5 bg-[#f9f9f9] p-5">
                            <FaRegCheckCircle className="w-[20px] h-[20px]" />
                            <h4 className="text-sm lg:text-lg">Next day as standard</h4>
                            <p className="text-xs lg:text-sm xl:text-base">Order before 3pm and get your order the next day as standard</p>
                        </div>
                        <div className="flex flex-col gap-5 justify-center bg-[#f9f9f9] sm:justify-start p-5">
                            <BsWindowDock className="w-[20px] h-[20px]" />
                            <h4 className="text-sm lg:text-lg">Next day as standard</h4>
                            <p className="text-xs lg:text-sm xl:text-base">Order before 3pm and get your order the next day as standard</p>
                        </div>
                        <div className="flex flex-col gap-5 justify-center bg-[#f9f9f9] sm:justify-start p-5">
                            <PiPlant className="w-[20px] h-[20px]" />
                            <h4 className="text-sm lg:text-lg">Next day as standard</h4>
                            <p className="text-xs lg:text-sm xl:text-base">Order before 3pm and get your order the next day as standard</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <h2 className="text-xl lg:text-3xl font-bold text-main capitalize text-center">our popular products</h2>
                    <div className="grid grid-cols-4 gap-5">
                        <div className="col-span-4 lg:col-span-2">
                            <FeatureCard image={Card1} title="the popular scudeuo sofa" price="$99.00" />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <FeatureCard image={Card2} title="scudeuo sofa" price="$99.00" />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <FeatureCard image={Card3} title="scudeuo sofa" price="$99.00" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}