import userModels from "@/Models/userModels";

export async function GET(){
    const user = await userModels.find()
    if(!user){
       return  Response.json({
            success:false,
            message:"Something went wrong"
        })
    }
    return Response.json({
        succesS:true,
        user
    },
    {
        status:200
    })
}