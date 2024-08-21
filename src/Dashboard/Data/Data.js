import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
// import { link } from "react-router-dom";
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../../images/Dash-prof/-5918087784676049286_121.jpg";
import img2 from "../../images/Dash-prof/1722414889180.jpg";
import img3 from "../../images/Dash-prof/profile.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    link: "/dashboard/main",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
    link: "/dashboard/order",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
    link: "/dashboard/customers",
  },
  {
    icon: UilPackage,
    heading: "Products",
    link: "/dashboard/products",
  },
  {
    icon: UilChart,
    heading: "Analytics",
    link: "/dashboard/analytics",
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const UpdatesData = [
  {
    img: img1,
    name: "Hosein Gholami",
    noti: "Air Force 1 has ordered running.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Ramin Gholami",
    noti: "Luka 3 received  for  Basketball Shoes",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Ali Mirzad",
    noti: "has ordered Sabrina 2 for Basketball Shoes",
    time: "2 hours ago",
  },
];
