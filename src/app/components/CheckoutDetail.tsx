"use client";
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserInfoSchema, Inputs } from '../types/type';
import { client } from '@/sanity/lib/client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { MdOutlineError } from "react-icons/md";
import { toast, Bounce } from 'react-toastify';
import { useState } from 'react'
import { useRouter } from "next/navigation";
import { MdShoppingBasket } from "react-icons/md";
import { removeAll } from '../redux/cartslice';
import Cookies from 'js-cookie';

interface CartType {
    title: string,
    price: number,
    quantity: number,
    image: string,
    _id: string,
}

const generateRandomOrderId = () => {
    const timestamp = Date.now().toString(36); // Convert current timestamp to base-36 string
    const randomNum = Math.random().toString(36).substring(2, 8); // Generate a random base-36 string
    return `${timestamp}-${randomNum}`; // Combine both parts to form the order ID
}

const CheckoutDetail = () => {

    const dispatch = useDispatch();
    const cartItem = useSelector((state: RootState) => state.cart)
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(event.target.value);
    };
    const totalPayment = cartItem.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        setIsSubmitting(true);

        try {
            // Generate custom order ID
            const orderId = generateRandomOrderId();

            // Create userInfo document and capture the result
            const userInfo = await client.create({
                _type: 'userInfo',
                name: data.name,
                email: data.email,
                phone: data.phone,
                address1: data.address1,
                address2: data.address2,
                zipcode: data.zipcode
            });

            // Create order document using the userInfo._id and custom orderId
            await client.create({
                _type: 'order',
                orderId: orderId,
                userId: { _type: 'reference', _ref: userInfo._id },
                cartItems: cartItem.map(item => ({ _type: 'reference', _ref: item._id })),
                totalAmount: totalPayment
            });

            Cookies.set('orderId', orderId);

            if (paymentMethod === 'online') {
                toast.info('Your payment is initializing', {
                    icon: <MdShoppingBasket className="w-[16px] h-[16px]" />,
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                router.push('/payment');
            } else {
                toast.success('Order has been placed', {
                    icon: <MdShoppingBasket className="w-[16px] h-[16px]" />,
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                reset();
            dispatch(removeAll());
                router.push('/order');
            }

        } catch (error) {
            console.error("Error creating documents:", error);
            toast.error('Fill the form correctly', {
                icon: <MdOutlineError className="w-[16px] h-[16px]" />,
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
        } finally {
            setIsSubmitting(false);
        }
    }

    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm<Inputs>({
        resolver: zodResolver(UserInfoSchema)
    });

    return (
        <div className='w-[1440px] mx-auto max-w-[90%] my-20'>
            <div className="flex flex-col justify-between lg:flex-row gap-20">
                <div className='lg:w-[60%] w-full'>

                    <div className="flex flex-col gap-10">
                        <h2 className="text-lg lg:text-3xl font-semibold text-main">Billing Details</h2>
                        <form onSubmit={handleSubmit(onSubmit)} id="formSubmit" className="flex flex-col gap-5 text-main">
                            <div className="flex flex-col gap-3">
                                <label>Full Name</label>
                                <input
                                    {...register("name")}
                                    onBlur={() => trigger("name")}
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    className={`p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base focus:outline-2 focus:outline-main focus:border-none`} />
                                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                            </div>
                            <div className="flex flex-col gap-3">
                                <label>Email Address</label>
                                <input
                                    {...register("email")}
                                    onBlur={() => trigger("email")}
                                    name="email"
                                    type="email"
                                    placeholder="name@mail.com"
                                    className=" p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base focus:outline-2 focus:outline-main focus:border-none" />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>
                            <div className="flex flex-col gap-3">
                                <label>Phone Number</label>
                                <input
                                    {...register("phone")}
                                    onBlur={() => trigger("phone")}
                                    type="tel" name="phone"
                                    placeholder="031xxxxxxx"
                                    className=" p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base focus:outline-2 focus:outline-main focus:border-none" />
                                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                            </div>
                            <div className="flex flex-col gap-3">
                                <label>Address Line 1</label>
                                <input
                                    {...register("address1")}
                                    onBlur={() => trigger("address1")}
                                    name="address1"
                                    type="text"
                                    placeholder="Enter your address"
                                    className={`p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base focus:outline-2 focus:outline-main focus:border-none`} />
                                {errors.address1 && <p className="text-red-500">{errors.address1.message}</p>}
                            </div>
                            <div className="flex flex-col gap-3">
                                <label>Address Line 2</label>
                                <input
                                    {...register("address2")}
                                    onBlur={() => trigger("address2")}
                                    name="address2"
                                    placeholder="Enter your address"
                                    type="text"
                                    className={`p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base focus:outline-2 focus:outline-main focus:border-none`} />
                                {errors.address2 && <p className="text-red-500">{errors.address2.message}</p>}
                            </div>
                            <div className="flex flex-col gap-3">
                                <label>Zipcode</label>
                                <input
                                    {...register("zipcode")}
                                    onBlur={() => trigger("zipcode")}
                                    type="tel" name="zipcode"
                                    placeholder="zone code"
                                    className=" p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base focus:outline-2 focus:outline-main focus:border-none" />
                                {errors.zipcode && <p className="text-red-500">{errors.zipcode.message}</p>}
                            </div>
                        </form>
                    </div>

                </div>
                <div className='lg:w-[40%] w-full'>

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
                                <p className="font-base text-xl">${cartItem.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
                            </div>
                            <button
                                type='submit'
                                form='formSubmit'
                                disabled={paymentMethod == "" || cartItem.length == 0}
                                className={`bg-primary text-white font-bold py-2 rounded mt-5 ${isSubmitting || paymentMethod == "" || cartItem.length == 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}>
                                {isSubmitting ? 'Submitting...' : 'Checkout'}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CheckoutDetail