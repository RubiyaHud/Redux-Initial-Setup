import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
    <ul className='flex gap-x-11 font-jost font-medium text-[14px] leading-6 text-head'>
        <Link to={"/"}> <li className="myUnderline"> HOME </li> </Link>
        <Link to={"/Shop"}> <li className="myUnderline"> SHOP </li> </Link>
        <Link to={"/Shop"}> <li className="myUnderline"> COLLECTION </li> </Link>
        <Link to={"/Shop"}> <li className="myUnderline"> JOURNAL </li> </Link>
        <Link to={"/Shop"}> <li className="myUnderline"> LOOKBOOK </li> </Link>
        <Link to={"/Shop"}> <li className="myUnderline"> PAGES </li> </Link>
    </ul>
    </>
  )
}

export default Menu