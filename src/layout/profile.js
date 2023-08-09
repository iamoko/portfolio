import React from "react";
import Carousel from "../components/carousel/carousel";
import profile from "../assets/images/profile.png";
import _ from "lodash";
import { TypeAnimation } from "react-type-animation";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";
import { name } from "../utils/contacts";

function Profile() {
  const images = [
    "https://wallpaperaccess.com/full/1859582.jpg",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    "https://images3.alphacoders.com/876/876646.jpg",
    "https://4kwallpapers.com/images/wallpapers/sunset-underwater--11436.jpg",
  ];
  return (
    <div
      className="relative z-10 w-full overflow-hidden border-black md:rounded-3xl main min-h-[33rem]"
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
    >
      <div className="h-[80%]">
        <Carousel>
          {_.map(images, (img, i) => (
            <div key={i}>
              <img key={i} src={img} alt="img1" className="object-cover" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="absolute top-[30%]  w-full h-full">
        <div className="relative ">
          <div className="absolute mt-16 top-[80%] ml-[-50%] rounded-t-[90%]  h-[500px] main w-[200%] ">
            <p>dfghj</p>
          </div>

          <div className="absolute top-0 w-full">
            <div className="flex justify-center w-full">
              <img
                src={profile}
                alt="profile"
                className="object-cover w-40 h-40 border-2 border-black rounded-full"
              />
            </div>
            <div className="mt-4">
              <p className="text-4xl font-semibold text-center text-gray-200">
                {name}
              </p>

              <TypeAnimation
                className="mt-2 text-base font-semibold text-center text-white active"
                sequence={[
                  "Full Stack Software Engineer",
                  100,
                  "Android App developer",
                  500,
                  "iOS App developer",
                  500,
                  "Back-end Developer",
                  500,
                  "Programmer",
                  500,
                ]}
                wrapper="p"
                speed={50}
                repeat={Infinity}
              />

              <div className="flex justify-center gap-5 mt-4">
                <AiOutlineGithub className="text-xl text-white" />
                <AiOutlineTwitter className="text-xl text-white" />
                <AiFillLinkedin className="text-xl text-white" />
                <AiOutlineWhatsApp className="text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[0.5px] flex w-full border-t border-gray-700">
        <div className="flex items-center justify-center w-full gap-2 p-5">
          <p className="text-xs font-semibold text-gray-200 md:text-sm">
            DOWNLOAD CV
          </p>
          <AiOutlineCloudDownload className="text-base font-semibold text-gray-200" />
        </div>
        <div className="flex items-center justify-center w-full gap-2 p-5 border-gray-700 border-s">
          <p className="text-xs font-semibold text-gray-200 md:text-sm">
            CONTACT ME
          </p>
          <BsSendFill className="text-sm font-semibold text-gray-200 " />
        </div>
      </div>
    </div>
  );
}

export default Profile;
