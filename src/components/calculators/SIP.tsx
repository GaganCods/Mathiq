import React, { useState } from "react";
import { CurrencySelector } from "../CurrencySelector";

const SIPCalculator = () => {
  const [invFreq, setInvFreq] = useState("12"); // 12 times a year
  const [timeUnit, setTimeUnit] = useState("1"); // 1 for years, 12 for months
  const [currency, setCurrency] = useState("₹");
  const [investAmount, setInvestAmount] = useState("5000");
  const [returnRate, setReturnRate] = useState("12");
  const [timePeriod, setTimePeriod] = useState("10"); 

  const calc = () => {
    const P = parseFloat(investAmount);
    const f = parseFloat(invFreq); // periods per year
    // If timeUnit is "1" (years), total years = timePeriod.
    // If timeUnit is "12" (months), total years = timePeriod / 12.
    // If timeUnit is "52" (weeks), total years = timePeriod / 52.
    // If timeUnit is "365" (days), total years = timePeriod / 365.
    const years = parseFloat(timePeriod) / parseFloat(timeUnit);
    
    // rate per period
    const i = parseFloat(returnRate) / 100 / f;
    const n = Math.floor(years * f); // total periods

    if (P > 0 && i > 0 && n > 0) {
      const M = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      const invested = P * n;
      const estReturn = M - invested;
      return { totalValue: M, invested, estReturn };
    }
    return { totalValue: 0, invested: 0, estReturn: 0 };
  };

  const result = calc();

  return (
    <div className="w-full">
      <div className="flex justify-end mb-6">
        <CurrencySelector value={currency} onChange={setCurrency} />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Investment
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  {currency}
                </span>
                <input
                  type="number"
                  value={investAmount}
                  onChange={(e) => setInvestAmount(e.target.value)}
                  className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl pl-8 pr-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            </div>
            <div>
               <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Frequency
               </label>
               <select
                  value={invFreq}
                  onChange={(e) => setInvFreq(e.target.value)}
                  className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none"
               >
                  <option value="1">Yearly</option>
                  <option value="12">Monthly</option>
                  <option value="52">Weekly</option>
                  <option value="365">Daily</option>
               </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Expected Return Rate (p.a %)
            </label>
            <input
              type="number"
              value={returnRate}
              onChange={(e) => setReturnRate(e.target.value)}
              className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Time Period
              </label>
              <input
                type="number"
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}
                className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
            <div>
               <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Unit
               </label>
               <select
                  value={timeUnit}
                  onChange={(e) => setTimeUnit(e.target.value)}
                  className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none"
               >
                  <option value="1">Years</option>
                  <option value="12">Months</option>
                  <option value="52">Weeks</option>
                  <option value="365">Days</option>
               </select>
            </div>
          </div>
        </div>

        <div className="p-8 bg-[#1a1a24] border border-[#2f2f3e] rounded-3xl flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] pointer-events-none"></div>

          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
            Total Value
          </p>
          <p className="text-5xl font-mono text-orange-400 mb-8">
            {currency}
            {result.totalValue.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </p>

          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-[#2f2f3e]">
              <span className="text-gray-400 text-sm">Invested Amount</span>
              <span className="font-mono text-white">
                {currency}
                {result.invested.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[#2f2f3e]">
              <span className="text-gray-400 text-sm">Est. Returns</span>
              <span className="font-mono text-green-400">
                +{currency}
                {result.estReturn.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPCalculator;
