import React from "react";

const Product = ({ products }) => {
  return (
    <div className="w-[400px] p-2 border  rounded-md relative ">
      <div>{products.price}</div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={products.image}
      />
    </div>
  );
};

export default Product;
