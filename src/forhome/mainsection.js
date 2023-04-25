import React from "react";
// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { UserContext } from "../productDATA";

const Mainsection = () => {
  // const datavalue = useContext(UserContext);

  return (
    <>
      <div className="main-wrapper">
        <div className="first-section">
          <p className="paga">WELCOME TO</p>
          <h1>Nebula International</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            minus possimus? Magnam rem, labore praesentium earum ex, impedit
            itaque similique laboriosam cum placeat quisquam consectetur!
            {/* {datavalue} */}
          </p>
          <Link to="/product">
            <button className="shop-button">Shop</button>
          </Link>
        </div>
        <img src={require("./shoppingfamily.jpg")} alt="Samename"></img>
      </div>
    </>
  );
};

export default Mainsection;
