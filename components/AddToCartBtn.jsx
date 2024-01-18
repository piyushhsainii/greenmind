'use client'
import { Minus, Plus } from 'lucide-react'
import React, { Fragment, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { CartItem } from './atoms/userAuth'
import { toast } from './ui/use-toast'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
const addToCartBtn = ({data}) => {
    const [counter, setcounter] = useState(1)
    const [ cartInfo , setCartInfo ] = useRecoilState(CartItem)
    const cartItems = {
        id:data._id,
        name:data.name,
        img:data.Img,
        price:data.price,
        qty:counter
        
    }
    let existingCartItems

    if (typeof window !== 'undefined') {
         existingCartItems = JSON.parse(localStorage.getItem('cartItem')) || [];
        
    }
    const cartItemHandler = ()=>{
        if(existingCartItems.length===0){
            toast({
                className:"bg-primary text-black ",
                description:"Added to Cart"
            })
            existingCartItems.push(cartItems)
            localStorage.setItem("cartItem",JSON.stringify(existingCartItems))
            setCartInfo(existingCartItems)
        } else {
            const cartCheck = existingCartItems.filter((item)=>item.id!==cartItems.id)
            cartCheck.push(cartItems)
            localStorage.setItem("cartItem",JSON.stringify(cartCheck))
            toast({
                className:"bg-primary text-black  ",
                description:"Added to Cart"
            })
            setCartInfo(cartCheck)
        }   
    }
    const productID = data._id
    const [name, setname] = useState('')
    const [Comment ,setComment] = useState('')
    const [ratings, setratings] = useState('')
    const productReviews = {
        name,
        Comment,
        ratings
    }
    const reviewHandler= async()=>{
        const { data:data3} = await axios.post('/api/addReview',{
            productID ,productReviews
        })
        console.log(data3,'this is fromr eview handler')
    }
        useEffect(()=>{

        },[cartItemHandler])
  return (
    <Fragment>
    <div className='flex flex-col gap-12 ' style={{userSelect:"none"}}   >
    <div className='flex' >
        <div className='cursor-pointer' onClick={()=>{if(counter>1){setcounter(counter - 1)}}} >
            <Minus/>
        </div>
        <div className='px-5 font-bold disabled: ' >
            {counter}
        </div>
        {/* add condition to compare stock w counter */}
        <div className='cursor-pointer' onClick={()=>{setcounter(counter + 1)}} >
        <Plus/>
        </div>
    </div>
    <div  className='text-md h-[10px] flex  gap-4' >
        <div>
        <button className='bg-primary py-2 px-4 rounded-sm '  onClick={cartItemHandler}  > Add to Cart </button>
        </div>
         <div>
        <Dialog>
            <DialogTrigger>
            <button className='bg-primary py-2 px-4 rounded-sm '  >
                    Add a review
            </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Add a Review</DialogTitle>
                {/* limit chars to 311 */}
                <DialogDescription>
                     <div className='flex-col m-auto' >
                        <div><textarea className='h-[140px] mt-12 w-[100%] p-2' placeholder='Add a Review' name="review" style={{resize: "none"}}id="" cols="10" rows="10">
                        </textarea></div>
                        <div>
                        <button className='bg-primary py-2 px-4 rounded-sm text-black ' onClick={reviewHandler}  > Submit Review </button>
                        </div>
                     </div>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
      
    </div>
     </div>
    </div>
    <div className='h-[30vh] w-[30vw]  border-black border-2 mt-12' >
    <Carousel className='w-[100%]' >
        <CarouselContent>
            <CarouselItem>
                <div>User1</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum eveniet explicabo odio consectetur ab possimus aliquam quod dolorem aut!</CarouselItem>
            <CarouselItem>
               <div>User1</div>       
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum eveniet explicabo odio consectetur ab possimus aliquam quod dolorem aut!</CarouselItem>
            <CarouselItem>
                 <div>User1</div>  
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dolorum esse quia ea ipsum quos fugiat saepe voluptate fuga repellendus eligendi natus vel quam molestiae enim, iusto, placeat est ad reiciendis ducimus, voluptas obcaecati. Sed hic neque veniam porro molestias voluptate nisi nemo quam quaerat quas, vero alias ducimus nobis.
                </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel> 

    </div>
    </Fragment>

  )
}

export default addToCartBtn