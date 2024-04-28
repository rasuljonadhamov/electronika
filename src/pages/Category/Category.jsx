import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";

const Category = ({ title, items, buttons }) => {
  const [activeButtonId, setActiveButtonId] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handleButtonClick = (buttonId) => {
    setActiveButtonId(buttonId === activeButtonId ? 1 : buttonId);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="">
      <div className="container mx-auto px-4 py-8 grid  grid-cols-1 lg:grid-cols-[1fr_3fr] gap-12">
        <div className="flex flex-col gap-5 mt-4">
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

        <ul className="grid order-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </ul>
      </div>

      <div className="flex justify-center mt-4">
        {items.length > itemsPerPage &&
          Array.from({
            length: Math.ceil(items.length / itemsPerPage),
          }).map((page, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className="mx-1 bg-primary text-white px-4 py-2 rounded-md"
            >
              {" "}
              {index + 1}{" "}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Category;
