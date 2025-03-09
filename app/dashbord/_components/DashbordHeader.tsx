




import { UserDetailContext } from '@/app/_context/UserDetailContext'
import Image from 'next/image'
import React, { useContext } from 'react'


const DashbordHeader = () => {
const {userDetail,setUserDetail}=useContext(UserDetailContext)

  return (
    <div className='p-3  flex justify-between items-center w-full '>
    <h2 className='font-bold text-2xl'>My Stories</h2>
    <div className=' flex gap-3 items-center'>
      <Image src={'/coin/coin.png'} alt='coin' width={50} height={50} />
      <span className=' text-xl'>{userDetail?.credit}</span>
    </div>
  </div>
  )
}

export default DashbordHeader