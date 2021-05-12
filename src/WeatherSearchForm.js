import React, { useState } from "react";

const WeatherSearchForm = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [openWeatherApiKey, setOpenWeatherApiKey] = useState();
  return (
    <div className="weather-search">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <label htmlFor="openweather-api-key">
          OpenWeather API Key
          <input
            id="openweather-api-key"
            value={openWeatherApiKey}
            onChange={(event) => setOpenWeatherApiKey(event.target.value)}
          />
        </label>
      </form>
    </div>
  )
}

export default WeatherSearchForm;