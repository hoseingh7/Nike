import { AiOutlineGlobal } from "react-icons/ai";

export const Footer = () => {
  const items = [
    {
      title: "Resources",
      item1: "Gift Cards",
      item2: "Find a Store",
      item3: "Membership",
      item4: "Nike x NBA",
      item5: "Nike Journal",
      item6: "Site Feedback",
    },
    {
      title: "Help",
      item1: "Get Help",
      item2: "Order Status",
      item3: "Shipping and Delivery",
      item4: "Returns",
      item5: "Order Cancellation",
      item6: "Payment Options",
      item7: "Gift Card Balance",
      item8: "Contact Us",
    },
    {
      title: "Company",
      item1: "About Nike",
      item2: "News",
      item3: "Careers",
      item4: "Investors",
      item5: "Purpose",
      item6: "Sustainability",
    },
    {
      title: "Promotions & Discounts",
      item1: "Student",
      item2: "Military",
      item3: "Teacher",
      item4: "First Responders & Medical Professionals",
      item5: "Birthday",
    },
  ];

  return (
    <div className="w-11/12 border-t border-gray-200 mx-auto pt-9 flex justify-start gap-6">
      <div className="flex  mx-auto justify-around pb-2 text-left w-full">
        {items.map((item, index) => (
          <div key={index}>
            <h2 className="text-[15px] font-bold mb-4">{item.title}</h2>
            <ul>
              {Object.keys(item)
                .filter((key) => key.startsWith("item"))
                .map((key, index) => (
                  <li className="py-1 text-gray-400 " key={index}>
                    {item[key]}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-1/5 flex justify-center gap-2 ">
        <AiOutlineGlobal className="mt-1 text-gray-400" />

        <h1 className="text-[15px] text-gray-400 font-bold mb-4">
          United States
        </h1>
      </div>
    </div>
  );
};

{
  /* <div>
        <p>© 2024 Nike, Inc. All Rights Reserved</p>
        <p></p>
        <p>Terms of Sale</p>
        <p>Terms of Use</p>
        <p>Nike Privacy Policy</p>
        <p>Your Privacy Choices</p>
        <p>CA Supply Chains Act</p>
      </div> */
}
