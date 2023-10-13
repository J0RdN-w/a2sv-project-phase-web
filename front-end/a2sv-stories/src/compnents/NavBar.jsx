import React from "react";
import { useState, useEffect } from 'react'

function NavBar() {
  const [isScrolled, setisScrolled] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setisScrolled(true);
    } else {
      setisScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <nav className={`sticky top-0 left-0 bottom-0 bg-white z-50 flex flex-row items-center justify-between px-12 py-3 transition-all ease-in-out duration-300 ${isScrolled ? 'drop-shadow-md' : 'drop-shadow-none'}`}>
      <img src="/a2sv_logo.svg" alt="a2sv logo" className="" />
      <ul className="flex flex-row items-center justify-center gap-x-8 tracking-wide">
        <li>Home</li>
        <li>Teams</li>
        <li className="relative after:content-[''] after:bg-primary after:absolute after:-bottom-5 after:-left-2 after:-right-2 after:h-1.5 after:rounded-tl-full after:rounded-tr-full">
          Success Stories
        </li>
        <li>Abut Us</li>
        <li>Get Involved</li>
      </ul>
      <button type="button" className="bg-primary text-white px-5 py-2 rounded tracking-widest">Donate</button>
    </nav>
  );
}

export default NavBar;
