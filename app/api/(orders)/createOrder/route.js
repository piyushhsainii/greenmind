import { Order } from "@/Models/OrderModels"
import connectingDB from "@/database/database"


export async function POST(req){
    const {
        OrderItems,
        shippingDetails,
        user,
        itemPrice,
        taxPrice,
        shippingCharges,
        TotalAmount
    } = await req.json()
    await connectingDB()
  try {
    const order = await Order.create({
        OrderItems,
        shippingDetails,
        user,
        itemPrice,
        taxPrice,
        shippingCharges,
        TotalAmount
   })
   return Response.json({
    success:true,
    order
   })
  } catch (error) {
    console.log(error)
    return Response.json({
        success:false,
        message:error
    })
  }
}