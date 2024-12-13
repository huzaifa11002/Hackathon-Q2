import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import Trophy from "../../../public/trophy 1.png"
import Warranty from "../../../public/Group (3).png"
import Support from "../../../public/customer-support.png"
import Button from "../components/Button";
export default function Contact() {
    return (
        <>
        <title>Need Help</title>
        <div className="w-full">

        <div className="w-[1440px] mx-auto max-w-[90%] mt-20">
            <div className="flex flex-col gap-20">
                <div className="flex justify-center items-center flex-col gap-5">
                    <h2 className="text-xl lg:text-3xl text-main font-bold capitalize">get in touch with us</h2>
                    <p className="text-center text-xs lg:text-sm xl:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-around gap-10">
                    <div className="flex flex-col gap-10 text-main w-full md:w-1/4">

                        <div className="flex flex-row gap-5">
                            <MdLocationOn className="w-[32px] h-[32px]" />
                            <div className="flex flex-col gap-3">
                                <h4 className="text-sm lg:text-2xl font-bold">Address</h4>
                                <p className="text-xs lg:text-sm xl:text-base">236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-5">
                            <FaPhoneAlt className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-3">
                                <h4 className="text-sm lg:text-2xl font-bold">Phone</h4>
                                <div>
                                    <p className="text-xs lg:text-sm xl:text-base">Mobile: +(84) 546-6789</p>
                                    <p className="text-xs lg:text-sm xl:text-base">Hotline: +(84) 456-6789</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-5">
                            <BsFillClockFill className="w-[24px] h-[24px]" />
                            <div className="flex flex-col gap-3">
                                <h4 className="text-sm lg:text-2xl font-bold">Working Time</h4>
                                <div>
                                    <p className="text-xs lg:text-sm xl:text-base">Monday-Friday: 9:00 - 22:00</p>
                                    <p className="text-xs lg:text-sm xl:text-base">Saturday-Sunday: 9:00 - 21:00</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full md:w-1/2">
                        <form className="flex flex-col gap-5 text-main">
                            <div className="flex flex-col gap-3">
                                <label>Your Name</label>
                                <input type="text" placeholder="Name" className=" p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label>Email Address</label>
                                <input type="email" placeholder="name@mail.com" className=" p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label>Subject</label>
                                <input type="text" placeholder="This is an optional" className=" p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label>Message</label>
                                <textarea placeholder="Message" className=" p-3 h-28 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base"></textarea>
                            </div>
                            <Button value="Submit" />
                        </form>
                    </div>

                </div>

                
            </div>
        </div>
        <div className="w-full bg-[#f4f4f4] text-[#242424]">
        <div className="w-[1440px] mx-auto max-w-[90%] mt-20">
        <div className="flex flex-col md:flex-row md:justify-around gap-10 py-20">

<div className="flex flex-row gap-3">
    <Image src={Trophy} alt="high-quality" className="h-fit object-contain lg:w-[60px] w-[40px]" />
    <div className="flex flex-col gap-1">
        <h4 className="text-sm lg:text-2xl font-bold">High Quality</h4>
        <p className="text-xs lg:text-sm xl:text-base">crafted from top materials</p>
    </div>
</div>

<div className="flex flex-row gap-3">
    <Image src={Warranty} alt="Warranty" className="h-fit object-contain lg:w-[60px] w-[40px]" />
    <div className="flex flex-col gap-1">
        <h4 className="text-sm lg:text-2xl font-bold">Warranty Protection</h4>
        <p className="text-xs lg:text-sm xl:text-base">Over 2 years</p>
    </div>
</div>

<div className="flex flex-row gap-3">
    <Image src={Support} alt="Support" className="h-fit object-contain lg:w-[60px] w-[40px]" />
    <div className="flex flex-col gap-1">
        <h4 className="text-sm lg:text-2xl font-bold">24 / 7 Support</h4>
        <p className="text-xs lg:text-sm xl:text-base">Dedicated support</p>
    </div>
</div>

</div>
        </div>
        </div>
        </div>
        </>
    )
}