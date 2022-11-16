import React from "react";
import partner1 from "../assets/asset-4.svg"
import partner2 from "../assets/asset-5.svg"
import partner3 from "../assets/asset-6.svg"
import partner4 from "../assets/asset-7.svg"
function Partner() {
return (
    <>
    <div className="w-full bg-teal-600 text-white" id="partner">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,133.3C840,139,960,213,1080,224C1200,235,1320,181,1380,154.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <p className="text-4xl font-bold text-center mb-16">Partner</p>
        <div className="w-[90%] grid grid-cols-4 mx-auto items-center gap-24 py-10">
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L30,208C60,224,120,256,180,245.3C240,235,300,181,360,170.7C420,160,480,192,540,218.7C600,245,660,267,720,272C780,277,840,267,900,250.7C960,235,1020,213,1080,192C1140,171,1200,149,1260,144C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </div>
    </>
);
}

export default Partner;