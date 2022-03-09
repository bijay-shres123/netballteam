import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <>
      {/* <!-- Topbar --> */}
      <div id="top-bar1" style={{background:'#007C92'}}>
        <div className="container">
          {/* <!-- Left Side Content --> */}
          <div className="left-side">
            {/* <!-- Top bar --> */}
            <ul className="top-bar-menu">
              <li>
                <i className="fa fa-phone"></i> 07262534123{' '}
              </li>
              <li>
                <i className="fa fa-envelope"></i>{' '}
                <Link to="/">enquiry@train-netball.com</Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>
          {/* <!-- Left Side Content / End -->


<!-- Left Side Content --> */}
          <div className="right-side">
            {/* <!-- Social Icons --> */}
            <ul className="social-icons">
              <li>
                <Link to="/" className="facebook">
                  <i className="icon-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="/" className="twitter">
                  <i className="icon-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="/" className="gplus">
                  <i className="icon-gplus"></i>
                </Link>
              </li>
              <li>
                <Link to="/" className="pinterest">
                  <i className="icon-pinterest"></i>
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- Left Side Content / End --> */}
        </div>
      </div>
      <div className="clearfix"></div>
      {/* <!-- Topbar / End --> */}
    </>
  );
}
