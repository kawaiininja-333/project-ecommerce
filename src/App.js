// App.js
// components
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useToken from "./components/useToken";
// pages
import SinglrProduct from "./SingleProduct";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import ShoppingCheckout from "./components/ChectOut/ShoppingCheckout";
import Checkout from "./components/ChectOut/auth/Checkout";
import PaymentCompletion from "./components/ChectOut/auth/PaymentCompletion";
import Settings from "./components/Setting/Settings";
import Cart from "./components/AddToCart/Cart";
import ErrorPage from "./components/ErrorPage";
import Product from "./Product";
import ShowSingleProduct from "./SingleProduct/ShowSingleProduct";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // token

  const { token, removeToken, setToken } = useToken();
  return (
    <BrowserRouter>
      {!token || token === "" || token === undefined ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:id/detail" element={<SinglrProduct />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/signup" element={<Signup removeToken={removeToken} />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/category" element={<Product />} /> {/*from src not in components*/}
          <Route path="/product/:id/:name/:ModelName/in=view/detail" element={<ShowSingleProduct token={token} />} /> {/* SingleProductMain*/}
        </Routes>
      ) : (
        <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/category" element={<Product />} /> {/*from src not in components*/}
            <Route path="/setting" element={<Settings />} />
            <Route path="/product/:id/:name/:ModelName/in=view/detail" element={<ShowSingleProduct token={token} setToken={setToken} />} /> {/* SingleProductMain*/}
            <Route path="/cart" element={<Cart />} />
            <Route path="/purchese/:id/:email/checkout" element={<Checkout />} />
            <Route path="/product/:id/detail/:email/:name/:productname/:productShort/:quantity/purchese" element={<ShoppingCheckout token={token} />} />
            <Route path="/purchese/paymentdone" element={<PaymentCompletion />} />
            {/* <Route path="/product/:id/detail/SinglrProduct" element={<SinglrProduct token={token} />} /> */}
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}
export default App;
