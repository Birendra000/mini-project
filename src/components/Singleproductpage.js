import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../productDATA";
import "../index.css";
import PageNavigation from "./PageNavigation";
import Images from "./Images";

const API = "http://localhost:2222/products";

const Singleproductpage = () => {
  const { getsingleproductitem, isSingleloading, singleproducted } =
    useContext(UserContext);

  const {
    id: ninek,
    title,
    thumbnail,
    price,
    description,
    discountPercentage,
    rating,
    brand,
    category,
    images,
  } = singleproducted;
  const { id } = useParams();
  useEffect(() => {
    getsingleproductitem(`${API}?id=${id}`);
  }, [id]);

  if (isSingleloading) {
    return <div className="page_loading">Loading.....</div>;
  }
  return (
    <div className="singlepage--maincard">
      <PageNavigation />
      <div className="main--title">{brand}</div>
    </div>
  );
};
export default Singleproductpage;
