import React from 'react';
import './HotelRoom.css'
import { FaStar } from "react-icons/fa";


const HotelRoom = ({ hotel }) => {

    const { thumb_image, name, guest, bedroom, bed, bath, about, ratting, price, total, country } = hotel

    return (
        <div className='hotel-room-container'>
            <div className='hotel-room-img'>
                <img src={thumb_image} alt="" />
            </div>
            <div className='hotel-room-info'>
                <h3 className='hotel-room-info-heading'>{name}</h3>
                <article className='hotel-room-info-list'>
                    <small>{guest}</small>
                    <small>{bedroom}</small>
                    <small>{bed}</small>
                    <small>{bath}</small>
                </article>
                <p className='hotel-room-info-des'>{about}</p>
                <h3>Country : {country}</h3>
                <div className='hotel-room-info-footer'>
                    <article className='hotel-room-info-footer-star'>
                        <FaStar className='FaStar' />
                        <p>{ratting}</p>
                    </article>
                    <article>
                        <p>${price}/night</p>
                    </article>
                    <article>
                        ${total} total
                    </article>
                </div>
                <button className='book-room-btn'>Book Room</button>
            </div>
        </div>
    );
};

export default HotelRoom;