import userModels from "@/Models/userModels";
import connectingDB from "@/database/database";

export async function POST(req){
    await connectingDB()
    const { userEmail } = await req.json()
    const user = await userModels.findOne({email:userEmail})
    if(!user){
        return Response.json({
            success:false,
            message:"User does not exist"
        },{
            status:400
        })
    }
    return Response.json({
        success:true,
        user
    },
    {
        status:200
    })
}