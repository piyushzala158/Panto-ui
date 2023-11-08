import React from "react";
import cart from "../../assets/images/cart.svg";
const Header = () => {
  return (
    <nav className="bg-transparent w-full">
      <div className="flex flex-wrap items-center justify-between p-4 md:px-0 pt-[20px] md:pt-[30px] lg:px-[80px]">
        <a href="/" className="flex items-center">
          <span className="self-center font-gilory-bold text-[20px] md:text-[28px] leading-[24px] md:leading-[24px] text-primary">
            Panto
          </span>
        </a>
        <div className="flex lg:order-2 items-center">
          <div className=" relative">
            <img src={cart} alt="cart" className="mr-[10px] lg:mr-0" />
            <p className="absolute text-primary bg-ternary rounded-full px-[6px] right-[0px] lg:right-[-10px] top-[3px]">
              0
            </p>
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden  "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-primary">
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="font-gilory-medium text-[14px] md:text-[18px] leading-[16px] md:leading-[21px] flex items-center justify-between w-full py-2 pl-3 pr-4  text-primary md:px-[30px] md:w-auto  md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Furniture
                <svg
                  className="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownNavbar"
                className="z-10 bg-white md:bg-transparent hidden font-normal  divide-gray-100 rounded-lg  w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-secondary md:text-primary"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="/"
                      className="font-gilory-medium text-[14px] md:text-[18px] leading-[16px] md:leading-[21px] block ps-10 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <a
                      href="/"
                      className="font-gilory-medium text-[14px] md:text-[18px] leading-[16px] md:leading-[21px] block ps-10 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="font-gilory-medium text-[14px] md:text-[18px] leading-[16px] md:leading-[21px] block ps-10 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 font-gilory-medium text-[14px] md:text-[18px] leading-[16px] md:leading-[21px] text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:px-[30px] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 font-gilory-medium text-[14px] md:text-[18px] leading-[16px] md:leading-[21px] text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:px-[30px] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 font-gilory-medium text-[14px] md:text-[18px] leading-[16px] md:leading-[21px] text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:px-[30px] md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
