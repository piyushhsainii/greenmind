import { jwtVerify } from "jose";

export default async function  userAuth (request){
     const Token = (request.cookies?.get('token')?.value)
     const verified = Token && await jwtVerify(Token, new TextEncoder().encode(process.env.SECRET_KEY))
     console.log(verified)
     if(request.nextUrl.pathname.startsWith('/userAuth') && !verified){
       return 
     }
     if(!verified){
          return Response.redirect( new URL('/userAuth',request.url))
     }
     if(request.url.includes('/userAuth') && verified){
       return Response.redirect(new URL('/',request.url))
     }
 
}
export const config = {
     matcher: ['/auth','/shippingDetails', '/userAuth' ]
   }
