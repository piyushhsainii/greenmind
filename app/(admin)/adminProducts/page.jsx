import React from 'react'
import { columns } from "../adminProducts/column";
const { DataTable } = require("../adminProducts/data-table");
import Sidebar from '@/components/Sidebar';
import axios from 'axios';
import { url } from '@/lib/url';
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
import { Menu } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'


const page = async() => { 
    const data = await getData();
  return (
        <div>
        <div className='flex  flex-col sm:flex-row ' >
        <div className='sm:hidden  ' >
              <Sheet >
              <SheetTrigger >
                <Button variant="outline"> <Menu /> </Button>
              </SheetTrigger>
              <SheetContent side={'left'}>  
              <SheetHeader>

              <SheetDescription>
                      <div className='w-[100%] m-auto  border-[50%] border-slate-600 h-[100vh]' >
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
            <div className='w-[100%] border border-black  ' >
                 <DataTable columns={columns} data={data} />
            </div>
        </div>
    </div>
  )
}

export default page

async function getData() {

    const { data } = await axios.get(`${url}/api/adminallProducts`) 
     return data.products.map(item=>(
      {id:item._id,
      name:item.name,
      stock:item.stock,
      rating:item.rating,
      category:item.category,
      price:item.price}
      ))
    
  }