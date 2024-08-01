import { SiJordan } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";

export const Header = () => {
  return (
    <div className="w-full  flex flex-col ">
      {/* top header */}
      <div className="bg-[#f5f5f5] flex justify-between px-10 h-10 items-center">
        <div className="flex gap-2 pl-2 items-center ">
          <SiJordan />
          <a
            aria-label="Converse"
            class="brand-link"
            data-testid="link"
            href="https://www.nike.com/w/converse-akmjx"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M8.045 10.99V7.73L6.19 10.37 3.115 9.35l1.94 2.64-1.905 2.64 3.045-1.005 1.855 2.64v-3.26l3.11-1.02-3.115-.995zm12.84 1.02l-6.82 7.49H8.21l6.825-7.49L8.21 4.5h5.856l6.819 7.51z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-1 py-3">
          <div className="border-r border-gray-400  px-2">Find a Store</div>
          <div className="border-r border-gray-400  px-2">Help</div>
          <div className="border-r border-gray-400  px-2">Join Us</div>
          <div className="">Sign In</div>
        </div>
      </div>

      {/* bottom header */}

      <div className="flex justify-between items-center px-10">
        <div>
          <SiNike className="w-[80px] h-[80px]" />
        </div>
        <div className="flex items-center gap-3 font-bold text-lg">
          <p>New & Featured</p>
          <p>Men</p>
          <p>Women</p>
          <p>Kide</p>
          <p>Jordan</p>
          <p>Sale</p>
        </div>
        <div className="flex items-center gap-3">
          <CiSearch className="w-9 h-9" />
          <CiHeart className="w-9 h-9" />
          <BsBag className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
