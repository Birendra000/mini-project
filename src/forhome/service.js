import React from "react";
import { Link } from "react-router-dom";
import { TbTruck } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Service = () => {
  return (
    <div className="maincontainer">
      <div className="main-servicehead">
        <div className="service-container">
          <div className="servicefirstbox">
            <TbTruck className="truck-icon" />
            <h4>Super fast and free delivery</h4>
          </div>
        </div>
        <div className="service2">
          <div className="service-column-one">
            <div className="service-column-two">
              <MdSecurity className="second-icon" />
              <h4>Non-contract shipping</h4>
            </div>
          </div>
          <div className="service-third">
            <div className="service-fourth">
              <GiReceiveMoney className="third-icon" />
              <h4>Money back Gauranteed</h4>
            </div>
          </div>
        </div>
        <div className="last-card">
          <div className="lastbox">
            <RiSecurePaymentFill className="fourth-icon" />
            <h4>Super Secure payment system</h4>
          </div>
        </div>
      </div>
      <div className="mainfooter">
        <div className="mainfooter-container">
          <div className="footed">
            <div className="all-footed-data">
              <div className="for-customer-care">
                <h3 className="heading">Customer care</h3>
                <p>Help Center</p>
                <p> How to Buy</p>
                <p>Return & Refund Center</p>
                <Link to="/contact">
                  <p className="contact-area">Contact us</p>
                </Link>
              </div>
            </div>
            <div className="earn-with-pie">
              <h3 className="heading">Earn with Pie</h3>
              <p>Pie University</p>
              <p>Sell on Pie</p>
              <p>Code of Conduct</p>
            </div>
          </div>
          <div className="pie">
            <h3 className="heading">PIE</h3>
            <p>About Daraz</p>
            <p>Careers</p>
            <p>Daraz Blog</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Digital Payments</p>
            <p>Daraz Customer University</p>
            <p>Daraz Affiliate Program</p>
          </div>
        </div>
        <div className="icons-heading">
          <h3>Follow us On</h3>
        </div>
        <div className="social-media">
          <div className="facebook-logo">
            <BsFacebook />
          </div>
          <div className="instagram-logo">
            <FaInstagramSquare />
          </div>
          <div className="twitter-logo">
            <BsTwitter />
          </div>
          <div className="youtube-icons">
            <BsYoutube />
          </div>
        </div>
        <div className="wrapper-container">
          <div className="contact-number">
            <p>Contact number:+977987654321</p>
          </div>
          <div className="emailid">
            <p>E-mail:PieInteltechnology500@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
