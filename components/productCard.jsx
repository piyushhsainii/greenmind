'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const ProductCard = ({_id,img,name,price,plant}) => { 
    const navigate = useRouter()

    const onClickHandler = ()=>{
      navigate.push(`/plant/${plant._id}`)
  }

  return (
    <div className=' border-[3px] w-[330px] m-2  p-2 ' onClick={onClickHandler} >
        <Link
        href='#'>
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
        </Link>
    </div>
  )
}

export default ProductCard