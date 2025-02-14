import OrderDetails from '@/app/components/OrderDetails';
import React from 'react'

interface Params {
    id: string;
}

const page = ({params}: {params:Params}) => {
  return (
    <div className="w-[1440px] mx-auto max-w-[90%] my-20">
        <OrderDetails orderId={params.id} />
    </div>
  )
}

export default page