import React from "react";
import foto1 from "../assets/foto1.svg"

function Member() {
    return(
        <>
        <div className="w-full flex justify-center py-20" id="member">
            <div className="w-3/4 grid grid-cols-3">
                <div className="">
                    <img src="" alt="" className="" />
                </div>
                <div className="w-full flex flex-col justify-center h-max items-center">
                    <p className="text-xl font-bold">Nabil</p>
                    <img src={foto1} alt="" className="lg:w-1/2 w-3/4" />
                </div>
                <div className="">
                    <img src="" alt="" className="" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Member;