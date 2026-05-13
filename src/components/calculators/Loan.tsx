import React, { useState } from "react";
import EMICalculator from "./EMI";

const LoanCalculator = () => {
  return (
    <div className="w-full">
      <div className="mb-6 p-4 border border-orange-500/20 bg-orange-500/5 rounded-xl text-orange-400 text-sm">
        Our Loan Calculator uses the standard EMI calculation method.
      </div>
      {/* Reusing EMI Calculator since Loan and EMI are functionally identical in this basic suite */}
      <EMICalculator />
    </div>
  );
};

export default LoanCalculator;
