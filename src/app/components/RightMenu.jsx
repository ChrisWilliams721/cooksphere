import React from 'react'
import FriendRequest from './FriendRequest'
import UserInfoCard from './UserInfoCard'

const RightMenu = ({userId}) => {
  return (
    <div className='flex flex-col gap-6'>
      {userId ? (<>
      <UserInfoCard userId={userId}/>
      </>) : null}
      <FriendRequest />
      
    </div>
  )
}

export default RightMenu