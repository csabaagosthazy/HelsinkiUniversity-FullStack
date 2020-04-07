import React from "react";

const SearchField = ({ handleSearch, searchInput }) => {
  return (
    <label>
      Find countries:
      <input onChange={handleSearch} value={searchInput} />
    </label>
  );
};

export default SearchField;
