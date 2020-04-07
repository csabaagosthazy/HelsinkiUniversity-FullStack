import React from "react";

const CountryList = props => {
  if (props.data.length > 10) return <p>Too many matches, specify an other filter</p>;
  return (
    <div>
      {props.data.map(country => (
        <li key={country.alpha3Code}>
          {country.name}
          <button onClick={() => props.handleShow(country.name)}>Show</button>
        </li>
      ))}
    </div>
  );
};

export default CountryList;
