import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Reveal, StaggerContainer, StaggerItem } from "../components/Reveal";
import {
  ArrowLeft,

  Bitcoin,
  LineChart,
  Activity,
  Calculator as CalcIcon,
  Home as HomeIcon,
  Percent,
  DollarSign,
  User,
  Tag,
  FileText,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { getSEOContent } from "../data/seoContent";

// Specific Calculator Components
import CryptoProfitCalc from "../components/calculators/CryptoProfit";
import InvestmentROICalc from "../components/calculators/InvestmentROI";
import AgeCalculator from "../components/calculators/Age";
import EMICalculator from "../components/calculators/EMI";
import BMICalculator from "../components/calculators/BMI";
import PercentageCalculator from "../components/calculators/Percentage";
import GSTCalculator from "../components/calculators/GST";
import SIPCalculator from "../components/calculators/SIP";
import CGPACalculator from "../components/calculators/CGPA";
import ScientificCalculator from "../components/calculators/Scientific";
import LoanCalculator from "../components/calculators/Loan";
import DiscountCalculator from "../components/calculators/Discount";
import SalaryCalculator from "../components/calculators/Salary";
import ImpermanentLossCalculator from "../components/calculators/ImpermanentLoss";

const calculatorConfig: Record<
  string,
  {
    name: string;
    icon: React.ReactNode;
    component: React.ReactNode;
    desc: string;
  }
> = {
  "crypto-profit": {
    name: "Crypto Profit Calculator",
    icon: <Bitcoin className="w-6 h-6" />,
    component: <CryptoProfitCalc />,
    desc: "Calculate your potential profit or loss from cryptocurrency trading.",
  },
  "investment-roi": {
    name: "Investment ROI Calculator",
    icon: <LineChart className="w-6 h-6" />,
    component: <InvestmentROICalc />,
    desc: "Project the future value of your investments with compound interest.",
  },
  age: {
    name: "Age Calculator",
    icon: <User className="w-6 h-6" />,
    component: <AgeCalculator />,
    desc: "Calculate your exact age in years, months, and days.",
  },
  emi: {
    name: "EMI Calculator",
    icon: <CalcIcon className="w-6 h-6" />,
    component: <EMICalculator />,
    desc: "Calculate Equated Monthly Installment for loans.",
  },
  bmi: {
    name: "BMI Calculator",
    icon: <Activity className="w-6 h-6" />,
    component: <BMICalculator />,
    desc: "Check your Body Mass Index and health category.",
  },
  percentage: {
    name: "Percentage Toolkit",
    icon: <Percent className="w-6 h-6" />,
    component: <PercentageCalculator />,
    desc: "Calculate percentage changes, differences, and fractions.",
  },
  gst: {
    name: "GST Calculator",
    icon: <Briefcase className="w-6 h-6" />,
    component: <GSTCalculator />,
    desc: "Add or remove Goods and Services Tax seamlessly.",
  },
  sip: {
    name: "SIP Calculator",
    icon: <LineChart className="w-6 h-6" />,
    component: <SIPCalculator />,
    desc: "Calculate returns on Systematic Investment Plans.",
  },
  cgpa: {
    name: "CGPA Calculator",
    icon: <GraduationCap className="w-6 h-6" />,
    component: <CGPACalculator />,
    desc: "Calculate your Cumulative Grade Point Average.",
  },
  scientific: {
    name: "Scientific Calculator",
    icon: <CalcIcon className="w-6 h-6" />,
    component: <ScientificCalculator />,
    desc: "Advanced mathematical functions and scientific notation.",
  },
  loan: {
    name: "Loan Calculator",
    icon: <HomeIcon className="w-6 h-6" />,
    component: <LoanCalculator />,
    desc: "Estimate loan payments and interest.",
  },
  discount: {
    name: "Discount Calculator",
    icon: <Tag className="w-6 h-6" />,
    component: <DiscountCalculator />,
    desc: "Calculate the final price after a discount.",
  },
  salary: {
    name: "Salary Breakdown",
    icon: <DollarSign className="w-6 h-6" />,
    component: <SalaryCalculator />,
    desc: "Convert salary between hourly, monthly, and yearly figures.",
  },
  "impermanent-loss": {
    name: "Impermanent Loss",
    icon: <Activity className="w-6 h-6" />,
    component: <ImpermanentLossCalculator />,
    desc: "Estimate losses for liquidity providers in DeFi pools.",
  },
  // Fallback for others
  default: {
    name: "Tool Under Development",
    icon: <CalcIcon className="w-6 h-6" />,
    component: (
      <div className="text-zinc-400 p-12 text-center border border-dashed border-white/10 rounded-2xl">
        This calculator is currently being built by our engineers.
      </div>
    ),
    desc: "Check back soon for updates.",
  },
};

export const CalculatorView = () => {
  const { id } = useParams<{ id: string }>();
  const calc = calculatorConfig[id as string] || calculatorConfig["default"];
  const seo = getSEOContent(id || "default", calc.name);

  useEffect(() => {
    document.title = `${calc.name} – Free Online Calculator | Mathiq`;
    
    // Update meta description safely if it exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", seo.intro);
    }
  }, [calc.name, seo.intro]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": seo.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 md:px-12 pt-8 pb-24 relative z-10 flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* SEO Hero Section */}
      <Reveal delay={0.1}>
        <div className="w-full mb-8">
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all calculators
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-400/10 text-orange-400 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.2)]">
              {calc.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-display font-semibold text-white">
                {calc.name}
              </h1>
            </div>
          </div>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-6">
            {seo.intro}
          </p>
        </div>
      </Reveal>

      {/* Actual Calculator Tool */}
      <Reveal delay={0.3}>
        <div className="w-full relative mb-16">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-[400px] bg-orange-500/5 blur-[100px] z-0 rounded-full pointer-events-none"></div>
          <div className="relative z-10 w-full bg-[#0d0d12] border border-[#1f1f2e] rounded-[40px] p-6 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] overflow-hidden">
            {calc.component}
          </div>
        </div>
      </Reveal>

      {/* Long-form Educational SEO Content */}
      <Reveal delay={0.5}>
        <div className="w-full mt-8">
          <h2 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-6 italic">
            Calculation Insight & Education
          </h2>
          <div className="prose porange-invert porange-zinc max-w-none text-sm md:text-base text-gray-300 leading-relaxed space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                How the {calc.name} works
              </h2>
              {seo.howToUse}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Under The Hood: Formulas & Logic
              </h2>
              {seo.formula}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Use Cases & Examples
              </h2>
              {seo.useCases}
            </section>

            {/* FAQ Schema visually implemented */}
            <section className="bg-[#0d0d12] border border-[#1f1f2e] rounded-3xl p-6 md:p-8 mt-12">
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#1f1f2e] pb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {seo.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border-b border-[#1f1f2e] pb-4 last:border-0 last:pb-0"
                  >
                    <p className="font-semibold text-white text-base mb-2">
                      {faq.q}
                    </p>
                    <p className="text-gray-400 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Calculators Internal Linking */}
            <section className="pt-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Related Mathiq Tools
              </h3>
              <StaggerContainer delayChildren={0.2} staggerChildren={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {seo.related.map((rel) => (
                  <StaggerItem key={rel.id}>
                    <Link
                      to={`/calculators/${rel.id}`}
                      className="block p-4 rounded-2xl bg-[#1a1a24] border border-[#2f2f3e] hover:border-orange-500/50 hover:bg-[#20202c] transition-colors"
                    >
                      <p className="font-bold text-white text-sm">{rel.name}</p>
                      <p className="text-xs text-orange-400 mt-2 font-medium uppercase tracking-wider">
                        Try Now &rarr;
                      </p>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
