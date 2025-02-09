"use client"
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useState } from 'react'
import { useRouter } from "next/navigation";
import { MdShoppingBasket} from "react-icons/md";
import { toast, Bounce } from 'react-toastify';


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
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = () => {
            if (paymentMethod === 'cod') {
                toast.success('Order has been placed', {
                    icon: <MdShoppingBasket className="w-[16px] h-[16px]" />,
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
            if (paymentMethod === 'online') {
                router.push('/payment')
            }
    };

    return (
        <div className=' p-5 rounded shadow-lg shadow-main flex flex-col gap-5'>
            <div className='flex flex-col gap-3'>
                <h3 className="font-base text-xl">Your Items</h3>
                <ul className='flex flex-col gap-1'>
                    {cartItem.items.map((item: CartType, index: number) => (
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
                        <input onChange={handlePaymentChange} value="online" type="radio" name="payment" id="onlinepay" />
                        <label htmlFor="onlinepay" className=" text-main text-sm sm:text-lg">Online Payment</label>
                    </div>
                    <div className='flex flex-row gap-1 items-center'>
                        <input onChange={handlePaymentChange} value="cod" type="radio" name="payment" id="cod" />
                        <label htmlFor="cod" className=" text-main text-sm sm:text-lg">Cash On Delivery</label>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <h3 className="font-base text-xl">Total Amount</h3>
                    <p className="font-base text-xl">${cartItem.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
                </div>
                <button form='checkout+userInfo'
                    onClick={handleSubmit}
                    disabled={paymentMethod == "" || cartItem.items.length == 0}
                    className={`bg-primary text-white font-bold py-2 rounded mt-5 ${paymentMethod == "" || cartItem.items.length == 0? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}>
                    Checkout</button>
            </div>
        </div>
    );
}

export default CheckoutCard