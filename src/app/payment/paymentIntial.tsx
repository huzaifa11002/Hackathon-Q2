"use client";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { createPaymentIntent } from "./payment-intent";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./paymentForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const page = () => {
    const [clientSecret, setClientSecret] = useState<string | null>(null);

    useEffect(() => {
        createPaymentIntent()
            .then((res) => {
                if (res && res.clientSecret) {
                    setClientSecret(res.clientSecret)
                };
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    if (!clientSecret) {
        return <div className="flex justify-center items-center h-screen">
            <div className="loader"></div>
            </div>;
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Elements stripe={stripePromise} options={{ clientSecret }}>
                <PaymentForm />
            </Elements>
        </div>
    );
}

export default page