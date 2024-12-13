import React from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
interface CardProps {
    title: string,
    price?: string,
    image: StaticImageData,
}
const FeatureCard = (props: CardProps) => {
    return (
        <>
            <Link href="/productpage">
            <div className='w-full'>

                <div className='mb-5'>
                    <Image src={props.image} alt={props.title} className='w-full object-contain object-top' />
                </div>
                <div className='flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-3 text-main'>
                    <h3 className='font-medium text-sm lg:text-base text-center'>{props.title}</h3>
                    <p className="font-bold text-xs lg:text-sm xl:text-base">{props.price}</p>
                </div>
            </div>
            </Link>
        </>
    )
}

export default FeatureCard