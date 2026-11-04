import React from "react";
import { IoIosSearch } from "react-icons/io";
const SearchFilter = ({search,setSearch}) => {
  return (
    <>
      <div className="p-4 mt-35">
        <div className="p-4 bg-white flex justify-items-center text-black rounded-xl mx-auto gap-2 focus-within:ring-4 focus-within:ring-blue-400 transition duration-300">
          <IoIosSearch className="text-2xl text-gray-400" />
          <input
            type="text"
            placeholder="Search high-performance product by name or feature..."
            className="w-full px-2 outline-none focus:outline-none"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default SearchFilter;

// 04:32:05 Built Footer
