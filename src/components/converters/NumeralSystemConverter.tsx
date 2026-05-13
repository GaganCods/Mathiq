import React, { useState, useEffect } from "react";
import { ArrowRightLeft } from "lucide-react";

const options = [
  { value: "10", label: "Decimal (Base 10)" },
  { value: "2", label: "Binary (Base 2)" },
  { value: "8", label: "Octal (Base 8)" },
  { value: "16", label: "Hexadecimal (Base 16)" },
];

export const NumeralSystemConverter = () => {
  const [amount, setAmount] = useState<string>("10");
  const [fromBase, setFromBase] = useState<string>("10");
  const [toBase, setToBase] = useState<string>("2");
  const [result, setResult] = useState<string>("1010");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    try {
      if (!amount) {
        setResult("");
        setError(false);
        return;
      }
      
      const parsed = parseInt(amount, parseInt(fromBase));
      if (isNaN(parsed)) {
        setError(true);
        setResult("Invalid Input");
        return;
      }

      setError(false);
      setResult(parsed.toString(parseInt(toBase)).toUpperCase());
    } catch {
      setError(true);
      setResult("Error");
    }
  }, [amount, fromBase, toBase]);

  const handleSwap = () => {
    setFromBase(toBase);
    setToBase(fromBase);
  };

  return (
    <div className="w-full flex justify-center text-white">
      <div className="w-full max-w-lg">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          Numeral System Converter
        </h2>

        <div className="space-y-6">
          <div className="bg-[#1a1a24] p-4 rounded-2xl border border-[#2f2f3e]">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
              From
            </label>
            <div className={`flex bg-[#050507] rounded-xl border transition-colors overflow-hidden ${error ? "border-red-500/50" : "border-[#1f1f2e] focus-within:border-orange-500/50"}`}>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value.toUpperCase())}
                className="w-full bg-transparent px-4 py-3 outline-none font-mono text-lg uppercase"
                placeholder="0"
              />
              <select
                value={fromBase}
                onChange={(e) => setFromBase(e.target.value)}
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
              <div className={`w-full px-4 py-3 font-mono text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap ${error ? "text-red-400" : "text-orange-400"}`}>
                {result}
              </div>
              <select
                value={toBase}
                onChange={(e) => setToBase(e.target.value)}
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
