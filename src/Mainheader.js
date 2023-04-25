import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaAlignJustify } from "react-icons/fa";
import "./mainheader.css";

const Mainheader = () => {
  const [navhead, setnavhead] = useState(false);

  return (
    <div className="mainheader">
      <Link to="/">
        <img
          src={require("./smhlogo.png")}
          alt="navimage"
          className="img-heading"
        />
      </Link>
      <span>
        <ul className="headerlist">
          <li className="headerlistitem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="headerlistitem">
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li className="headerlistitem">
            <Link to="/product" className="link">
              Product
            </Link>
          </li>
          <li className="headerlistitem">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li className="headerlistitem">
            <Link to="/cart" className="link">
              <FiShoppingCart className="headercart" />
            </Link>
            <div className="humberofitems">5</div>
          </li>
        </ul>
      </span>
      {/* <div className="formobile">
        <a onClick={handleToggleNav} className="mobiledisplay">
          <FaAlignJustify />
        </a>
      </div> */}
    </div>
  );
};

export default Mainheader;
