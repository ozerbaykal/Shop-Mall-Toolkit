import React from "react";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  return (
    <Link
      to={`products/${products.id}`}
      className="w-[350px] p-4 border bg-gray-100  bg-opacity-60 rounded-md relative "
    >
      <div className="text-xl md:text-2xl font-semibold bg bg-gray-700 rounded-md text-white absolute top-0 right-0 p-2 m-1">
        {products.price} <span>₺</span>
      </div>
      <img
        className="w-[200px] h-[200px] md:w-[250px]  md:h-[300px] object-cover hover:scale-125 transition m-auto"
        src={products.image}
      />
      <div className="text-center px-3 mt-3 text-lg">{products.title}</div>
    </Link>
  );
};

export default Product;
