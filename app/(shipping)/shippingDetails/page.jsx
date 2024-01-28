'use client'
import {UserProfile } from '@/components/atoms/userAuth';
import { paymentSetup } from '@/components/payment/stripe';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { url } from '@/lib/url';
import React, { Fragment, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/navigation';
const shippingDetails = () => {
  const navigation = useRouter()
  const userEmail =  useRecoilValue(UserProfile)
  const user = jwt.decode(userEmail, process.env.SECRET_KEY)
  let cartData
  let totalPrice
  const [Address, setAddress] = useState('')
  const [City, setCity] = useState('')
  const [PinCode, setPinCode] = useState('')
  const [phoneNo, setphoneno] = useState('')

  const proceedToPayment = async(e)=>{
    e.preventDefault();
    navigation.push('/checkOutPage')
    // const taxPrice = sessionStorage.getItem('OrderTax')
    // const itemPrice = sessionStorage.getItem('OrdersubTotal')
    // const TotalAmount = sessionStorage.getItem('OrderTax')
    // const shippingCharges = sessionStorage.getItem('DeliveryCharge')
    // if(!taxPrice || !itemPrice || !TotalAmount || !shippingCharges ){
    //     toast({
    //       description:"Please Add Items in your cart",
    //       variant:"custom"
    //     })
    //     window.location.href='/products'
    //   }  
    // try {
    //   const session = await paymentSetup({
    //     email:user.email,
    //     userId:"123",
    //     stripePriceId:"1234",
    //     product:`${cartData}00`
    //   });
 
    //   if (session ) {
    //     console.log(session)
    //     window.location.href = session.url.url ?? "/";
    //   }
    //   const cartItems = JSON.parse(localStorage.getItem('cartItem'))
    //   const userEmail = localStorage.getItem('userEmail')
    //   const OrderItems = [
    //     cartItems.map((item)=>(
    //       {
    //         name:item.name,
    //         price:item.price,
    //         quantity:item.qty,
    //         image:item.img[0],
    //         productID:item.id
    //       }
    //     ))      
    // ]
    //   const ShippingInfo={
    //     address:Address,
    //     city:City,
    //     PinCode:PinCode,
    //     phoneno:phoneNo
    //   }
    //   const user = jwt.decode(userEmail, process.env.SECRET_KEY)
    //   try {
    //     const { data } = await axios.post(`${url}/api/createOrder`,{
    //       OrderItems,
    //       shippingDetails:ShippingInfo,
    //       user,
    //       itemPrice,
    //       taxPrice,
    //       shippingCharges,
    //       TotalAmount
    //     })
    //   } catch (error) {
    //     throw new Error("Error creating an Order",error)
    //   }
    // } catch (err) {
    //   console.error('error',err);
    //   toast({
    //      description: "Something went wrong, please try again later.",
    //      variant:"custom"      
    //     });
    // }
  }
    if(typeof window!=='undefined'){
    cartData = Math.floor( JSON.parse(sessionStorage.getItem('OrderTotal')))
    console.log(cartData)
  }
  return (
    <Fragment>
      <div className='m-auto w-screen ' > 
        <TypographyH3/>
      </div>
     <form onSubmit={proceedToPayment} >
      <div className='w-[50%] flex-col m-auto justify-center '>
          <div className='w-[300px] my-4   m-auto' >
              <Input className='py-2' onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="Enter your address" required={true} ></Input>
          </div>
          <div className='w-[300px] my-4  m-auto' >
              <Input className='py-2'onChange={(e)=>setCity(e.target.value)} type="text" placeholder="Enter your City"required={true}  ></Input>
          </div>
          <div className='w-[300px] my-4  m-auto' >
              <Input className='py-2'onChange={(e)=>setPinCode(e.target.value)} type="text" placeholder="Pincode" required={true} ></Input>
          </div>
          <div className='w-[300px] my-4  m-auto' >
              <Input className='py-2'onChange={(e)=>setphoneno(e.target.value)}  type="text" placeholder="Enter Phone Number" required={true} ></Input>
          </div>
          <div className='w-[300px] my-4  m-auto' >
              <Button className='w-[300px]' type='submit'  >Proceed to Payment</Button>
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