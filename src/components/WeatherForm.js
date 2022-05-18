import React, { useState } from "react";
import styles from "./WeatherForm.module.css";

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
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        onChange={handleChange}
        className={styles.input}
        placeholder="Search City..."
      />
    </form>
  );
};

export default WeatherForm;
