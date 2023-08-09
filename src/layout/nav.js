import React, { useState } from "react";
import _ from "lodash";
import { AiOutlineUser } from "react-icons/ai";
import {
  BsMenuButtonWide,
  BsHddNetwork,
  BsSend,
  BsCodeSquare,
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  let location = useLocation();
  const [active, setActive] = useState("");

  React.useEffect(() => {
    setActive(location.pathname.substring(1));
  }, [location]);

  const icon_class = `md:text-xl text-lg text-gray-100 group-hover:text-orange-400 transform transition duration-300`;
  const menu = [
    {
      icon: (
        <AiOutlineUser
          className={`${icon_class} ${active === "about" && "active"}`}
        />
      ),
      label: "About",
      isBorder: true,
    },
    {
      icon: (
        <BsMenuButtonWide
          className={`${icon_class} ${active === "resume" && "active"}`}
        />
      ),
      label: "Resume",
      isBorder: true,
    },
    {
      icon: (
        <BsHddNetwork
          className={`${icon_class} ${active === "works" && "active"}`}
        />
      ),
      label: "Works",
      isBorder: true,
    },
    {
      icon: (
        <BsSend
          className={`${icon_class} ${active === "contact" && "active"}`}
        />
      ),
      label: "Contact",
      isBorder: true,
    },
    {
      icon: (
        <BsCodeSquare
          className={`${icon_class} ${active === "products" && "active"}`}
        />
      ),
      label: "Products",
      isBorder: false,
    },
  ];
  return (
    <div>
      <div className="px-4 pt-5 pb-0.5 rounded-sm main md:mt-4">
        {_.map(menu, (m, i) => (
          <Link to={`/${m.label.toLowerCase()}`} className="p-0 m-0" key={i}>
            <div
              className={`pb-2 mb-4 group ${
                m.isBorder && "border-b-[0.5px]"
              } border-slate-700 `}
            >
              <div className="flex justify-center">{m.icon}</div>
              <p
                className={`mt-2 text-xs text-center text-gray-100 transition duration-300 transform group-hover:text-orange-400 ${
                  active === m.label.toLowerCase() && "active"
                }`}
              >
                {m.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
