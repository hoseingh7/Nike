import { Card } from "../../../../../component/card/Card";

export const Right = ({ className }) => {
  return (
    <div className={`flex flex-wrap pl-[100px] gap-5 ${className}`}>
      <Card />
    </div>
  );
};
