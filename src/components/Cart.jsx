import React, { useState } from 'react'
import Flex from './Flex'
import { RxCross2 } from "react-icons/rx";
import socksImg from '../assets/Socks.png'
import Image from './Image';
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Cart = ({ showCart, setShowCart }) => {

    /*Get data from Redux Store named "addToCart" by using useSelector */
    const cartData = useSelector((state) => state.addToCart.value);
    const cartEmpty = cartData.length === 0;
    // console.log(cartEmpty);


    return (
        <>
            {/* ------ Cart Box in right side ---------- */}
            {showCart &&
                <div className='w-1/3 h-[97%] absolute bg-white border-2 border-[#4A4A4A] top-3 right-3 rounded-2xl z-20'>

                    {cartEmpty &&
                        <EmptyCart showCart={showCart} setShowCart={setShowCart} />
                    }

                    {/* --------------- Cart Box ---------------------- */}
                    <div className='px-10 py-9'>
                        {/* CartBox header */}
                        <Flex className={"justify-between mb-7"}>
                            <h1 className='font-jost text-2xl leading-7 text-[#4A4A4A]'> Cart </h1>
                            <RxCross2 onClick={() => setShowCart(!showCart)} className='cursor-pointer text-2xl' />
                        </Flex>

                        {/* Divider Line */}
                        <div className="mb-7 border-t border-2 border-[#066A31]"></div>

                        {/* Products in Cartbox*/}
                        <div>
                            <Flex className={"items-center justify-between"}>
                                <ul>
                                     {cartData.map(item=>(
                                    // <Image imgSrc={item.thumbnail} imgAlt={productImg} />
                                    <>
                                    <li>{item.id}</li>
                                    <li><Image imgSrc={item.thumbnail} /></li>

                                    </>
                                    

                                ))}

                                </ul>
                               
                                
                                {/* <!-- Product Image --> */}
                                {/* <Image imgSrc={socksImg} imgAlt={"socksImg"} /> */}
                                
                                {/* <!-- Product Info --> */}
                                {/* <div>
                                    <h3 className='pb-3.5 font-jost font-medium text-[18px] leading-5 tracking-[0.1px] text-[#4A4A4A]'> 3-Pack Performance Compression Sock - White </h3>
                                    <p className='font-jost font-normal text-[16px] leading-5 tracking-[0.1px] text-[#4A4A4AB3]'> Tk 7,500.00 </p>
                                </div> */}

                                {/* Product counter */}
                                <div class="flex flex-col items-center">
                                    {/* <!-- Plus button --> */}
                                    <FaPlus className='mb-1 cursor-pointer text-[16px] text-[#4A4A4A] hover:text-gray-400' />

                                    {/* <!-- Number box --> */}
                                    <div class="px-4 py-2 border rounded-lg text-gray-600 ">
                                        1
                                    </div>

                                    {/* <!-- Minus button --> */}
                                    <FaMinus className='cursor-pointer text-[16px] text-[#4A4A4A] hover:text-gray-400' />

                                    {/* <!-- Remove link --> */}
                                    <button class="mt-2 cursor-pointer text-sm text-gray-500 underline hover:text-red-500">
                                        Remove
                                    </button>
                                </div>
                            </Flex>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}

export default Cart