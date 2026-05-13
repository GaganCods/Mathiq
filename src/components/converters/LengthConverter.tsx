import React from "react";
import { BaseConverter } from "./BaseConverter";

const options = [
  { value: "m", label: "Meter (m)" },
  { value: "km", label: "Kilometer (km)" },
  { value: "cm", label: "Centimeter (cm)" },
  { value: "mm", label: "Millimeter (mm)" },
  { value: "inch", label: "Inch (in)" },
  { value: "ft", label: "Foot (ft)" },
  { value: "yd", label: "Yard (yd)" },
  { value: "mi", label: "Mile (mi)" },
];

const conversionRatesToMeters: Record<string, number> = {
  m: 1,
  km: 1000,
  cm: 0.01,
  mm: 0.001,
  inch: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344,
};

const convertLength = (value: number, from: string, to: string) => {
  const valueInMeters = value * conversionRatesToMeters[from];
  return valueInMeters / conversionRatesToMeters[to];
};

export const LengthConverter = () => {
  return (
    <BaseConverter
      title="Length & Distance Converter"
      options={options}
      defaultFrom="m"
      defaultTo="ft"
      convert={convertLength}
    />
  );
};
