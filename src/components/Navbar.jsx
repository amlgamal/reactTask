import React from "react";
import { Link, NavLink } from "react-router";

export default function Navbar(props) {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/cart"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/admin"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                About
              </NavLink>
            </li>
            <Link to="/cart">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span className=" absolute bottom-4 left-3 rounded-full size-5 flex justify-center align2-center  bg-indigo-600 text-white">
                {props.noOfItemsInCart}
              </span>
            </div>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
