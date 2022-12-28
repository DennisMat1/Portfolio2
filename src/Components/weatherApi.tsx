import React, { useState, useEffect } from "react";
import "./WeatherCard.css";
function WeatherCard() {
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
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
        setTemperature(response.response[0].periods[0].maxFeelslikeC);
        setHumidity(response.response[0].periods[0].humidity);
        setSunrise(response.response[0].periods[0].sunriseISO);
        setSunset(response.response[0].periods[0].sunsetISO);
      })
      .catch((err) => console.error(err));
  }, []);
  const sunriseTime = sunrise ? sunrise.split("T")[1].split("+")[0] : "";
  const sunsetTime = sunset ? sunset.split("T")[1].split("+")[0] : "";

  return (
    <div className="weather-card">
      <h1 className="weather-text">{location}</h1>
      <p className="temp">Temperatuur: {temperature}°C</p>
      <p className="humidity">luchtvochtigheid: {humidity}%</p>
      <p className="sunrise">Zonsopkomst: {sunriseTime}</p>
      <p className="sunset">zonsondergang: {sunsetTime}</p>
    </div>
  );
}

export default WeatherCard;
