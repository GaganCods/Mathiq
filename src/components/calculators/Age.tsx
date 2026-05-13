import React, { useState } from "react";

const AgeCalculator = () => {
  const [dob, setDob] = useState("");
  const [targetDate, setTargetDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const calculateAge = () => {
    if (!dob || !targetDate) return;

    let d1 = new Date(dob);
    let d2 = new Date(targetDate);

    if (d1 > d2) {
      setResult(null);
      return;
    }

    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();

    if (days < 0) {
      months -= 1;
      let prevMonth = new Date(d2.getFullYear(), d2.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setResult({ years, months, days });
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Age at the Date Of
          </label>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
        <button
          onClick={calculateAge}
          className="w-full bg-orange-500 hover:bg-orange-400 text-[#050507] font-bold py-3 rounded-xl transition-colors"
        >
          Calculate Age
        </button>
      </div>

      {result && (
        <div className="mt-8 p-6 bg-[#1a1a24] rounded-2xl border border-orange-500/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] pointer-events-none"></div>
          <p className="text-sm text-gray-400 mb-2">Calculated Age</p>
          <div className="mb-4">
            <span className="text-4xl font-display font-semibold text-white">
              {result.years}
            </span>
            <span className="text-gray-400 ml-2">years</span>
          </div>
          <p className="text-sm font-mono text-orange-400">
            {result.months} months, {result.days} days
          </p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
