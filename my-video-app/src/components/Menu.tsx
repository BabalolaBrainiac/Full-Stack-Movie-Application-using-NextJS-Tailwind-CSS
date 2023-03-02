import Link from 'next/link'
import React from 'react'

export default function Menu(  menuProps: {menuTitle: string,  address: string, Icon: any } ) {
const {address, menuTitle, Icon} = menuProps
  return (
    <div>
        <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600" >   
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{menuTitle}</p>
        </Link>
    </div>
  )
}
