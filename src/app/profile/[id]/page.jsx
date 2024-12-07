import React from 'react'
import LeftMenu from '../../components/LeftMenu'
import RightMenu from '../../components/RightMenu'
import Post from '../../components/Post'

function ProfilePage() {
  return (
    <div className='flex gap-6 pt-6'>
      <div className='hidden xl:block w-[20%]'><LeftMenu /></div>
      <div className='lg:w-[70%] xl:w-[50%]'>
        <div className='flex flex-col gap-6'>
          <Post />
        </div>
      </div>
      <div className='hidden lg:block w-[30%]'><RightMenu userID= "test"/></div>
    </div>
  )
}

export default ProfilePage