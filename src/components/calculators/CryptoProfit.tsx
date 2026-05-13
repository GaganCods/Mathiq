import React, { useState } from "react";
import { CurrencySelector } from "../CurrencySelector";

export default function CryptoProfitCalc() {
  const [currency, setCurrency] = useState("$");
  const [investment, setInvestment] = useState<number>(1000);
  const [buyPrice, setBuyPrice] = useState<number>(50000);
  const [sellPrice, setSellPrice] = useState<number>(65000);
  const [feePercent, setFeePercent] = useState<number>(0.1);

  const calculate = () => {
    if (!investment || !buyPrice || !sellPrice)
      return { profit: 0, roi: 0, rawValue: 0, fees: 0 };

    const coinsBought = investment / buyPrice;
    const buyFee = investment * (feePercent / 100);

    const rawSellValue = coinsBought * sellPrice;
    const sellFee = rawSellValue * (feePercent / 100);

    const totalFees = buyFee + sellFee;
    const netValue = rawSellValue - totalFees;

    const profit = netValue - investment;
    const roi = (profit / investment) * 100;

    return { profit, roi, netValue, totalFees };
  };

  const results = calculate();

  return (
    <div className="w-full">
      <div className="flex justify-end mb-6">
        <CurrencySelector value={currency} onChange={setCurrency} />
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Inputs */}
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              Initial Investment
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono">
                {currency}
              </span>
              <input
                type="number"
                value={investment || ""}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full bg-[#050507] border-2 border-[#1f1f2e] rounded-2xl py-3 pl-8 pr-4 text-[#e0e0e0] font-mono focus:outline-none focus:border-orange-500 transition-all text-center"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                Buy Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono">
                  {currency}
                </span>
                <input
                  type="number"
                  value={buyPrice || ""}
                  onChange={(e) => setBuyPrice(Number(e.target.value))}
                  className="w-full bg-[#050507] border-2 border-[#1f1f2e] rounded-2xl py-3 pl-8 pr-4 text-[#e0e0e0] font-mono focus:outline-none focus:border-orange-500 transition-all text-center"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                Sell Price
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono">
                  {currency}
                </span>
                <input
                  type="number"
                  value={sellPrice || ""}
                  onChange={(e) => setSellPrice(Number(e.target.value))}
                  className="w-full bg-[#050507] border-2 border-[#1f1f2e] rounded-2xl py-3 pl-8 pr-4 text-[#e0e0e0] font-mono focus:outline-none focus:border-orange-500 transition-all text-center"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              Exchange Fees (%)
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                value={feePercent}
                onChange={(e) => setFeePercent(Number(e.target.value))}
                className="w-full bg-[#050507] border-2 border-[#1f1f2e] rounded-2xl py-3 pl-4 pr-8 text-[#e0e0e0] font-mono focus:outline-none focus:border-orange-500 transition-all text-center"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono">
                %
              </span>
            </div>
          </div>
        </div>

        {/* Results Dashboard */}
        <div className="flex-[0.8] bg-[#0d0d12] border border-[#1f1f2e] rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="mb-8 relative z-10">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              Total Profit / Loss
            </p>
            <p
              className={`text-4xl md:text-5xl font-mono font-bold tracking-tight ${results.profit >= 0 ? "text-green-400" : "text-red-400"}`}
            >
              {results.profit >= 0 ? "+" : ""}
              {currency}
              {Math.abs(results.profit).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <div
              className={`inline-flex items-center mt-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${results.roi >= 0 ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}
            >
              {results.roi >= 0 ? "↑" : "↓"} {Math.abs(results.roi).toFixed(2)}%
              ROI
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#1f1f2e] relative z-10">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Total Exit Value
              </span>
              <span className="text-[#e0e0e0] font-mono font-bold">
                {currency}
                {results.netValue.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Total Fees Paid
              </span>
              <span className="text-red-400 font-mono font-bold">
                -{currency}
                {results.totalFees.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
