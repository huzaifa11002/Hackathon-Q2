"use client"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/site-logo.png"
import { HiBars3, HiBars3BottomLeft } from "react-icons/hi2";
import { useState, useEffect } from "react"
import { FaCheck } from "react-icons/fa6";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const Header = () => {

  //Select Tag Script
  let [selectValue, setSelectValue] = useState("")

  function selectedValue(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectValue(event.target.value)
  }

  //Responsive Menu Script

  let [isOpen, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  //Item Counter Script

  const item = useSelector((state: RootState) => state.cart)

  return (
    <>
      <header>

        {/*Main Header */}


        <div className="hidden sm:block">

          {/*Top Bar */}
          <div className="w-full bg-main">
            <div className="w-[1440px] mx-auto max-w-[90%] h-[45px] flex justify-between items-center text-white ">
              <div className="flex gap-3 items-center">
                <FaCheck className="w-[16px] h-[16px]" />
                <p className="text-xs lg:text-base capitalize">Free shipping on all orders over $50</p>
              </div>
              <div className="flex justify-between items-center gap-5">
                <select className="bg-main text-white outline-none text-xs lg:text-base capitalize" value={selectValue} onChange={selectedValue}>
                  <option defaultValue="English">Eng</option>
                  <option value="Urdu">Urd</option>
                  <option value="Chiness">Chi</option>
                  <option value="Japness">Jap</option>
                </select>
                <Link href="/faqs" className="text-xs lg:text-base uppercase">faqs</Link>
                <Link href="/contact" className="text-xs lg:text-base capitalize flex items-center gap-2"><MdOutlineErrorOutline className="w-[16px] h-[16px]" /> need help</Link>
              </div>
            </div>
          </div>

          {/*Logo Bar */}
          <div className="w-full bg-sky">
            <div className="w-[1440px] mx-auto max-w-[90%] h-[84px] flex justify-between items-center">
              <Link href="/">
                <Image src={Logo} alt="logo" />
              </Link>
              <Link href="/cart">
                <div className="flex gap-3 items-center bg-white rounded-lg px-5 py-3">
                  <div className="flex gap-2 items-center text-main">
                    <FiShoppingCart className="w-[16px] h-[16px]" />
                    <span>Cart</span>
                  </div>
                  <span className="w-6 h-6 leading-6 text-center bg-primary rounded-full text-white text-sm">{item.length}</span>
                </div>
              </Link>
            </div>
          </div>

          {/*Menu Bar */}
          <div className="w-full border-b border-sky">
            <div className="w-[1440px] mx-auto max-w-[90%] h-[74px] flex justify-between items-center">
              <nav>
                <ul className="flex justify-between gap-5 text-gray">
                  <li><Link href="/" className={`hover:text-primary `}>Home</Link></li>
                  <li><Link href="/products" className={`hover:text-primary `}>Shop</Link></li>
                  <li><Link href="/category" className={`hover:text-primary `}>All Categories</Link></li>
                  <li><Link href="/about" className={`hover:text-primary `}>About</Link></li>
                  <li><Link href="/contact" className={`hover:text-primary`}>Contact</Link></li>
                </ul>
              </nav>
              <div className="flex justify-between items-center gap-2">
                <span className="text-gray">Contact:</span>
                <Link href="/" className="text-main">(808) 555-0111</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Header */}

        <div className="sm:hidden">

          {/*Top Bar */}
          <div className="w-full bg-main ">
            <div className="w-[1440px] mx-auto max-w-[90%] h-[45px] flex justify-between items-center text-white text-xs ">
              <div className="flex gap-1 items-center">
                <FaCheck className="w-[16px] h-[16px]" />
                <p className="text-xs lg:text-base capitalize">Free shipping</p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <select className="bg-main text-white outline-none text-xs lg:text-base capitalize" value={selectValue} onChange={selectedValue}>
                  <option defaultValue="English">Eng</option>
                  <option value="Urdu">Urd</option>
                  <option value="Chiness">Chi</option>
                  <option value="Japness">Jap</option>
                </select>
                <Link href="/faqs" className="text-xs lg:text-base uppercase">faqs</Link>
                <Link href="/contact" className="text-xs lg:text-base capitalize flex items-center gap-1 whitespace-nowrap "><MdOutlineErrorOutline className="w-[16px] h-[16px]" /> need help</Link>
              </div>
            </div>
          </div>

          {/*Logo Bar */}
          <div className="w-full bg-sky">
            <div className="w-[1440px] mx-auto max-w-[90%] h-[85px] flex justify-between items-center ">
              <Link href="/">
                <Image src={Logo} alt="logo" />
              </Link>
              <div className="flex justify-between items-center gap-5">
                <Link href="/cart">
                  <div className="flex items-center bg-white rounded-lg px-3 py-1 relative">
                    <FiShoppingCart className="w-[20px] h-[20px] text-main " />
                    <span className="w-5 h-5 leading-5 text-center bg-primary rounded-full text-white absolute -top-2 -right-1 text-xs">{item.length}</span>
                  </div>
                </Link>
                <div>
                  {
                    isOpen ?
                      <HiBars3BottomLeft className='h-8 w-8 text-main  cursor-pointer sm:hidden' onClick={toggleMenu} />
                      :
                      <HiBars3 className='h-8 w-8 text-main  cursor-pointer sm:hidden' onClick={toggleMenu} />
                  }
                </div>
              </div>
            </div>
          </div>

          {/*Menu Bar */}
          <div className={`w-full  relative`}>
            <nav className={`w-full border-b bg-white border-sky py-3  ${isOpen ? "top-0 opacity-100 z-[9999]" : "-top-[330px] -z-50 opacity-50"} transition-all duration-1000 ease-in-out absolute sm:hidden`}>
              <ul className="flex flex-col gap-5 text-gray px-5">
                <li><Link href="/" className={`hover:text-primary `}>Home</Link></li>
                <li><Link href="/products" className={`hover:text-primary `}>Shop</Link></li>
                <li><Link href="/category" className={`hover:text-primary `}>All Categories</Link></li>
                <li><Link href="/about" className={`hover:text-primary `}>About</Link></li>
                <li><Link href="/contact" className={`hover:text-primary`}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header;