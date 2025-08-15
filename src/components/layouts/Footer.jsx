import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Logo from "../../assets/logo.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className='bg-[#CFCDCD] mt-[100px] py-[95px]'>
        <Container>

          <div className='flex'>
            {/* ------------- logo ----------------*/}
            <div className='mr-20'>
              <div className='pb-11'>
                <Image imgSrc={Logo} imgAlt={"Logo"} />
              </div>
              <p className='pb-7 w-[282px] font-jost font-normal text-[14px] leading-6'>1418 River Drive, Suite 35 Cottonhall, CA 9622
                United States</p>
              <p className='font-jost font-medium text-[14px] leading-6'>sale@uomo.com</p>
              <p className='pb-10 font-jost font-medium text-[14px] leading-6'>+1 246-345-0695</p>
              {/* icons */}
              <div className='flex gap-9'>
                <FaFacebookF className='cursor-pointer text-[14px] hover:text-[#767676]' />
                <FaTwitter className='cursor-pointer text-[14px] hover:text-[#767676]' />
                <FaInstagram className='cursor-pointer text-[14px] hover:text-[#767676]' />
                <FaYoutube className='cursor-pointer text-[14px] hover:text-[#767676]' />
                <FaPinterest className='cursor-pointer text-[14px] hover:text-[#767676]' />
              </div>
            </div>
            {/* ------------- COMPANY ----------------*/}
            <div className='mr-26'>
              <h1 className='pb-[45px] font-jost font-medium text-[18px]'>COMPANY</h1>
              <ul>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer' >About Us</li>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer' >Careers</li>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer' >Affiliates</li>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer' >Blog</li>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer' >Contact Us</li>
              </ul>
            </div>
            {/* ------------- SHOP ----------------*/}
            <div className='mr-26'>
              <h1 className='pb-[45px] font-jost font-medium text-[18px]'>SHOP</h1>
              <ul>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer'>New Arrivals</li>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer'>Accessories</li>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer'>Men</li>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer'>Women</li>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer'>Shop All</li>
              </ul>
            </div>
            {/* ------------- HELP ----------------*/}
            <div className='mr-26'>
              <h1 className='pb-[45px] font-jost font-medium text-[18px]'>HELP</h1>
              <ul>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer'>Customer Service</li>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer'>My Account</li>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer'>Find a Store</li>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer'>Legal & Privacy</li>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer'>Contact</li>
                <li className='font-jost font-normal text-[14px] leading-10 myUnderline_footer'>Gift Card</li>
              </ul>
            </div>
            {/* ------------- SUBSCRIBE ----------------*/}
            <div className=''>
              <h2 className='pb-[45px] font-jost font-medium text-[18px]'>SUBSCRIBE</h2>
              <p className='pb-5 w-[273px] font-jost font-normal text-[14px] leading-6'>
                Be the first to get the latest news about trends,
                promotions, and much more!
              </p>
              <div className="flex items-center bg-white px-4 py-3 w-[330px] mb-11">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow font-jost font-normal text-[14px] leading-6 text-[#222222] placeholder-[#222222]"
                />
                <button className="ml-4 cursor-pointer font-jost font-medium text-[14px] leading-6 text-[#222222]">
                  JOIN
                </button>
              </div>
              {/* <h2 className='pb-5 font-jost font-medium text-[15px]'>Secure payments</h2> */}




            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer




