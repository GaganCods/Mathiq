import React from "react";
import { BaseConverter } from "./BaseConverter";

const options = [
  { value: "sq_m", label: "Square Meter (m²)" },
  { value: "sq_km", label: "Square Kilometer (km²)" },
  { value: "sq_cm", label: "Square Centimeter (cm²)" },
  { value: "sq_ft", label: "Square Foot (sq ft)" },
  { value: "sq_yd", label: "Square Yard (sq yd)" },
  { value: "sq_mi", label: "Square Mile (sq mi)" },
  { value: "ac", label: "Acre (ac)" },
  { value: "ha", label: "Hectare (ha)" },
];

const conversionRatesToSqM: Record<string, number> = {
  sq_m: 1,
  sq_km: 1e6,
  sq_cm: 0.0001,
  sq_ft: 0.092903,
  sq_yd: 0.836127,
  sq_mi: 2.59e6,
  ac: 4046.86,
  ha: 10000,
};

const convertArea = (value: number, from: string, to: string) => {
  const valueInSqM = value * conversionRatesToSqM[from];
  return valueInSqM / conversionRatesToSqM[to];
};

export const AreaConverter = () => {
  return (
    <BaseConverter
      title="Area Converter"
      options={options}
      defaultFrom="sq_m"
      defaultTo="sq_ft"
      convert={convertArea}
    />
  );
};
