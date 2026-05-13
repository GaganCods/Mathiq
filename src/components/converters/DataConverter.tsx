import React from "react";
import { BaseConverter } from "./BaseConverter";

const options = [
  { value: "b", label: "Bit (b)" },
  { value: "B", label: "Byte (B)" },
  { value: "KB", label: "Kilobyte (KB)" },
  { value: "MB", label: "Megabyte (MB)" },
  { value: "GB", label: "Gigabyte (GB)" },
  { value: "TB", label: "Terabyte (TB)" },
  { value: "PB", label: "Petabyte (PB)" },
];

const conversionRatesToBytes: Record<string, number> = {
  b: 0.125, // 1/8 byte
  B: 1,
  KB: 1024,
  MB: 1048576, // 1024^2
  GB: 1073741824, // 1024^3
  TB: 1099511627776, // 1024^4
  PB: 1125899906842624, // 1024^5
};

const convertData = (value: number, from: string, to: string) => {
  const valueInBytes = value * conversionRatesToBytes[from];
  return valueInBytes / conversionRatesToBytes[to];
};

export const DataConverter = () => {
  return (
    <BaseConverter
      title="Data & Storage Converter"
      options={options}
      defaultFrom="GB"
      defaultTo="MB"
      convert={convertData}
    />
  );
};
