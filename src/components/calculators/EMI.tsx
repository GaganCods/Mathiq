import React, { useState } from "react";
import { CurrencySelector } from "../CurrencySelector";

const EMICalculator = () => {
  const [currency, setCurrency] = useState("$");
  const [principal, setPrincipal] = useState("100000");
  const [rate, setRate] = useState("10");
  const [time, setTime] = useState("5");
  const [timeUnit, setTimeUnit] = useState("1"); // 1 for years, 12 for months
  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    
    // Convert time to months
    let n = parseFloat(time);
    if (timeUnit === "1") {
       n = n * 12; // years to months
    } else if (timeUnit === "52") {
       n = n / 4.3333; // weeks to months
    } else if (timeUnit === "365") {
       n = n / 30.416; // days to months
    }
    // if timeUnit === "12", n is already months.
    
    if (p > 0 && r > 0 && n > 0) {
      const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const totalInterest = totalPayment - p;
      setResult({ emi, totalInterest, totalPayment });
    } else {
      setResult(null);
    }
  };

  React.useEffect(() => {
    calculateEMI();
  }, [principal, rate, time]);

  return (
    <div className="w-full">
      <div className="flex justify-end mb-6">
        <CurrencySelector value={currency} onChange={setCurrency} />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Loan Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                {currency}
              </span>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl pl-8 pr-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Interest Rate (% p.a.)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Loan Tenure
              </label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
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
            Monthly EMI
          </p>
          <p className="text-5xl font-mono text-orange-400 mb-8">
            {currency}
            {result
              ? result.emi.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : "0.00"}
          </p>

          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-[#2f2f3e]">
              <span className="text-gray-400 text-sm">Principal Amount</span>
              <span className="font-mono text-white">
                {currency}
                {parseFloat(principal || "0").toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-[#2f2f3e]">
              <span className="text-gray-400 text-sm">Total Interest</span>
              <span className="font-mono text-white">
                {currency}
                {result
                  ? result.totalInterest.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : "0.00"}
              </span>
            </div>
            <div className="flex justify-between items-center text-lg mt-2">
              <span className="text-white font-medium">Total Payment</span>
              <span className="font-mono text-orange-400 font-semibold">
                {currency}
                {result
                  ? result.totalPayment.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : "0.00"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
