import { Skeleton } from "@/components/ui/skeleton"

export const PorductLoading = () => {
  return (
    <div className="w-full relative">
      <div className="mb-5">
        <Skeleton className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-lg" />
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-3">
        <div className="flex flex-col items-center sm:items-start gap-3 w-full">
          <Skeleton className="w-3/4 h-4 rounded-md" />
          <div className="flex gap-1 items-center">
            <Skeleton className="w-12 h-4 rounded-md" />
            <Skeleton className="w-12 h-4 rounded-md" />
          </div>
        </div>
        <Skeleton className="w-10 h-10 rounded-lg" />
      </div>
      <Skeleton className="absolute top-3 left-3 w-16 h-6 rounded-lg" />
    </div>
  )
}

export const CategoryLoading = () => {
    return (
        <div className="w-full group">
        <div className="relative">
          {/* Image Skeleton */}
          <Skeleton className="w-full h-[250px] sm:h-[300px] lg:h-[350px] rounded-lg" />
          
          {/* Overlay Content Skeleton */}
          <div className="flex flex-col justify-start gap-1 p-5 bg-black rounded-b-lg bg-opacity-40 absolute bottom-0 w-full">
            <Skeleton className="w-3/4 h-5 rounded-md" />
            <Skeleton className="w-1/2 h-4 rounded-md lg:hidden lg:group-hover:block" />
          </div>
        </div>
      </div>
    )
  }