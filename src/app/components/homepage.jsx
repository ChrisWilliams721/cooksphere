"use client";
import Link from 'next/link'
import React from 'react'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import AddPost from './AddPost'
import PostFeed from './Post'
import Post from './Post';

export default function Homepage() {
  return (
    <div className='flex gap-6 pt-6'>
      <div className='hidden xl:block w-[20%]'><LeftMenu type='home'/></div>
      <div className='lg:w-[70%] xl:w-[50%]'>
        <div className='flex flex-col gap-6'>
          <AddPost />
          <Post />          
        </div>
      </div>
      <div className='hidden lg:block w-[30%]'><RightMenu /></div>
    </div>
  )
}

