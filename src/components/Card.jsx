import { Link } from "react-router-dom";

const Card = ({ image, title, price, stockStatus, stockText, id }) => {
  return (
    <li className="category-item  rounded-lg shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all duration-300 overflow-hidden">
      <Link to={`/category/${id}`} className="block p-4 text-center">
        <img className="w-52 h-36 object-contain" src={image} alt={title} />
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-gray-700 text-base mb-2">{price}</p>
        </div>
      </Link>
      <div className="flex items-center justify-between px-4 pb-2 border-t border-gray-200">
        <span className="text-green-500 font-bold">{stockStatus}</span>
        <span className="text-gray-500 text-sm">{stockText}</span>
        <button className="btn btn-primary px-3 py-2">Batafsil</button>
      </div>
    </li>
  );
};

export default Card;
