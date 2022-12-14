import React, { useEffect, useState } from "react";

export default function Navbar(props) {
  // navbar fixed
  window.onscroll = function () {
    const anjas = document.querySelector("#nav");
    const fixedNav = anjas.offsetTop;

    if (window.pageYOffset > fixedNav) {
      anjas.classList.add("navbar-fixed");
    } else {
      anjas.classList.remove("navbar-fixed");
    }
  };

  const [hamburgerActive, setHamburgerActive] = useState(false);

  function hamburgerMenu() {
    setHamburgerActive((hamburgerActive) => !hamburgerActive);
  }
  return (
    <>
      <nav
        className={`w-full px-7 py-5 text-white grid grid-cols-3 h-24 top-0 z-40 absolute `}
        id="nav"
      >
        <div className="w-full flex h-full items-center font-bold">
          <p className="text-xl lg:text-3xl">{props.name}</p>
        </div>
        <div className="col-span-2 w-full flex justify-end h-full items-center">
          <div
            id="a"
            className={`${
              hamburgerActive ? "flex" : "hidden"
            } lg:flex absolute top-[70px] right-3 bg-teal-700 bg-opacity-80 lg:bg-transparent lg:static w-32 lg:w-1/2 rounded`}
          >
            <ul className="w-full h-48 lg:h-max flex lg:flex-row flex-col justify-around items-center">
              <li className="">
                <a href="#dashboard" className="">
                  Dashboard
                </a>
              </li>
              <li className="">
                <a href="#about" className="">
                  About
                </a>
              </li>
              <li className="">
                <a href="#partner" className="">
                  Partner
                </a>
              </li>
              <li className="">
                <a href="#member" className="">
                  Member
                </a>
              </li>
              <li className="">
                <a href="#contact" className="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div
            onClick={hamburgerMenu}
            className={`lg:hidden flex flex-col w-7 h-6 justify-between ${
              hamburgerActive ? "hamburger-active" : ""
            } cursor-pointer`}
          >
            <span className="w-full h-1 bg-white rounded-full transition duration-300 ease-in-out origin-top-left"></span>
            <span className="w-full h-1 bg-white rounded-full transition duration-300 ease-in-out"></span>
            <span className="w-full h-1 bg-white rounded-full transition duration-300 ease-in-out origin-bottom-left"></span>
          </div>
        </div>
      </nav>
    </>
  );
}
