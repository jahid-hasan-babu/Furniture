import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-40 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : ""
      }`}
      style={{
        background: "#E9F4EE",
      }}
    >
      <div className="relative md:w-[90%] lg:w-[80%] mx-auto py-6 md:py-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[25px] md:text-[40px] font-BEBAS">
              TIMBER TROVE
            </h1>
          </div>
          <div className="hidden lg:flex space-x-6 xl:space-x-9 text-[18px] xl:text-[20px] font-medium">
            <NavLink to="/" className="hover:text-gray-700">
              HOME
            </NavLink>
            <NavLink to="/shop" className="hover:text-gray-700">
              SHOP
            </NavLink>
            <NavLink to="/features" className="hover:text-gray-700">
              FEATURES
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-700">
              CONTACT
            </NavLink>
          </div>
          <div className="hidden lg:flex items-center">
            <img
              className="pr-6 xl:pr-12"
              src="https://i.ibb.co/1mt3mJr/Group-1.png"
              alt="lock"
            />
            <Link
              to="/login"
              className="border-[2px] xl:border-[3px] text-[18px] xl:text-[19.5px] border-black py-2 xl:py-3 px-6 xl:px-9 rounded-lg hover:bg-black hover:text-white transition"
            >
              LOGIN
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <RxCross2 size={24} /> : <HiMenuAlt2 size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-white z-10 flex flex-col gap-5 items-center lg:hidden transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex justify-between items-center p-4">
          <h1 className="text-[25px] md:text-[40px] font-BEBAS">
            TIMBER TROVE
          </h1>
          <button
            className="w-[35px] h-[35px] rounded-full bg-black flex items-center justify-center"
            onClick={toggleMenu}
          >
            <RxCross2 className="text-white" size={22} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-2 mt-10 text-[15px] font-medium">
          <NavLink
            to="/"
            className="px-5 py-3 rounded hover:bg-gray-200 transition"
            onClick={toggleMenu}
          >
            HOME
          </NavLink>
          <NavLink
            to="/shop"
            className="px-5 py-3 rounded hover:bg-gray-200 transition"
            onClick={toggleMenu}
          >
            SHOP
          </NavLink>
          <NavLink
            to="/features"
            className="px-5 py-3 rounded hover:bg-gray-200 transition"
            onClick={toggleMenu}
          >
            FEATURES
          </NavLink>
          <NavLink
            to="/contact"
            className="px-5 py-3 rounded hover:bg-gray-200 transition"
            onClick={toggleMenu}
          >
            CONTACT
          </NavLink>
        </div>
        <div className="w-full flex justify-center mt-10">
          <Link
            to="/login"
            className="border border-black px-5 py-3 rounded-lg hover:bg-black hover:text-white transition text-[15px]"
            onClick={toggleMenu}
          >
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
