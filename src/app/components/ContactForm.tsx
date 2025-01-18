"use client";
import Button from './Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, InputFields } from '../lib/type';



const ContactForm = () => {

    const onSubmit: SubmitHandler<InputFields> = (data) => {
        // Handle form submission
        console.log(data);
    }
    
    const { register, handleSubmit, formState: { errors }, trigger } = useForm<InputFields>({
        resolver: zodResolver(FormSchema)
    });


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 text-main">
            <div className="flex flex-col gap-3">
                <label>Your Name</label>
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
                <label>Subject (optional)</label>
                <input 
                {...register("subject")}
                onBlur={() => trigger("subject")} 
                type="text" name="subject" 
                placeholder="This is an optional" 
                className=" p-3 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base focus:outline-2 focus:outline-main focus:border-none" />
                {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
            </div>
            <div className="flex flex-col gap-3">
                <label>Message</label>
                <textarea 
                {...register("message")} 
                onBlur={() => trigger("message")}
                name="message"
                placeholder="Message" 
                className=" p-3 h-28 bg-transparent border border-gray outline-none rounded-md placeholder:text-gray text-xs lg:text-sm xl:text-base focus:outline-2 focus:outline-main focus:border-none"></textarea>
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>
            <Button type="submit" value="Submit" />
        </form>
    )
}

export default ContactForm