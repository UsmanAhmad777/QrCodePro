import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="flex justify-evenly items-center text-xl py-5  hover:align-top bg-white">
      <div className="logo">
        <h1 className="font-semibold">QR Code Pro</h1>
      </div>
      <ul className="flex gap-10">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => `${
              isActive
                ? "text-orange-600 duration-200"
                : "text-black hover:text-orange-600 "
            }
          `}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => `${
              isActive
                ? "text-orange-600 duration-200"
                : "text-black hover:text-orange-600 "
            }
          `}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => `${
              isActive
                ? "text-orange-600 duration-200"
                : "text-black hover:text-orange-600 "
            }
           `}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className=" flex gap-6">
        <button className="hover:text-orange-600 duration-200">Login</button>
        <button className="bg-orange-600 p-3 hover:bg-gray-950 text-white duration-200">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Nav;
