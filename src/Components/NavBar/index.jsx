import Container from "../../Containers";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center my-3">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default NavBar;
