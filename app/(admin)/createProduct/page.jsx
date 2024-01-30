import dynamic from 'next/dynamic'
const ProfileData = dynamic(()=>import('@/components/profileData'),{
  ssr:false
})
const ProfileDataFirstName = dynamic(()=>import('@/components/profileDataFirstName'),{
  ssr:false
})
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

const Page = () => {

  return (
    <div>
    <Card className="w-[350px] m-auto mt-4 border border-primary rounded-md">
      <CardHeader>
        <CardTitle>Create A Product</CardTitle>
        <CardDescription>GREENMIND</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Product Name</Label>
                <Input type="text" placeholder={'Enter Product name'} ></Input>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Product Description</Label>
                <Input  type="text" placeholder={'Enter Product Description'} ></Input>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Product Price</Label>
                <Input type="Number" placeholder={'Enter Product Price'} ></Input>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Product Images</Label>
                <Input type="File" placeholder={'Enter Product Description'} ></Input>
              </div>
              {/* dropdown */}
              {/* <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Product Images</Label>
                <Input type="File" placeholder={'Enter Product Description'} ></Input>
              </div> */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Product Stock</Label>
                <Input type="Number" placeholder={'Enter Product Stock'} ></Input>
              </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
       <Link href={'/updateProfile'}>  <Button >Update Profile </Button></Link>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Page



// 'use client'
// import { CldUploadWidget } from 'next-cloudinary';
// import React from 'react'

// const page = () => {


//   return (
//     <CldUploadWidget uploadPreset="ml_default">
//   {({ open }) => {
//     return (
//       <button onClick={() => open()}>
//         Upload an Image
//       </button>
//     );
//   }}
// </CldUploadWidget>
//   )
// }

// export default page