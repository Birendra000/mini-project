import React from "react";
import { Link } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <>
      <Link to="/">Home</Link>
      <p>{title}</p>
    </>
  );
};

export default PageNavigation;
