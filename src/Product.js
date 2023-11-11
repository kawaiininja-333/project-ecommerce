import React from "react";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

const Product = () => {
  return (
    <>
      <div className="ProductContainer">
        <div>
          <FilterSection />
        </div>
        <section className="product-view--sort">
          <div className="recomenditions-product-view">
            <div>
              <p>Recomendition</p>
            </div>
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
      <Footer />
      <div className="AppMobile">Only for lapto and desktop</div>
    </>
  );
};

export default Product;
