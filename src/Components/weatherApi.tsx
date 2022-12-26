import React, { useState, useEffect } from "react";

function WeatherCard() {
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "609ae40dcamsh4d85f0784315d18p1894d0jsn772df768d63a",
        "X-RapidAPI-Host": "aerisweather1.p.rapidapi.com",
      },
    };

    fetch(
      "https://aerisweather1.p.rapidapi.com/forecasts/antwerpen,be",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setLocation(response.response[0].place.name);
        setTemperature(response.response[0].periods[0].maxTempC);
        setHumidity(response.response[0].periods[0].humidity);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="weather-card">
      <h1 className="weather-text">{location}</h1>
      <p className="temp">Temperature: {temperature}°C</p>
      <p className="humidity">Humidity: {humidity}%</p>
    </div>
  );
}

export default WeatherCard;
