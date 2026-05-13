import React from "react";

export const CURRENCIES = [
  { symbol: "$", label: "USD ($)", value: "USD" },
  { symbol: "€", label: "EUR (€)", value: "EUR" },
  { symbol: "£", label: "GBP (£)", value: "GBP" },
  { symbol: "₹", label: "INR (₹)", value: "INR" },
  { symbol: "¥", label: "JPY (¥)", value: "JPY" },
  { symbol: "A$", label: "AUD (A$)", value: "AUD" },
  { symbol: "C$", label: "CAD (C$)", value: "CAD" },
];

export const CurrencySelector = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) => {
  return (
    <div className="flex items-center gap-2">
      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
        Currency
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[#0d0d12] border border-[#2f2f3e] rounded-lg px-2 py-1 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
      >
        {CURRENCIES.map((c) => (
          <option key={c.value} value={c.symbol}>
            {c.label}
          </option>
        ))}
      </select>
    </div>
  );
};
