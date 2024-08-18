import { Lein } from "./Left-in-main/Lein";
import { RinM } from "./Right-in-Main/RinM";

export const MainTop = () => {
  return (
    <div className="w-4/5 mx-auto flex  pt-32">
      <Lein />
      <RinM />
    </div>
  );
};
