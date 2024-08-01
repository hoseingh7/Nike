import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../page/home/Home";
import { Header } from "../component/Header/Header";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};
