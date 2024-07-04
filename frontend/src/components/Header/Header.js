import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../Context';
import './Header.css';

function Header() {
  const userContext = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4 gradient-custom">
      {/* <div className='container'> */}
      <div className="container">
        <Link to='/' className='navbar-brand'>
          <div className='d-flex align-items-center'>
            <h1 className='logo_circle mb-0'>ib</h1>
            <p> </p>
            <div className='mb-0 h1'>innobazaar</div>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {
              userContext.login &&
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/dashboard/wishlist"><i className="fa-regular fa-heart"></i> Wishlist</Link>
              </li>
            }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-regular fa-user"></i>
                {userContext.login && ' Profile'}
                {!userContext.login && ' Authorize'}
              </a>
              <ul className="dropdown-menu">
                {!userContext.login &&
                  <>
                    <li><Link to='/login' className='dropdown-item'>Login</Link></li>
                    <li><Link to='/register' className='dropdown-item'>Register</Link></li>
                  </>
                }
                {/* <li><hr className="dropdown-divider" /></li> */}
                {userContext.login &&
                  <>
                    <li><Link to='/dashboard' className='dropdown-item'>Dashboard</Link></li>
                    <li><Link to='/logout' className='dropdown-item text-danger'>Logout</Link></li>
                  </>
                }
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Header;