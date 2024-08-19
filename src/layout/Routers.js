import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../page/home/Home";
import { Header } from "../component/Header/Header";
import { Footer } from "../component/Footer/Footer";
import { Products } from "../page/Products/Products";
import { ProductInfo } from "../page/Product-info/ProductInfo";
import { Landing } from "../page/landing/Landing";
import { Layout } from "./Layout";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Products />} path="/products" />
          <Route element={<ProductInfo />} path="/pro-info" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
