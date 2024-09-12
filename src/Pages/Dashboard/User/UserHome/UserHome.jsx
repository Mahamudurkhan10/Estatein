import React, { useContext } from 'react'
import { AuthContext } from '../../../../Components/Provider/AuthProvider'
import useUser from '../../../../Components/Hooks/useUser'

export default function UserHome() {
   const [User] = useUser()
   console.log(User);
  return (
    <div className=''>
      <div className="lg:flex  lg:w-1/2 mx-auto border-yellow-100 border-2 mt-5 p-5 gap-5 animate-pulse">
        <div className="mb-4 md:mr-6 md:mb-0">
          <img
            className="h-56 rounded-lg object-cover md:w-56"
            src={User?.photoURL}
            alt={User?.name}
          />
        </div>
        <div>
          <h1 className="text-xl text-white">Name: {User?.name}</h1>
          <h1 className="text-xl text-white">Email: {User?.email}</h1>
          <h1 className="text-4xl font-semibold text-center pt-5 text-[#703bf7]"> {User?.role} </h1>
        </div>
      </div>
    </div>
  )
}
