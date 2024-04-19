import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search() {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});
  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "743bee57fddbfaf52447193a87d5dd25";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type a city"
        onChange={updateCity}
        className="search"
      />
      <input type="submit" value="search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            <strong>City</strong>: {weather.city}
          </li>
          <li>
            <strong>Temperature</strong>: {Math.round(weather.temperature)}°C
          </li>
          <li>
            <strong>Description</strong>: {weather.description}{" "}
          </li>
          <li>
            <strong>Humidity</strong>: {weather.humidity} %{" "}
          </li>
          <li>
            <strong>Wind</strong>: {Math.round(weather.wind)} km/h
          </li>
          <li>
            <img src={weather.icon} alt={weather.description} />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
