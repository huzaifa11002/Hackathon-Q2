import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/site-logo.png"
import Payment from "../../../public/payment.png"
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import Button from "./Button"
const Footer = () => {
  return (
    <>
      <footer className="w-full pt-10 border-t border-gray">
        <div className="w-[1440px] mx-auto max-w-[90%] flex flex-col gap-5 text-gray py-10 lg:justify-between lg:flex-row lg:gap-10">
          <div className="flex flex-col gap-5 w-full lg:w-1/4">
            <Link href="/"><Image src={Logo} alt="logo" /></Link>
            <p className="text-xs lg:text-sm xl:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum repellat eveniet quas sit!</p>
            <ul className="flex flex-row gap-3 lg:gap-1">
              <li className="p-3 text-gray border rounded-full border-transparent hover:border-primary hover:text-primary "><Link href="/" ><FaFacebook className='w-5 h-5 ' /></Link></li>
              <li className="p-3 text-gray border rounded-full border-transparent hover:border-primary hover:text-primary"><Link href="/"><FaTwitter className='w-5 h-5' /></Link></li>
              <li className="p-3 text-gray border rounded-full border-transparent hover:border-primary hover:text-primary"><Link href="/"><FaInstagram className='w-5 h-5' /></Link></li>
              <li className="p-3 text-gray border rounded-full border-transparent hover:border-primary hover:text-primary"><Link href="/"><FaPinterest className='w-5 h-5' /></Link></li>
              <li className="p-3 text-gray border rounded-full border-transparent hover:border-primary hover:text-primary"><Link href="/"><FaYoutube className='w-5 h-5' /></Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 sm:w-full sm:flex-row sm:justify-between sm:gap-10 lg:flex-row lg:w-3/4">
            <div className="flex flex-col gap-5">
              <h5 className="text-xs lg:text-sm font-medium uppercase">Category</h5>
              <ul className="flex flex-col gap-5 text-main text-sm lg:text-base">
                <li><Link href="/" className="whitespace-nowrap capitalize border-b border-transparent hover:border-b hover:border-primary hover:text-primary pb-[1px]">Sofa</Link></li>
                <li><Link href="/" className="whitespace-nowrap capitalize border-b border-transparent hover:border-b hover:border-primary hover:text-primary pb-[1px]">Armchair</Link></li>
                <li><Link href="/" className="whitespace-nowrap capitalize border-b border-transparent hover:border-b hover:border-primary hover:text-primary pb-[1px]">Wing Chair</Link></li>
                <li><Link href="/" className="whitespace-nowrap capitalize border-b border-transparent hover:border-b hover:border-primary hover:text-primary pb-[1px]">Desk Chair</Link></li>
                <li><Link href="/" className="whitespace-nowrap capitalize border-b border-transparent hover:border-b hover:border-primary hover:text-primary pb-[1px]">wooden Chair</Link></li>
                <li><Link href="/" className="whitespace-nowrap capitalize border-b border-transparent hover:border-b hover:border-primary hover:text-primary pb-[1px]">Park Bench</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="text-xs lg:text-sm font-medium uppercase">Support</h5>
              <ul className="flex flex-col gap-5 text-main text-sm lg:text-base">
                <li><Link href="/" className="whitespace-nowrap capitalize border-b border-transparent hover:border-b hover:border-primary hover:text-primary pb-[1px]">Help & Support</Link></li>
                <li><Link href="/" className="whitespace-nowrap capitalize border-b border-transparent hover:border-b hover:border-primary hover:text-primary pb-[1px]">Terms & Conditions</Link></li>
                <li><Link href="/" className="whitespace-nowrap capitalize border-b border-transparent hover:border-b hover:border-primary hover:text-primary pb-[1px]">Privacy Policy</Link></li>
                <li><Link href="/" className="whitespace-nowrap capitalize border-b border-transparent hover:border-b hover:border-primary hover:text-primary pb-[1px]">Help</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="text-xs lg:text-sm font-medium uppercase">Newsletter</h5>
              <div className="flex flex-row gap-5 items-center">
                <input type="email" placeholder="Your email" className="w-full p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base" />
                <Button value="Subscribe" />
              </div>
              <p className="text-xs lg:text-sm xl:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, neque.</p>
            </div>
          </div>
        </div>
        <div className="w-full py-5 border-t border-gray">
          <div className="w-[1440px] mx-auto max-w-[90%] flex flex-col justify-center sm:flex-row sm:justify-between gap-5 items-center text-gray">
            <p className=" capitalize text-center sm:text-start text-xs lg:text-sm xl:text-base"><span>&copy;</span>2021 - Blogy - Designed & Develop by <span className="text-main">Zakirsoft</span></p>
            <Image src={Payment} alt="payment" className="invert w-max-[200px]" />
          </div>
        </div>
      </footer >
    </>
  )
}

export default Footer