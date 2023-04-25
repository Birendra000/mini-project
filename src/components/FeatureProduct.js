import React, { useContext } from "react";
import { UserContext } from "../productDATA";
import Producted from "./Producted";
const FeatureProduct = () => {
  const { isLoading, featureProducts } = useContext(UserContext);

  if (isLoading) {
    return <div>....Loading</div>;
  }

  return (
    <div className="main-feature-container">
      <div className="feature--conatiner">
        <div className="first-data">Check now!</div>
        <div className="feature--heading">
          <h5>Our Feature Products</h5>
        </div>
      </div>
      <div className="grid-column-second">
        {featureProducts.map((curElement) => {
          return <Producted key={curElement.id} {...curElement} />;
        })}
      </div>
    </div>
  );
};

export default FeatureProduct;
