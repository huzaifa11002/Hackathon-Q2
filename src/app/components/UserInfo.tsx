"use client";
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserInfoSchema, Inputs } from '../lib/type';
import { client } from '@/sanity/lib/client';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart  } from '../redux/cartslice';
import { RootState } from '../redux/store';
import { MdOutlineError } from "react-icons/md";
import { toast, Bounce } from 'react-toastify';

let orderCounter = 0;

const generateOrderId = () => {
    orderCounter += 1;
    return orderCounter.toString().padStart(6, '0'); // Pads the number with leading zeros to make it 6 digits
}

const UserInfo = () => {
    const cartItem = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch();
    const totalPayment = cartItem.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        try {
            // Generate custom order ID
            const orderId = generateOrderId();

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

            dispatch(clearCart());
            reset();

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
        }
    }

    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm<Inputs>({
        resolver: zodResolver(UserInfoSchema)
    });


    return (
        <div className="flex flex-col gap-10">
            <h2 className="text-lg lg:text-3xl font-semibold text-main">Billing Details</h2>
            <form onSubmit={handleSubmit(onSubmit)} id='checkout+userInfo' className="flex flex-col gap-5 text-main">
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

    )
}

export default UserInfo