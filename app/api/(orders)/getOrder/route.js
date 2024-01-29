import { Order } from "@/Models/OrderModels";
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

    const userOrders = await Order.findById(ID);

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