import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FiShoppingCart } from "react-icons/fi";
interface CardProps {
  title: string,
  price?: string,
  image: StaticImageData,
  bg?: string,
  value?: string,
  discount?: string,
}

const Card = (props: CardProps) => {
  return (
    <>
    <Link href="/productpage">
    <div className='w-full relative group cursor-pointer'>
      <div className='mb-5'>
        <Image src={props.image} alt={props.title}  className='w-full object-contain object-top'/>
      </div>
      <div className='flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-3'>
        <div className='flex flex-col items-center sm:items-start gap-3'>
          <h3 className='group-hover:text-primary text-center sm:text-start text-sm lg:text-base'>{props.title}</h3>
          <div className='flex gap-1 items-center'>
            <p className='text-xs lg:text-sm xl:text-base'>{props.price}</p>
            <p className='line-through text-gray text-xs lg:text-sm xl:text-base'>{props.discount}</p>
          </div>
        </div>
          <button className='text-main bg-sky group-hover:bg-primary p-3 rounded-lg h-fit w-fit'><FiShoppingCart className="w-[16px] h-[16px] text-main  group-hover:text-white " /></button>
      </div>
      <span className={`absolute top-3 left-3 capitalize text-white rounded-lg text-xs lg:text-sm xl:text-base ${props.bg}`}>{props.value}</span>
    </div>
    </Link>
    </>
  )
}

export default Card
