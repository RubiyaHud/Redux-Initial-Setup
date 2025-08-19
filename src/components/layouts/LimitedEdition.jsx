import React from 'react'
import Container from '../Container'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from '../PrevArrow';
import NextArrow from '../NextArrow';
import Product from '../Product';
import { useState, useEffect } from "react";
import axios from "axios";


const LimitedEdition = () => {

    // Slick Slider 
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    // Get data from the Product API
    let [allData, setAllData] = useState([]);

    useEffect(() => {
        async function all() {

            let myData = await axios.get("https://dummyjson.com/products");
            setAllData(myData.data.products);
        }
        all();
    }, []);

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
                            {allData.map((item) => (
                                <div className='px-3'>
                                    <Product
                                        productId={item.id}
                                        productImg={item.thumbnail}
                                        productTitle={item.title}
                                        productPrice={item.price}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Container>

            </div>
        </>
    )
}

export default LimitedEdition