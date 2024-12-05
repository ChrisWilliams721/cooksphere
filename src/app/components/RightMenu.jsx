import React from 'react'
import FriendRequest from './FriendRequest'

const RightMenu = ({userId}) => {
  return (
    <div className='flex flex-col gap-6'>
      <FriendRequest />
      
    </div>
  )
}

export default RightMenu