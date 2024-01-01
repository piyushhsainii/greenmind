import productModels from "@/Models/productModels"
import connectingDB from "@/database/database"

export  async function GET(request){
    await connectingDB()
    const defaultPage = request.nextUrl.searchParams.get('page')
    let skip = 0
    if(defaultPage > 1 ) {
        skip = (defaultPage-1)*6
    }   
    const products = await productModels.find().limit(6).skip(skip)

    return Response.json({
        success:true,
        products
    },
    {
        status:200
    }
    )

}