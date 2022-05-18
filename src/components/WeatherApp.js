import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";

import styles from "./WeatherApp.module.css";

const WeatherApp = () => {
  // Estado a recibir objeto con info API weather
  const [weather, setWeather] = useState(null);

  //   UseEFFECT - al iniciar app, []/al renderizar componente [comp]/al destruir componente
  useEffect(() => {
    loadInfo();
  }, []);

  const loadInfo = async (city = "london") => {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );

      setTimeout(() => {
        setWeather(json);
      }, 2000);
      const json = await request.json();
      //   console.log(json);
    } catch (error) {}
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  );
};

export default WeatherApp;
