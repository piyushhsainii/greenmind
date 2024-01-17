'use client'
import { UserEmail } from '@/components/atoms/userAuth';
import { paymentSetup } from '@/components/payment/stripe';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import React, { Fragment, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';

const shippingDetails = () => {
  const userEmail =  useRecoilValue(UserEmail)
  let totalPrice
  let newPrice
  let Quantity
  let jsonString
  console.log( userEmail, "lol")
  console.log(userEmail,'jsad')
  const proceedToPayment = async(e)=>{
    e.preventDefault();
    try {
      const session = await paymentSetup({
        email:'userEmail@gmail.com',
        userId:"123",
        stripePriceId:"1234",
        Amt:newPrice*100,
        qty:Quantity,
        product:totalPrice
      });
      if (session) {
        window.location.href = session.url ?? "/dashboard/billing";
      }
    } catch (err) {
      console.error('error',err);
      toast({
         description: "Something went wrong, please try again later.",
         variant:"custom"      
        });
    }
  }
  if(typeof window!=='undefined'){
  totalPrice = JSON.parse(localStorage.getItem('cartItem'))
  console.log(totalPrice)
  // newPrice = totalPrice.reduce((acc,item)=>acc+item.price,0)
  const result = totalPrice.map((item) => (
    {
      price_data: {
        currency: "inr",
        unit_amount: item.price,
        product_data: {
          name: 'GreenMind'
        }
      },
      quantity: item.qty
    }
  ));
  
   jsonString = JSON.stringify(result).slice(1, -1);
  // console.log(jsonString,'check kar');
  //  Quantity = totalPrice.reduce((acc,item)=>acc + item.qty,0)
  }
  return (
    <Fragment>
      <div className='m-auto w-screen ' > 
        <TypographyH3/>
      </div>
     <form action="">
      <div className='w-[50%] flex-col m-auto justify-center '>
          <div className='w-[300px] my-4   m-auto' >
              <Input className='py-2' type="text" placeholder="Enter your address" required={true} ></Input>
          </div>
          <div className='w-[300px] my-4  m-auto' >
              <Input className='py-2' type="text" placeholder="Enter your City"required={true}  ></Input>
          </div>
          <div className='w-[300px] my-4  m-auto' >
              <Input className='py-2' type="text" placeholder="Pincode" required={true} ></Input>
          </div>
          <div className='w-[300px] my-4  m-auto' >
              <Input className='py-2' type="text" placeholder="Enter Phone Number" required={true} ></Input>
          </div>
          <div className='w-[300px] my-4  m-auto' >
              <Button className='w-[300px]' onClick={proceedToPayment} >Proceed to Payment</Button>
          </div>
        </div>
     </form>
    </Fragment>
  )
}

export default shippingDetails

export function TypographyH3() {
  return (
    <h2 className="scroll-m-20 w-[50%] m-auto text-center p-5 text-2xl md:text-2xl lg:text-3xl tracking-tight font-bold">
      Shipping Details
    </h2>
  )
}