import Image from 'next/image'

interface CateProps {
    _id: string,
    title: string,
    image: string,
    products: number,
}
const CategoryCard = (props: CateProps) => {
    return (
        <div className={`w-full group`}>
            <div className='relative'>
                <Image src={props.image} alt={props.title} width={500} height={500} className='w-full object-contain object-top' />
                <div className={`flex flex-col justify-start gap-1 p-5 bg-black rounded-b-lg bg-opacity-40 absolute bottom-0 w-full `}>
                    <h3 className='font-bold lg:text-lg text-base capitalize text-white opacity-100'>{props.title}</h3>
                    <p className='text-xs lg:text-sm xl:text-base capitalize text-white opacity-100 lg:hidden transition-all ease-in-out delay-300 lg:group-hover:block'>Products {props.products}</p>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard;