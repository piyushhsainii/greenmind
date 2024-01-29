"use client"
import React, { useEffect } from 'react'
import Logout from './logout'
import { useRecoilState, useRecoilValue } from 'recoil'
import { ToggleMode, UserEmail, UserProfile } from './atoms/userAuth'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { toast } from './ui/use-toast'


const headers = () => {
  return (
    <div className={`flex justify-between border overflow-hidden  top-0 relative `} >
        <div className='pl-5 pt-4 my-4 flex gap-4 sm:gap-10 md:gap-16 md:ml-7 ' >
          <div>
           <Link className='text-xl text-slate-700 ' href={'/'} onClick={()=>{
 
           }} >
          <div className=' font-[Quella] font-bold
           text-xl
           ' >GREENMIND</div>
           </Link>
          </div>
           <div className='sm:flex gap-7 font-sans font-medium hidden ' >
           <Link href={'/'}> Home</Link>
         
           <Link href={'/products'} > Products </Link>
           <Link href={'/contacts'} >Contacts </Link>
           </div> 
        </div>
        <Logout />
    </div>
  ) 
}

export default headers