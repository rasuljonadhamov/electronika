import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Card = ({ cart, setCart }) => {
  console.log(cart);
  return (
    <div className="container mx-auto px-16 mt-20">
      {cart.length ? (
        <>
          {cart.map((p) => (
            <div key={p.id} className="">
              <img
                className="w-52 h-36 object-contain"
                src={p.image}
                alt={p.title}
              />
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                <p className="text-gray-700 text-base mb-2">{p.price}</p>
                <p className="text-gray-700 text-base mb-2">{p.amount}</p>
              </div>

              <Link
                className="no-underline font-normal mt-16 text-1xl py-2 px-4 bg-primary text-white rounded-md "
                to={"/costumers"}
              >
                Sotib olish
              </Link>
            </div>
          ))}
        </>
      ) : (
        <h1>Your Card is epmty go shopping</h1>
      )}
    </div>
  );
};

export default Card;
