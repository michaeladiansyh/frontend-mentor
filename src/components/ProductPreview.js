import React from 'react';
import ImgMobile from '../assets/image-product-mobile.jpg';
import ImgDesktop from '../assets/image-product-desktop.jpg';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductPreview = () => {
  return (
    <div className=" bg-cream">
      <div className="font-outfit flex justify-center items-center h-screen">
        <div className="flex flex-col md:flex-row max-w-xs md:max-w-xl">
          <picture className="md:w-1/2">
            <source media="(min-width:480px)" srcSet={ImgDesktop}></source>
            <img
              src={ImgMobile}
              alt="product"
              className="rounded-t-2xl md:max-w-xs md:rounded-none"
            />
          </picture>
          <div className="p-4 bg-white rounded-b-2xl md:rounded-none md:pt-8">
            <p className="font-montserrat text-dark-grayish-blue tracking-widest font-bold">
              PERFUME
            </p>
            <h1 className="font-fraunces text-3xl p-1 md:mt-2">
              Gabrielle Essence Eau De Parfume
            </h1>
            <p className="font-montserrat font-medium text-dark-grayish-blue p-2 tracking-wider md:mt-4 md:tracking-normal">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex gap-5 md:mx-2">
              <p className="font-fraunces text-3xl text-dark-cyan">$149.99</p>
              <p className="text-dark-grayish-blue flex items-center font-montserrat">
                <s>$169.99</s>
              </p>
            </div>
            <button className="w-full inline-flex text-center items-center justify-center gap-2 bg-dark-cyan rounded-md text-white font-montserrat h-14 mb-1 mt-4 md:mt-8 hover:bg-very-dark-blue">
              <AiOutlineShoppingCart className="flex text-center" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
