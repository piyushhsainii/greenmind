import React, { Fragment } from 'react'
import { Separator } from "@/components/ui/separator"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { url } from '@/lib/url'
import { Item } from '@radix-ui/react-radio-group'
import Link from 'next/link'


const OrderDetails = async({params}) => {
    const data = await getData(params.slug)
    console.log(data)
  return (
    <div className='flex gap-2' >
            <div className='m-4 w-[20%] ' >
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Your Order Details</h4>
                <p className="text-sm text-muted-foreground">
                    Manage your orders
                </p>
            </div>
            <Separator className="my-4" />
            <div className='text-sm' > <Link href={'/orders'}>Back</Link> </div>
             <Separator orientation="vertical" />
            </div>
            <div className=' w-[80%]' >
             <div className='' >
                <div className='' >
                <Card 
                className=" border-none"
                >
                        <CardHeader>
                            <CardTitle>Order Items</CardTitle>
                            <CardDescription>Manage and Track your Order</CardDescription>
                        </CardHeader>
                        
                        <CardContent>
                       {
                        data.userOrders.OrderItems.map((prod)=>(

                    <Fragment>
                <div className='flex justify-evenly m-2 border-slate-600 border-[0.5px] rounded-md '>
                    <div className=' p-2 m-2 inline-block' >             
                        <div className="grid w-full items-center gap-4">                     
                            <Fragment >
                            <div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name" className='text-md'>{prod.name} </Label>
                                    <Label htmlFor="name">{prod.TotalAmount}</Label>
                                    <Label htmlFor="name"> Quantity : {prod.quantity} </Label>
                                    <div> <img className='w-[200px] ml-5' src={prod.image} alt="" /> </div>
                                    </div>
                                </div>
                            </Fragment>
                            
                            <div>
                                Total Amount : {data.userOrders.TotalAmount}
                            </div>
                        </div>
                        <Separator className="my-4" />     
                        </div>
                          <Separator orientation="vertical" />
                                <div className='' >
                                    <Card className="w-[500px] border-none">
                                            <CardHeader>
                                                <CardTitle>Shipping Info</CardTitle>
                                                <CardDescription>Check your shipping Info</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                        <form>

                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">

                                {
                                    data.userOrders.shippingDetails.map((info)=>(
                                        <div key={info._id} >
                                            <Label key={info._id} htmlFor="name"> <b>Address :</b> { info.address }</Label> <br></br>
                                            <Label key={info._id} htmlFor="name"><b> City:</b>{ info.city }</Label> <br></br>
                                            <Label key={info._id} htmlFor="name"> <b>Pincode : </b> { info.pincode }</Label> <br></br>
                                            <Label key={info._id} htmlFor="name"><b> Phone Number :</b> { info.phoneno }</Label>
                                            <br></br>
                                            <br></br>

                                        </div>
                                    ))
                                }
                                <Label  htmlFor="name"><b> Order Date :</b> {data.userOrders.createdAt.slice(0, 10) }</Label>
                                    </div>
                                        </div>
                                        </form>
                                    </CardContent>
                                    </Card>
                                </div>     
                        </div>
                    </Fragment>                              
                        ))
                    }
                </CardContent>
                </Card>
             </div>
            </div>
             </div>
             </div>
  )
}

export default OrderDetails

async function getData(params){
    const { data } = await axios.post(`${url}/api/getOrderInfo`,{
        ID:params
    })
    return data
}