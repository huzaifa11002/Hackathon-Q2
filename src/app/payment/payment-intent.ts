"use server"

import { client } from "@/sanity/lib/client";
import Stripe from "stripe";

export async function createPaymentIntent(userId: string) {

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: "2025-01-27.acacia",
    });

    function convertDollarsToCents(dollars: number): number {
        return Math.round(dollars * 100);
    }
    const query = `*[_type == "order" && userId._ref == "${userId}"]{totalAmount}`
    const result = await client.fetch(query)
    const totalAmount = result[0].totalAmount
    const amount = convertDollarsToCents(totalAmount);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            automatic_payment_methods: { enabled: true },
        });

        return { clientSecret: paymentIntent.client_secret };


    } catch (error) {
        console.error(error);
    }
}