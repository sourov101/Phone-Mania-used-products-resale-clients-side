import React from 'react';
import AdvertisedItem from './AdvertisedItem';
import Carousels from './Carousels';
import Catagories from './Catagories';
import Stories from './Stories';


const Home = () => {

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