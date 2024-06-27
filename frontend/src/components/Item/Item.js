import React from 'react';
import './styles/Item.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Item = () => (
    <div>
        <Header />
        <div>
            <div className='item-pictures'>
                <div className='current-picture'>
                <img src={"https://placehold.co/150x200.png"} alt={product.name} />
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default Item;
