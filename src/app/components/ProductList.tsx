"use client"
import { urlFor } from '@/sanity/lib/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from "../redux/cartslice";
import { FiShoppingCart } from "react-icons/fi";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import Card from './Card';
import { ProductType } from '../lib/type';

interface ProductListProps {
    productData: ProductType[]
}

const ProductList = ({ productData }: ProductListProps) => {
    const dispatch = useDispatch();
    const handleAddItem = (product: ProductType) => {
        const cartItem = {
            title: product.title,
            price: product.price,
            quantity: 1, // Default quantity
            image: urlFor(product.image).url(),
            _id: product._id,
        };
        dispatch(add(cartItem));
        toast.success('Add to cart', {
            icon: <FiShoppingCart className="w-[16px] h-[16px]" />,
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
    };
    return (
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {productData.map((product, index) => (
                <Card
                    key={index}
                    {...product}
                    image={urlFor(product.image).url()}
                    onClick={() => handleAddItem(product)}
                />
            ))}
        </div>
    );
}

export default ProductList