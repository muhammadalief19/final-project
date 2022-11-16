import React from "react";
import partner1 from "../assets/asset-4.svg"
import partner2 from "../assets/asset-5.svg"
import partner3 from "../assets/asset-6.svg"
import partner4 from "../assets/asset-7.svg"
function Partner() {
return (
    <>
    <div className="w-full bg-teal-600 text-white">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,133.3C840,139,960,213,1080,224C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <p className="text-4xl font-bold text-center mb-16">Partner</p>
        <div className="w-3/4 grid grid-cols-4 mx-auto items-center gap-24 pt-10 pb-20">
            <div className="w-full">
                <img src={partner1} alt="" className="w-full grayscale hover:grayscale-0 duration-500 transition-all ease-in-out" />
            </div>
            <div className="w-full">
                <img src={partner2} alt="" className="w-full grayscale hover:grayscale-0 duration-500 transition-all ease-in-out" />
            </div>
            <div className="w-full">
                <img src={partner3} alt="" className="w-full grayscale hover:grayscale-0 duration-500 transition-all ease-in-out" />
                </div>
            <div className="w-full">
                <img src={partner4} alt="" className="w-full grayscale hover:grayscale-0 duration-500 transition-all ease-in-out" />
            </div>
        </div>
    </div>
    </>
);
}

export default Partner;