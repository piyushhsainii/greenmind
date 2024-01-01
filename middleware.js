import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
import userModels from './Models/userModels';

export default async function  userAuth (request){
     const Token = (request.cookies?.get('token')?.value)
     try {
          const decode = jwt.verify(Token,process.env.SECRET_KEY)
          request.user = await userModels.findById(decode.id)
     } catch (error) {
          console.log(error,'error')
     }
     if(Token)  {
     return NextResponse.next()
     } 
     else {
          return Response.redirect( new URL('/',request.url))
     }
}
export const config = {
     matcher: '/auth',
   }
