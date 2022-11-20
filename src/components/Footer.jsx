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
        <div className="w-3/4 grid grid-flow-row gap-y-5">
          <div className="w-full">
            <p className="text-3xl font-bold text-teal-600">
              Terima Kasih Kawan
            </p>
            <p className="font-medium text-lg">
              Terima kasih, telah bekunjung di website kami
            </p>
            <div className="w-40 flex justify-between">
              <a href="" className="">
                <FontAwesomeIcon class="w-5" icon={faInstagram} />
              </a>
              <a href="" className="">
                <FontAwesomeIcon class="w-5" icon={faGithub} />
              </a>
              <a href="" className="">
                <FontAwesomeIcon class="w-5" icon={faTelegram} />
              </a>
              <a href="" className="">
                <FontAwesomeIcon class="w-5" icon={faTwitter} />
              </a>
            </div>
          </div>
          <div className="w-full">
            <p className="text-center font-semibold text-gray-400">
              Copyright © 2022 Iyek Company
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
