import React from 'react'
import Image from './Image'
// import limitedEditionImg1 from '../assets/limitedEditionImg1.png'
import { FaRegHeart } from "react-icons/fa";
import Flex from './Flex';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/addToCartSlice';

const Product = ({productId, productImg, productTitle, productPrice }) => {

    //Send data to Redux-Store "addToCartSlice" using useDisptach()
    let dispatch = useDispatch();
    let handleAddToCart = () => {
        // console.log("cart")
        dispatch(addToCart({
            id:productId,
            title:productTitle,
            price:productPrice,
            image:productImg,
            quantity: 1, // this value is always '1'
        }))
    }
    return (

        <>
            <div className="relative group">
                <Image imgSrc={productImg} imgAlt={"productImg"} />
                <div className="hidden w-full py-5 px-12 bg-[rgba(34,34,34,0.71)] group-hover:block absolute bottom-22 left-0">
                    <Flex className={"justify-between"}>
                        <button onClick={handleAddToCart} className='cursor-pointer font-jost font-medium text-[14px] leading-6 text-white hover:text-[15px] hover:font-bold'> ADD TO CART</button>
                        <button className='cursor-pointer font-jost font-medium text-[14px] leading-6 text-white hover:text-[15px] hover:font-bold'> QUICK VIEW </button>
                    </Flex>
                </div>
                <div className="mt-5 flex items-start justify-between">
                    {/* <!-- Product Info --> */}
                    <div>
                        <p className='font-jost font-normal text-[14px] leading-6 text-[#767676]'> Dresses </p>
                        <p className='font-jost font-normal text-[16px] text-[#222222]'> {productTitle} </p>
                        <p className='font-jost font-normal text-[16px] text-[#222222]'> {productPrice} </p>
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