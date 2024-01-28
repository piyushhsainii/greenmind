import React, { Fragment } from 'react'
import { columns } from "./column";
const { DataTable } = require("./data-table");

const Dashboard = async() => {
    const data = await getData();
    
  return (
    <Fragment>
        <div className='flex' >
            <div className='w-[20%] border border-black h-[100vh]' >
                
            </div>
            <div className='w-[80%] border border-black h-[100vh] ' >
                 <DataTable columns={columns} data={data} />
            </div>
        </div>
    </Fragment>
  )
}

export default Dashboard

async function getData() {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "728ed52f",
        amount: 100,
        status: "status",
        email: "m@example.com",
      },
    ];
  }