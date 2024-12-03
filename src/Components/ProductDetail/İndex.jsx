import Quantity from "./Quantity";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ProductDetail = ({ productDetail }) => {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        quantity: quantity,
        price: productDetail?.price,
      })
    );
  };

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
        <Quantity
          count={productDetail?.rating?.count}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <div className="flex items-center  justify-between">
          <Button add={addBasket} quantity={quantity} />
          <Link
            className="text-xl px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-400 transition"
            to={".."}
          >
            Geri
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
