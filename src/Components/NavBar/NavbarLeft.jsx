import { Link } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gray-200 p-3 bg-opacity-25 rounded-md">
      <Link to={"/"}>
        <h1>
          Shoop<span className="text-blue-600 font-semibold">Mall</span>
        </h1>
      </Link>
    </div>
  );
};

export default NavbarLeft;
