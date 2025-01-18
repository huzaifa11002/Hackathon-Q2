import { z } from 'zod'

//Product Type
export interface ProductType {
    _id: string;
    title: string;
    priceWithoutDiscount: number | null;
    category: {
      _id: string;
      title: string;
    };
    tags: string[];
    price: number;
    badge: string | null;
    image: string;
    description: string;
    inventory: number;
  }

//Product Card Type

export interface CardProps {
    title: string,
    price: number,
    image: string,
    _id:string,
    priceWithoutDiscount: number | null;
    badge: string | null;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
  }

//Button Type

export interface ButtonType {
    value?: string,
    type?:'button' | 'submit' | 'reset',
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    iconLeft?: React.ReactElement
    iconRight?: React.ReactElement
}

//Cart Type

export interface Cart {
  title: string,
  price: number,
  quantity: number,
  image: string,
  _id:string,
    onClick?: React.MouseEventHandler<SVGElement>
}

//CartItem Type

export interface CartItem {
    title: string,
    price: number,
    quantity: number,
    image: string,
    _id:string,
}

//AddToCart Type

export interface AddToCartButton {
    product: {
        title: string;
        price: number;
        image: string;
        _id: string;
        quantity: number;
    };
}

//New Type

export interface ProductNew {
    _id: string;
    title: string;
    priceWithoutDiscount: number | null;
    category: {
      _id: string;
      title: string;
    };
    tags: string[];
    price: number;
    badge: string | null;
    image: string;
    description: string;
    inventory: number;
  }


//Contact Form ZOD Schema Type

export const FormSchema = z.object({
    name: z.string().min(3, "Minimum 3 Alphabets Required").max(255, "Maximum 255 Alphabets Required"),
    email: z.string().email("Email is Required"),
    subject: z.string().min(10, "Minimum 3 Alphabets Required").max(100, "Maximum 100 Alphabets Required").optional(),
    message: z.string().min(10, "Minimum 3 Alphabets Required").max(1000, "Maximum 1000 Alphabets Required")
})

export type InputFields = z.infer<typeof FormSchema>

export const UserInfoSchema = z.object({
  name: z.string().min(3, "Minimum 3 Alphabets Required").max(255, "Maximum 255 Alphabets Required"),
  email: z.string().email("Email is Required"),
  phone: z.number().max(11, "Maximum 100 Alphabets Required"),
  address: z.string().min(10, "Minimum 3 Alphabets Required").max(1000, "Maximum 1000 Alphabets Required")
})

export type Inputs = z.infer<typeof UserInfoSchema>

