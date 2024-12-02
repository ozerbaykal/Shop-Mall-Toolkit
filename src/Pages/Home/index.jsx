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
      <Sorting setSort={setSort} />
      <div className="flex gap-10 ">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
