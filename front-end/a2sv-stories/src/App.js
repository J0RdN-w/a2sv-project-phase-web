import Body from "./compnents/Body";
import Footer from "./compnents/Footer";
import NavBar from "./compnents/NavBar";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 70) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="font-lato text-dark relative">
      <div className=" cursor-pointer -rotate-90 fixed left-5 origin-left top-[55%] border-[1.5px] tracking-wide z-50 rounded-br-md rounded-bl-md border-dark bg-primary flex items-center justify-center gap-2 w-fit px-4 py-4 shadow-md">
        <HeartIcon className="w-5 h-5 text-white" />
        <p className="text-white font-semibold">Make a Gift</p>
      </div>
      <NavBar />
      <Body />
      <Footer />
      <div className="bg-[#0057a5] w-fit p-2 rounded-full drop-shadow-xl fixed bottom-4 left-4 cursor-pointer">
        <img
          src="https://cdn-cookieyes.com/assets/images/revisit.svg"
          className="w-7 h-7"
          alt="Revisit consent button"
        />
      </div>

      <div
        className={`bg-primary flex items-center justify-center cursor-pointer rounded-full drop-shadow-xl fixed bottom-4 right-4 transition-all ease-in-out duration-300 ${
          isVisible ? "w-14 h-14" : "w-0 h-0"
        }`}
        onClick={scrollToTop}
      >
        <ChevronUpIcon className="text-white w-5 h-5" />
      </div>
    </div>
  );
}

export default App;
