import React from 'react'
import { columns } from "./column";
const { DataTable } = require("./data-table");
import Sidebar from '@/components/Sidebar';
import axios from 'axios';
import { url } from '@/lib/url';
const page = async() => {
    const data = await getData();

    return (
      <div>
      <div className='flex' >
      <Sidebar />
          <div className='w-[80%] border-[50%] mt-2 border-slate-600 h-[100vh] ' >
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