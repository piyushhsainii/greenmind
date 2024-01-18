'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Rating } from 'react-simple-star-rating'
const ProductCard = ({_id,img,name,price,plant}) => { 
    const navigate = useRouter()
    const [rating, setRating] = useState(2.7)
    const onClickHandler = ()=>{
      navigate.push(`/plant/${plant._id}`)
  }

  return (
    <div className=' border-[3px] w-[330px] m-2  p-2 cursor-pointer ' onClick={onClickHandler} >
        <div>
            <img className='lg:w-[279px] h-[330px] m-auto '
            src={img}
            >
            </img>
        </div>
        <div className='font-bold p-3 pt-4 ' >
            {name}
        </div>
        <div className='flex flex-col h-auto pl-3 pb-2 ' >
        <Rating SVGclassName={'inline-block'} size={20} allowFraction={true} readonly={true} initialValue={rating} />
        </div>
        <div className='text-muted-foreground pl-3 '  >
            ${price}
        </div>     
    </div>
  )
}

export default ProductCard