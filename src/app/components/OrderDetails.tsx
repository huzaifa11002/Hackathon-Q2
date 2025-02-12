"use client"
import { client } from '@/sanity/lib/client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie';
import Button from './Button';

interface Order {
  orderId: string
  totalAmount: number
}

const OrderDetails = () => {
    const [orders, setOrders] = useState<Order[]>([])
    const [error, setError] = useState<string | null>(null)
    const userId = Cookies.get("userId") // Get the userId from cookies
  useEffect(() => {
    const fetchOrders = async () => {
// Assuming you have stored the userId in localStorage
      console.log(userId)
      if (userId) {
        try {
          const query = `*[_type == "order" && userId._ref == "${userId}"]{
            orderId,
            totalAmount
          }`
          const result = await client.fetch(query)
          setOrders(result)
        } catch (err) {
          console.error("Error fetching orders:", err)
          setError("Failed to fetch orders. Please try again later.")
        }
      } else {
        setError("User ID not found in localStorage.")
      }
    }
    fetchOrders()
  }, [])
  return (
    <div>
      <h1>Order Details</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : orders.length > 0 ? (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <p>Order ID: {order.orderId}</p>
              <p>Total Amount: ${order.totalAmount}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
      <Link href="/products">
      <Button value='continue Shopping'/>
      </Link>
    </div>
  )
}

export default OrderDetails