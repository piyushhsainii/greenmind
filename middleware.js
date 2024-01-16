import { jwtVerify } from "jose";

export default async function  userAuth (request){
     const Token = (request.cookies?.get('token')?.value)
     if(!Token){
      return Response.redirect( new URL('/userAuth',request.url))
     }
     const verified = await jwtVerify(Token, new TextEncoder().encode(process.env.SECRET_KEY))
     if(!verified){
          return Response.redirect( new URL('/userAuth',request.url))
     }
     if(request.nextUrl.pathname.startsWith('/userAuth') && !verifiedToken){
       return 
     }
     if(request.url.includes('/userAuth') && verifiedToken){
       return Response.redirect(new URL('/',request.url))
     }
 
}
export const config = {
     matcher: ['/auth','/shippingDetails']
   }
