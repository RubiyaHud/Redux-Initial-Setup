import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Logo from "../../assets/logo.png"
import Menu from '../Menu'
import { CiSearch, CiUser, CiHeart  } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { FiHeart, FiSearch  } from "react-icons/fi";
const Header = () => {
  return (
    <div className='py-[30px] items-center'>
      <Container>
        <div className='flex'>
          {/* ------ Logo ---------- */}
          <div className='pr-14'>
            <Image imgSrc={Logo} imgAlt={"Logo"} />
          </div>
          {/* ------ Menu ---------- */}
          <div className='pr-[450px]'>
            <Menu />
          </div>
          {/* ------ Icons ---------- */}
          <div className='flex gap-x-7 items-center'>
            <FiSearch  className='text-[20px] text-head font-bold' />
            <HiOutlineUser className='text-[20px] text-head font-bold' />
            <FiHeart  className='text-[18px] text-head font-bold' />
            <AiOutlineShopping className='text-[23px] text-head font-bold' />
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Header