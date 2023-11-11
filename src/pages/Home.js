import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import MenuIntroduction from "../components/DashbordBtn";
import logo from "../logo.png";
import Card from "../components/Card";
import { Button } from "@mui/material";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import calculateDaysSinceLogin from "../components/LogintimeCalculation";
import { useProductContext } from "../context/productContext";

function Home() {
  calculateDaysSinceLogin();
  let loadProductless = "Show More";
  let letloadless = false;

  // product data from context
  const { products } = useProductContext();

  const handleReload = () => {
    window.location.reload();
  };

  const [loadProduct, setloadProduct] = useState(10);
  const loadMoreProduct = () => {
    if (loadProduct !== 40) {
      setloadProduct(loadProduct + 5);
    }
  };
  if (loadProduct === 40) {
    loadProductless = "Show Less";
    letloadless = true;
  }

  const loadLessProduct = () => {
    if (letloadless) setloadProduct(loadProduct - 30);
  };
  const logged = localStorage.getItem("email");
  let closeBtn = "";
  if (logged) {
    closeBtn = "closeBtn";
  }
  // const time = localStorage.getItem("Logtime");

  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img className="main-logo" src={logo} alt="Shopping-logo" />
            <p>Kawaii</p>
          </div>
          {/* Search featch */}
          <div>
            <Search></Search>
          </div>

          {/* navbar */}
          <Navbar />
          {/* Drop Down Details */}
          <MenuIntroduction />
          <Link className={closeBtn} to="/signup">
            <Button variant="contained">Signup</Button>
          </Link>
        </header>

        <main className="App-main">
          <div className="poster">
            <Card classname="cards"></Card>
            <Card classname="cards"></Card>
            <Card classname="cards"></Card>
          </div>
          <div className="products">
            <div className="control" onClick={handleReload}>
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </main>
        <div className="LoadProduct">
          <span className="LoadBorder">
            <button className="LoadProductBtn" onClick={letloadless ? loadLessProduct : loadMoreProduct}>
              {loadProductless}
            </button>
          </span>
        </div>
        <Footer />
      </div>
      <div className="AppMobile">Only for lapto and desktop</div>
    </React.Fragment>
  );
}

export default Home;
