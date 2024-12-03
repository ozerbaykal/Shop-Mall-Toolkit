import { useDispatch } from "react-redux";
import { getCartTotal, removeFromCart } from "../../redux/cartSlice";
import { useEffect } from "react";

const CartDetail = ({ carts, itemCount, totalAmount }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div className="my-10 flex justify-between items-center ">
      <img
        className="w-[80px] h-[80px] md:w-[150px] md:h-[150px]"
        src={carts?.image}
      />
      <div>
        <div className="truncate w-[200px] md:w-[300px]">{carts?.title}</div>
        <div>{carts?.description}</div>
      </div>
      <div className="flex gap-2 md:gap-5 items-center">
        <div>
          <span className="text-2xl">{carts?.price}</span>
          <span>₺</span>
        </div>

        <span>Adet:{carts?.quantity}</span>
      </div>
      <div
        onClick={() => dispatch(removeFromCart(carts.id))}
        className="bg-red-400 text-white px-2 py-1 rounded-md hover:bg-red-500 cursor-pointer hover:scale-110 transition whitespace-nowrap"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartDetail;
