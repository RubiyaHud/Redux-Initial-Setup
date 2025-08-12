import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`absolute top-1/2  -translate-y-1/2 !left-[-40px] z-10  text-[#767676] text-2xl cursor-pointer ${className}`} onClick={onClick} >
            <IoIosArrowBack />
        </div>
    )
}

export default PrevArrow