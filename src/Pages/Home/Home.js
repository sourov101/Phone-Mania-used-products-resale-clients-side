import React, { useState } from 'react';
import AdvertisedItem from './AdvertisedItem';
import Carousels from './Carousels';
import Catagories from './Catagories';
import Stories from './Stories';


const Home = () => {
    const [loading, setLoading] = useState(true);
    if (loading) {
        <div>loading</div>
    }
    return (
        <div>
            <Carousels></Carousels>
            <Catagories></Catagories>
            <AdvertisedItem></AdvertisedItem>
            <Stories></Stories>
        </div>
    );
};

export default Home;