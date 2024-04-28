import { useState } from "react";
import Button from "../../../components/Button";

const Details = ({ product }) => {
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart
    console.log(`Added ${count} ${product.name} to cart`);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-12">
      <div className="shadow-md pt-20 px-9 pb-10 lg:w-96">
        <img src={product.image} alt={product.name} className="w-full" />
      </div>

      <div className="flex flex-col justify-between lg:w-1/2">
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
        </div>

        <div className="flex flex-col lg:flex-row gap-5  items-center mt-4 select-none">
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
            onClick={handleAddToCart}
            className="bg-primary border-none rounded-sm text-white ml-4 px-4 py-2"
          >
            Xarid qilish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
