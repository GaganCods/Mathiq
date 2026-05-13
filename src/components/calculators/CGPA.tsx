import React, { useState } from "react";

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([
    { id: 1, sgpa: "", credits: "" },
  ]);

  const addSemester = () => {
    setSemesters([
      ...semesters,
      { id: semesters.length + 1, sgpa: "", credits: "" },
    ]);
  };

  const calculate = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    for (const sem of semesters) {
      if (sem.sgpa && sem.credits) {
        const c = parseFloat(sem.credits);
        const s = parseFloat(sem.sgpa);
        totalCredits += c;
        totalPoints += c * s;
      }
    }
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-[#1a1a24] rounded-3xl border border-[#2f2f3e]">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-white">CGPA Calculator</h3>
        <div className="text-right">
          <p className="text-xs text-orange-400 uppercase tracking-widest font-bold">
            Estimated CGPA
          </p>
          <p className="text-3xl font-mono text-white">{calculate()}</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {semesters.map((sem, i) => (
          <div key={sem.id} className="flex gap-4 items-center">
            <div className="w-12 text-sm font-bold text-gray-500 uppercase">
              Sem {sem.id}
            </div>
            <input
              type="number"
              placeholder="SGPA / GPA"
              value={sem.sgpa}
              onChange={(e) => {
                const newSems = [...semesters];
                newSems[i].sgpa = e.target.value;
                setSemesters(newSems);
              }}
              className="flex-1 bg-[#0d0d12] border border-[#2f2f3e] rounded-xl px-4 py-2 text-white text-sm"
            />
            <input
              type="number"
              placeholder="Credits"
              value={sem.credits}
              onChange={(e) => {
                const newSems = [...semesters];
                newSems[i].credits = e.target.value;
                setSemesters(newSems);
              }}
              className="flex-1 bg-[#0d0d12] border border-[#2f2f3e] rounded-xl px-4 py-2 text-white text-sm"
            />
          </div>
        ))}
      </div>

      <button
        onClick={addSemester}
        className="text-sm text-orange-400 font-bold hover:text-orange-300 transition-colors"
      >
        + Add Semester
      </button>
    </div>
  );
};

export default CGPACalculator;
