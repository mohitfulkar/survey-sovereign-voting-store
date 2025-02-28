import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ handleChange }) => {
  return (
    <div>
      <input
        className=" w-1/2 mt-3 p-1 pl-3 border border-gray-300 rounded-sm h-12"
        type="text"
        name="search"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
