import React from 'react';
import Slideshow from './Slideshow';
import NewItems from './NewItems';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/Home.css';



function Home() {
    const url = 'http://localhost:8000/api';
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);
    const [CategoryData, setCategoryData] = useState([]);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    useEffect(() => {
        fetchCategory(url + '/categories/');
    }, []);

    const fetchCategory = (fetchUrl) => {
        fetch(fetchUrl)
            .then((response) => response.json())
            .then((data) => {
                setCategoryData(data.data);
            });
    };

    useEffect(() => {
        fetchProducts(url + '/products/?fetch_limit=8');
    }, []);

    const fetchProducts = (fetchUrl) => {
        fetch(fetchUrl)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.results);
                setTotalResults(data.count);
            });
        setLoading(false);
    };

    return (
        <>
            <Header />
            <main className='mt-4'>
                <div className='container'>
                    <h3 className='mb-4'>Categories</h3>
                    <Slider {...settings} className='mb-5'>
                    {
                        CategoryData.map((item, index) => {
                            return (
                                <div class="card">
                                    <img src={item.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.title}</h5>
                                    </div>
                                </div>
                            );
                        })
                    }
                    </Slider>
                    <h3 className='mb-4'>
                        Lates Products
                        <Link to='/products' className='float-end btn btn-dark'>
                            All Products <i className='fa-solid fa-arrow-right-long'></i>
                        </Link>
                    </h3>
                    <div className='row mb-4 px-5'>
                        {products.map((item, index) => {
                            return (
                                <div className='col-6 col-md-3 mb-4' id={`row${item.id}`}>
                                    <div className="card shadow h-100"> {/*style="width: 18rem;">*/}
                                        <Link to={`/product/${item.id}`}>
                                            <img src={item.image} className="card-img-top object-fit-cover " alt="..." style={{ maxHeight: "18em", minHeight: "18em" }} />
                                        </Link>
                                        {/* <hr/> */}
                                        <div className="card-body d-flex flex-column justify-content-between">
                                            <Link to={`/product/${item.id}`}>
                                                <h5 className="card-title">{item.title}</h5>
                                            </Link>
                                            <h5 className="card-title text-muted">{item.price} ₽</h5>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}



// const Home = () => (
//     <div>
//         <Header />
//         <div className="home">
//             <Slideshow />
//             <NewItems />
//         </div>
//         <Footer />
//     </div>
// );

export default Home;
