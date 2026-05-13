import React from "react";
import { BaseConverter } from "./BaseConverter";

const options = [
  { value: "ms", label: "Millisecond (ms)" },
  { value: "s", label: "Second (s)" },
  { value: "min", label: "Minute (min)" },
  { value: "h", label: "Hour (h)" },
  { value: "d", label: "Day (d)" },
  { value: "wk", label: "Week (wk)" },
  { value: "mo", label: "Month (mo)" },
  { value: "yr", label: "Year (yr)" },
];

const conversionRatesToSeconds: Record<string, number> = {
  ms: 0.001,
  s: 1,
  min: 60,
  h: 3600,
  d: 86400,
  wk: 604800,
  mo: 2628000, // Approximate (30.416 days)
  yr: 31536000, // Approximate (365 days)
};

const convertTime = (value: number, from: string, to: string) => {
  const valueInSeconds = value * conversionRatesToSeconds[from];
  return valueInSeconds / conversionRatesToSeconds[to];
};

export const TimeConverter = () => {
  return (
    <BaseConverter
      title="Time Converter"
      options={options}
      defaultFrom="h"
      defaultTo="min"
      convert={convertTime}
    />
  );
};
