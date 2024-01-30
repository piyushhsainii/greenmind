import productModels from "@/Models/productModels";
import userModels from "@/Models/userModels";

export async function GET(){
    const userCount = await userModels.countDocuments()
    if(!userCount){
        return Response.json({
            success:false,
            message:"Something went wrong"
        })
    }
    const ProductCount = await productModels.countDocuments()
    if(!ProductCount){
        return Response.json({
            success:false,
            message:"Something went wrong"
        })
    }
    return Response.json({
        success:true,
        userCount,
        ProductCount
    })
}