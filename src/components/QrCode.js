import React from 'react';
import QrImg from '../assets/image-qr-code.png';

const QrCode = () => {
  return (
    <div className="h-screen bg-light-gray">
      <div className="font-outfit flex justify-center items-center h-full">
        <div className="rounded-2xl bg-white p-5 max-w-xs">
          <img
            src={QrImg}
            alt="qr"
            className="rounded-xl"
            width={285}
            height={285}
          />
          <h1 className="font-bold text-xl mt-5 text-center">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-center mt-2 text-grayish-blue">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
