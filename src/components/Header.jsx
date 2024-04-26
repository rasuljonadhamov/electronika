import { NavLink, Outlet } from "react-router-dom";
import Input from "./Input";

const links = [
  { path: "/", link: "Asosiy bo’lim" },
  { path: "/about", link: "Biz haqimizda" },
  { path: "/category", link: "Mahsulot kategoryasi" },
  { path: "/contact", link: "Aloqa" },
];

function Header() {
  return (
    <div className="container mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-center md:items-start py-4 md:py-6 px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl uppercase text-primary font-bold mb-4 md:mb-0">
          Logo
        </h1>
        <nav className="flex flex-wrap gap-4 md:gap-10 text-base md:text-xl font-medium">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#000000" : "#635F5F",
                };
              }}
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              {link.link}
            </NavLink>
          ))}
        </nav>
        <div className="flex gap-3 items-center">
          <Input placeholder="Qidiruv..." type="search" className="mr-4" />
          <img
            src="/public/images/svg/profile-circle.svg"
            alt="Profile picture"
            className="w-8 h-8 md:w-10 md:h-10 mr-4"
          />
          <img
            src="/public/images/svg/shopping-card.svg"
            alt="Shopping cart"
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </div>
        <Outlet />
      </header>
    </div>
  );
}

export default Header;
