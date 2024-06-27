import React from 'react'
import Auth from '../../../components/AuthForm'
import { auth } from '@/auth'
async function page() {
  const session=await auth();
  return (
    <div>
      <Auth session={session}/>
    </div>
  )
}

export default page