import React, { useState, useEffect } from "react";

const ImpermanentLossCalculator = () => {
  const [initialPriceA, setInitialPriceA] = useState("1");
  const [initialPriceB, setInitialPriceB] = useState("100");
  const [finalPriceA, setFinalPriceA] = useState("1");
  const [finalPriceB, setFinalPriceB] = useState("150");

  const [result, setResult] = useState({
    lossPercentage: 0,
    heldValue: 0,
    poolValue: 0,
  });

  const calculateIL = () => {
    const p1A = parseFloat(initialPriceA) || 0;
    const p1B = parseFloat(initialPriceB) || 0;
    const p2A = parseFloat(finalPriceA) || 0;
    const p2B = parseFloat(finalPriceB) || 0;

    if (p1A > 0 && p1B > 0 && p2A > 0 && p2B > 0) {
      // Assuming initial investment of 500 A and 500 equivalent B
      // Let's use generic formula: r = (p2B/p2A) / (p1B/p1A)
      const ratio1 = p1B / p1A;
      const ratio2 = p2B / p2A;
      const priceRatio = ratio2 / ratio1;

      // IL = 2 * sqrt(priceRatio) / (1 + priceRatio) - 1
      const il = (2 * Math.sqrt(priceRatio)) / (1 + priceRatio) - 1;
      
      // Let's say initial investment is $1000 total ($500 per asset)
      const initialInvestment = 1000;
      
      // Value if held (50% token A, 50% token B)
      const qtyA = (initialInvestment / 2) / p1A;
      const qtyB = (initialInvestment / 2) / p1B;
      const heldValue = (qtyA * p2A) + (qtyB * p2B);

      // Value in pool
      const poolValue = heldValue * (1 + il);

      setResult({
        lossPercentage: Math.abs(il * 100),
        heldValue,
        poolValue,
      });
    } else {
      setResult({
        lossPercentage: 0,
        heldValue: 0,
        poolValue: 0,
      });
    }
  };

  useEffect(() => {
    calculateIL();
  }, [initialPriceA, initialPriceB, finalPriceA, finalPriceB]);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(val);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-orange-400 font-semibold tracking-wider text-sm uppercase">Initial Prices</h3>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Token A Price ($)
            </label>
            <input
              type="number"
              value={initialPriceA}
              onChange={(e) => setInitialPriceA(e.target.value)}
              className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Token B Price ($)
            </label>
            <input
              type="number"
              value={initialPriceB}
              onChange={(e) => setInitialPriceB(e.target.value)}
              className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-orange-400 font-semibold tracking-wider text-sm uppercase">Final Prices</h3>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Token A Price ($)
            </label>
            <input
              type="number"
              value={finalPriceA}
              onChange={(e) => setFinalPriceA(e.target.value)}
              className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Token B Price ($)
            </label>
            <input
              type="number"
              value={finalPriceB}
              onChange={(e) => setFinalPriceB(e.target.value)}
              className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-[#1a1a24] rounded-2xl border border-orange-500/30 text-center">
        <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest font-bold">
          Impermanent Loss
        </p>
        <div className="mb-6">
          <span className="text-5xl font-mono text-orange-400">
            {result.lossPercentage.toFixed(2)}%
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 border-t border-[#2f2f3e] pt-6">
           <div>
             <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Value if held (Base $1k)</p>
             <p className="font-mono text-xl text-white">{formatCurrency(result.heldValue)}</p>
           </div>
           <div>
             <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Value in Pool</p>
             <p className="font-mono text-xl text-white">{formatCurrency(result.poolValue)}</p>
           </div>
        </div>
      </div>
      
      <p className="text-xs text-gray-500 text-center pt-2">
         Note: The base calculation assumes an initial total investment of $1,000 to demonstrate the relative value impact.
      </p>
    </div>
  );
};

export default ImpermanentLossCalculator;
