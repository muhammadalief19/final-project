import React from "react";
import foto1 from "../assets/foto1.svg"

function Member() {
    return(
        <>
        <div className="w-full relative px-5 lg:px-7 py-20 lg:py-24 " id="member">
            <p className="text-4xl text-teal-600 px-9 font-bold text-center mb-5">Member</p>
            <p className="text-3-1 text-center font-mono ">web development</p>
            <div className="w-40 mx-auto items-center gap-24 py-10">
                <div className="w-full">
                <img src={foto1} alt="" className=""/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Member;