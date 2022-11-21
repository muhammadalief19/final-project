import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faGithub,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="w-full flex justify-center py-7">
        <div className="w-[90%] md:w-3/4 grid grid-flow-row gap-y-5">
          <div className="w-full">
            <p className="text-xl  md:text-2xl lg:text-3xl font-bold text-teal-600">
              Terima Kasih Kawan
            </p>
            <p className="font-medium text-base lg:text-lg">
              Terima kasih, telah bekunjung di website kami
            </p>
            <div className="mx-auto md:m-0 w-40 flex justify-between py-5">
              <a
                href="https://www.instagram.com/iyekcompany/"
                target={"_blank"}
                className=""
              >
                <FontAwesomeIcon
                  class="w-5 text-teal-600 hover:text-teal-800 transition-colors duration-500 ease-in-out"
                  icon={faInstagram}
                />
              </a>
              <a
                href="https://github.com/muhammadalief19/final-project"
                className=""
                target={"_blank"}
              >
                <FontAwesomeIcon
                  class="w-5 text-teal-600 hover:text-teal-800 transition-colors duration-500 ease-in-out"
                  icon={faGithub}
                />
              </a>
              <a href="" className="">
                <FontAwesomeIcon
                  class="w-5 text-teal-600 hover:text-teal-800 transition-colors duration-500 ease-in-out"
                  icon={faTelegram}
                />
              </a>
              <a
                href="https://twitter.com/CompanyIyek"
                target={"_blank"}
                className=""
              >
                <FontAwesomeIcon
                  class="w-5 text-teal-600 hover:text-teal-800 transition-colors duration-500 ease-in-out"
                  icon={faTwitter}
                />
              </a>
            </div>
          </div>
          <div className="w-full border-t-2 border-t-gray-400 pt-5">
            <p className="text-center text-sm lg:text-base font-semibold text-gray-400">
              Copyright © 2022 Iyek Company
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
