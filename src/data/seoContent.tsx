import React from "react";
import { Link } from "react-router-dom";

export interface CalculatorSEO {
  intro: string;
  formula: React.ReactNode;
  howToUse: React.ReactNode;
  useCases: React.ReactNode;
  faqs: { q: string; a: string }[];
  related: { id: string; name: string }[];
}

export const getSEOContent = (id: string, name: string): CalculatorSEO => {
  const defaultRelated = [
    { id: "emi", name: "EMI Calculator" },
    { id: "bmi", name: "BMI Calculator" },
    { id: "percentage", name: "Percentage Toolkit" },
    { id: "crypto-profit", name: "Crypto Profit Calculator" },
  ]
    .filter((item) => item.id !== id)
    .slice(0, 3);

  const baseSEO: CalculatorSEO = {
    intro: `The Mathiq ${name} helps you estimate values instantly using accurate formulas and a modern easy-to-use interface. Whether you are a student, a professional, or just trying to manage your daily tasks, understanding your numbers has never been easier.`,
    formula: (
      <p>
        This calculator uses standard industry-recognized formulas to compute
        exact values. We ensure all edge cases are handled to provide maximum
        mathematical accuracy.
      </p>
    ),
    howToUse: (
      <ul className="list-decimal pl-5 space-y-2">
        <li>Enter your primary variables in the inputs provided.</li>
        <li>
          Adjust any secondary settings, such as percentages or time periods.
        </li>
        <li>
          The Mathiq system will instantly recalculate results in real-time.
        </li>
        <li>Review your results in the premium dashboard area below.</li>
      </ul>
    ),
    useCases: (
      <p>
        Common uses include academic verifications, financial planning, budget
        assessments, and quick daily estimations.
      </p>
    ),
    faqs: [
      {
        q: "Is the Mathiq " + name + " free to use?",
        a: "Yes, this tool is completely free with no hidden charges or signups required.",
      },
      {
        q: "How accurate are the results?",
        a: "Our platform runs on 64-bit precision to ensure any result is highly accurate. However, always consult professionals for critical financial or medical decisions.",
      },
      {
        q: "Can I use this on my mobile device?",
        a: "Absolutely. The Mathiq platform is deeply optimized for mobile devices, offering a seamless responsive design.",
      },
    ],
    related: defaultRelated,
  };

  switch (id) {
    case "emi":
      return {
        ...baseSEO,
        intro: `The Mathiq EMI Calculator helps you estimate monthly loan payments instantly using accurate financial formulas and a modern easy-to-use interface. Planning a home loan, car loan, or personal loan can be stressful, but this tool provides complete clarity over your interest and principal amounts.`,
        formula: (
          <div>
            <p className="mb-2">
              The standard formula for Equated Monthly Installment (EMI) is:
            </p>
            <code className="block bg-[#1a1a24] p-4 rounded-xl text-orange-400 font-mono text-sm shadow-inner mb-4">
              E = P × r × (1 + r)^n / ((1 + r)^n - 1)
            </code>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>E</strong> is the EMI amount.
              </li>
              <li>
                <strong>P</strong> is the Principal loan amount.
              </li>
              <li>
                <strong>r</strong> is the monthly interest rate (annual rate
                divided by 12 months, then by 100).
              </li>
              <li>
                <strong>n</strong> is the loan duration in months.
              </li>
            </ul>
          </div>
        ),
        useCases: (
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Home Loans:</strong> Estimate long-term home loan payments
              accurately.
            </li>
            <li>
              <strong>Car Loans:</strong> Check short-term auto financing
              affordability.
            </li>
            <li>
              <strong>Personal Loans:</strong> Understand the interest burden on
              unsecured loans.
            </li>
          </ul>
        ),
        faqs: [
          ...baseSEO.faqs,
          {
            q: "Does this EMI calculation cover processing fees?",
            a: "No, this calculator strictly calculates principal and interest. Processing fees or insurance should be factored in separately.",
          },
          {
            q: "How can I reduce my EMI?",
            a: "You can reduce your EMI by making a larger down payment, opting for a longer loan tenure, or negotiating a lower interest rate.",
          },
        ],
        related: [
          { id: "loan", name: "Loan Calculator" },
          { id: "sip", name: "SIP Calculator" },
          { id: "investment-roi", name: "Investment ROI" },
        ],
      };
    case "bmi":
      return {
        ...baseSEO,
        intro: `The Mathiq BMI Calculator provides a fast and reliable way to check your Body Mass Index and health category. Maintaining a healthy weight is vital for overall wellness, and our tool offers an instant evaluation based on your height and weight.`,
        formula: (
          <div>
            <code className="block bg-[#1a1a24] p-4 rounded-xl text-orange-400 font-mono text-sm shadow-inner mb-4">
              BMI = weight (kg) / [height (m)]^2
            </code>
            <p>
              Body Mass Index is a simple calculation using a person's height
              and weight. The formula divides weight in kilograms by height in
              meters squared.
            </p>
          </div>
        ),
        faqs: [
          ...baseSEO.faqs,
          {
            q: "Is BMI an accurate measure of health?",
            a: "BMI is a general screening tool. It does not measure body fat directly and should not be used as a standalone diagnostic tool, especially for athletes.",
          },
        ],
        related: [
          { id: "age", name: "Age Calculator" },
          { id: "percentage", name: "Percentage Toolkit" },
          { id: "scientific", name: "Scientific Calculator" },
        ],
      };
    // Include more specific cases if needed...
    default:
      return baseSEO;
  }
};
