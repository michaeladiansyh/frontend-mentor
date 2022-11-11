import React from 'react';
import QrComponent from '../assets/qr-desktop-preview.jpg';
import { Link } from 'react-router-dom';
const IndexNewbies = () => {
  return (
    <div className="font-outfit mt-6">
      <h1 className="text-xl text-center">Newbies Challenge</h1>
      <div className="w-full mt-5">
        <ul className="flex flex-wrap flex-grow justify-center">
          <li>
            <div className="rounded-xl shadow-lg w-[285px] h-[425px] md:w-96 md:h-[524px]">
              <div className="overflow-hidden">
                <Link to="qr-code">
                  <img
                    src={QrComponent}
                    alt="qr-code"
                    className="rounded-t-xl hover:scale-105 ease-out duration-500"
                  />
                </Link>
              </div>
              <div className="flex flex-col m-3 pb-2">
                <h1 className="font-bold text-lg my-3">Qr Component</h1>
                <div className="flex gap-2 mb-5">
                  <p className="text-cyan-600 font-semibold">HTML</p>
                  <p className="text-purple-600 font-semibold">CSS</p>
                </div>
                <p className="font-medium text-grayish-blue">
                  Qr Code Component made using Tailwind CSS, this is a challenge
                  from Frontend Mentor
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IndexNewbies;
