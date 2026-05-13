import React, { useState } from "react";
import { CurrencySelector } from "../CurrencySelector";

export default function InvestmentROICalc() {
  const [currency, setCurrency] = useState("$");
  const [initialAmount, setInitialAmount] = useState<number>(10000);
  const [contributionAmount, setContributionAmount] = useState<number>(500);
  const [contributionFreq, setContributionFreq] = useState<number>(12); // periods per year
  const [timePeriod, setTimePeriod] = useState<number>(10);
  const [timeUnit, setTimeUnit] = useState<number>(1); // 1 = Years, 12 = Months etc
  const [annualRate, setAnnualRate] = useState<number>(8); // percentage

  const calculate = () => {
    if (!initialAmount && !contributionAmount)
      return { total: 0, invested: 0, interest: 0 };

    let total = initialAmount;
    let totalInvested = initialAmount;
    
    const years = timePeriod / timeUnit;
    const periods = Math.floor(years * contributionFreq);
    const ratePerPeriod = annualRate / 100 / contributionFreq;

    for (let i = 0; i < periods; i++) {
      total += contributionAmount;
      totalInvested += contributionAmount;
      total = total * (1 + ratePerPeriod);
    }

    const interest = total - totalInvested;

    return { total, invested: totalInvested, interest };
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
              Initial Starting Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono">
                {currency}
              </span>
              <input
                type="number"
                value={initialAmount || ""}
                onChange={(e) => setInitialAmount(Number(e.target.value))}
                className="w-full bg-[#050507] border-2 border-[#1f1f2e] rounded-2xl py-3 pl-8 pr-4 text-[#e0e0e0] font-mono focus:outline-none focus:border-orange-500 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                Contribution
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono">
                  {currency}
                </span>
                <input
                  type="number"
                  value={contributionAmount || ""}
                  onChange={(e) => setContributionAmount(Number(e.target.value))}
                  className="w-full bg-[#050507] border-2 border-[#1f1f2e] rounded-2xl py-3 pl-8 pr-4 text-[#e0e0e0] font-mono focus:outline-none focus:border-orange-500 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                Frequency
              </label>
              <select
                value={contributionFreq}
                onChange={(e) => setContributionFreq(Number(e.target.value))}
                className="w-full bg-[#050507] border-2 border-[#1f1f2e] rounded-2xl py-3 px-4 text-[#e0e0e0] font-mono focus:outline-none focus:border-orange-500 transition-all appearance-none"
              >
                <option value={1}>Yearly</option>
                <option value={12}>Monthly</option>
                <option value={52}>Weekly</option>
                <option value={365}>Daily</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                Time Horizon
              </label>
              <input
                type="number"
                value={timePeriod || ""}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="w-full bg-[#050507] border-2 border-[#1f1f2e] rounded-2xl py-3 px-4 text-[#e0e0e0] font-mono focus:outline-none focus:border-orange-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                Unit
              </label>
              <select
                value={timeUnit}
                onChange={(e) => setTimeUnit(Number(e.target.value))}
                className="w-full bg-[#050507] border-2 border-[#1f1f2e] rounded-2xl py-3 px-4 text-[#e0e0e0] font-mono focus:outline-none focus:border-orange-500 transition-all appearance-none"
              >
                <option value={1}>Years</option>
                <option value={12}>Months</option>
                <option value={52}>Weeks</option>
                <option value={365}>Days</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              Annual Interest (%)
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.1"
                value={annualRate || ""}
                onChange={(e) => setAnnualRate(Number(e.target.value))}
                className="w-full bg-[#050507] border-2 border-[#1f1f2e] rounded-2xl py-3 pl-4 pr-8 text-[#e0e0e0] font-mono focus:outline-none focus:border-orange-500 transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono">
                %
              </span>
            </div>
          </div>
        </div>

        {/* Results Dashboard */}
        <div className="flex-[0.8] bg-[#0d0d12] rounded-3xl border border-[#1f1f2e] p-6 relative overflow-hidden flex flex-col justify-center">
          <div className="mb-6">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              Future Value
            </p>
            <p className="text-4xl md:text-5xl font-mono font-bold tracking-tight text-orange-400">
              {currency}
              {results.total.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </p>
          </div>

          {/* Visual Bar */}
          <div className="w-full h-4 flex rounded-full overflow-hidden mb-6 mt-4 bg-[#16161e] border border-[#1f1f2e]">
            {results.total > 0 ? (
              <>
                <div
                  style={{
                    width: `${(results.invested / results.total) * 100}%`,
                  }}
                  className="h-full bg-[#2f2f3e] transition-all duration-1000 border-r border-[#0d0d12]"
                ></div>
                <div
                  style={{
                    width: `${(results.interest / results.total) * 100}%`,
                  }}
                  className="h-full bg-orange-400 transition-all duration-1000 shadow-[0_0_15px_rgba(249,115,22,0.5)] z-10 relative"
                ></div>
              </>
            ) : (
              <div className="w-full h-full bg-[#16161e]"></div>
            )}
          </div>

          <div className="space-y-4 pt-4 border-t border-[#1f1f2e]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <div className="w-2 h-2 rounded-full bg-[#2f2f3e]"></div> Total
                Invested
              </div>
              <span className="text-[#e0e0e0] font-mono font-bold">
                {currency}
                {results.invested.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                <div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_5px_rgba(249,115,22,0.5)]"></div>{" "}
                Total Interest
              </div>
              <span className="text-orange-400 font-mono font-bold">
                +{currency}
                {results.interest.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
