import React, { useState, useEffect } from "react";
import axios from "axios";
import { Header1 } from "./components/headers";
import SearchField from "./components/searchField";
import CountrySearchResult from "./components/countrySearchResult";

const App = () => {
  // save clicks of each button to own state
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    console.log("Mounted");
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    console.log("Filter");
    const filteredData = countries.filter(country =>
      country.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    setSearchResult(filteredData);
  }, [searchInput, countries]);

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;

    console.log("effect");

    if (searchResult.length === 1) {
      console.log("Only one found");
      const city = searchResult[0].capital;
      const callString = `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`;
      console.log("get method from", callString);

      axios.get(callString).then(response => {
        if (response.data.success === undefined) {
          console.log("promise fulfilled");
          setWeatherData(response.data);
        } else {
          console.log(response.data.error.info);
          alert(`Error during getting weather data: \n ${response.data.error.info}`);
        }
      });
    }
  }, [searchResult, countries]);

  const handleSearch = event => {
    const { value } = event.target;
    setSearchInput(value);
  };

  const handleShow = name => {
    setSearchInput(name);
  };
  return (
    <div>
      <Header1 title={"Countries"} />
      <SearchField handleSearch={handleSearch} searchInput={searchInput} />
      <CountrySearchResult data={searchResult} weather={weatherData} handleShow={handleShow} />
    </div>
  );
};

export default App;
