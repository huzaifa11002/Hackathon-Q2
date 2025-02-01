"use server"

import Stripe from "stripe";

export async function createPaymentIntent() {

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: "2025-01-27.acacia",
    });

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1000,
            currency: "usd",
            automatic_payment_methods: { enabled: true },
        });

        return { clientSecret: paymentIntent.client_secret };


    } catch (error) {
        console.error(error);
    }
}