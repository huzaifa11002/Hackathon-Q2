'use client'
import { useDispatch } from 'react-redux'
import { add } from "../redux/cartslice";
import { FiShoppingCart } from "react-icons/fi";
import Button from './Button';
import { AddToCartButton } from '../lib/type';

const AddToCart = ({ product }: AddToCartButton) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const cartItem = {
            ...product,
            quantity: product.quantity,
        };
        dispatch(add(cartItem));
    };
  return (
    <Button value="Add to Cart" iconLeft={<FiShoppingCart className="w-[16px] h-[16px]" />} onClick={handleAddToCart}/>
  )
}

export default AddToCart