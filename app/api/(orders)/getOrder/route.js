import productModels from "@/Models/productModels"

export async function POST(req){
    try {
        const { ID } = await req.json()
    if(!ID){
        return Response.json({
            success:false,
            message:"ID not found"
        },
        {
            status:400
        })
    }
    const userOrders = await productModels.find({user:ID})
    if(!userOrders){
        return Response.json({
            success:true,
            message:"No Orders Found"
        },
        {
            status:200
        })
    }
    return Response.json({
        success:true,
        userOrders
    },
    {
        status:200
    })
} catch (error) {
    console.log(error)   
    return Response.json({
        success:false,
        message:error
    })
}
}