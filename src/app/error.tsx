'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
import Button from './components/Button'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="w-[1440px] mx-auto max-w-[90%] my-20">
    <div className='flex flex-col items-center justify-center gap-10 p-10 shadow-lg rounded-md my-20 mx-auto w-fit'>
        <h2 className="text-lg lg:text-3xl font-semibold text-main text-center">Website is under maintenance</h2>
      <Button value="Try again" onClick={() => reset()}/>
    </div>
    </div>
  )
}