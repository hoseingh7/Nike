import { useState, useEffect, useRef } from "react";
import { getProducts } from "../../data/getProducts";
export const Card = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [divWidth, setDivWidth] = useState(0);

  const divRef = useRef(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const fetchedTasks = await getProducts();
        setTasks(fetchedTasks);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  console.log("tasks", tasks);
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
  const cardWidth = 0.3 * divWidth;
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  return (
    <div className="w-full flex flex-wrap gap-3" ref={divRef}>
      {tasks.map((i, index) => (
        <div
          style={{ width: `${cardWidth}px` }}
          key={index}
          className={`h-[490px] flex flex-col`}
        >
          <div className="w-full " style={{ height: `${cardWidth}px` }}>
            <img
              src={i.images?.[0]}
              alt={`index-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left gap-4">
            <div>
              <h3 className="text-[20px] font-bold">{i.name}</h3>
              <p className="text-gray-400">{i.category}</p>
              <p className="text-gray-400">{i.colors.length} colors</p>
            </div>
            <p className="text-[25px] font-bold">${i.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
