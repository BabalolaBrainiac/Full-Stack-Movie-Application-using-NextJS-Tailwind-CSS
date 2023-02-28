import React from 'react'
import Menu from './Menu'
import {AiOutlineHome} from 'react-icons/ai'

export default function Header() {
  return (
    <div>
      <div>
        <Menu menuTitle="Vidzeo" address="./" Icon={AiOutlineHome} />
      </div>
    </div>
    

  )
}