import { Label } from '@/components/ui/label'
import { Hand } from 'lucide-react'
import React, { Fragment } from 'react'
import Link from 'next/link'
import FeedBackForm from '@/components/feedBackForm'



const Contacts = () => {

  return (
    <Fragment>
        <div className='max-w-[1000px] border-slate-700 border-opacity-40 border-[0.2px] rounded-md m-auto mt-6 ' >
            <div className='text-3xl font-bold sm:ml-24 m-4 mt-12' >
                Love to hear from you, 
               <div className='flex items-center gap-2'> <div>Get in touch</div> <span> <Hand  /></span></div>
                <div  className='text-sm font-medium'>
                    Share your experience with GREEMIND
                </div>
            </div>
            <div className='flex flex-col justify-center sm:justify-center sm:m-auto sm:flex-row mt-8' >
            <div className='w-[400px] m-auto ' >
                <FeedBackForm/>
            </div>
            <div className=' m-auto sm:m-4 sm:mt-0 my-6 pb-6' >                
               <div> <Label htmlFor="name" className=' font-[Quella] font-semibold text-lg' > GREENMIND </Label></div>
                <div>
                <Label htmlFor="name" >  Developed by -  <Link className='underline' target='blank' href={'https://github.com/piyushhsainii'}>Piyush Saini</Link> </Label>
                </div>
                <div>
                <Label htmlFor="name" >  &copy;  2024 all Rights Reserved Term of use GREENMIND  </Label>
                </div>
            </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Contacts