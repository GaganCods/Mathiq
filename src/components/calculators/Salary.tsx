import React, { useState, useEffect } from "react";

const SalaryCalculator = () => {
  const [amount, setAmount] = useState("50000");
  const [frequency, setFrequency] = useState("yearly");

  const [breakdown, setBreakdown] = useState({
    hourly: 0,
    daily: 0,
    weekly: 0,
    monthly: 0,
    yearly: 0,
  });

  const calculateSalary = () => {
    const val = parseFloat(amount) || 0;
    const hoursPerWeek = 40;
    const weeksPerYear = 52;
    const daysPerWeek = 5;

    let yearly = 0;

    switch (frequency) {
      case "hourly":
        yearly = val * hoursPerWeek * weeksPerYear;
        break;
      case "daily":
        yearly = val * daysPerWeek * weeksPerYear;
        break;
      case "weekly":
        yearly = val * weeksPerYear;
        break;
      case "monthly":
        yearly = val * 12;
        break;
      case "yearly":
        yearly = val;
        break;
    }

    setBreakdown({
      yearly: yearly,
      monthly: yearly / 12,
      weekly: yearly / weeksPerYear,
      daily: yearly / (weeksPerYear * daysPerWeek),
      hourly: yearly / (weeksPerYear * hoursPerWeek),
    });
  };

  useEffect(() => {
    calculateSalary();
  }, [amount, frequency]);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Salary Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl pl-8 pr-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Frequency
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none"
          >
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: "Yearly", value: breakdown.yearly },
          { label: "Monthly", value: breakdown.monthly },
          { label: "Weekly", value: breakdown.weekly },
          { label: "Daily", value: breakdown.daily },
          { label: "Hourly", value: breakdown.hourly },
        ].map((item, idx) => (
          <div
            key={item.label}
            className={`p-6 bg-[#1a1a24] rounded-2xl border border-[#2f2f3e] text-center ${idx === 0 ? "sm:col-span-2 border-orange-500/30" : ""}`}
          >
            <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest font-bold">
              {item.label}
            </p>
            <div className={`font-mono text-white ${idx === 0 ? "text-5xl text-orange-400" : "text-3xl"}`}>
              {formatCurrency(item.value)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryCalculator;
