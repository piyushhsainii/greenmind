'use client'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { UserEmail} from './atoms/userAuth'
import jwt from 'jsonwebtoken'
const ProfileData = () => {
    const email = useRecoilValue(UserEmail)
    const decodedEmail = jwt.decode(email,process.env.SECRET_KEY)
    return (
    <div>This is USER's email {decodedEmail.email}</div>
  )
}

export default ProfileData