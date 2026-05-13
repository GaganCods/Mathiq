import React from "react";
import { BaseConverter } from "./BaseConverter";

// Fallback/Simulated Exchange Rates (relative to USD)
const conversionRatesToUSD: Record<string, number> = {
  USD: 1,
  EUR: 1.09,
  GBP: 1.27,
  JPY: 0.0066,
  CAD: 0.74,
  AUD: 0.65,
  INR: 0.012,
  CNY: 0.14,
  CHF: 1.13,
};

const options = [
  { value: "USD", label: "US Dollar (USD, $)" },
  { value: "EUR", label: "Euro (EUR, €)" },
  { value: "GBP", label: "British Pound (GBP, £)" },
  { value: "JPY", label: "Japanese Yen (JPY, ¥)" },
  { value: "CAD", label: "Canadian Dollar (CAD, $)" },
  { value: "AUD", label: "Australian Dollar (AUD, $)" },
  { value: "INR", label: "Indian Rupee (INR, ₹)" },
  { value: "CNY", label: "Chinese Yuan (CNY, ¥)" },
  { value: "CHF", label: "Swiss Franc (CHF, Fr)" },
];

const convertCurrency = (value: number, from: string, to: string) => {
  const valueInUSD = value * conversionRatesToUSD[from];
  return valueInUSD / conversionRatesToUSD[to];
};

export const CurrencyConverter = () => {
  return (
    <div className="w-full relative">
      {/* Disclaimer logic */}
      <div className="absolute top-0 right-0 text-[10px] text-gray-500 italic bg-black/40 px-2 py-1 rounded">
        Rates are simulated & estimated
      </div>
      <BaseConverter
        title="Currency Exchange"
        options={options}
        defaultFrom="USD"
        defaultTo="EUR"
        convert={convertCurrency}
      />
    </div>
  );
};
