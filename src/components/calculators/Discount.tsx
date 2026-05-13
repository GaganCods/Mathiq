import React, { useState } from "react";
import { CurrencySelector } from "../CurrencySelector";

const DiscountCalculator = () => {
  const [currency, setCurrency] = useState("$");
  const [price, setPrice] = useState("100");
  const [discount, setDiscount] = useState("20");
  const [result, setResult] = useState<{
    finalPrice: number;
    savings: number;
  } | null>(null);

  React.useEffect(() => {
    const p = parseFloat(price);
    const d = parseFloat(discount);
    if (p > 0 && d >= 0) {
      const savings = p * (d / 100);
      setResult({ finalPrice: p - savings, savings });
    } else {
      setResult(null);
    }
  }, [price, discount]);

  return (
    <div className="w-full max-w-sm mx-auto p-8 bg-[#1a1a24] border border-[#2f2f3e] rounded-3xl relative overflow-hidden">
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h3 className="font-bold text-white text-sm">Discount Calc</h3>
        <CurrencySelector value={currency} onChange={setCurrency} />
      </div>
      <div className="space-y-6 relative z-10">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Original Price
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              {currency}
            </span>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-[#0d0d12] border border-[#2f2f3e] rounded-xl pl-8 pr-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Discount (%)
          </label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full bg-[#0d0d12] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>

        <div className="pt-6 border-t border-[#2f2f3e]">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
            Final Price
          </p>
          <p className="text-4xl font-mono text-orange-400 mb-2">
            {currency}
            {result ? result.finalPrice.toFixed(2) : "0.00"}
          </p>
          <p className="text-sm font-mono text-green-400">
            You Save: {currency}
            {result ? result.savings.toFixed(2) : "0.00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountCalculator;
