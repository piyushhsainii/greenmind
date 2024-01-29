import { Order } from "@/Models/OrderModels";

export async function GET(){
    const  data  = await Order.find()
    if(!data){
        return Response.json({
            success:false,
            message:"Something went wrong"
        },{
            status:400
        })
    }
    return Response.json({
        success:true,
        data
    },{
        status:200
    })
}