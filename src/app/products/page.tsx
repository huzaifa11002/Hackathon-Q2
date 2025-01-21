import { client } from "@/sanity/lib/client"
import Image from "next/image"
import ProductList from "../components/ProductList";
import { ProductType } from "../lib/type"
import { urlFor } from "@/sanity/lib/image"


const query = `*[_type == "products"]{
  _id,
  title,
  image,
  price,
  badge,
  priceWithoutDiscount,
}`

const instagram = `*[_type == "products" && "instagram" in tags]{
  image,
},[0..4]`

export default async function Products() {

    const productData: ProductType[] = await client.fetch(query)
    const instagramImages = await client.fetch(instagram)

    return (
        <>
            <title>Products</title>
            <div className="w-[1440px] mx-auto max-w-[90%] my-20">
                <div className="flex flex-col gap-10">
                    <h2 className="text-lg lg:text-3xl font-semibold text-main">All Products</h2>
                    <ProductList productData={productData} />
                </div>
            </div>
            <div className="w-full bg-sky py-10">
                <div className="w-[1440px] mx-auto max-w-[90%] my-20 flex flex-col gap-10">
                    <div className="flex justify-center flex-col gap-10 sm:w-[70%] md:w-[60%] lg:w-[70%] xl:w-[60%] w-full mx-auto text-center">
                        <h2 className="text-lg sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-main capitalize">or subscribe to the newsletter</h2>
                        <div className="flex flex-row items-center gap-5">
                            <input type="email" placeholder="Email Address..." className="w-full text-xs lg:text-sm xl:text-base border-b border-main bg-transparent outline-none placeholder:text-gray" />
                            <button type="submit" className="uppercase text-xs lg:text-sm xl:text-base border-b border-main">submit</button>
                        </div>
                    </div>

                    <div className="flex justify-center flex-col gap-10 text-center">
                        <h2 className="text-lg sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-main capitalize">follow products and discounts on instagram</h2>
                        <div className="grid grid-cols-5 gap-5">
                            {
                                instagramImages.map((image: any, index: number) => (
                                    <Image key={index} src={urlFor(image.image).url()} alt="img" />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}