import { FooterHome } from "./homeComponent/Footer-in-HomePage/FooterHome";
import { NewsWeek } from "./homeComponent/New-this-week/NewWeek";
import { ShopClassics } from "./homeComponent/Shop-Classics/ShopClassics";
import { Banner } from "./homeComponent/banner-in-header/Banner";
import { ShoeType } from "./homeComponent/shoe-type/ShoeType";
import { TowLine } from "./homeComponent/tow-Line-homepage/TowLine";
import { VideoLine } from "./homeComponent/video-Line/VideoLine";

export const Home = () => {
  return (
    <div className="flex flex-col pb-36">
      <Banner />
      <TowLine />
      <ShoeType />
      <VideoLine />
      <NewsWeek />
      <ShopClassics />
      <FooterHome />
    </div>
  );
};
