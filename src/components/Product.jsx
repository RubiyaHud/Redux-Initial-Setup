import React from 'react'
import Image from './Image'
import limitedEditionImg1 from '../assets/limitedEditionImg1.png'
import { FaRegHeart } from "react-icons/fa";
const Product = () => {
    return (

        <>
            <div class="">
                <Image imgSrc={limitedEditionImg1} imgAlt={"limitedEditionImg1"} />

                <div class="mt-5 flex items-start justify-between">
                    {/* <!-- Product Info --> */}
                    <div>
                        <p className='font-jost font-normal text-[14px] leading-6 text-[#767676]'> Dresses </p>
                        <p className='font-jost font-normal text-[16px] text-[#222222]'> Hub Accent Mirror </p>
                        <p className='font-jost font-normal text-[16px] text-[#222222]'> $29 </p>
                    </div>
                    {/* <!-- heart icon --> */}
                    <button className='cursor-pointer'>
                        <FaRegHeart className='text-[16px] text-[#767676] hover:text-[#C32929]' />
                    </button>
                </div>

            </div>
        </>

    )
}

export default Product