import React, { useState } from "react";

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setCity((prevCity) => (prevCity = value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onChangeCity(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
    </form>
  );
};

export default WeatherForm;
