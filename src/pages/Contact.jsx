import React from "react";
import img1 from "../assets/asset-8.svg"
function Contact() {

    return(
        <>
        <div className="w-full bg-teal-600" id="contact">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,197.3C672,171,768,149,864,165.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div className="w-full py-10 flex flex-col items-center">
            <p className="text-center font-bold text-4xl mb-10 text-white">Contact</p>
            <div className="w-[90%] grid grid-cols-2">
                <div className="w-full flex flex-col items-center text-center text-white pt-20 rounded">
                    <p className="font-bold text-3xl mb-10">About Us</p>
                    <p className="w-[60%] text-lg mb-5">Manusia tidak pernah luput dengan yang namanya salah. Jika ada saran atau pun kritik, silahkan curahkan isi hati kalian pada form contact di samping </p>
                    <img src={img1} alt="" className="w-3/4"/>
                </div>
                <div className="w-full">
                    <form name="" className="w-3/4">

                    </form>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Contact;