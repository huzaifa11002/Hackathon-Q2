'use client'
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { remove } from "../redux/cartslice";
import CartCard from "../components/CartCard";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/router";

interface CartType {
    title: string,
    price: number,
    quantity: number,
    image: string,
    _id: string,
}
export default function Cart() {

    const dispatch = useDispatch();
    const cartItem = useSelector((state: RootState) => state.cart)
    const router = useRouter();

    const handleRemoveItem = (_id: string) => {
        dispatch(remove(_id))
    }
    const totalValue = cartItem.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const moveToCheckOut = () => {
        if (cartItem.length > 0) {
            router.push('/checkout');
        }
        else {
            alert('Your cart is empty')
        }
    }

    return (
        <>
            <title>Cart</title>
            <div className="w-[1440px] mx-auto max-w-[90%] my-20">
                <div className="flex flex-col justify-between lg:flex-row gap-20">
                    <div className="lg:w-3/4 w-full">
                        <div className="text-main ">
                            <h3 className="font-medium text-xl">Bag</h3>
                        </div>
                        {cartItem.length === 0 ? (
                            <p className='text-xs lg:text-sm xl:text-base my-5'>Your Cart is Empty</p>
                        ) : (
                            cartItem.map((item: CartType, index) => (
                                <CartCard
                                    key={index}
                                    {...item}
                                    image={urlFor(item.image).url()}
                                    onClick={() => handleRemoveItem(item._id)}
                                />
                            ))
                        )}

                    </div>
                    <div className="lg:w-1/4 w-full">
                        <div className="flex flex-col gap-10 text-main">
                            <div>
                                <h3 className="font-medium text-xl">Summary</h3>
                            </div>
                            <div className="flex flex-col gap-5 text-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs lg:text-sm xl:text-base">Subtotal</span>
                                    <span className="font-bold text-xs lg:text-sm xl:text-base">{totalValue.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs lg:text-sm xl:text-base">Estimated Delivery & Handling</span>
                                    <span className="font-bold text-xs lg:text-sm xl:text-base">Free</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs lg:text-sm xl:text-base">Total</span>
                                <span className="font-bold text-xs lg:text-sm xl:text-base">{totalValue.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-center">
                                <Button value="member checkout" onClick={() => moveToCheckOut()} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}