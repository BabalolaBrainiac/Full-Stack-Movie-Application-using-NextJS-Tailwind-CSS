import Link from 'next/link'
import React from 'react'

export default function Menu( {menuTitle,  address, Icon}: any  ) {
  return (
    <div>
        <Link href={address}>  
        <Icon />
        <p className='text-red-600'>{menuTitle}</p>
        </Link>
    </div>
  )
}
