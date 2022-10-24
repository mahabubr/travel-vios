import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Hotel.css'
import GoogleMap from './HotelRoom/GoogleMap/GoogleMap';
import HotelRoom from './HotelRoom/HotelRoom';

const Hotel = () => {

    const hotelData = useLoaderData()

    return (
        <div className='hotel-container'>
            <div>
                <p>252 stays Apr 13-17 3 guests</p>
                <h2>Stay in </h2>
            </div>
            <div className='hotel-content'>
                <div>
                    {
                        hotelData.map(hotel => <HotelRoom key={hotel.id} hotel={hotel} />)
                    }
                </div>
                <div>
                    <GoogleMap />
                </div>
            </div>
        </div>
    );
};

export default Hotel;