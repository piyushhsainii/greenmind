import React, { Fragment } from 'react'
import Filter from '../../../components/filter'
import ProductList from '@/components/productList'


 const app = async(props ) => {
  return (
    <Fragment>
       <div className='w-[95vw] flex  ml-2 '  >
       <div 
          style={{border:"solid rgba(0, 0, 0, 0.250) 1px"}}
          className='w-[20%]  '
          >
          <Filter props={props.searchParams.page} category={props.searchParams.category} />
       </div>
        <div
        className='w-[80%] '          
        >
        <ProductList params={props.searchParams.page} category={props.searchParams.category} price={props.searchParams.price} />      
         </div>
      </div>
    </Fragment>
  )
}
export default app
