import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CiWavePulse1 } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Layout = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <>
      <nav className="bg-white border-gray-200 px-5 sm:px-20 py-2.5 shadow-lg ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <CiWavePulse1 className="text-5xl" />
            <span className="ml-2 text-xl font-semibold whitespace-nowrap">
              Flow
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setIsClick((prevState) => !prevState)}>
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <div
            className={`${
              isClick ? 'visible' : 'hidden'
            } w-full md:block md:w-auto`}
            id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <Link
                  to="newbies"
                  onClick={() => setIsClick((prevState) => !prevState)}
                  className="block py-2 pr-4 pl-3 text-black font-bold rounded md:bg-transparent md:text-black md:p-0 md:hover:text-gray-600">
                  Newbies
                </Link>
              </li>
              <li>
                <Link
                  to="junior"
                  onClick={() => setIsClick((prevState) => !prevState)}
                  className="block py-2 pr-4 pl-3 text-black font-bold white rounded md:bg-transparent md:text-black md:p-0 md:hover:text-gray-600">
                  Junior
                </Link>
              </li>
              <li>
                <Link
                  to="intermediate"
                  onClick={() => setIsClick((prevState) => !prevState)}
                  className="block py-2 pr-4 pl-3 text-black font-bold white rounded md:bg-transparent md:text-black md:p-0 md:hover:text-gray-600">
                  Intermediate
                </Link>
              </li>
              <li>
                <Link
                  to="advanced"
                  onClick={() => setIsClick((prevState) => !prevState)}
                  className="block py-2 pr-4 pl-3 text-black font-bold white rounded md:bg-transparent md:text-black md:p-0 md:hover:text-gray-600">
                  Advanced
                </Link>
              </li>
              <li>
                <Link
                  to="guru"
                  onClick={() => setIsClick((prevState) => !prevState)}
                  className="block py-2 pr-4 pl-3 text-black font-bold white rounded md:bg-transparent md:text-black md:p-0 md:hover:text-gray-600">
                  Guru
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
