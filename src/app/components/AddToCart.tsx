'use client'
import { useDispatch } from 'react-redux'
import { add } from "../redux/cartslice";
import { FiShoppingCart } from "react-icons/fi";
import Button from './Button';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { AddToCartButton } from '../lib/type';

const AddToCart = ({ product }: AddToCartButton) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity: product.quantity,
    };
    dispatch(add(cartItem));
    toast.success('Add to cart', {
      icon:<FiShoppingCart className="w-[16px] h-[16px]" />,
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
    <>
    <Button value="Add to Cart" iconLeft={<FiShoppingCart className="w-[16px] h-[16px]" />} onClick={handleAddToCart} />
    </>
  )
}

export default AddToCart