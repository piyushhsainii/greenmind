import React, { Fragment } from 'react'
import Sidebar from '@/components/Sidebar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  } from "@/components/ui/card"
  import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Donut from '@/components/Donut';
import axios from 'axios';
import { url } from '@/lib/url';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Menu } from 'lucide-react';

const Dashboard = async() => {
  const data = await getData()
  const TotalRevenue = data.RevenueGenerator.reduce((acc,item)=> acc+ item.TotalAmount,0)

  return (
    <Fragment>
        <div className='flex flex-col sm:flex-row ' >
              <div className='sm:hidden' >
                  <Sheet >
              <SheetTrigger >
                <Button variant="outline"> <Menu /> </Button>
              </SheetTrigger>
              <SheetContent side={'left'}>  
              <SheetHeader>

              <SheetDescription>
                      <div className='w-[100%]  border-[50%] border-slate-600 h-[100vh]' >
                <div  className='font-bold m-2 px-[1.7]' > <Link href={'/dashboard'} >Dashboard</Link> </div>
                <hr></hr>
                <div className='px-2' >
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                        <AccordionTrigger> Products</AccordionTrigger>
                        <AccordionContent>
                        <Link href={'/adminProducts'} >All Products</Link>
                        </AccordionContent>
                        <AccordionContent>
                        <Link href={'/createProduct'} >Create Product</Link>
                        </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    </div>
                <div className='px-2' >
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                        <AccordionTrigger> User</AccordionTrigger>
                        <AccordionContent>
                        <Link href={'/adminUsers'} >All Users</Link>
                        </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='px-2'  >
                <Accordion type="single" collapsible className='my-2'>
                    <AccordionItem value="item-1">
                    <AccordionTrigger> Orders</AccordionTrigger>
                    <AccordionContent>
                        <Link href={'/adminOrders'} >Orders</Link>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </div>
                </div>        
                </SheetDescription>     
              </SheetHeader>
                  <SheetClose >
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
              </SheetContent>
            </Sheet>
              </div>
              <Sidebar /> 
        <div className='w-[80%] border-[50%] border-l-0 border-slate-600 h-[100vh] '>
          <div className='flex justify-evenly flex-wrap' >
                  <div className='border=[0.88px] border-slate-400 mt-4 h-[150px]' >
                <Card>
                  <CardHeader>
                    <CardTitle>{ data.userCount} </CardTitle>
                    <CardDescription>Total Customers</CardDescription>
                  </CardHeader>
                
                </Card>
                </div>
                <div className=' mt-4 h-[150px]' >
                <Card>
                  <CardHeader>
                    <CardTitle> {data.ProductCount}  </CardTitle>
                    <CardDescription>Total Products</CardDescription>
                  </CardHeader>
                
                </Card>
                </div>
                <div  className=' mt-4 h-[150px]'>
                <Card>
                  <CardHeader>
                    <CardTitle>₹{TotalRevenue.toFixed(2)}</CardTitle>
                    <CardDescription>Total Revenue</CardDescription>
                  </CardHeader>
                
                </Card>
                </div>
          </div>
          <div className='flex  flex-col w-[250px] m-auto ' >
            <div className='text-center text-lg '> Product Stock </div>
            <Donut className='w-[230px]'/>
            </div>
        </div>
        </div>
    </Fragment>
  )
}

export default Dashboard

export async function getData(){
  const { data } = await axios.get(`${url}/api/docCount`)
  return data
}