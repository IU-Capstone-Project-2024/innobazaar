import React from 'react';
import Slideshow from './Slideshow';
import NewItems from './NewItems';
import './styles/Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => (
    <div>
        <Header />
        <div className="home">
            <Slideshow />
            <NewItems />
        </div>
        <Footer />
    </div>
);

export default Home;
