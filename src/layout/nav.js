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

  const icon_class = `md:text-xl text-md text-gray-100 group-hover:text-orange-400 transform transition duration-300`;

  const menu = [
    {
      icon: (
        <AiOutlineUser
          className={`${icon_class} ${active === "about" && "active"}`}
        />
      ),
      label: "About",
    },
    {
      icon: (
        <BsMenuButtonWide
          className={`${icon_class} ${active === "resume" && "active"}`}
        />
      ),
      label: "Resume",
    },
    {
      icon: (
        <BsHddNetwork
          className={`${icon_class} ${active === "works" && "active"}`}
        />
      ),
      label: "Works",
    },
    {
      icon: (
        <BsSend
          className={`${icon_class} ${active === "contact" && "active"}`}
        />
      ),
      label: "Contact",
    },
    {
      icon: (
        <BsCodeSquare
          className={`${icon_class} ${active === "products" && "active"}`}
        />
      ),
      label: "Products",
    },
  ];
  return (
    <div>
      <div className="hidden sm:block pt-3 pb-0.5 md:rounded-3xl me-2 main md:mt-4">
        {_.map(menu, (m, i) => (
          <Link
            to={`/${m.label.toLowerCase()}`}
            className="p-0 m-0 px-9"
            key={i}
          >
            <div className={`pb-4 group border-slate-700 relative`}>
              <div className="flex justify-center">{m.icon}</div>
              <p className="absolute top-[-2px] z-20 left-14 active-bg text-sm px-3 text-black py-1 rounded-full font-medium hidden group-hover:block transition duration-200 transform">
                {m.label}
              </p>
              {/* <p
                className={`mt-2 text-xs text-center text-gray-100 transition duration-300 transform group-hover:text-orange-400 ${
                  active === m.label.toLowerCase() && "active"
                }`}
              >
                {m.label}
              </p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
