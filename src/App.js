import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Singleproductpage from "./components/Singleproductpage";
import Navbar from "./Navbar";
import { UserContext } from "./productDATA";
import Productreducer from "./reducer.js/productreducer";
import ErrorBoundary from "./components/Errorboundary";
import axios from "axios";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSinglePageloading: false,
  singleproduct: {},
};
const API = "http://localhost:2222/products";

const App = () => {
  const [state, dispatch] = useReducer(Productreducer, initialState);

  async function getproductitem(url) {
    dispatch({ type: "SET_LOADING" });
    try {
      const apidataitem = await axios.get(url);
      dispatch({ type: "SET_API_DATA", payload: apidataitem.data });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  }

  const getsingleproductitem = async (url) => {
    dispatch({ type: "SET_SINGLEPAGE_LOADING" });
    try {
      const singleapidataitem = await axios.get(url);
      const singleproducted = await singleapidataitem.data;
      dispatch({ type: "SET_SINGLEAPI_DATA", payload: singleproducted });
      console.log(singleproducted);
    } catch (error) {
      dispatch({ type: "SINGLE_PAGE_API_ERROR" });
    }
  };

  useEffect(() => {
    getproductitem(API);
  }, []);
  return (
    <>
      <ErrorBoundary>
        <UserContext.Provider value={{ ...state, getsingleproductitem }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/product" element={<Product />} />
              <Route
                exact
                path="/singleproductpage/:id"
                element={<Singleproductpage />}
              />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ErrorBoundary>
    </>
  );
};

export default App;
