import { useState } from "react";
import Quantity from "./Quantity";
import Button from "./Button";

const ProductDetail = ({ productDetail }) => {
  return (
    <div className="flex gap-10 my-10 max-w-screen-2xl">
      <img
        className="max-w-80 h-auto  md:max-w-xs lg:max-w-md object-cover max-md:max-h-72 "
        src={productDetail?.image}
      />
      <div className="flex flex-col gap-2 my-4 w-full ">
        <div className="text-xl md:text-2xl lg:text-4xl font-semibold w-full ">
          {productDetail?.title}
        </div>
        <div className="text-md md:text-lg lg:text-xl">
          {productDetail?.description}
        </div>

        <div className="my-2 text-red-500 text-xl">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-red-500 text-xl">
          Count : {productDetail?.rating?.count}
        </div>
        <div className="text-3xl md:text-5xl font-semibold">
          {productDetail?.price}
          <span className="text-base text-zinc-600"> ₺</span>
        </div>
        <Quantity />
        <Button />
      </div>
    </div>
  );
};

export default ProductDetail;
