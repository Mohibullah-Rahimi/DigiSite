import React from "react";
import { GlobalStyle } from "./style";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Shop from "../../pages/Shop/Shop";
import Contact from "../../pages/Contact/Contact";
import CartPage from "../../pages/Cart/CartPage";
import SingleProductPage from "../../pages/SingleProductPage/SingleProductPage";
import Checkout from "../../pages/Checkout/Checkout";
import Error from "../../pages/Error/Error";
import Confirmation from "../../pages/Confirmation/Confirmation";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<SingleProductPage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="confirmation" element={<Confirmation />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Header />
      <main role="main">
        <AppRoutes />
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
