import changiz from "../../../../images/nike-just-do-it (1).jpg";
import asqar from "../../../../images/nike-just-do-it (2).jpg";
import hasan from "../../../../images/nike-just-do-it (3).jpg";
import mamad from "../../../../images/nike-just-do-it (4).jpg";
export const ShoeType = () => {
  const shoe = [
    {
      image: changiz,
      title: "Playground Pros",
      type: "Back to School",
    },
    {
      image: asqar,
      title: "The Latest Air Force 1s",
      type: "Always Iconic",
    },
    {
      image: hasan,
      title: "Medal Ceremony Collection",
      type: "Team USA",
    },
    {
      image: mamad,
      title: "Nike Windrunner Tracksuit",
      type: "New In",
    },
  ];
  return (
    <div className="flex flex-wrap w-full pb-14">
      {shoe.map((item, index) => (
        <div key={index} className="relative  w-1/2">
          <img src={item.image} alt={item.title} className=" h-auto" />
          <div className="absolute bottom-2 left-2  text-white p-2 flex flex-col gap-4 text-left">
            <p className="text-sm">{item.type}</p>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <button className="bg-white rounded-3xl text-black w-[75px] h-[36px]">
              shop
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
