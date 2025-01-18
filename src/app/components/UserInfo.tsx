"use client";
import Button from './Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserInfoSchema, Inputs } from '../lib/type';



const ContactForm = () => {

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // Handle form submission
        console.log(data);
    }
    
    const { register, handleSubmit, formState: { errors }, trigger } = useForm<Inputs>({
        resolver: zodResolver(UserInfoSchema)
    });


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 text-main">
            <div className="flex flex-col gap-3">
                <label>Full Name</label>
                <input 
                {...register("name")} 
                onBlur={() => trigger("name")}
                name="name" 
                type="text" 
                placeholder="Name" 
                className={`p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base focus:outline-2 focus:outline-main focus:border-none`} />               
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col gap-3">
                <label>Email Address</label>
                <input 
                {...register("email")} 
                onBlur={() => trigger("email")}
                name="email" 
                type="email" 
                placeholder="name@mail.com" 
                className=" p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base focus:outline-2 focus:outline-main focus:border-none" />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-3">
                <label>Phone Number</label>
                <input 
                {...register("phone")}
                onBlur={() => trigger("phone")} 
                type="number" name="phone" 
                placeholder="This is an optional" 
                className=" p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base focus:outline-2 focus:outline-main focus:border-none" />
                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            </div>
            <div className="flex flex-col gap-3">
                <label>Address</label>
                <textarea 
                {...register("address")} 
                onBlur={() => trigger("address")}
                name="address"
                placeholder="address" 
                className=" p-3 h-28 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base focus:outline-2 focus:outline-main focus:border-none"></textarea>
                {errors.address && <p className="text-red-500">{errors.address.message}</p>}
            </div>
            <Button type="submit" value="Submit" />
        </form>
    )
}

export default ContactForm