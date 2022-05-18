import React, { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";

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

      const json = await request.json();
      console.log(json);
      setWeather(json);
    } catch (error) {}
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
      <div>{weather?.current.temp_c}</div>
    </div>
  );
};

export default WeatherApp;
