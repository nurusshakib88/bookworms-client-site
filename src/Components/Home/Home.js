import React from 'react';
import Footer from '../Footer/Footer';
import Search from '../Header/Search';
import Banner from './Banner/Image/Banner';
import Products from './Products/Products';
import Header from '../Header/Header';
import Offer from './Offer/Offer';

const Home = () => {
    return (
        <>   
            <Banner/>            
            <section className='mb-0'><h2 className='h_section text-center'>Best Sellers</h2></section>
            <Products></Products>
            <Offer></Offer>
        </>
    );
};

export default Home;