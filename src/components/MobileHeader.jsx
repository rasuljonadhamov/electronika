import { useEffect } from "react";
import { Link } from "react-router-dom";

export const MobileNav = ({ open, setOpen }) => {
  useEffect(() => {
    const handleResize = () => {
      setOpen(false);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`responsive-menu  active-navbars  ${
        open ? "block" : "hidden"
      }`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="responsive-menu--close-area text-black sticky pt-5 pl-5 text-base"
      >
        &#10005;
      </div>
      <ul id="menu-main-menu-1" className={`lg:hidden `}>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-596">
          <Link onClick={() => setOpen(!open)} className=" text-white" to="/">
            Asosiy bo’lim
          </Link>
        </li>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-593">
          <Link
            onClick={() => setOpen(!open)}
            className=" text-white"
            to="/about"
          >
            Biz haqimizda
          </Link>
        </li>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-590">
          <Link
            onClick={() => setOpen(!open)}
            className=" text-white"
            to="/category"
          >
            Mahsulotlar
          </Link>
          <span className="dropdown-icon">
            <i className="fas fa-angle-down" />
          </span>
        </li>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-589">
          <Link
            onClick={() => setOpen(!open)}
            className=" text-white"
            to="/contact"
          >
            Aloqa
          </Link>
        </li>
      </ul>{" "}
    </div>
  );
};
