import { useState } from "react";
import Button from "../../../components/Button";
import { useParams } from "react-router-dom";
import Input from "../../../components/Input";

const Details = ({ products, buttons, cart, setCart }) => {
  const { id } = useParams();

  const productThe = products.filter((item) => item.id == id);
  const product = productThe[0];

  const [activeButtonId, setActiveButtonId] = useState(1);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleButtonClick = (buttonId) => {
    setActiveButtonId(buttonId === activeButtonId ? 1 : buttonId);
  };

  const handleChange = (item) => {
    console.log(item);
    if (cart.some((cartItem) => cartItem.productCode === item.productCode)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.productCode === item.productCode
            ? {
                ...cartItem,
                amount: cartItem.amount + 1,
              }
            : cartItem
        )
      );
      return;
    }

    setCart((cart) => [...cart, { ...item, amount: 1 }]);
  };

  return (
    <div className=" gap-4 flex flex-col lg:flex-row">
      <div className=" flex-col gap-5 mt-4 pl-5  hidden lg:flex">
        {buttons.map((button) => (
          <Button
            key={button.text}
            title={button.text}
            icon={button.icon}
            id={button.id}
            isActive={button.id === activeButtonId}
            onClick={handleButtonClick}
            className={`btn px-4 py-2 w-96 ${button.color || "btn-primary"}`}
          />
        ))}
      </div>

      <div className="lg:hidden flex justify-evenly px-16">
        <Input placeholder="Qidiruv..." type="search" className="lg:hidden" />
        <select
          value={activeButtonId}
          onChange={(e) => handleButtonClick(parseInt(e.target.value))}
          className="block appearance-none  bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option value="">Select a button</option>
          {buttons.map((button) => (
            <option key={button.id} value={button.id}>
              {button.text}
            </option>
          ))}
        </select>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-12">
        <div className="shadow-md pt-20 px-9 pb-10 lg:w-96">
          <img src={product.image} alt={product.name} className="w-full" />
        </div>

        <div className="flex flex-col justify-between gap-5 lg:w-1/2">
          <div>
            <h2 className="text-2xl font-semibold mb-12">{product.name}</h2>
            <p className="text-gray-600 mt-2 mb-10">{product.description}</p>
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <p className="text-gray-800 font-bold">${product.price}</p>
              <span className="line-through  text-black opacity-65 lg:mt-0 mt-2">
                129,000 so’m
              </span>
              <button className="bg-[#EE1515] rounded-md font-bold text-white border-none py-2 px-11 lg:py-2 lg:px-11">
                Aksiya
              </button>
            </div>
            <div className="flex gap-10 mt-6">
              <p>Sotuvchi:</p>
              <span>Chakana savdo</span>
            </div>
            <div className="flex gap-10 mt-6">
              <p>Omborda:</p>
              <span>{product.id}</span>
            </div>
          </div>

          <div className=" flex items-center flex-col justify-center mt-4 select-none">
            <div className="flex  items-center">
              <Button title="-" onClick={handleDecrement} />
              <input
                type="text"
                value={count}
                readOnly
                className="w-12 text-center border border-gray-300 px-2 py-1"
              />
              <Button title="+" onClick={handleIncrement} />
            </div>
            <button
              onClick={() => handleChange(product)}
              className="bg-primary border-none mt-4  rounded-sm text-white ml-10 px-4 py-2"
            >
              Xarid qilish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
