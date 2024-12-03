import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCartTotal } from "../../redux/cartSlice";
import { useEffect } from "react";
import CartDetail from "./CartDetail";

const Cart = () => {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((store) => store.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, totalAmount, itemCount]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((item) => (
            <CartDetail
              key={item.id}
              carts={item}
              totalAmount={totalAmount}
              itemCount={itemCount}
            />
          ))}
          <div className="flex items-center justify-between">
            <Link to={".."} className="bg-gray-300 px-4  py-2 rounded-md">
              Geri
            </Link>
            <div className="flex gap-2 items-center justify-end text-2xl ">
              TOPLAM TUTAR :{" "}
              <span className="text-3xl font-semibold">{totalAmount} ₺</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid place-items-center h-[400px]">
          <p className="bg-gray-200 px-20 py-10 rounded-md text-xl text-center">
            Sepetiniz Boş :(
            <br /> Lütfen ürün ekleyin..
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
