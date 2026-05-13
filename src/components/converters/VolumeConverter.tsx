import React from "react";
import { BaseConverter } from "./BaseConverter";

const options = [
  { value: "l", label: "Liter (L)" },
  { value: "ml", label: "Milliliter (mL)" },
  { value: "gal_us", label: "US Gallon (gal)" },
  { value: "gal_uk", label: "Imperial Gallon (gal)" },
  { value: "m3", label: "Cubic Meter (m³)" },
  { value: "cm3", label: "Cubic Centimeter (cm³)" },
  { value: "ft3", label: "Cubic Foot (ft³)" },
  { value: "in3", label: "Cubic Inch (in³)" },
];

const conversionRatesToLiters: Record<string, number> = {
  l: 1,
  ml: 0.001,
  gal_us: 3.78541,
  gal_uk: 4.54609,
  m3: 1000,
  cm3: 0.001,
  ft3: 28.3168,
  in3: 0.0163871,
};

const convertVolume = (value: number, from: string, to: string) => {
  const valueInLiters = value * conversionRatesToLiters[from];
  return valueInLiters / conversionRatesToLiters[to];
};

export const VolumeConverter = () => {
  return (
    <BaseConverter
      title="Volume Converter"
      options={options}
      defaultFrom="l"
      defaultTo="gal_us"
      convert={convertVolume}
    />
  );
};
