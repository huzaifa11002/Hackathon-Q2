import React, { Suspense } from 'react'
import UserInfo from '../components/UserInfo'
import CheckoutCard from '../components/CheckoutCard'

const page = () => {
  return (
    <div className='w-[1440px] mx-auto max-w-[90%] my-20'>
      <div className="flex flex-col justify-between lg:flex-row gap-20">
      <div className='lg:w-[60%] w-full'>
        <Suspense>
      <UserInfo/>
        </Suspense>
      </div>
      <div className='lg:w-[40%] w-full'>
        <Suspense>
        <CheckoutCard/>
        </Suspense>
      </div>
      </div>
      
    </div>
  )
}

export default page