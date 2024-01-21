import dynamic from 'next/dynamic'
const ProfileData = dynamic(()=>import('@/components/profileData'),{
  ssr:false
})
import React from 'react'

const Page = () => {
  return (
    <div>
        <ProfileData />
    </div>
  )
}

export default Page