import React from "react";
import foto1 from "../assets/nabil.webp";
import foto2 from "../assets/yoga.webp";
import foto3 from "../assets/alief.webp";

function Member() {
    return(
        <>
        <div className="w-full flex flex-col items-center py-20" id="member">
            <p className="text-center lg:mb-16 font-bold text-4xl text-teal-600">Members</p>
            <div className="w-3/4 grid grid-rows-3 gap-y-10 ">
                <div className="w-full flex justify-center h-max items-center hover:scale-110 duration-500 transition-all ease-out cursor-pointer">
                    <div className="w-[60%] box-border flex rounded-md overflow-hidden border border-slate-300">
                    <div className="w-max">
                    <img src={foto3} alt="" className="w-64" />
                    </div>
                    <div className="w-full flex flex-col justify-center px-3 py-2">
                        <p className="text-xl font-bold mb-2">Muhammad Alief Putra Pratama</p>
                        <p className="font-semibold mb-2">3122522023</p>
                        <p className="">Fullstack Developer</p>
                    </div>
                    </div>
                </div>
                <div className="w-full flex justify-center h-max items-center hover:scale-110 duration-500 transition-all ease-out cursor-pointer">
                    <div className="w-[60%] box-border flex rounded-md overflow-hidden border border-slate-300">
                    <div className="w-max">
                    <img src={foto1} alt="" className="w-64" />
                    </div>
                    <div className="w-full flex flex-col justify-center px-3 py-2">
                        <p className="text-xl font-bold mb-2">Muhammad Nabil Royyan</p>
                        <p className="font-semibold mb-2">3122522027</p>
                        <p className="">Cyber Security</p>
                    </div>
                    </div>
                </div>
                <div className="w-full flex justify-center h-max items-center hover:scale-110 duration-500 transition-all ease-out cursor-pointer">
                    <div className="w-[60%] box-border flex rounded-md overflow-hidden border border-slate-300">
                    <div className="w-max">
                    <img src={foto2} alt="" className="w-64" />
                    </div>
                    <div className="w-full flex flex-col justify-center px-3 py-2">
                        <p className="text-xl font-bold mb-2">Varyoga Loreansa</p>
                        <p className="font-semibold mb-2">3122522005</p>
                        <p className="">Cyber Security</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Member;