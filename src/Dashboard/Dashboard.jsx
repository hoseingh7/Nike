import MainDash from "./Dash-component/MainDash/MainDash";
import RightSide from "./Dash-component/RigtSide/RightSide";
import Sidebar from "./Dash-component/SideBar/SideBar";
import "./Dashboard.css";
export const Dashboard = () => {
  return (
    <div className="boxx">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
};
