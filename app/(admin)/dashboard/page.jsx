import React, { Fragment } from 'react'
import Sidebar from '@/components/Sidebar';
const Dashboard = async() => {
    
  return (
    <Fragment>
        <div className='flex' >
             <Sidebar/>         
        <div className='w-[80%] border border-black h-[100vh]'>

        </div>
        </div>
    </Fragment>
  )
}

export default Dashboard

