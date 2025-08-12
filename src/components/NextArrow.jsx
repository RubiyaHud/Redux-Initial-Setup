import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`absolute top-1/2 -translate-y-1/2 !right-[-40px] text-[#767676] text-2xl cursor-pointer ${className}`} onClick={onClick} >
            <IoIosArrowForward />
        </div>
    )
}

export default NextArrow