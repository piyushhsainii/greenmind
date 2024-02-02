import { Feedback } from "@/Models/FeedBackModel"

export async function GET(){
    const feedback = await Feedback.find()

    if(!feedback){
        return Response.json({
            success:false,
            message:'Something went wrong'
        },{
            status:400
        })
    }
    return Response.json({
        success:true,
        feedback
    },{
        status:200
    })
}