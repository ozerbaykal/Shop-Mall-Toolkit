import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../../redux/ProductSlice";
import ProductDetail from "../../Components/ProductDetail/İndex";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (store) => store.products
  );
  console.log(productDetail);

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      {productDetailStatus == "LOADING" ? (
        <Loader />
      ) : productDetailStatus == "FAIL" ? (
        <Error />
      ) : (
        <ProductDetail productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
