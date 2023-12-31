/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import logoImg2 from "../assets/logo-removebg-preview.png";

function Navebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-sky-900	 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" items-center  justify-between h-17">
            <div className="flex items-center flex-row-reverse">
              <div className="flex-shrink-0 flex ">
                <h2 className="text-sm text-white	mt-7 font-semibold	italic">
                  {" "}
                  لإدارة المدن الجامعية{" "}
                </h2>
                <img
                  className="h-20 w-20  bg-sky-900		"
                  src={logoImg2}
                  alt="logo"
                />
              </div>
              <div className="hidden md:block ">
                <div className="mr-10 w-2/3 flex items-baseline flex-row-reverse space-x-4">
                  <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    بيانات الطلاب
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    بيانات الطالبات
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    الإشراف على النظام
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navebar;

// <nav className="bg-sky-900 w-100 ">
//   <img className="h-20 w-20  bg-sky-900	" src={logoImg2} alt="Universitylogo"></img>

//   <ul className="">
//     <li>بيانات الطلاب</li>
//     <li>بيانات الطالبات</li>
//     <li>الاشراف على النظام</li>
//   </ul>
// </nav>
