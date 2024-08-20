import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../page/home/Home";
import { Products } from "../page/Products/Products";
import { ProductInfo } from "../page/Product-info/ProductInfo";
import { Landing } from "../page/landing/Landing";
import { Layout } from "./Layout";
import { Dashboard } from "../Dashboard/Dashboard";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />} path="/dash" />
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
