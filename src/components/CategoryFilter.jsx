import React from "react";
import { FaTags } from "react-icons/fa";
import { initialProducts } from "../data/product";
const CategoryFilter = ({select,setSelect}) => {
  let availableCategories = [
    "All",
    ...new Set(initialProducts.map((p) => p.category)),
  ];
  return (
    <>
      <div className="flex flex-wrap p-4 gap-4 border-b border-gray-200">
        <FaTags className="text-xl text-orange-300 active:scale-95" />
        {availableCategories.map((category) => (
          <button
            key={category}
            onClick={()=>setSelect(category)}
            className={`px-4 text-md active:scale-95 text-gray-500 hover:bg-orange-300  hover:text-white rounded-full transition duration-200 shadow-md ${select === category ? "bg-orange-300 text-white shadow-gray-400" : "bg-white text-gray-500 hover:bg-orange-300 hover:text-white"}`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;
// 01:00:16 CategoryFilter.jsx
