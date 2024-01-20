import React, { Fragment } from 'react'
import { 
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import axios from 'axios'
import { NEXT_URL } from '../utils/url'
  
async function fetchRandomPlants (){
  const { data } = await axios.get(`${NEXT_URL}/api/FetchFeaturedPlants`)
  return data
}


const Section2 = async() => {
  const  data  = await fetchRandomPlants()
  return (
    <Fragment>
        <div className='w-[85vw]  m-auto mb-5 flex-col  md:flex md:flex-row  '  >
                <div className='lg:w-[20%] flex flex-col w-[300px] m-auto md:m-0 p-8 pr-0 gap-8 ' >
                    <div>
                      <TypographyH3/>
                    </div>
                    <div className='' >
                        <p className='text-muted-foreground w-[250px] ' >
                            Easiest wasy to healthy life by buying your favourite plants
                        </p>
                    </div>
                    <div className='flex bg-[#C1DCDC] w-[130px] p-3 gap-1 justify-between ' >
                        <div className='text-black' >
                           <Link href={'/products'} > See More</Link>
                        </div>
                        <div>
                        <Link href={'/products'} ><MoveRight strokeWidth={1} color='#000000' /></Link>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[85%] mt-4 ' >
                  {
                    data.product.length===0 ?
                      <div className='m-auto text-center flex justify-center items-center ' >No Product Found</div>
                      :
                <Carousel className='w-[60%] m-auto  ' >
                    <CarouselContent  >
                        {                        
                        data.product?.map((item)=>(
                          <CarouselItem key={item._id} className='basis-2/3 w-[200px]  ' >
                            <img src={item.Img[0].url} className='w-[350px]  md:h-[279px] lg:h-[357px]  ' alt="" />
                            <div className=' font-bold p-4 pb-2 ' >{item.name}</div>
                            <div className=' text-muted-foreground p-4 pt-0'> {item.price}</div>
                            </CarouselItem>
                        )) }                    
                    </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                </Carousel>
                    }
                </div>
        </div>
    </Fragment>
  )
}

export default Section2

export function TypographyH3() {
    return (
      <h2 className="scroll-m-20 text-2xl md:text-2xl lg:text-3xl tracking-tight font-bold">
        Best Selling Plants
      </h2>
    )
  }