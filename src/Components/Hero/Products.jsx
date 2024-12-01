import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/ProductSlice";
import Loader from "../Loader";
import Product from "./Product";
import Error from "../Error";

const Products = () => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((store) => store.products);
  console.log(products);
  console.log(productsStatus);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {productsStatus == "LOADING" ? (
        <Loader />
      ) : productsStatus == "ERROR ?" ? (
        <Error />
      ) : (
        products &&
        products.map((product) => (
          <Product products={product} key={product.id} />
        ))
      )}
    </div>
  );
};

export default Products;
