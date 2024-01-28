'use client'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { UserProfile} from './atoms/userAuth'
import jwt from 'jsonwebtoken' 
const ProfileData = () => {
    const user = useRecoilValue(UserProfile)
    const decodedEmail = jwt.decode(user,process.env.SECRET_KEY)
    return (
    <div>This is USER's email {decodedEmail.user.email}</div>
  )
}

export default ProfileData