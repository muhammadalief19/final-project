import React, { useState } from 'react';

export default function Navbar(props) {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  function hamburgerMenu() {
    setHamburgerActive((hamburgerActive) => !hamburgerActive);
  }
  return (
    <>
      <nav className="w-full px-7 py-5 bg-sky-600 text-white grid grid-cols-3 h-max sticky top-0 z-50">
        <div className="w-full font-bold">
          <p className="text-3xl">{props.name}</p>
        </div>
        <div className="col-span-2 w-full flex justify-end h-full items-center">
          <div className={`${hamburgerActive ? 'flex' : 'hidden'} lg:flex absolute top-20 right-3 bg-slate-400 lg:bg-transparent lg:static w-28 lg:w-1/2 rounded`}>
            <ul className="w-full h-44 lg:h-max flex lg:flex-row flex-col justify-around items-center">
              <li className="">
                <a href="#section-dashboard" className="">
                  Dashboard
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  About
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  Partner
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  Member
                </a>
              </li>
              <li className="">
                <a href="" className="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div onClick={hamburgerMenu} className={`lg:hidden flex flex-col w-7 h-6 justify-between ${hamburgerActive ? 'hamburger-active' : ''} cursor-pointer`}>
            <span className="w-full h-1 bg-white rounded-full transition duration-300 ease-in-out origin-top-left"></span>
            <span className="w-full h-1 bg-white rounded-full transition duration-300 ease-in-out"></span>
            <span className="w-full h-1 bg-white rounded-full transition duration-300 ease-in-out origin-bottom-left"></span>
          </div>
        </div>
      </nav>
    </>
  );
}
