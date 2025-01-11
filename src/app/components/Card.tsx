import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import { FiShoppingCart } from "react-icons/fi";


interface Category {
  title: string,
  slug: {
    current: string
  }
}

interface CardProps {
  title: string,
  price: number,
  image: string,
  sale?: boolean,
  slug: {
    current: string
  },
  salePercentage?: number,
  selectCategory?: Category[],
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Card = (props: CardProps) => {
  const discountedPrice = props.sale && props.salePercentage ? props.price * (1 - (props.salePercentage ?? 0) / 100) : '';
  return (
    <>
        <div className='w-full relative group cursor-pointer'>
          <div className='mb-5'>
            <Link href={`products/${props.slug.current}`}>
            <Image src={props.image} alt={props.title} width={500} height={500} className='w-full object-contain object-top' />
            </Link>
          </div>
          <div className='flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-3'>
            <div className='flex flex-col items-center sm:items-start gap-3'>
            <Link href={`products/${props.slug.current}`}>
              <h3 className='group-hover:text-primary text-center sm:text-start text-sm lg:text-base'>{props.title}</h3>
              </Link>
              <div className='flex gap-1 items-center'>
                {props.sale ?
                  (
                    <>
                      <p className='text-xs lg:text-sm xl:text-base'>{`$${discountedPrice}`}</p>
                      <p className='line-through text-gray text-xs lg:text-sm xl:text-base'>{`$${props.price}`}</p>
                    </>

                  )
                  :
                  (
                    <p className='text-xs lg:text-sm xl:text-base'>{`$${props.price}`}</p>
                  )
                }
              </div>
            </div>
            <button onClick={props.onClick} className='text-main bg-sky group-hover:bg-primary p-3 rounded-lg h-fit w-fit'><FiShoppingCart className="w-[16px] h-[16px] text-main  group-hover:text-white " /></button>
          </div>
          {props.sale ?
            (
              <span className={`absolute top-3 left-3 capitalize text-white rounded-lg text-xs lg:text-sm xl:text-base bg-[#F5813F] px-3 py-1`}>sale</span>
            )
            :
            (
              null
            )
          }
        </div>
      
    </>
  )
}

export default Card
