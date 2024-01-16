"use client"
import React, { useEffect } from 'react'
import Logout from './logout'
import { useRecoilState } from 'recoil'
import { ToggleMode } from './atoms/userAuth'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { toast } from './ui/use-toast'

const headers = () => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
 const [toggle,setToggle] =  useRecoilState(ToggleMode)
  useEffect(()=>{
  },[toggle])

  return (
    <div className={`flex justify-between border-2 overflow-hidden  top-0 relative `} >
        <div className='pl-5 pt-4 my-4 flex gap-4 sm:gap-10 md:gap-16 md:ml-7 ' >
          <div>
           <Link className='text-xl ' href={'/'} onClick={()=>{
 
           }} >
            <img
            className='lg:ml-12 md:min-w-[125px] md:min-h-[22px] sm:min-w-[100px] sm:min-h-[23px]  min-w-[90px] min-h-[18px]'
            alt="Picture of the author"
            src='/GREENMIND.png'
            >
            </img>
           </Link>
          </div>
           <div className='sm:flex gap-7 font-sans font-medium hidden ' >
           <Link href={'/'} className={`${pathname==='/'?  'font-bold' :'' }`} > Home</Link>
           <Link href={'/products'} className={`${pathname==='/products'?  'font-bold' :'' }`} > Products </Link>
           <Link href={'/contacts'} className={`${pathname==='/contacts'?  'font-bold' :'' }`} >Contacts </Link>
           </div> 
        </div>
        <Logout />
    </div>
  ) 
}

export default headers