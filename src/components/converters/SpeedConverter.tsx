import React from "react";
import { BaseConverter } from "./BaseConverter";

const options = [
  { value: "m_s", label: "Meters per second (m/s)" },
  { value: "km_h", label: "Kilometers per hour (km/h)" },
  { value: "mi_h", label: "Miles per hour (mph)" },
  { value: "knot", label: "Knot (kn)" },
  { value: "ft_s", label: "Feet per second (ft/s)" },
];

const conversionRatesToMS: Record<string, number> = {
  m_s: 1,
  km_h: 0.277778,
  mi_h: 0.44704,
  knot: 0.514444,
  ft_s: 0.3048,
};

const convertSpeed = (value: number, from: string, to: string) => {
  const valueInMS = value * conversionRatesToMS[from];
  return valueInMS / conversionRatesToMS[to];
};

export const SpeedConverter = () => {
  return (
    <BaseConverter
      title="Speed Converter"
      options={options}
      defaultFrom="km_h"
      defaultTo="mi_h"
      convert={convertSpeed}
    />
  );
};
