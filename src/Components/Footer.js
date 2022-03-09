import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
const Footer = () => {
  return (
    <Wrapper>
      {/* <!-- Footer
    ================================================== --> */}
      <div className="margin-top-0"></div>

      <div id="footer">
        {/* <!-- Main --> */}
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-6">
              <img className="footer-logo" src="images/logo.png" alt="" />
              <br />
              <br />
              <p>
              Admodum deserunt intellegam in duo, novum nonumy populo est at, qui an reque ignota constituto.
         Utinam aperiri equidem te vis. Cu ius velit populo impetus.  
              </p>
            </div>

            <div className="col-md-4 col-sm-6 ">
              <h4>Helpful Links</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/">Login</Link>
                </li>
                <li>
                  <Link to="/">Sign Up</Link>
                </li>
                <li>
                  <Link to="/">My Account</Link>
                </li>
                <li>
                  <Link to="/">Forum</Link>
                </li>
                <li>
                  <Link to="/">Pricing</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>

              <ul className="footer-links">
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Our Agents</Link>
                </li>
                <li>
                  <Link to="/">How It Works</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
              <div className="clearfix"></div>
            </div>

            <div className="col-md-3  col-sm-12">
              <h4>Contact Us</h4>
              <div className="text-widget">
                <span>Oxford, United Kingdom</span> <br />
                Phone: <span>239213124312</span>
                <br />
                E-Mail:
                <span>
                  {' '}
                  <Link to="/">enquiry@train-netball.com</Link>{' '}
                </span>
                <br />
              </div>

              <ul className="social-icons margin-top-20">
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
                  <Link to="/" className="vimeo">
                    <i className="icon-vimeo"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Copyright --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="copyrights">
                © 2022 Train-Netball. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer / End --> */}
    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.div`
  font-size: 15px;
  line-height: 27px;
`;
