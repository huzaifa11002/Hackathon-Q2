import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link";
// import Image from "next/image"
// import Image1 from "../../../public/Image.png"
// import Image2 from "../../../public/Image (1).png"
// import Image3 from "../../../public/Image (2).png"
// import Image4 from "../../../public/Image (3).png"
import Card from "@/app/components/Card";

interface Params {
  id: string;
}
interface Category {
  title: string,
  slug: {
    current: string
  }
}
interface ProductType {
  title: string,
  image: string,
  price: number,
  sale?: boolean,
  slug: {
    current: string
  },
  salePercentage?: number,
  selectCategory?: Category[],
}



const page = async ({ params }: { params: Params }) => {

  const convertToSpaces = (value: string): string => {
    return value.replace(/-/g, " ");
  };

  let pageHeading = convertToSpaces(params.id)
  let slug = `"${params.id}"`;

  const query = `*[_type == "product" && ${slug} in selectCategory[]->slug.current]{
    title,
    image,
    price,
    sale,
    salePercentage,
     slug{
      current
    },
    "category": selectCategory[]->{
        "slug": slug.current,
        "title": title,
    },
}`
  const productData: ProductType[] = await client.fetch(query)
  return (
    <>
      <title>{`Category - ${pageHeading}`}</title>
      <div className="w-[1440px] mx-auto max-w-[90%] my-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-lg lg:text-3xl font-semibold text-main capitalize">{pageHeading}</h2>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {
              productData.map((product, index) => (               
                    <Card key={index} {...product} image={urlFor(product.image).url()} />                                
              ))
            }
          </div>
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
            {/* <div className="grid grid-cols-5 gap-5">
              <Image src={Image1} alt="img" />
              <Image src={Image2} alt="img" />
              <Image src={Image3} alt="img" />
              <Image src={Image4} alt="img" />
              <Image src={Image1} alt="img" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}


export default page;