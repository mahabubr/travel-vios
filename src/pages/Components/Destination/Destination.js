import React from 'react';
import './Destination.css'
import { FaArrowRight } from "react-icons/fa";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Link, useLoaderData } from 'react-router-dom';

const Destination = () => {

    const placesData = useLoaderData()

    return (
        <div className='destination-container'>
            <div className='destination-content'>
                <div>
                    <h1 className='destination-heading'>Travel Vios</h1>
                    <p className='destination-about'>Since 1975, ‘Organization Name’ has been focused on bringing our customers the best in esteem and quality travel game plans. We are enthusiastic about movement and sharing the world’s marvels on the relaxation travel side, and giving corporate explorers hello there contact administrations to encourage their business travel needs.
                    </p>
                    <Link to='contact' className='destination-btn'>
                        <p className='destination-btn-about'>About Us</p>
                        <FaArrowRight />
                    </Link>
                </div>
                <div className='destination-swiper'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >

                        {
                            placesData.map(place => <SwiperSlide key={place.id}>
                                <Link to={`/hotel/${place.id}`} className='slider-container'>
                                    <div className="slider-img">
                                        <img src={place.image} alt="" />
                                    </div>
                                    <div className="slider-info">
                                        <h3>{place.name}</h3>
                                        <p>{place.country}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            )}

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Destination;