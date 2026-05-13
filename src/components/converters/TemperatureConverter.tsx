import React from "react";
import { BaseConverter } from "./BaseConverter";

const options = [
  { value: "C", label: "Celsius (°C)" },
  { value: "F", label: "Fahrenheit (°F)" },
  { value: "K", label: "Kelvin (K)" },
];

const convertTemp = (value: number, from: string, to: string) => {
  if (from === to) return value;
  
  let tempInCelsius = value;
  if (from === "F") {
    tempInCelsius = ((value - 32) * 5) / 9;
  } else if (from === "K") {
    tempInCelsius = value - 273.15;
  }

  if (to === "C") return tempInCelsius;
  if (to === "F") return (tempInCelsius * 9) / 5 + 32;
  if (to === "K") return tempInCelsius + 273.15;

  return value;
};

export const TemperatureConverter = () => {
  return (
    <BaseConverter
      title="Temperature Converter"
      options={options}
      defaultFrom="C"
      defaultTo="F"
      convert={convertTemp}
    />
  );
};
