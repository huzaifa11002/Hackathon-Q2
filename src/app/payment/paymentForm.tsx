"use client";

import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { toast, Bounce } from 'react-toastify';
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { MdShoppingBasket } from "react-icons/md";
import Cookies from 'js-cookie';

export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const route = useRouter()
    const [isProcess, setIsProcess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [totalAmount, setTotalAmount] = useState<number | null>(null);
    useEffect(() => {
        const fetchAmount = async () => {
            const orderId = Cookies.get('orderId') // Assuming you have stored the userId in localStorage
            if (orderId) {
                const query = `*[_type == "order" && orderId == "${orderId}"]{totalAmount}`
                const result = await client.fetch(query)
                setTotalAmount(result[0].totalAmount)
            }
        }

        fetchAmount()
    }, [])
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcess(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: { return_url: window.location.href },
            redirect: "if_required"
        })

        if (error) {
            setErrorMessage(error.message || "An unknown error occurred");
            setIsProcess(false);
        } else {
            setErrorMessage(null);
            setIsProcess(false);
            toast.success('Payment successful', {
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
            setTimeout(() => {
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
            }, 1000)
            route.push(`/order/${Cookies.get('orderId')}`)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
            <PaymentElement />
            <Button type="submit" disabled={!stripe || isProcess} value={isProcess ? "Processing..." : `Pay $${totalAmount}`} />
            {errorMessage && <div>{errorMessage}</div>
            }
        </form>
    );
}