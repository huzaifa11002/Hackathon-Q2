import Image from "next/image"
import Link from "next/link"
import ProductImg from "../../../public/Image (1).png"
import Product1 from "../../../public/Image (2).png"
import Product2 from "../../../public/Image (3).png"
import Product3 from "../../../public/Image (4).png"
import Product4 from "../../../public/Image (5).png"
import Product5 from "../../../public/Image (6).png"
import Button from "../components/Button"
import FeatureCard from "../components/FeatureCard";
import { FiShoppingCart } from "react-icons/fi";
export default function ProductPage() {
    return (
        <div className="w-[1440px] mx-auto max-w-[90%] my-20">
            <div className="flex flex-col md:flex-row md:justify-between gap-10 xl:gap-0">
                <div className="w-full md:w-1/2">
                    <Image src={ProductImg} alt="product-img" className="xl:h-[500px] h-fit object-contain w-full object-top" />
                </div>
                <div className="flex flex-col lg:gap-10 gap-5 w-full md:w-1/2">
                    <div className="flex flex-col lg:gap-10 gap-5">
                    <h2 className="text-lg lg:text-3xl font-semibold text-main capitalize">Library Stool Chair</h2>
                        <span className='px-5 py-3 text-xs lg:text-base bg-primary text-white capitalize rounded-3xl w-fit'>$20.00 USD</span>
                    </div>
                    <div className="py-5 border-t border-gray text-gray flex flex-col lg:gap-10 gap-5">
                        <p className="text-xs lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam quo reprehenderit.
                            Accusantium amet enim, quaerat vitae voluptatem reiciendis deleniti mollitia quisquam, voluptate sed tempora qui
                            excepturi unde nemo officia dolorem aliquid, repellendus nobis veniam soluta magnam beatae doloremque sequi!</p>
                        <Button value="Add to Cart" iconLeft={<FiShoppingCart className="w-[16px] h-[16px]"/>}/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-10 my-20">
            <div className="flex justify-between items-center">
            <h2 className="text-lg lg:text-3xl font-semibold text-main">Featured Products</h2>
            <Link href="/products" className="text-main underline font-bold capitalize">View all</Link>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <FeatureCard title="Library Stool Chair" image={Product1} price="$99"/>
                <FeatureCard title="Library Stool Chair" image={Product2} price="$99"/>
                <FeatureCard title="Library Stool Chair" image={Product3} price="$99"/>
                <FeatureCard title="Library Stool Chair" image={Product4} price="$99"/>
            </div>
            </div>
        </div>
    )
}