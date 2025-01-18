import React from 'react'
import Image from "next/image"
import { IoMdHeartEmpty } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Cart } from '../lib/type';

const CartCard = (props: Cart) => {
    return (
        <>
            <div className="flex flex-row gap-5 py-5 border-b border-gray">
                <div>
                    <Image src={props.image} alt={props.title} width={500} height={500} className="w-36 h-36" />
                </div>
                <div className="flex justify-between gap-2 w-full">
                    <div className="flex flex-col gap-3 sm:gap-5 ">
                        <h4 className=" text-main text-sm sm:text-lg">{props.title}</h4>
                        <div className="flex flex-col gap-3 text-gray capitalize">
                            <div>
                                <p className="text-xs lg:text-sm xl:text-base">Asheen slate / Cobalt bliss</p>
                            </div>
                            <div className="flex flex-row gap-5 ">
                                <p className="text-xs lg:text-sm xl:text-base">size 1</p>
                                <p className="text-xs lg:text-sm xl:text-base">quantity <span>{props.quantity}</span></p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 text-main">
                            <IoMdHeartEmpty />
                            <RiDeleteBin6Line onClick={props.onClick} className='hover:text-red-500 cursor-pointer'/>
                        </div>
                    </div>
                    <div>
                        <p className="uppercase text-xs lg:text-sm xl:text-base font-bold text-main whitespace-nowrap">Mrp:$<span>{props.price}</span></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CartCard