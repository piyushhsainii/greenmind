'use client'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { url } from '@/lib/url'
import { useToast } from './ui/use-toast'

const FeedBackForm = () => {
    const{toast} = useToast()
    const [Name, setName] = useState('')
    const [Feedback, setFeedback] = useState('')

    const submitFeedbackHandler = async(E)=>{
        E.preventDefault()
        const  {  data } = await axios.post(`${url}/api/feedback`,{
                name:Name, feedback:Feedback
        })
           if(data && data.success === true){
            toast({
                description:"Feedback Submitted Successfully",
                variant:"custom"
            })
        }   
    }

  return (
        <div >
              <div className='m-3' >
                <Label htmlFor="name"> Your Name </Label> <br></br>
                <Input type="text" onChange={(e)=>setName(e.target.value)}  placeholder="Enter your Name"/>
             </div>
            <div className='m-3'>
              <Label htmlFor="name"> Share your Feedback</Label> <br></br>
             <Textarea className='resize-none' onChange={(e)=>setFeedback(e.target.value)} placeholder="Share your Feedback" /> <br></br>
             <div className='mb-12'> <Button onClick={submitFeedbackHandler} className='w-[100%]'>SUBMIT FEEDBACK</Button></div>
           </div>
        </div>
  )
}

export default FeedBackForm