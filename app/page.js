import Link from 'next/link'
import React from 'react'

export default function Root() {
  return (
    <main>
      <h1>Home</h1>
      <Link className='text-blue-500' href="./auth">Sign In</Link>
    </main>
  )
}

