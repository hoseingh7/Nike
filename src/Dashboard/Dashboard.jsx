import { Outlet } from "react-router-dom";
import MainDash from "./Dash-component/MainDash/MainDash";
import RightSide from "./Dash-component/RigtSide/RightSide";
import Sidebar from "./Dash-component/SideBar/SideBar";
import "./Dashboard.css";
import { Main } from "./Page-in-Dashboard/Main";
export const Dashboard = () => {
  return (
    <div className="boxx">
      <div className="AppGlass">
        <Sidebar />
        {/* <MainDash />
        <RightSide /> */}
        <Outlet />
      </div>
    </div>
  );
};
