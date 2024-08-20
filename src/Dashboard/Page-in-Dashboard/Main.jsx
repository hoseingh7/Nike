import MainDash from "../Dash-component/MainDash/MainDash";
import RightSide from "../Dash-component/RigtSide/RightSide";

export const Main = () => {
  return (
    <div className="flex  w-full gap-6">
      <MainDash />
      <RightSide />
    </div>
  );
};
