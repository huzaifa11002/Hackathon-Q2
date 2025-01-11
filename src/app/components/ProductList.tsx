"use client"
import { urlFor } from '@/sanity/lib/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from "../redux/cartslice";
import Card from './Card';

interface Category {
    title: string,
    slug: {
        current: string
    }
}

interface ProductType {
    title: string,
    image: any, // Adjust the type based on your actual image type
    price: number,
    sale?: boolean,
    slug: {
        current: string,
    },
    salePercentage?: number,
    selectCategory?: Category[],
    quantity: number,
}

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
            slug: product.slug,
        };
        dispatch(add(cartItem));
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