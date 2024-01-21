// import productModels from "@/Models/productModels"

// export async function POST(req){
//     try {
//         const { ID } = await req.json()
//     if(!ID){
//         return Response.json({
//             success:false,
//             message:"ID not found"
//         },
//         {
//             status:400
//         })
//     }
//     const userOrders = await productModels.find({user:ID})
//     if(!userOrders){
//         return Response.json({
//             success:true,
//             message:"No Orders Found"
//         },
//         {
//             status:200
//         })
//     }
//     return Response.json({
//         success:true,
//         userOrders
//     },
//     {
//         status:200
//     })
// } catch (error) {
//     console.log(error)   
//     return Response.json({
//         success:false,
//         message:error
//     })
// }
// }

import productModels from "@/Models/productModels";
import connectingDB from "@/database/database";

export async function POST(req) {
    await connectingDB()
  try {
    const { ID } = await req.json();

    if (!ID) {
      return new Response(
        JSON.stringify({ success: false, message: "ID not found" }),
        { status: 400 }
      );
    }

    const userOrders = await productModels.find({user:ID});

    if (!userOrders) {
      return new Response(
        JSON.stringify({ success: true, message: "No Orders Found" }),
        { status: 200 }
      );
    }

    return new Response(JSON.stringify({ success: true, userOrders }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}