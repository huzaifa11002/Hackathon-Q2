"use client";

import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { toast, Bounce } from 'react-toastify';
import Button from "../components/Button";


export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [isProcess, setIsProcess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);


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
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <Button type="submit" disabled={!stripe || isProcess} value={isProcess ? "Processing..." : "Pay"}/>
            {errorMessage && <div>{errorMessage}</div>
            }
        </form>
    );
}