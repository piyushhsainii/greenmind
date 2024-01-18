import productModels from "@/Models/productModels";
import connectingDB from "@/database/database";

export async function POST(req){
    await connectingDB()
    try {  
    const {  name,desc,price,Img,category,stock,reviews,user,numofReviews} = await req.json()
    const product = await productModels.create({
        name,
        desc,
        price,
        Img,
        numofReviews,
        category,
        stock,
        reviews,
        user
    })
    return Response.json({
        success:true,
        product
    },
    {
        status:200
    }) 
    } catch (error) {
     throw Error(error)
    }
}