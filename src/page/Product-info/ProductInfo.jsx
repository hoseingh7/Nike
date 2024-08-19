import { MainTop } from "./component/mainTop/MainTop";
import { Slider } from "./component/slider/Slider";

export const ProductInfo = () => {
  return (
    <div className="flex flex-col">
      <MainTop /> <Slider />
    </div>
  );
};
