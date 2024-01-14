"use server"
import { absoluteUrl } from "@/lib/utils";
import { stripe } from "@/lib/stripe";

export const paymentSetup = async ({
  stripePriceId,
  email,
  userId,
}) => {


  const stripeSession = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/PaymentSuccess',
    cancel_url: 'http://localhost:3000/PaymentFailed',
    payment_method_types: ['card'],
    mode: 'payment',
    billing_address_collection: "auto",
    customer_email: email,
    line_items:[
      {
          price_data:{
              currency:"inr",
              unit_amount:20.00,
              product_data:{
                  name:"MyStore"
              }
          },
          quantity:20
      }
  ],
    metadata: {
      userId: userId,
    },
  });

  return { url: stripeSession.url };
}