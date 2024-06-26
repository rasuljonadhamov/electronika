import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Input from "./Input";
import { MobileNav } from "./MobileHeader";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const links = [
  { path: "/", link: "Asosiy bo’lim" },
  { path: "/about", link: "Biz haqimizda" },
  { path: "/category", link: "Mahsulot kategoryasi" },
  { path: "/contact", link: "Aloqa" },
];

function Header({ cart }) {
  const [showLinks, setShowLinks] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        const shortEmail = email.substring(0, 7);
        setUserEmail(`${shortEmail}...`);
      } else {
        setUserEmail("");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="container mx-auto">
      <header className="flex justify-between md:flex-row items-center py-4 md:py-6 px-4 md:px-8">
        <Link
          to={"/"}
          className="text-2xl md:text-3xl uppercase text-primary font-bold mb-4 md:mb-0"
        >
          Logo
        </Link>

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
            src="../../public/images/svg/profile-circle.svg"
            alt="Profile picture"
            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
            onClick={() => navigate("/login")}
          />
          <span className="absolute -left-2 -bottom-8">
            {userEmail && userEmail}
          </span>
          <img
            src="../../public/images/svg/shopping-card.svg"
            alt="Shopping cart"
            className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
            onClick={() => navigate("/card")}
          />
          <span className="absolute right-4 text-red-600 -top-5">
            {cart.length}
          </span>
        </div>

        <NavLink to="#" className="lg:hidden cursor-pointer">
          <img
            className="w-8 h-8 lg:hidden"
            src="../../public/images/svg/hamburger.svg"
            alt="Menu button"
            onClick={toggleLinks}
          />
        </NavLink>
        <Outlet />
      </header>

      <MobileNav open={showLinks} setOpen={setShowLinks} />
    </div>
  );
}

export default Header;
