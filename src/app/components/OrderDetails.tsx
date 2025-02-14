"use client"
import { client } from '@/sanity/lib/client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from './Button';

interface product {
  title: string;
  price: number;
}

interface CartItem {
  product: product;
  quantity: number;
}

interface Order {
  orderId: string;
  cartItems: CartItem[];
  totalAmount: number;
}

interface Orderpage {
  orderId: string;
}

const OrderDetails: React.FC<Orderpage> = ({ orderId }) => {
  const [orders, setOrders] = useState<Order[]>([])
  const [error, setError] = useState<string | null>(null)
  // Get the userId from cookies
  useEffect(() => {
    const fetchOrders = async () => {
      if (orderId) {
        try {
          const query = `*[_type == "order" && orderId == "${orderId}"]{
            orderId,
             cartItems[]{
              product->{
                title,
                price
              },
              quantity
            },
            totalAmount
          }`
          const result = await client.fetch(query)
          setOrders(result)
        } catch (err) {
          console.error("Error fetching orders:", err)
          setError("Failed to fetch orders. Please try again later.")
        }
      } else {
        setError("You are not fill the Billing details")
      }
    }
    fetchOrders()
  }, [])
  return (
    <div>
      <h1 className="text-lg lg:text-3xl font-semibold text-main">Order Details</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : orders.length > 0 ? (
        orders.map((order, index) => {
          const totalQuantity = order.cartItems.reduce((total, item) => total + item.quantity, 0);
          return (
            <div key={index} className="flex flex-col gap-5 rounded-lg shadow-xl p-10 bg-white">
              <h3 className="text-base lg:text-2xl font-semibold text-main">Order ID: {order.orderId}</h3>
              <div>
                <ul>
                  {order.cartItems.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center">
                      <div className="w-1/2 flex justify-between items-center">
                        <p>{item.product.title}</p>
                      </div>
                      <div className="w-1/2 flex justify-between items-center">
                        <p>${item.product.price}.00</p>
                        <p>x{item.quantity}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <ul>
                <li className="flex justify-between items-center">
                  <div className="w-1/2 flex justify-between items-center">
                    <p>Total Amount</p>
                  </div>
                  <div className="w-1/2 flex justify-between items-center">
                    <p>${order.totalAmount}</p>
                    <p>x{totalQuantity}</p>
                  </div>
                </li>
              </ul>

              <div className="flex justify-center mt-5">
                <Link href="/products">
                  <Button value="Continue Shopping" />
                </Link>
              </div>

            </div>
          );
        })
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
};

export default OrderDetails