import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Image from '../Image'
import Logo from "../../assets/logo.png"
import Menu from '../Menu'
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { FiHeart, FiSearch } from "react-icons/fi";
import Cart from '../Cart'
import { useSelector } from 'react-redux'
const Header = () => {

  {/* Lock body scroll when sidebar is open*/ }
  let [showCart, setShowCart] = useState(false);
  useEffect(() => {
    if (showCart) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showCart]);


  {/* ----- Show total number of product over Cart Icon --------*/ }
  let totalProduct = 0;

  /*Get data from Redux Store named "addToCart" by using useSelector */
  const cartData = useSelector((state) => state.addToCart.value);
  cartData.map((item) => {
    totalProduct = totalProduct + item.quantity;
    // console.log(totalProduct);
  });
  const cartEmpty = totalProduct === 0;
  // console.log(cartEmpty);
  
  

  return (
    <>
      {/* white overlay when the "cart side bar" is opened, close the Cart-box by onclick outside the Cart*/}
      {showCart && (
        <div
          //z-index value is less than the cart box z-index value
          className="fixed inset-0 bg-white/50 z-10"
          onClick={() => setShowCart(!showCart)}
        ></div>
      )}

      {/* Main Page */}
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
            <div className='relative flex gap-x-7 items-center'>
              <FiSearch className='text-[20px] text-head font-bold' />
              <HiOutlineUser className='text-[20px] text-head font-bold' />
              <FiHeart className='text-[18px] text-head font-bold' />
              <AiOutlineShopping onClick={() => setShowCart(!showCart)} className='cursor-pointer text-[23px] text-head font-bold' />
              {!cartEmpty &&
                <div className='absolute -top-3 -right-5 bg-red-400 text-white text-sm font-medium w-7 h-7 rounded-full flex items-center justify-center '>
                  <p>{totalProduct}</p>
                </div>
              }

            </div>
            {/* ------ Cart Box in right side ---------- */}
            {showCart &&
              <Cart showCart={showCart} setShowCart={setShowCart} />
            }
          </div>
        </Container>
      </div>
    </>
  )
}

export default Header