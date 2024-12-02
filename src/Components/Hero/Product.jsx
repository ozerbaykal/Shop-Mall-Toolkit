import React from "react";

const Product = ({ products }) => {
  return (
    <div className="w-[300px] p-2 border  rounded-md relative ">
      <div className="text-xl md:text-2xl font-semibold bg bg-gray-700 rounded-md text-white absolute top-0 right-0 p-2 m-1">
        {products.price} <span>₺</span>
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={products.image}
      />
      <div className="text-center px-3 mt-3 text-lg">{products.title}</div>
    </div>
  );
};

export default Product;
