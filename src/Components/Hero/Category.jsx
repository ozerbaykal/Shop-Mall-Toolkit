import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="md:w-1/6   bg-gray-100 p-4 max-h-screen">
      <div className="border-b pb-1 text-xl font-semibold">Kategori</div>

      {categories?.map((category, key) => (
        <div
          onClick={() => setCategory(category)}
          key={key}
          className="text-lg p-2 hover:bg-gray-200 cursor-pointer"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
