import React from 'react';
import bg_db from '../assets/bg-dashboard.jpg';
import img1 from '../assets/company.svg';
function Dashboard() {
  return (
    <>
      <div className="w-full px-7 py-20 bg-teal-600 text-white box-border grid grid-cols-2 gap-x-14 h-max" id="dashboard">
        <div className="w-full flex h-full justify-center items-center">
          <div className="w-max">
            <p className="text-6xl font-extrabold w-40 mb-5">IYEK COMPANY</p>
            <p className="w-64 font-normal text-lg">Kami melayani dengan sepenuh hati dan senyuman</p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img src={img1} alt="" className="w-3/4" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
