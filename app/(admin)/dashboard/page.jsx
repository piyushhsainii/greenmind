import React, { Fragment } from 'react'
import Sidebar from '@/components/Sidebar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  } from "@/components/ui/card"

const Dashboard = async() => {
  
  return (
    <Fragment>
        <div className='flex' >
             <Sidebar/>         
        <div className='w-[80%] border-[50%] border-l-0 border-slate-600 h-[100vh] '>
          <div className='flex justify-evenly flex-wrap' >
                  <div className='border=[0.88px] border-slate-400 mt-4 h-[150px]' >
                <Card>
                  <CardHeader>
                    <CardTitle>12</CardTitle>
                    <CardDescription>Total Customers</CardDescription>
                  </CardHeader>
                
                </Card>
                </div>
                <div className=' mt-4 h-[150px]' >
                <Card>
                  <CardHeader>
                    <CardTitle>20</CardTitle>
                    <CardDescription>Total Products</CardDescription>
                  </CardHeader>
                
                </Card>
                </div>
                <div  className=' mt-4 h-[150px]'>
                <Card>
                  <CardHeader>
                    <CardTitle>₹25,000</CardTitle>
                    <CardDescription>Total Revenue</CardDescription>
                  </CardHeader>
                
                </Card>
                </div>
          </div>
        </div>
        </div>
    </Fragment>
  )
}

export default Dashboard

