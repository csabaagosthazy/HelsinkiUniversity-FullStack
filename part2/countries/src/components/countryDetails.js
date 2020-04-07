import React from "react";
import * as headers from "./headers";
import CountryWeather from "./countryWeather";

const CountryDetails = ({ data, weather }) => {
  const dataObj = data[0];
  return (
    <div>
      <headers.Header1 title={dataObj.name} />
      <p>Capital city: {dataObj.capital}</p>
      <p>Population: {dataObj.population}</p>
      <headers.Header2 title={"Languages"} />
      {dataObj.languages.map(language => (
        <li key={language.iso639_2}>{language.name}</li>
      ))}
      <img
        style={{ width: 150, height: 150, border: 1, marginTop: 20 }}
        src={dataObj.flag}
        alt=""
      />
      <headers.Header2 title={"Weather"} />
      <CountryWeather data={weather} />
    </div>
  );
};

export default CountryDetails;
