import React from 'react'
import Container from '../Container'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from '../PrevArrow';
import NextArrow from '../NextArrow';
import Product from '../Product';


const LimitedEdition = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };
    return (
        <>
            <div className='py-24'>
                <Container>
                    <h1 className='pb-11 text-center font-jost font-normal text-4xl'>
                        LIMITED
                        <span className='font-bold'> EDITION</span>
                    </h1>
                    <div className='-mx-3'>
                        <Slider {...settings}>
                            <div className='px-3'>
                                <Product/>
                            </div>
                            <div className='px-3'>
                                <Product/>
                            </div>
                            <div className='px-3'>
                                <Product/>
                            </div>
                            <div className='px-3'>
                                <Product/>
                            </div>
                            <div className='px-3'>
                                <Product/>
                            </div>
                            
                        </Slider>
                    </div>
                </Container>

            </div>
        </>
    )
}

export default LimitedEdition