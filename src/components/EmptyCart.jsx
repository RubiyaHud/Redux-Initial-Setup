import React from 'react'
import Flex from './Flex'
import Image from './Image';
import { RxCross2 } from "react-icons/rx";
import emptyCart from '../assets/emptyCart.png'

const EmptyCart = ({ showCart, setShowCart }) => {
    return (
        <>
            <Flex className='pt-10 px-9 justify-end'>
                <RxCross2 onClick={() => setShowCart(!showCart)} className='cursor-pointer text-2xl ' />
            </Flex>
            <div className="flex items-center justify-center h-full">
                <div className="w-[430px] text-center ">
                    <Image imgSrc={emptyCart} imgAlt={"emptyCart"} className={"m-auto"} />
                    <h1 className='my-10 font-jost  text-[20px] leading-7 tracking-[0.2px] text-[#4A4A4A]'> You have not added any items to your Cart. </h1>
                    <button className='py-5 px-10 rounded-full shadow-lg border border-black uppercase font-jost text-[14px] leading-[14.4px] tracking-[1.4px] text-[#4A4A4A] cursor-pointer hover:text-black hover:font-medium '> Continue shopping </button>
                </div>
            </div>
        </>
    )
}

export default EmptyCart