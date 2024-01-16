import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
    //Details of product which is to ordered
    OrderItems:[
    {  
        name:{type:String,required:true},
        price:{type:String,required:true},
        quantity:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        product:{
            type:mongoose.Schema.ObjectId,
            ref:"product",
            required:true
        },
    }
    ],
    // Deatails of Shipping and Address
    shippingDetails:[{
        address:{type:String, required:true},
        city:{type:String, required:true},
        pincode:{type:String, required:true},
        phoneno:{type:String, required:true},
    }],
    user:[{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"user"
    }],
    itemPrice:{type:String,default:0},
    taxPrice:{type:String,default:0},
    shippingCharges:{type:String,default:0},
    TotalAmount:{type:String,default:0},
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

export const Order = mongoose.model("order",OrderSchema)