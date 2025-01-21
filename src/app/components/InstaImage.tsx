import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

interface instaImage{
    image:string,
}

const instagram = `*[_type == "products" && "instagram" in tags]{
    image,
  }[0..4]`

const InstaImage = async () => {
    const instagramImages = await client.fetch(instagram)
  return (
    <div className="grid grid-cols-5 gap-5">
    {
        instagramImages.map((image:instaImage, index: number) => (
            <Image key={index} src={urlFor(image.image).url()} alt="instagram" width={300} height={300}/>
        ))
    }
</div>
  )
}

export default InstaImage