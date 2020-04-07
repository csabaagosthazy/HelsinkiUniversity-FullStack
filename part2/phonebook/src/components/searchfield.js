import React from "react";

const SearchField = ({ handleSearch, searchInput }) => {
  return (
    <label>
      Search:
      <input onChange={handleSearch} value={searchInput} />
    </label>
  );
};

export default SearchField;
