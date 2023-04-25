import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
const Producted = ({
  title,
  thumbnail,
  price,
  id,
  description,
  rating,
  category,
  brand,
  images,
}) => {
  return (
    <div className="main--container">
      <div className="card--wrapper">
        <Link
          to={`/singleproductpage/${id}`}
          className="link-without-underline"
        >
          <div className="main--card">
            <div className="main-imaged">
              <img src={thumbnail} className="product--image"></img>
            </div>
            <div className="product-category">
              <p>{title}</p>
            </div>
            <div className="card-flex">
              <div className="card-data-flex">
                <h5>Rs.{price}</h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Producted;
