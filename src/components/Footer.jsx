import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full mt-12 bg-primary text-white py-8 px-4 pb-24">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="">
          <h2 className="text-3xl font-medium">LOGO</h2>
          <p className="mt-4 font-bold opacity-70">Elektronika</p>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold m-0 p-0 text-2xl">Menu</h2>
          <Link to={"/"} className="font-medium opacity-70">
            Asosiy bo'lim
          </Link>
          <Link to={"/"} className="font-medium opacity-70">
            Product
          </Link>
          <Link to={"/contact"} className="font-medium opacity-70">
            Aloqa
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold">Ma’lumot</h3>
          <div className=" flex gap-3 items-center">
            <img
              className="w-[25px] h-8"
              src="/public/images/svg/location.svg"
              alt="location"
            />
            <p className="opacity-70 text-sm">
              Lorem ipsum dolor sit amet consectetur. Ultricies malesuada diam
              blandit magna quis tempus.
            </p>{" "}
          </div>
          <div className=" flex gap-3 items-center">
            <img
              className="w-[25px] h-8"
              src="/public/images/svg/phone.svg"
              alt="location"
            />
            <p className="opacity-70 text-sm">+998 00 000 22 00</p>
          </div>
          <div className=" flex gap-3 items-center">
            <img
              className="w-[25px] h-8"
              src="/public/images/svg/email.svg"
              alt="location"
            />
            <p className="opacity-70 text-sm">elektronika.uz@gmail.com</p>
          </div>
        </div>
      </div>
      <img
        className="mx-auto h-8 mt-10 cursor-pointer"
        src="/public/images/svg/Social Networks.svg"
        alt=""
      />
      <hr className="h-1 mt-12" />
    </footer>
  );
}

export default Footer;
