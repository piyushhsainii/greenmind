"use client"
import React, { Fragment, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { ToggleMode, userAuth } from './atoms/userAuth'
import { getCookie } from 'cookies-next'
import { CarTaxiFront, Menu, Moon, ShoppingCart, Sun, SunMedium, SunMoon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useToast } from "@/components/ui/use-toast"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import axios from 'axios'
import { useRouter } from 'next/navigation'


const logout = () => {

  const navigate = useRouter()
  const {toast} = useToast()
  const [ userLogin, setuserLogin ] = useRecoilState(userAuth)
  const [ loading, setLoading ] = useState(true)
  const [toggle, setToggle] = useRecoilState(ToggleMode) 

  const SignOutHandler = async()=>{
       try {
        const { data } = await axios.delete('http://localhost:3000/api/logout') 
        if(data.success){
          setuserLogin(false)
          toast({
            description: "Successfully signed out!",
            variant:"custom"
          })
          navigate.push('/')
        }
       } catch (error) {
        error && console.log(error)
        setuserLogin(true)
         toast({
          variant: "destructive",
          description: `${error.response.data.message}`,
        })
       }
     }
  

    const token = getCookie('token')
    
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const CART_ITEMS = JSON.parse(localStorage.getItem('cartItem'))
    console.log(CART_ITEMS,"cart tiems")
    useEffect(()=>{
      if(token){
        setLoading(false)
        setuserLogin(true)
      }else {
        setLoading(false)
        setuserLogin(false)
      }
      setMounted(true)
      
    },[userAuth ,toggle,theme , userLogin,token,CART_ITEMS ])

    if(!mounted){
      return null
    }
  return (
    <Fragment>
      <div className='sm:flex gap-7 p-3 md:mr-5 '>
            <div className='sm:flex sm:gap-7 pt-4  hidden ' >
               <div>
               <Sheet>     
                <SheetTrigger><ShoppingCart strokeWidth={1}  /></SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className='flex text-center justify-center gap-3'><ShoppingCart size={25} />CART</SheetTitle>
                    <SheetDescription >
                      {
                        CART_ITEMS?.map((item)=>(
                         <div className='flex gap-2 ' >
                           <div> <img className='h-[30px]' src={item.img} /> </div>
                           <div> {item.name} </div>
                           <div> {item.price} </div>
                           <div> {item.qty} </div>
                           <div> {item.qty * item.price} </div>
                         </div>
                        ))
                      }
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
            </Sheet>
              </div>
              <div>
              {
                theme==='light' ? 
                <Sun onClick={()=>{
                  setTheme("dark")
                  setToggle((prev)=>!prev)
                }
              } size={24} color="#000000" strokeWidth={1.5} absoluteStrokeWidth cursor={'pointer'} /> 
                :
                <Moon onClick={()=>{
                  setTheme("light")
                  setToggle((prev)=>!prev)
              }} size={24} color="#ffffff" strokeWidth={1.5} absoluteStrokeWidth cursor={'pointer'} /> 
             
             }
              </div>
           </div>
            <div className='sm:hidden flex gap-2 justify-center p-3 ' >            
              <div>
            {
              theme==='light' ? 
                <Sun onClick={()=>{
                  setTheme("dark")
                  setToggle((prev)=>!prev)
                }
              } size={24} color="#000000" strokeWidth={1.5} absoluteStrokeWidth cursor={'pointer'} /> 
                :
                <Moon onClick={()=>{
                  setTheme("light")
                  setToggle((prev)=>!prev)
              }} size={24} color="#ffffff" strokeWidth={1.5} absoluteStrokeWidth cursor={'pointer'} /> 
            }
            </div>
            
            <Sheet>
                <SheetTrigger> <Menu strokeWidth={1.75} /></SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle> <img src='/GREENMIND.png'className='md:min-w-[132px] md:min-h-[27px] sm:min-w-[100px] sm:min-h-[23px]  min-w-[90px] min-h-[18px] m-auto ' ></img> </SheetTitle>
                    <SheetDescription  >
                      <div className='flex flex-col m-auto gap-12 items-center justify-center mt-7' >
                     <div> <Link href='/' >Home</Link></div>
                     <div> <Link href='/products' >Products</Link></div>
                     <div> <Link href='/contacts' >Contact</Link></div>
                     <div> <Link href='/contacts' >
                          <div>
                          <ShoppingCart strokeWidth={1} />
                          </div></Link>
                      </div>
                      {
                      userLogin ? 
                      <div className='flex flex-col gap-14 items-center justify-center' >
                       <div> <Link href='/profile' >Profile</Link></div>                        
                       <div>
                        <Link href='#' onClick={SignOutHandler} >Sign out</Link>
                      </div>                        
                        </div>
                      : (
                        <div >
                        <Link href='/userAuth' > Log In</Link>                 
                          </div>
                      )
                      }
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>
          {
            loading ? null
           : (
          
             <div className='sm:flex  hidden' >
           {
            userLogin ? 
             ( <DropdownMenu >
              <DropdownMenuTrigger>
                 <Avatar className='w-[25px] h-[25px] mt-2 '>
                <AvatarImage  src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <Link href='/profile' className='cursor-pointer' > <DropdownMenuItem className='cursor-pointer' > Profile</DropdownMenuItem></Link>
                    <DropdownMenuSeparator />
                    <Link href='/orders' ><DropdownMenuItem className='cursor-pointer' > Orders</DropdownMenuItem></Link>
                    <DropdownMenuSeparator />
                    <Link href='#' className='cursor-pointer' onClick={SignOutHandler} ><DropdownMenuItem className='cursor-pointer' >Sign Out</DropdownMenuItem></Link>
                </DropdownMenuContent>
            </DropdownMenu>
            )
             : (
               <div>
               <Link href='/userAuth' > <Avatar  className='w-[25px] h-[25px] mt-4 ' >
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback> {null} </AvatarFallback>
              </Avatar>
              </Link>
               
                </div>
             )
            }
            </div>        
            )
          }
        </div> 
    </Fragment>
       )
      }

export default logout