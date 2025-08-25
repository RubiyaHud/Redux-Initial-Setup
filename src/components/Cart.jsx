import React, { useEffect, useState } from 'react'
import Flex from './Flex'
import { RxCross2 } from "react-icons/rx";
import Image from './Image';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { incrementCart, decrementCart, removeFromCart } from '../slices/addToCartSlice';

const Cart = ({ showCart, setShowCart }) => {

    /*Get data from Redux Store named "addToCart" by using useSelector */
    const cartData = useSelector((state) => state.addToCart.value);
    const cartEmpty = cartData.length === 0;


    //Send data to reducer function "incrementCart()" of Redux-Store "addToCartSlice" using useDisptach()
    let dispatch = useDispatch();
    const handleIncrement = (product_id) => {
        dispatch(incrementCart(product_id))
    };
    const handleDecrement = (product_id) => {
        dispatch(decrementCart(product_id))
    };

    //Calculate Total price of the products in the cart
    let [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        cartData.map(item => {
            total += item.price * item.quantity;
        })
        setTotalPrice(total);
    }, [cartData])

    return (
        <>
            {/* ------ Cart Box in right side ---------- */}
            {showCart &&
                <div className='w-1/3 h-[97%] absolute bg-white border-2 border-[#4A4A4A] top-3 right-3 rounded-2xl z-20 flex flex-col'>

                    {cartEmpty && <EmptyCart showCart={showCart} setShowCart={setShowCart} />}

                    {!cartEmpty &&
                        <>
                            <div className='px-10 py-9 flex-1 overflow-y-auto'>
                                {/* CartBox header */}
                                <Flex className={"justify-between mb-7"}>
                                    <h1 className='font-jost text-2xl leading-7 text-[#4A4A4A]'> Cart </h1>
                                    <RxCross2 onClick={() => setShowCart(!showCart)} className='cursor-pointer text-2xl' />
                                </Flex>

                                {/* Divider Line */}
                                <div className="mb-7 border-t border-2 border-[#066A31]"></div>

                                {/* Products list */}
                                <div className="pb-9">
                                    <ul>
                                        {cartData.map((item) => (
                                            <li key={item.id} className={"mb-4 flex items-center"}>
                                                {/* Product Image */}
                                                <Image
                                                    imgSrc={item.image}
                                                    imgAlt="product image"
                                                    className="w-20 h-20 object-cover rounded-lg"
                                                />
                                                {/* Product Info */}
                                                <div className='w-[75%] ml-3.5'>
                                                    <h3 className='pb-3.5 font-jost font-medium text-[18px] leading-5 tracking-[0.1px] text-[#4A4A4A]'>
                                                        {item.title}
                                                    </h3>
                                                    <p className='font-jost font-normal text-[16px] leading-5 tracking-[0.1px] text-[#4A4A4AB3]'>
                                                        $ {item.price * item.quantity}
                                                    </p>
                                                </div>

                                                {/* Product Counter */}
                                                <div className="flex flex-col items-center">
                                                    <FaPlus onClick={() => handleIncrement(item.id)} className='mb-1 cursor-pointer text-[16px] text-[#4A4A4A] hover:text-gray-400' />
                                                    <div className="px-4 py-2 border rounded-lg text-gray-600 ">
                                                        {item.quantity}
                                                    </div>
                                                    <FaMinus onClick={() => handleDecrement(item.id)} className='cursor-pointer text-[16px] text-[#4A4A4A] hover:text-gray-400' />
                                                    <button onClick={() => dispatch(removeFromCart(item.id))} className="mt-2 cursor-pointer text-sm text-gray-500 underline hover:text-red-500">
                                                        Remove
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Total price section (non-scrollable) */}
                            <div className='px-10 pt-7 pb-12 bg-gray-50 border-t-1 rounded-br-lg rounded-bl-lg sticky bottom-0'>
                                <Flex className={"mb-14 justify-between"}>
                                    <h3 className='font-jost text-[20px] font-medium leading-7 text-[#4A4A4A]'> Total </h3>
                                    <p className='font-jost text-[20px] font-medium leading-7 text-[#4A4A4A]'> $ {totalPrice} </p>
                                </Flex>
                                <Flex className={"justify-evenly"}>
                                    <button className='py-5 px-20 border border-gray-400 rounded-full uppercase font-jost font-medium text-[14px] leading-3.5 tracking-[1.5px] text-[#4A4A4A] hover:text-white hover:bg-[#93463B] cursor-pointer duration-300 ease-in-out transition-all'>
                                        View Cart
                                    </button>
                                    <button className='py-5 px-20 border border-gray-400 rounded-full uppercase font-jost font-medium text-[13px] leading-3.5 tracking-[1.5px] hover:text-[#4A4A4A] text-white bg-[#93463B] hover:bg-white cursor-pointer duration-300 ease-in-out transition-all'>
                                        Checkout
                                    </button>
                                </Flex>
                            </div>
                        </>
                    }
                </div>

            }
        </>
    )
}

export default Cart