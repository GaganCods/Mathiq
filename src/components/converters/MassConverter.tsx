import React from "react";
import { BaseConverter } from "./BaseConverter";

const options = [
  { value: "kg", label: "Kilogram (kg)" },
  { value: "g", label: "Gram (g)" },
  { value: "mg", label: "Milligram (mg)" },
  { value: "lb", label: "Pound (lb)" },
  { value: "oz", label: "Ounce (oz)" },
  { value: "t", label: "Metric Ton (t)" },
];

const conversionRatesToKg: Record<string, number> = {
  kg: 1,
  g: 0.001,
  mg: 0.000001,
  lb: 0.45359237,
  oz: 0.0283495231,
  t: 1000,
};

const convertMass = (value: number, from: string, to: string) => {
  const valueInKg = value * conversionRatesToKg[from];
  return valueInKg / conversionRatesToKg[to];
};

export const MassConverter = () => {
  return (
    <BaseConverter
      title="Weight & Mass Converter"
      options={options}
      defaultFrom="kg"
      defaultTo="lb"
      convert={convertMass}
    />
  );
};
