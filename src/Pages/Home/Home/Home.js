import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import AdvertisementItems from '../../AdvertismentItems/AdvertismentItems';
import Categories from '../../Categories/Categories/Categories';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisementItems></AdvertisementItems>
            <Categories></Categories>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;