"use client"
import CheckoutPageComponent from '@/components/CheckoutPageComponent'
import React, { Fragment } from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51O53Q3SJW60CFH2vz9lxzAToslro9gX2762cFIGO50kMo0vOxZq0GCKeIiBRh4W0c2AU1VvzvOURFwAjcwsS5YvU00WH9f7Pa1')
const CheckOutPage = () => {
    const options = {
        mode: 'payment',
        amount: 1099,
        currency: 'usd',
      };
  return (
    <Fragment>
         <Elements stripe={stripePromise} options={options}>
            <CheckoutPageComponent/>
         </Elements>
    </Fragment>
    )
}

export default CheckOutPage