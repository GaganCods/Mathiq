import React, { useState, useEffect } from "react";
import { ArrowRightLeft } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface BaseConverterProps {
  options: Option[];
  convert: (value: number, from: string, to: string) => number;
  defaultFrom: string;
  defaultTo: string;
  title: string;
}

export const BaseConverter: React.FC<BaseConverterProps> = ({
  options,
  convert,
  defaultFrom,
  defaultTo,
  title,
}) => {
  const [amount, setAmount] = useState<string>("1");
  const [fromUnit, setFromUnit] = useState<string>(defaultFrom);
  const [toUnit, setToUnit] = useState<string>(defaultTo);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount)) {
      setResult(convert(numAmount, fromUnit, toUnit));
    } else {
      setResult(null);
    }
  }, [amount, fromUnit, toUnit, convert]);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <div className="w-full flex justify-center text-white">
      <div className="w-full max-w-lg">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          {title}
        </h2>

        <div className="space-y-6">
          <div className="bg-[#1a1a24] p-4 rounded-2xl border border-[#2f2f3e]">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
              From
            </label>
            <div className="flex bg-[#050507] rounded-xl border border-[#1f1f2e] focus-within:border-orange-500/50 transition-colors overflow-hidden">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent px-4 py-3 outline-none font-mono text-lg"
                placeholder="0.0"
              />
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="bg-[#1a1a24] border-l border-[#1f1f2e] px-4 py-3 outline-none font-semibold cursor-pointer min-w-[120px]"
              >
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center -my-3 relative z-10">
            <button
              onClick={handleSwap}
              className="w-10 h-10 rounded-full bg-orange-500 text-[#050507] flex items-center justify-center hover:bg-orange-400 hover:scale-110 transition-all shadow-[0_0_15px_rgba(249,115,22,0.4)]"
            >
              <ArrowRightLeft className="w-5 h-5 rotate-90 sm:rotate-0" />
            </button>
          </div>

          <div className="bg-[#1a1a24] p-4 rounded-2xl border border-[#2f2f3e]">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
              To
            </label>
            <div className="flex bg-[#050507] rounded-xl border border-[#1f1f2e] overflow-hidden">
              <div className="w-full px-4 py-3 font-mono text-lg text-orange-400 font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                {result !== null
                  ? result % 1 !== 0
                    ? result.toFixed(6).replace(/\.?0+$/, "")
                    : result.toString()
                  : "0"}
              </div>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="bg-[#1a1a24] border-l border-[#1f1f2e] px-4 py-3 outline-none font-semibold cursor-pointer min-w-[120px]"
              >
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
