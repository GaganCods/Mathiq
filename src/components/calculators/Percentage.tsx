import React, { useState } from "react";

const PercentageCalculator = () => {
  const [p1, setP1] = useState("20");
  const [v1, setV1] = useState("150");
  const [res1, setRes1] = useState(0);

  const [v2a, setV2a] = useState("30");
  const [v2b, setV2b] = useState("150");
  const [res2, setRes2] = useState(0);

  React.useEffect(() => {
    setRes1((parseFloat(p1) / 100) * parseFloat(v1));
  }, [p1, v1]);

  React.useEffect(() => {
    setRes2((parseFloat(v2a) / parseFloat(v2b)) * 100);
  }, [v2a, v2b]);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="p-6 bg-[#1a1a24] rounded-2xl border border-[#2f2f3e]">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
          What is X% of Y?
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="text-gray-500">What is</span>
          <input
            type="number"
            value={p1}
            onChange={(e) => setP1(e.target.value)}
            className="w-24 bg-[#0d0d12] border border-[#2f2f3e] rounded-lg px-3 py-2 text-white text-center"
          />
          <span className="text-gray-500">% of</span>
          <input
            type="number"
            value={v1}
            onChange={(e) => setV1(e.target.value)}
            className="w-32 bg-[#0d0d12] border border-[#2f2f3e] rounded-lg px-3 py-2 text-white text-center"
          />
          <span className="text-gray-500">=</span>
          <div className="flex-1 text-right text-2xl font-mono text-orange-400 font-bold">
            {res1 ? res1.toFixed(2) : "0"}
          </div>
        </div>
      </div>

      <div className="p-6 bg-[#1a1a24] rounded-2xl border border-[#2f2f3e]">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
          X is what % of Y?
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="number"
            value={v2a}
            onChange={(e) => setV2a(e.target.value)}
            className="w-32 bg-[#0d0d12] border border-[#2f2f3e] rounded-lg px-3 py-2 text-white text-center"
          />
          <span className="text-gray-500">is what % of</span>
          <input
            type="number"
            value={v2b}
            onChange={(e) => setV2b(e.target.value)}
            className="w-32 bg-[#0d0d12] border border-[#2f2f3e] rounded-lg px-3 py-2 text-white text-center"
          />
          <span className="text-gray-500">=</span>
          <div className="flex-1 text-right text-2xl font-mono text-orange-400 font-bold">
            {res2 ? res2.toFixed(2) : "0"}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageCalculator;
