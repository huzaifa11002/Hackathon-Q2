import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Card from "@/app/components/Card";
import { ProductType } from "@/app/types/type";
import InstaImage from "@/app/components/InstaImage";
import { Suspense } from "react";

interface Params {
  id: string;
}
interface ImageFiles {
  image: string,
}

const page = async ({ params }: { params: Params }) => {

  const convertToSpaces = (value: string): string => {
    return value.replace(/-/g, " ");
  };

  let pageHeading = convertToSpaces(params.id)
  let id = `"${params.id}"`;

  const query = `*[_type == "products" && category._ref == ${id} ]{
  _id,
  title,
  image,
  price,
  badge,
  priceWithoutDiscount,
  category->{
    title
  }
}`
  const productData: ProductType[] = await client.fetch(query)

  const categoryTitle = productData.length > 0 ? productData[0].category.title : 'Category';

  return (
    <>
      <title>{`Category - ${categoryTitle}`}</title>
      <div className="w-[1440px] mx-auto max-w-[90%] my-20">
        <div className="flex flex-col gap-10">
          <h2 className="text-lg lg:text-3xl font-semibold text-main capitalize">{categoryTitle}</h2>
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
            <Suspense>
              {await InstaImage()}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}


export default page;