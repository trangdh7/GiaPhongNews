import React, { useState, useEffect } from "react";
import "../styles/header.css";
import logo from "../assets/images/logo.png";

function Header() {
  const [language, setLanguage] = useState("vi");
  const [weather, setWeather] = useState(null);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "vi" ? "en" : "vi"));
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Ninh+Binh,vn&units=metric&lang=${language}&appid=${apiKey}`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [language]);

  return (
    <div className="bg-white py-3 border-bottom">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-center text-md-start">
        <div className="d-flex flex-column flex-md-row align-items-center gap-2 gap-md-3">
          <img src={logo} alt="Logo" width="200" />
          <h1 className="h5 mb-0 text-primary fw-bold">
            {language === "vi"
              ? "Báo điện tử Gia Phong"
              : "Gia Phong Online Newspaper"}
          </h1>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center gap-2">
          {weather ? (
            <div className="weather-info text-dark d-flex align-items-center gap-1">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
                style={{ width: "32px", height: "32px" }}
              />
              <span>
                {weather.name}: {weather.main.temp}°C,{" "}
                {weather.weather[0].description}
              </span>
            </div>
          ) : (
            <span>Loading weather...</span>
          )}
          <button className="btn btn-warning btn-sm" onClick={toggleLanguage}>
            {language === "vi" ? "ENGLISH →" : "TIẾNG VIỆT →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
