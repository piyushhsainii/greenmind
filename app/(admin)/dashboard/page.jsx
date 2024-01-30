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
import Donut from '@/components/Donut';
import axios from 'axios';
import { url } from '@/lib/url';

const Dashboard = async() => {
  const data = await getData()
  return (
    <Fragment>
        <div className='flex' >
             <Sidebar/>         
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
                    <CardTitle>₹25,000</CardTitle>
                    <CardDescription>Total Revenue</CardDescription>
                  </CardHeader>
                
                </Card>
                </div>
          </div>
          <div className='flex  flex-col w-[30%] ' >
            <div className='text-center text-lg '> Product Stock </div>
            <Donut/>
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