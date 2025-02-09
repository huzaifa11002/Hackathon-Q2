import SearchPage from "@/app/components/SearchPage"

interface Params {
    id: string,
}

const page = ({ params }: { params: Params }) => {
    return (
        <>
            <div className="w-[1440px] mx-auto max-w-[90%] my-20">
                <SearchPage query={params.id}/>
            </div>
        </>
    )
}

export default page