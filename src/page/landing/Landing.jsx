import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

export const Landing = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};
