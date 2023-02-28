import Link from 'next/link'
import React from 'react'

export default function Menu(  menuProps: {menuTitle: string,  address: string, Icon: any } ) {
const {address, menuTitle, Icon} = menuProps
  return (
    <div>
        <Link href={address}>  
        <Icon />
        <p className='text-red-600'>{menuTitle}</p>
        </Link>
    </div>
  )
}
