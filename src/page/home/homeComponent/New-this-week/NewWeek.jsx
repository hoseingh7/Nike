import asqar from "../../../../images/nike-just-do-it (6).jpg";
export const NewsWeek = () => {
  return (
    <div className="w-full flex flex-col gap-4 pb-36">
      {/* picture in line */}
      <div>
        <img src={asqar} alt="" />
      </div>

      {/* bottom the picture  */}
      <div className="flex flex-col items-center justify-between gap-6">
        <h3 className="text-[60px] font-bold">NEW THIS WEEk</h3>
        <button className="w-[150px] h-10 bg-black text-white rounded-3xl">
          Shop New Arrivals
        </button>
      </div>
    </div>
  );
};
