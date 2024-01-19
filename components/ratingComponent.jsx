'use client'
import React from 'react'
import { Rating } from 'react-simple-star-rating'

const RatingComponent = ({rating}) => {
  return (
    <Rating SVGclassName={'inline-block'} size={20} readonly={true}  allowFraction={true} initialValue={rating} />
  )
}

export default RatingComponent