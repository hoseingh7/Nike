import { Outlet } from "react-router-dom";
import { Header } from "../component/Header/Header";
import { Footer } from "../component/Footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
