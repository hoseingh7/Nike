import { CiHeart } from "react-icons/ci";
import { Accordion } from "./Accordion/Accordion";

export const RinM = () => {
  return (
    <div className="flex flex-col w-1/2 justify-start text-start pl-6 gap-9">
      {/* one */}
      <div className="flex justify-start flex-col">
        <h2 className="text-2xl ">Air Jordan Legacy 312 Low</h2>
        <h2 className="text-xl ">Men's Shoes</h2>
      </div>
      {/* two */}
      <div className="flex justify-start flex-col">
        <h4>$145</h4>
      </div>
      {/* three */}
      <div className="flex justify-start items-center flex-col gap-4">
        <button className="text-white bg-black w-[376px] h-16 rounded-full">
          Add To Bag
        </button>
        <button className="flex items-center justify-center w-[376px] h-16 rounded-full border">
          favorite <CiHeart className="w-9 h-9" />
        </button>
      </div>
      {/* four */}
      <div className="flex justify-start flex-col">
        <h3 className="text-xl">Shipping</h3>
        <p>You'll see our shipping options at checkout.</p>
      </div>
      {/* five */}
      <div className="flex justify-start flex-col">
        <h3 className="text-lg">Free Pickup</h3>
        <button className="border-b w-24 text-lg border-black">
          Find a Store
        </button>
      </div>
      {/* six */}
      <div className="flex justify-start flex-col">
        <p>
          Who doesn't love a good mash-up? Taking elements from the AJ1, AJ3 and
          Air Alpha Force, these kicks rep the best. With premium leather up top
          and Nike Air cushioning underfoot, this is the beginning of a whole
          new legacy. Celebrate MJ with this shout-out to Chicago's 312 area
          code.
        </p>
      </div>
      {/* seven */}
      <div className="flex justify-start flex-col pl-6">
        <ul className="list-disc">
          <li className="">Shown: Black/University Red/Sail</li>
          <li>Style: HJ9029-010</li>
        </ul>
      </div>
      {/* eight */}
      <div className="flex font-bold justify-start flex-col border-b-2 border-black w-[164px]">
        <a href="border-b-2 ">View Product Details</a>
      </div>
      {/* nine */}
      <div>
        <Accordion />
      </div>
    </div>
  );
};
