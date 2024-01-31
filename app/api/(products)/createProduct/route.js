import productModels from "@/Models/productModels";
import connectingDB from "@/database/database";
import cloudinary from 'cloudinary'

export async function POST(req){
    await connectingDB()
    try {  
    cloudinary.config({
        cloud_name:process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key:process.env.NEXT_PUBLIC_API_KEY,
        api_secret:process.env.NEXT_PUBLIC_SECRET_KEY
    })
    const {  name,desc,price,Img,category,stock,reviews,user,numofReviews} = await req.json()

        try {

           const UploadImage =  Img.map(async(img)=>(
            await cloudinary.uploader.upload(img,{
                upload_preset:"ml_default",
                folder:"plant_shop"
            })
           ))
           const ImagesArray = await Promise.all(UploadImage)
            if(ImagesArray){
                const product = await productModels.create({
                    name,
                    desc,
                    price,
                    Img:ImagesArray,
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
            }
        } catch (error) {
            return Response.json({
                success:false,
                message:"Something went wrong",error
            },{
                status:400
            })
        }

    } catch (error) {
     throw Error(error)
    }
}