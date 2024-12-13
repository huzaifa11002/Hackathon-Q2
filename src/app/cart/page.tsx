import Image from "next/image"
import Cart1 from "../../../public/Image (2).png"
import Cart2 from "../../../public/Image (3).png"
import { IoMdHeartEmpty } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../components/Button";
export default function Cart() {
    return (
        <>
        <title>Cart</title>
        <div className="w-[1440px] mx-auto max-w-[90%] my-20">
            <div className="flex flex-col justify-between lg:flex-row gap-20">
                <div className="lg:w-3/4 w-full">
                    <div className="text-main ">
                        <h3 className="font-medium text-xl">Bag</h3>
                    </div>
                    <div className="flex flex-row gap-5 py-5 border-b border-gray">
                        <div>
                            <Image src={Cart1} alt="Cart" className="w-36 h-36" />
                        </div>
                        <div className="flex justify-between gap-2 w-full">
                            <div className="flex flex-col gap-3 sm:gap-5 ">
                                <h4 className=" text-main text-sm sm:text-lg">Library Stool Chair</h4>
                                <div className="flex flex-col gap-3 text-gray capitalize">
                                    <div>
                                        <p className="text-xs lg:text-sm xl:text-base">Asheen slate / Cobalt bliss</p>
                                    </div>
                                    <div className="flex flex-row gap-5 ">
                                        <p className="text-xs lg:text-sm xl:text-base">size 1</p>
                                        <p className="text-xs lg:text-sm xl:text-base">quantity 1</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5 text-main">
                                    <IoMdHeartEmpty />
                                    <RiDeleteBin6Line />
                                </div>
                            </div>
                            <div>
                                <p className="uppercase text-xs lg:text-sm xl:text-base font-bold text-main whitespace-nowrap">Mrp:$99</p>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-row gap-5 py-5 border-b border-gray">
                        <div>
                            <Image src={Cart2} alt="Cart" className="w-36 h-36" />
                        </div>
                        <div className="flex justify-between gap-2 w-full">
                            <div className="flex flex-col gap-3 sm:gap-5 ">
                                <h4 className=" text-main text-sm sm:text-lg">Library Stool Chair</h4>
                                <div className="flex flex-col gap-3 text-gray capitalize">
                                    <div>
                                        <p className="text-xs lg:text-sm xl:text-base">Asheen slate / Cobalt bliss</p>
                                    </div>
                                    <div className="flex flex-row gap-5 ">
                                        <p className="text-xs lg:text-sm xl:text-base">size 1</p>
                                        <p className="text-xs lg:text-sm xl:text-base">quantity 1</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-5 text-main">
                                    <IoMdHeartEmpty />
                                    <RiDeleteBin6Line />
                                </div>
                            </div>
                            <div>
                                <p className="uppercase text-xs lg:text-sm xl:text-base font-bold text-main whitespace-nowrap">Mrp:$99</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="lg:w-1/4 w-full">
                    <div className="flex flex-col gap-10 text-main">
                        <div>
                            <h3 className="font-medium text-xl">Summary</h3>
                        </div>
                        <div className="flex flex-col gap-5 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-xs lg:text-sm xl:text-base">Subtotal</span>
                                <span className="font-bold text-xs lg:text-sm xl:text-base">$198.00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs lg:text-sm xl:text-base">Estimated Delivery & Handling</span>
                                <span className="font-bold text-xs lg:text-sm xl:text-base">Free</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xs lg:text-sm xl:text-base">Total</span>
                            <span className="font-bold text-xs lg:text-sm xl:text-base">$198.00</span>
                        </div>
                        <div className="flex justify-center">
                        <Button value="member checkout" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}