import React, { useRef, useState } from "react";
import img1 from "../assets/asset-8.svg";
import emailjs from "emailjs-com";
function Contact() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyNAniaSL13hcS3JKMev9C6qZp0jTI8K_wvNHCJDJ7PPsLjYn2_lhh-h99Dr32S1jUjQA/exec";
  const [btnActive, setBtnActive] = useState(true);
  const [alertActive, setAlertActive] = useState(false);
  const formContact = useRef();
  function submit(e) {
    e.preventDefault();
    setBtnActive((btnActive) => !btnActive);
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(document.forms["iyek-company-contact-form"]),
    })
      .then((response) => {
        setBtnActive((btnActive) => !btnActive);
        setAlertActive(true);
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
    emailjs
      .sendForm(
        "service_180awgh",
        "template_nbsgkvs",
        e.target,
        "137wB44dVKrv0KDCd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  function alert() {
    setAlertActive(false);
  }
  return (
    <>
      <div className="w-full bg-teal-600" id="contact">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,197.3C672,171,768,149,864,165.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="w-full py-10 flex flex-col items-center">
          <p className="text-center font-bold text-4xl mb-10 text-white">
            Contact
          </p>
          <div
            class={`relative w-[90%] md:w-3/4 lg:w-1/2 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mb-10 ${
              alertActive ? "block" : "hidden"
            }`}
            role="alert"
          >
            <div class="flex relative">
              <div class="py-1">
                <svg
                  class="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p class="font-bold">Success !</p>
                <p class="text-sm">
                  Pesan anda sudah kami terima, terima kasih 👌
                </p>
              </div>
            </div>
            <div
              className="absolute top-[22px] right-7 cursor-pointer"
              onClick={alert}
            >
              X
            </div>
          </div>
          <div className="w-full lg:w-[90%] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-10 h-max">
            <div className="w-full flex flex-col items-center text-center text-white pt-20 rounded">
              <p className="font-bold text-3xl mb-10">About Us</p>
              <p className="w-[90%] lg:w-[60%] text-lg mb-5">
                Manusia tidak pernah luput dengan yang namanya salah. Jika ada
                saran atau pun kritik, silahkan curahkan isi hati kalian pada
                form contact{" "}
              </p>
              <img src={img1} alt="" className="w-full md:w-3/4" />
            </div>
            <div className="w-full flex justify-center h-full items-center">
              <form
                name="iyek-company-contact-form"
                className="w-3/4 flex flex-col h-max"
                onSubmit={submit}
                ref={formContact}
              >
                <input
                  type="hidden"
                  name="subject"
                  id="subject"
                  value={"Kritik & Saran"}
                />
                <p className="text-3xl text-white font-bold text-center mb-5">
                  Contact Form
                </p>
                <div className="w-full py-5">
                  <label
                    htmlFor="name"
                    className="text-white font-medium mb-10"
                  >
                    Name :
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full h-10 rounded px-3"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="w-full py-5">
                  <label
                    htmlFor="email"
                    className="text-white font-medium mb-10"
                  >
                    Email :
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="w-full h-10 rounded px-3"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="w-full py-5">
                  <label
                    htmlFor="institute"
                    className="text-white font-medium mb-10"
                  >
                    Instititute :
                  </label>
                  <input
                    type="text"
                    name="institute"
                    id="institute"
                    className="w-full h-10 rounded px-3"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="w-full py-5">
                  <label
                    htmlFor="message"
                    className="text-white font-medium mb-10"
                  >
                    Message :
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full h-60 rounded px-3 py-2"
                    required
                    autoComplete="off"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`mt-5 w-full py-4 text-center bg-teal-400 rounded-full font-semibold text-white hover:bg-teal-500 duration-300 transition-all ease-in-out ${
                    btnActive ? "block" : "hidden"
                  }`}
                >
                  Send
                </button>
                <button
                  type="submit"
                  className={`mt-5 flex justify-center w-full py-4 bg-teal-400 rounded-full font-semibold text-white hover:bg-teal-500 duration-300 transition-all ease-in-out ${
                    btnActive ? "hidden" : "block"
                  }`}
                  disabled
                >
                  <div className="w-max flex">
                    <div
                      className="w-6 rounded-full
                                 aspect-square border-2 border-t-2 border-white border-t-teal-600 animate-spin"
                    ></div>
                    <p className="ml-3">Loading</p>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
