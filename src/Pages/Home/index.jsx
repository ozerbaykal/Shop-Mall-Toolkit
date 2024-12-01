import { useState } from "react";
import Category from "../../Components/Hero/Category";
import Products from "../../Components/Hero/Products";
import SliderComp from "../../Components/Hero/SliderComp";
import Sorting from "../../Components/Hero/Sorting";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div>
      <SliderComp />
      <Sorting />
      <div className="flex gap-2">
        <Category />
        <Products />
      </div>
    </div>
  );
};

export default Home;
