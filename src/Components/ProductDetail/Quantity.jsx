import { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    quantity > 0 && setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="flex items-center gap-5 my-4 text-3xl ">
      <div
        onClick={handleDecrement}
        className="cursor-pointer font-bold border rounded-full  bg-gray-300 px-2 hover:scale-110"
      >
        -
      </div>
      <input className="text-center w-10 " type="text" value={quantity} />
      <div
        onClick={handleIncrement}
        className="cursor-pointer font-bold border rounded-full  bg-gray-300 px-2  transition hover:scale-110 "
      >
        +
      </div>
    </div>
  );
};

export default Quantity;