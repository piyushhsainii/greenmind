import userModels from "@/Models/userModels"

export async function POST(req){
    const id = await req.json()
    const userInfo = await userModels.findById({id})
    if(!userInfo){
      return  Response.json({
            success:false,
            message:"User does not exist"
        })
    }
    return Response.json({
        succcess:true,
        user:userInfo,
        message:"User Details"
    })
}