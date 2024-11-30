import { BiSearch } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
const NavbarRight = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex item-center p-3 rounded-full bg-gray-200  border ml-3  ">
        <input
          className="outline-none bg-gray-200 text-gray-600  w-44 md:w-56 lg:w-80"
          type="text"
          placeholder="Arama Yapınız.."
        />
        <BiSearch size={28} />
      </div>
      <AiOutlineHeart size={28} />
      <div className="relative">
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          3
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
};

export default NavbarRight;
