import { useState } from "react";
import Category from "../../Components/Hero/Category";
import Products from "../../Components/Hero/Products";
import SliderComp from "../../Components/Hero/SliderComp";
import Sorting from "../../Components/Hero/Sorting";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  console.log(category);
  return (
    <div>
      <SliderComp />
      <Sorting />
      <div className="flex gap-10 ">
        <Category setCategory={setCategory} />
        <Products category={category} />
      </div>
    </div>
  );
};

export default Home;
