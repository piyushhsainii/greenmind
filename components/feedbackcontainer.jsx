import React from 'react'

import axios from 'axios'
import { url } from '@/lib/url'
import FeedbackCarousel from './feedbackCarousel'

const FeedBackContainer = async() => {
 
  const data = await apiHandler()
  return (
    <div className=''>
      <div className='text-xl font-bold m-9' >
        What customers say about <br></br> GREENMIND?
      </div>
     <div className='w-[90vw] h-[300px] m-auto text-black mb-20' >
        <div className='w-[90vw] m-auto  h-[500px] ' > 
          <FeedbackCarousel data={data}/>
        </div>
      </div>
    </div>
  )
}

export default FeedBackContainer

async  function apiHandler(){
  const { data } = await axios.get(`${url}/api/getFeedback`)
 return data
}