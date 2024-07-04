import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header'
import ProductCard from './components/ProductCard';

function App() {
  return (
    <>
      <Header />
      <main className='mt-4'>
        <div className='container'>
          {/* Latest Products */}
          <h3 className='mb-3'>Lates Products<a href='#' className='float-end btn btn-dark'>All Products <i className="fa-solid fa-arrow-right-long"></i></a></h3>
          <div className='row mb-4'>
            {/* Product Card Start */}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card shadow"> {/*style="width: 18rem;">*/}
                <img src={logo} className="card-img-top" alt="..." />
                {/* <hr/> */}
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <h5 className="card-title text-muted">Price: 200</h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-success'><i class="fa-solid fa-cart-shopping"></i></button>
                  <button title='Add to wishlist' className='btn btn-danger ms-1'><i class="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Card End */}
            {/* Product Card Start */}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card shadow"> {/*style="width: 18rem;">*/}
                <img src={logo} className="card-img-top" alt="..." />
                {/* <hr/> */}
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <h5 className="card-title text-muted">Price: 200</h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-success'><i class="fa-solid fa-cart-shopping"></i></button>
                  <button title='Add to wishlist' className='btn btn-danger ms-1'><i class="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Card End */}
            {/* Product Card Start */}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card shadow"> {/*style="width: 18rem;">*/}
                <img src={logo} className="card-img-top" alt="..." />
                {/* <hr/> */}
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <h5 className="card-title text-muted">Price: 200</h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-success'><i class="fa-solid fa-cart-shopping"></i></button>
                  <button title='Add to wishlist' className='btn btn-danger ms-1'><i class="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Card End */}
            {/* Product Card Start */}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card shadow"> {/*style="width: 18rem;">*/}
                <img src={logo} className="card-img-top" alt="..." />
                {/* <hr/> */}
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <h5 className="card-title text-muted">Price: 200</h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-success'><i class="fa-solid fa-cart-shopping"></i></button>
                  <button title='Add to wishlist' className='btn btn-danger ms-1'><i class="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Card End */}
            {/* Product Card Start */}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card shadow"> {/*style="width: 18rem;">*/}
                <img src={logo} className="card-img-top" alt="..." />
                {/* <hr/> */}
                <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <h5 className="card-title text-muted">Price: 200</h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-success'><i class="fa-solid fa-cart-shopping"></i></button>
                  <button title='Add to wishlist' className='btn btn-danger ms-1'><i class="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Card End */}
          </div>
          {/* Latest Products End */}
          {/* Popular categories */}
          <h3 className='mb-3'>Popular Categories<a href='#' className='float-end btn btn-dark'>All Categories <i className="fa-solid fa-arrow-right-long"></i></a></h3>
          <div className='row mb-4'>
            {/* Category Card Start */}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card shadow"> {/*style="width: 18rem;">*/}
                <img src={logo} className="card-img-top" alt="..." />
                {/* <hr/> */}
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                </div>
              </div>
            </div>
            {/* Category Card End */}
            {/* Category Card Start */}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card shadow"> {/*style="width: 18rem;">*/}
                <img src={logo} className="card-img-top" alt="..." />
                {/* <hr/> */}
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                </div>
              </div>
            </div>
            {/* Category Card End */}
            {/* Category Card Start */}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card shadow"> {/*style="width: 18rem;">*/}
                <img src={logo} className="card-img-top" alt="..." />
                {/* <hr/> */}
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                </div>
              </div>
            </div>
            {/* Category Card End */}
            {/* Category Card Start */}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card shadow"> {/*style="width: 18rem;">*/}
                <img src={logo} className="card-img-top" alt="..." />
                {/* <hr/> */}
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                </div>
              </div>
            </div>
            {/* Category Card End */}
            {/* Category Card Start */}
            <div className='col-12 col-md-3 mb-4'>
              <div className="card shadow"> {/*style="width: 18rem;">*/}
                <img src={logo} className="card-img-top" alt="..." />
                {/* <hr/> */}
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                </div>
              </div>
            </div>
            {/* Category Card End */}
          </div>
          {/* Popular Categories End */}
        </div>
      </main>
    </>
  );
}

export default App;
