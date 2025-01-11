'use client'
import { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from './Button'

interface CountProps {
    setQuantity: ((quantity: number) => void)
}

const Count = ({ setQuantity }: CountProps) => {
    let [counter, setCounter] = useState(1)

    const incrementCounter = () => {
        const value = counter + 1
        setCounter(value)
        setQuantity(value)
    }

    const decrementCounter = () => {
        if (counter > 1) {
            const value = counter - 1;
            setCounter(value);
            setQuantity(value)
        }
    }
    return (
        <div>
            <div className='flex flex-row items-center border border-gray rounded-lg w-fit'>
                <Button iconLeft={<FaPlus className="w-[12px] h-[12px]" />} onClick={incrementCounter} />
                <p className="text-gray text-xs lg:text-base w-16 text-center">{counter}</p>
                <Button iconRight={<FaMinus className="w-[12px] h-[12px]" />} onClick={decrementCounter} />
            </div>
        </div>
    )
}

export default Count