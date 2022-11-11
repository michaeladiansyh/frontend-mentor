import React from 'react';
import QrComponent from '../assets/qr-desktop-preview.jpg';
import ProductPreview from '../assets/product-review-desktop-preview.jpg';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const IndexNewbies = () => {
  const products = [
    {
      id: uuidv4(),
      image: QrComponent,
      title: 'Qr Component',
      route: 'qr-code',
      tags: ['HTML', 'CSS'],
      description:
        'Qr Code Component made using Tailwind CSS, this is a challenge from Frontend Mentor',
    },
    {
      id: uuidv4(),
      image: ProductPreview,
      title: 'Product Preview',
      route: 'product-preview',
      tags: ['HTML', 'CSS'],
      description:
        'Product Preview made using Tailwind CSS, this is a challenge from Frontend Mentor',
    },
  ];
  return (
    <div className="font-outfit mt-6">
      <h1 className="text-xl text-center">Newbies Challenge</h1>
      <div className="w-full mt-5">
        <ul className="flex flex-wrap flex-grow justify-center gap-8">
          {products.map((product) => (
            <li key={product.id}>
              <div className="rounded-xl shadow-lg w-[285px] h-[425px] md:w-96 md:h-[524px]">
                <div className="overflow-hidden">
                  <Link to={product.route}>
                    <img
                      src={product.image}
                      alt="qr-code"
                      className="rounded-t-xl hover:scale-105 ease-out duration-500"
                    />
                  </Link>
                </div>
                <div className="flex flex-col m-3 pb-2">
                  <h1 className="font-bold text-lg my-3">{product.title}</h1>
                  <div className="flex gap-2 mb-5">
                    {product.tags.map((tag) => (
                      <p
                        className={`${
                          (tag === 'HTML' && 'text-cyan-600') ||
                          (tag === 'CSS' && 'text-purple-600')
                        } font-semibold`}>
                        {tag}
                      </p>
                    ))}
                  </div>
                  <p className="font-medium text-grayish-blue">
                    {product.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndexNewbies;
