import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Search from '../Header/Search';
import Banner from './Banner/Image/Banner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            {/* <Header></Header> */}
            <Search></Search>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;