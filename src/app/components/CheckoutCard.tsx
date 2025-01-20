"use client"
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useRef } from 'react'
import { useRouter } from "next/navigation";

interface CartType {
    title: string,
    price: number,
    quantity: number,
    image: string,
    _id: string,
}

const CheckoutCard = () => {
    const cartItem = useSelector((state: RootState) => state.cart)
    const router = useRouter();
    const onlinePayRef = useRef<HTMLInputElement>(null);
    const codRef = useRef<HTMLInputElement>(null);

    const handlePayment = () => {
        if (onlinePayRef.current?.checked) {
            alert("Online payment is not available.");
        } else if (codRef.current?.checked) {
            router.push('/order');
        }
    };

    return (
        <div className=' p-5 rounded shadow-lg shadow-main flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
                <h3 className="font-base text-xl">Your Items</h3>
                <ul className='flex flex-col gap-1'>
                    {cartItem.map((item: CartType, index: number) => (
                        <li key={index} className='flex flex-row justify-between items-center'>
                            <span className="text-xs lg:text-sm xl:text-base">{item.title}</span>
                            <span className="text-xs lg:text-sm xl:text-base">x{item.quantity}</span>
                        </li>
                    ))}
                </ul>
                
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className="font-base text-xl">Payment Method</h3>
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-row gap-1 items-center'>
                    <input ref={onlinePayRef} type="radio" name="payment" id="onlinepay" />
                    <label htmlFor="onlinepay" className=" text-main text-sm sm:text-lg">Online Payment</label>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                    <input ref={codRef} type="radio" name="payment" id="cod" />
                    <label htmlFor="cod" className=" text-main text-sm sm:text-lg">Cash On Delivery</label>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center'>
                <h3 className="font-base text-xl">Total Amount</h3>
                <p className="font-base text-xl">${cartItem.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
                </div>
                <button form='checkout+userInfo' className='bg-primary text-white font-bold py-2 rounded mt-5'>Checkout</button>
            </div>
        </div>
    );
}

export default CheckoutCard