"use server"
import { absoluteUrl } from "@/lib/utils";
import { stripe } from "@/lib/stripe";

export const paymentSetup = async ({
  stripePriceId,
  email,
  userId,
  Amt,
  qty,
  product
}) => {
  console.log(product, 'stripe ka hu')
  const stripeSession = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/PaymentSuccess',
    cancel_url: 'http://localhost:3000/PaymentFailed',
    payment_method_types: ['card'],
    mode: 'payment',
    billing_address_collection: "auto",
    customer_email: email,
    line_items:[
      JSON.stringify(product.map((item)=>( 
        {
            price_data:{
                currency:"inr",
                unit_amount:item.price,
                product_data:{
                    name:"GreenMind"
                }
            },
            quantity:item.qty
        }
        )))
      ],
      metadata: {
        userId: userId,
      },
    });

  return { url: stripeSession.url };

}