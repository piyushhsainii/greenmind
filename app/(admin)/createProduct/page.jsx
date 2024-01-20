'use client'
import { CldUploadWidget } from 'next-cloudinary';
import React from 'react'

const page = () => {


  return (
    <CldUploadWidget uploadPreset="ml_default">
  {({ open }) => {
    return (
      <button onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
  )
}

export default page