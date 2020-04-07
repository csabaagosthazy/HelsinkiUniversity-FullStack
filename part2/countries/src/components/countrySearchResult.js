import React from "react";
import CountryList from "./countryList";
import CountryDetails from "./countryDetails";

const CountrySearchResult = ({ data, weather, handleShow }) => {
  const weatherLength = Object.keys(weather).length;
  if (data.length === 1 && weatherLength === 0) return <p>Loading...</p>;
  return (
    <div>
      {data.length > 1 ? (
        <CountryList data={data} handleShow={handleShow} />
      ) : data.length === 1 ? (
        <CountryDetails data={data} weather={weather} />
      ) : (
        <p> not found </p>
      )}
    </div>
  );
};

export default CountrySearchResult;
