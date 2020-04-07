import React from "react";

const CountryWeather = ({ data }) => {
  const { temperature, weather_icons, wind_speed, wind_dir } = data.current;
  return (
    <div>
      <p>Temperature: {temperature} Celsius</p>

      {weather_icons.map((icon, i) => (
        <img
          key={i}
          style={{ width: 150, height: 150, border: 1, marginTop: 20 }}
          src={icon}
          alt=""
        />
      ))}
      <h3>Wind:</h3>
      <p>Speed: {wind_speed}</p>
      <p>Dircetion: {wind_dir}</p>
    </div>
  );
};

export default CountryWeather;
