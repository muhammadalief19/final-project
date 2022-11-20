import React from "react";
import bg_db from "../assets/bg-dashboard.jpg";
import img1 from "../assets/company.svg";
function Dashboard() {
  return (
    <>
      <div className="w-full bg-teal-600" id="dashboard">
        <div className="w-full px-7 py-28 lg:py-20 text-white box-border grid grid-flow-row lg:grid-cols-2 lg:gap-x-14 gap-y-16 h-max">
          <div className="w-full flex h-full justify-center items-center">
            <div className="w-max">
              <p className="text-5xl md:text-6xl font-extrabold w-40 mb-5">
                IYEK COMPANY
              </p>
              <p className="w-64 text-base lg:text-lg">
                Kami melayani dengan sepenuh hati dan senyuman
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <img src={img1} alt="" className="w-3/4" />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,96L60,90.7C120,85,240,75,360,96C480,117,600,171,720,197.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Dashboard;
