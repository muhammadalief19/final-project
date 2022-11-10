import React from 'react';
import bg_db from '../assets/bg-dashboard.jpg';
import img1 from '../assets/company.svg';
function Dashboard() {
  return (
    <>
      <div className="w-full bg-cover px-10 py-28 text-white bg-no-repeat aspect-video box-border" id="section-dashboard">
        <p className="text-center text-4xl font-extrabold mb-8">Dashboard</p>
        <div className="w-full grid grid-cols-2 gap-10">
          <div className="">
            <img src={img1} alt="" className="w-full" />
          </div>
          <div className="w-full flex flex-col pt-20">
            <div className="w-full">
              <p className="text-2xl font-bold mb-2">Halo guys 👋</p>
              <p className="text-3xl font-bold mb-2 text-red-700">Selat datang di website perusahaan</p>
              <p className="text-5xl font-bold mb-2">
                Iyek <span className="text-red-500">Company</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
