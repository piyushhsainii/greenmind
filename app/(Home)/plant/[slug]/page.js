import axios from 'axios'
import React, { Fragment, Suspense } from 'react'
import { url } from '@/lib/url'
import dynamic from 'next/dynamic'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const AddToCartBtn = dynamic(()=>import("@/components/AddToCartBtn"),{
  ssr:false
})
const RatingComponent = dynamic(()=> import('@/components/ratingComponent'),{
  ssr:false
})

async function FetchingPlantInfo(props){
    const plantID =  props.params.slug
    try {
     const { data } = await axios.post(`${url}/api/getProductInfo`,{
        productID:plantID
       }) 
       return data
    } catch (error) {
      console.error('Error fetching plant details:', error);
      throw new Error('Could not fetch plant details. Please try again later.');
    }
 }

const page = async(props) => {
    const data = await FetchingPlantInfo(props)
  return (
    <Fragment>
      <div className='flex flex-row w-screen m-auto justify-center gap-12 flex-wrap' >
          <div className='h-[500px] min-w-[300px]'  >
            <Carousel className='h-[430px] min-w-[340px] m-auto  border-4 ' >
              <CarouselContent>
              {
              data.product.Img.map((product)=>(
                <CarouselItem  key={product._id} >
                    <img className='lg:h-[430px] lg:w-[400px] m-auto' src={product.url} ></img>           
                </CarouselItem>
                      ))
                      }
                    </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                </Carousel>       
          </div>
          <div className='min-w-[300px] border border-black m-4 mb-8' >
            <div className='lg:m-12  min-w-[400px] flex flex-col gap-3 mt-20 m-auto justify-center  ' >
              <div className='text-2xl' > {data.product.name}  </div>
              <div className=' text-muted-foreground'>{data.product.desc}   
                </div>
                <div >
                <RatingComponent rating={data.product.rating} />
                  </div>
              <div  className='text-xl' > ₹{data.product.price}</div>
              <div>
              <AddToCartBtn data={data.product} productID={props.params.slug} />
              </div>
            </div>
          </div>
      </div>
    </Fragment>
  )
}

export default page