import React, { Fragment } from 'react'
import Section1 from '@/components/section1'
import Section2 from '@/components/section2'

const home = () => {
console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ,"lol")
console.log(process.env.STRIPE_SECRET_KEY ,"lol")
  return (
        <Fragment>
            <Section1/>
            <Section2/>
        </Fragment>
  )
}

export default home






