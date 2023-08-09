import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { TbDeviceIpadMinus } from "react-icons/tb";
import { AiOutlineAndroid, AiOutlineApple } from "react-icons/ai";

function Services() {
  const cont_class = "border-b border-gray-700 px-6 py-10",
    head_class = "text-center text-white text-xl mt-4",
    desc_class = "text-center mt-2",
    icon_class = "text-4xl text-orange-500";

  return (
    <div className="sm:px-6">
      <div className="grid w-full grid-cols-2">
        <div className={`${cont_class}`}>
          <div className="flex justify-center">
            <BsCodeSlash className={icon_class} />
          </div>
          <p className={head_class}>Front-end</p>
          <p className={desc_class}>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </div>
        <div className={`${cont_class} border-s`}>
          <div className="flex justify-center">
            <BsCodeSlash className={icon_class} />
          </div>
          <p className={head_class}>Back-end</p>
          <p className={desc_class}>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </div>

        <div className={`${cont_class}`}>
          <div className="flex justify-center">
            <AiOutlineAndroid className={icon_class} />
          </div>
          <p className={head_class}>Android Application</p>
          <p className={desc_class}>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </div>
        <div className={`${cont_class} border-s`}>
          <div className="flex justify-center">
            <AiOutlineApple className={icon_class} />
          </div>
          <p className={head_class}>iOS Application</p>
          <p className={desc_class}>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </div>

        <div className={`${cont_class}`}>
          <div className="flex justify-center">
            <TbDeviceIpadMinus className={icon_class} />
          </div>
          <p className={head_class}>System Administration</p>
          <p className={desc_class}>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
