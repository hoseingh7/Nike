import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../page/home/Home";
import { Header } from "../component/Header/Header";
import { Footer } from "../component/Footer/Footer";
import { Products } from "../page/Products/Products";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Products />} path="/products" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
