import React, { useState } from "react";
import { CurrencySelector } from "../CurrencySelector";

const GSTCalculator = () => {
  const [currency, setCurrency] = useState("₹");
  const [amount, setAmount] = useState("1000");
  const [rate, setRate] = useState("18");
  const [mode, setMode] = useState<"add" | "remove">("add");

  const calc = () => {
    const a = parseFloat(amount) || 0;
    const r = parseFloat(rate) || 0;
    if (mode === "add") {
      const gst = a * (r / 100);
      return { net: a, gst, total: a + gst };
    } else {
      const net = a - a * (100 / (100 + r));
      return { net: a - net, gst: net, total: a }; // actually 'net' is pre-gst, total is what's entered
    }
  };

  const result = calc();

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-[#1a1a24] rounded-3xl border border-[#2f2f3e]">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-1 p-1 bg-[#0d0d12] rounded-xl mr-4 max-w-[240px]">
          <button
            onClick={() => setMode("add")}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${mode === "add" ? "bg-orange-500 text-black" : "text-gray-400 hover:text-white"}`}
          >
            Add GST
          </button>
          <button
            onClick={() => setMode("remove")}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${mode === "remove" ? "bg-orange-500 text-black" : "text-gray-400 hover:text-white"}`}
          >
            Remove GST
          </button>
        </div>
        <CurrencySelector value={currency} onChange={setCurrency} />
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            {mode === "add" ? "Net Amount" : "Total Amount"}
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              {currency}
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-[#0d0d12] border border-[#2f2f3e] rounded-xl pl-8 pr-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            GST Rate (%)
          </label>
          <div className="grid grid-cols-4 gap-2 mb-2">
            {["5", "12", "18", "28"].map((r) => (
              <button
                key={r}
                onClick={() => setRate(r)}
                className={`py-2 rounded-lg text-sm border font-semibold ${rate === r ? "border-orange-500 bg-orange-500/10 text-orange-400" : "border-[#2f2f3e] text-gray-400 hover:bg-[#2f2f3e]"}`}
              >
                {r}%
              </button>
            ))}
          </div>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full bg-[#0d0d12] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-3 pt-6 border-t border-[#2f2f3e]">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Net Amount</span>
          <span className="font-mono text-white">
            {currency}
            {result.net.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">GST Amount ({rate}%)</span>
          <span className="font-mono text-orange-400">
            {currency}
            {result.gst.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-lg font-bold pt-2">
          <span className="text-white">Total Amount</span>
          <span className="font-mono text-white">
            {currency}
            {result.total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GSTCalculator;
