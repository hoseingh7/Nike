// import com from "../../../../images/video/image.jpeg";
import vid from "../../../../images/video/segment0.mp4";

export const VideoLine = () => {
  return (
    <div className="w-full flex flex-col gap-4 pb-36">
      {/* div for vide */}
      <div className=" w-full">
        <video src={vid} loop autoPlay className="w-full"></video>
        {/* <img src={com} alt="" /> */}
      </div>
      {/* div for bottom line  */}
      <div className="flex flex-col items-center justify-between gap-6">
        <h3 className="text-[60px] font-bold ">WIN ON AIR </h3>
        <p className="">
          Meet the next generation of Nike Air. Engineered to the exact
          <br />
          specifications of championship athletes.
        </p>
        <div className="flex justify-center items-center gap-5">
          <button className="w-[140px] h-10 bg-black text-white rounded-3xl">
            Experience Air
          </button>
          <button className="w-[100px] h-10 bg-black text-white rounded-3xl ">
            Shop Air
          </button>
        </div>
      </div>
    </div>
  );
};
