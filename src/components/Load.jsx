import React, { useState } from 'react';

function Load() {
  const [loadActive, setLoadActive] = useState(true);

  setTimeout(() => {
    setLoadActive((loadActive) => !loadActive);
  }, 5000);
  return (
    <>
      <div className={`w-full fixed ${loadActive ? 'flex' : 'hidden'} flex-col justify-center items-center z-50 h-screen bg-gray-400`}>
        <div className="w-14 aspect-square border-t-4 border-4 border-t-teal-600 border-white rounded-full animate-spin mb-6"></div>
        <p className="text-xl font-bold text-white">LOADING</p>
      </div>
    </>
  );
}

export default Load;
