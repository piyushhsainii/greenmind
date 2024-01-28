import React from 'react'
import { columns } from "../adminProducts/column";
const { DataTable } = require("../adminProducts/data-table");
import Sidebar from '@/components/Sidebar';
import axios from 'axios';
import { url } from '@/lib/url';
const page = async() => {
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