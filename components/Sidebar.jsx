import Link from 'next/link'
import React, { Fragment } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const Sidebar = () => {
  return (
  <Fragment>
      <div className='w-[20%] border border-black h-[100vh]' >
        <div  className='font-bold m-2 px-[1.5]' > <Link href={'/dashboard'} >Dashboard</Link> </div>
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
            </div><section></section>
        <div className='px-2' >
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                <AccordionTrigger> User</AccordionTrigger>
                <AccordionContent>
                <Link href={'/adminUsers'} >All Users</Link>
                </AccordionContent>
                <AccordionContent>
                <Link href={'/createProduct'} ></Link>
                </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        <div className='px-2'  >
        <Accordion className='my-2'>
            <AccordionItem>
            <AccordionTrigger> Orders</AccordionTrigger>
            <AccordionItem value="item-1">
            <AccordionContent>
                <Link href={'/Orders'} >Orders</Link>
                </AccordionContent>
            </AccordionItem>
            </AccordionItem>
        </Accordion>
        </div>
        </div>
    </Fragment>
  )
}

export default Sidebar