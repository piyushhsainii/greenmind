import React from 'react'
import { columns } from "./column";
const { DataTable } = require("./data-table");
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import axios from 'axios';
import { url } from '@/lib/url';
const page = async({searchParams}) => {
    const data = await getData();
  return (
        <div>
        <div className='flex' >
        <Sidebar />
            <div className='w-[80%] border border-black h-[100vh] ' >
                 <DataTable columns={columns} data={data} />
            </div>
        </div>
    </div>
  )
}

export default page

async function getData() {
    const { data } = await axios.get(`${url}/api/getAllUsers`) 
     return data.user.map(item=>(
      {id:item._id,
      name:item.name,
      email:item.email,
      admin:item.admin,
    }
      ))
    
  }