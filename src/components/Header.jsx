import { NavLink, Outlet } from "react-router-dom";
import Input from "./Input";

const links = [
  { path: "/", link: "Asosiy bo’lim" },
  { path: "/about", link: "Biz haqimizda" },
  { path: "/category", link: "Mahsulot kategoryasi" },
  { path: "/contact", link: "Aloqa" },
];

function Header({ cart }) {
  console.log(cart);
  return (
    <div className="container mx-auto">
      <header className="flex justify-between md:flex-row items-center py-4 md:py-6 px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl uppercase text-primary font-bold mb-4 md:mb-0">
          Logo
        </h1>

        <nav className="hidden lg:flex flex-wrap gap-4 md:gap-10 text-base md:text-xl font-medium">
          {links.map((link, i) => (
            <NavLink
              key={i}
              style={({ isActive }) => {
                return {
                  color: isActive ? " #000000" : "#635F5F",
                  textDecoration: isActive ? "underline" : "",
                };
              }}
              to={link.path}
              activeClassName="text-black"
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              {link.link}
            </NavLink>
          ))}
        </nav>

        <Input
          placeholder="Qidiruv..."
          type="search"
          className="hidden lg:block"
        />

        <div className="hidden lg:flex items-center gap-3 relative">
          <img
            src="/public/images/svg/profile-circle.svg"
            alt="Profile picture"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <img
            src="/public/images/svg/shopping-card.svg"
            alt="Shopping cart"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <span className="absolute right-4 text-red-600 -top-5">
            {cart.length}
          </span>
        </div>

        <NavLink to="#" className="lg:hidden">
          <img
            className="w-8 h-8 lg:hidden"
            src="/public/images/svg/hamburger.svg"
            alt="Menu button"
          />
        </NavLink>
        <Outlet />
      </header>
    </div>
  );
}

export default Header;
