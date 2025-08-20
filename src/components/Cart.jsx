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

    let totalProduct = 0;
    /*Get data from Redux Store named "addToCart" by using useSelector */
    const cartData = useSelector((state) => state.addToCart.value);

    cartData.map((item) => {
        // console.log(item.image);
        // console.log(item.quantity); 
        
        totalProduct = totalProduct + item.quantity;
        console.log(totalProduct);
    });

    const cartEmpty = cartData.length === 0;
    // console.log(cartData.length);
    // console.log(cartEmpty);


    return (
        <>
            {/* ------ Cart Box in right side ---------- */}
            {showCart &&
                <div className='w-1/3 h-[97%] absolute bg-white border-2 border-[#4A4A4A] top-3 right-3 rounded-2xl z-20 overflow-y-scroll'>

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
                        <div className="pb-9">

                            <ul>
                                {cartData.map((item) => (
                                    <li key={item.id} className={"mb-4 flex items-center"}>
                                        {/* <!-- Product Image --> */}
                                        <Image
                                            imgSrc={item.image}   // <-- must be a valid image URL
                                            imgAlt="product image"
                                            className="w-20 h-20 object-cover rounded-lg"
                                        />
                                        {/* <!-- Product Info --> */}
                                        <div className='w-[75%] ml-3.5'>
                                            <h3
                                                className='pb-3.5 font-jost font-medium text-[18px] leading-5 tracking-[0.1px] text-[#4A4A4A]'>
                                                {item.title}
                                            </h3>
                                            <p
                                                className='font-jost font-normal text-[16px] leading-5 tracking-[0.1px] text-[#4A4A4AB3]'>
                                                $ {item.price}
                                            </p>
                                        </div>
                                        {/* Product counter */}
                                        <div className="flex flex-col items-center">
                                            {/* <!-- Plus button --> */}
                                            <FaPlus className='mb-1 cursor-pointer text-[16px] text-[#4A4A4A] hover:text-gray-400' />

                                            {/* <!-- Number box --> */}
                                            <div className="px-4 py-2 border rounded-lg text-gray-600 ">
                                                1
                                            </div>

                                            {/* <!-- Minus button --> */}
                                            <FaMinus className='cursor-pointer text-[16px] text-[#4A4A4A] hover:text-gray-400' />

                                            {/* <!-- Remove link --> */}
                                            <button className="mt-2 cursor-pointer text-sm text-gray-500 underline hover:text-red-500">
                                                Remove
                                            </button>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart