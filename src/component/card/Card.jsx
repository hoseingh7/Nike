import { items } from "../../data/data";
import { useState, useEffect, useRef } from "react";
export const Card = () => {
  const divRef = useRef(null);
  const [divWidth, setDivWidth] = useState(0);
  console.log(divWidth);
  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        setDivWidth(divRef.current.offsetWidth);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        resizeObserver.unobserve(divRef.current);
      }
    };
  }, []);
  //   <div key={index} className="w-[23vw] h-[490px] flex flex-col">
  console.log("log", 0.3 * Number(divWidth));
  const cardWidth = 0.3 * divWidth;

  return (
    <div className="w-full flex flex-wrap gap-3" ref={divRef}>
      {items.map((i, index) => (
        <div
          style={{ width: `${cardWidth}px` }}
          key={index}
          className={`h-[490px] flex flex-col`}
        >
          <div className="w-full " style={{ height: `${cardWidth}px` }}>
            <img
              src={i.image}
              alt={`index-${index}`}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col text-left gap-4">
            <div>
              <h3 className="text-[20px] font-bold">{i.name}</h3>
              <p className="text-gray-400">{i.feture}</p>
              <p className="text-gray-400">{i.color.length} colors</p>
            </div>
            <p className="text-[25px] font-bold">{i.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
