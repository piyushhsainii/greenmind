import  userModel  from '../../../Models/userModels';
import connectingDB from '../../../database/database';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { z} from 'zod'
const jwt = require('jsonwebtoken')
export async function POST(request) {

  const schema = z.object({
    email: z.string().email(),
    password:z.string().min(6)
  })

  await connectingDB();
  try {
    const { email, password } = await request.json();
    if (email==='' || password==='') {
      return  Response.json({
        success: false,
        message: 'Fill all required details',
      },
      {
        status: 400,
      });
    }

    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return  Response.json({
        success: false,
        message: 'User Email already exists',
      },
      {
        status: 400,
      });
    }

    const HashedPassword = await bcrypt.hash(password, 10);

    const data = {
      email,password
    }
    //checking if data is correct
    const userv2 = schema.safeParse(data)
    //will data is not correct , 400 status code is thrown
    if(!userv2.success){
     return Response.json({
        message:userv2.error.issues[0].message
     },
     {
      status:400
     }
     ) 
    }
    const user = await userModel.create({
      email,
      password: HashedPassword,
    });
    const jwt_token = jwt.sign({id:user._id}, process.env.SECRET_KEY, {
      expiresIn:process.env.JWT_EXPIRE
    })
    cookies().set('token', jwt_token ,{ secure:true })
    return Response.json({
      success: true,
      user,
    },
    {
      status: 200,
    });

  } catch (error) {
    return  Response.json({     
      success: false,
      message: error,
    },
    {
      status: 400,
    });
  }
} 
