import axios from 'axios'
import React, { Fragment } from 'react'
import AddToCartBtn from '@/components/AddToCartBtn'

async function FetchingPlantInfo(props){
    const plantID =  props.params.slug
    try {
     const { data } = await axios.post('http://localhost:3000/api/getProductInfo',{
        productID:plantID
       })
       return data
    } catch (error) {
      console.error('Error fetching plant details:', error);
      throw new Error('Could not fetch plant details. Please try again later.');
    }
 }



const page = async(props) => {
    const data = await FetchingPlantInfo(props)
  return (
    <Fragment>
      <div className='flex flex-row w-screen m-auto justify-center gap-16' >
          <div className='lg:h-[500px] w-[50%] m-auto'  >
              <img className='lg:h-[430px] lg:w-[400px] m-auto lg:ml-60 mt-16  border-4 ' src={data.product.Img} > 
              </img>
          </div>
          <div className='w-[50%]' >
            <div className='lg:ml-12 m-4 w-[400px] flex flex-col gap-3 mt-20 justify-center  ' >
              <div className='text-4xl' > {data.product.name}  </div>
              <div className=' text-muted-foreground'>{data.product.desc}   
                </div>
              <div  className='text-xl' > ₹{data.product.price}</div>
              <div>
              <AddToCartBtn data={data.product} />
              </div>
            </div>
          </div>
      </div>
    </Fragment>
  )
}

export default page