import React from 'react'
import Menu from './Menu'
import {AiOutlineHome} from 'react-icons/ai'
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <Menu menuTitle="Home" address="/" Icon={AiOutlineHome} />
        <Menu menuTitle="About Us" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex items-center space-x-5'>
        <Link href="/">
        <h2 className='text-2xl'>
          <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>Imdb</span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </h2>
        </Link>
      </div>
    </div>
  )
}