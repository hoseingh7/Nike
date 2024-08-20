import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../page/home/Home";
import { Products } from "../page/Products/Products";
import { ProductInfo } from "../page/Product-info/ProductInfo";
import { Landing } from "../page/landing/Landing";
import { Layout } from "./Layout";
import { Dashboard } from "../Dashboard/Dashboard";
import { Main } from "../Dashboard/Page-in-Dashboard/Main";
import { ProductsDash } from "../Dashboard/Page-in-Dashboard/ProductsDash";
import { Order } from "../Dashboard/Page-in-Dashboard/Order";
import { Analytics } from "../Dashboard/Page-in-Dashboard/Analytics";
import { Customers } from "../Dashboard/Page-in-Dashboard/Customers";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard/main" element={<Main />} />
          <Route path="/dashboard/products" element={<ProductsDash />} />
          <Route path="/dashboard/order" element={<Order />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/customers" element={<Customers />} />
        </Route>

        {/* landing route */}
        <Route path="/landing" element={<Landing />} />
        {/* web route */}
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Products />} path="/products" />
          <Route element={<ProductInfo />} path="/pro-info" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
