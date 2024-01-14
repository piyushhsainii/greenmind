'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const ProductCard = ({_id,img,name,price,plant}) => { 
    const navigate = useRouter()

    const onClickHandler = ()=>{
    //   console.log('adda')
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
        <div className='text-muted-foreground pl-3 '  >
            ${price}
        </div>     
    </div>
  )
}

export default ProductCard