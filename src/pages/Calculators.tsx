import React from "react";
import { Link } from "react-router-dom";
import { Reveal, StaggerContainer, StaggerItem } from "../components/Reveal";
import {
  Bitcoin,

  LineChart,
  Home as HomeIcon,
  Calculator as CalcIcon,
  Percent,
  DollarSign,
  Activity,
  PieChart,
  Info,
  User,
  Tag,
  FileText,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export const Calculators = () => {
  const categories = [
    {
      title: "Standard & Math",
      items: [
        {
          id: "scientific",
          name: "Scientific Calculator",
          icon: <CalcIcon className="w-5 h-5" />,
          desc: "Advanced mathematical functions and scientific notation.",
        },
        {
          id: "percentage",
          name: "Percentage Toolkit",
          icon: <Percent className="w-5 h-5" />,
          desc: "Calculate percentage changes, differences, and fractions.",
        },
      ],
    },
    {
      title: "Health & Everyday",
      items: [
        {
          id: "age",
          name: "Age Calculator",
          icon: <User className="w-5 h-5" />,
          desc: "Calculate your exact age in years, months, and days.",
        },
        {
          id: "bmi",
          name: "BMI Calculator",
          icon: <Activity className="w-5 h-5" />,
          desc: "Check your Body Mass Index and health category.",
        },
      ],
    },
    {
      title: "Finance & Investing",
      items: [
        {
          id: "emi",
          name: "EMI Calculator",
          icon: <CalcIcon className="w-5 h-5" />,
          desc: "Calculate Equated Monthly Installment for loans.",
        },
        {
          id: "loan",
          name: "Loan Calculator",
          icon: <HomeIcon className="w-5 h-5" />,
          desc: "Estimate loan payments and interest.",
        },
        {
          id: "sip",
          name: "SIP Calculator",
          icon: <LineChart className="w-5 h-5" />,
          desc: "Calculate returns on Systematic Investment Plans.",
        },
        {
          id: "gst",
          name: "GST Calculator",
          icon: <Briefcase className="w-5 h-5" />,
          desc: "Add or remove Goods and Services Tax seamlessly.",
        },
        {
          id: "discount",
          name: "Discount Calculator",
          icon: <Tag className="w-5 h-5" />,
          desc: "Calculate the final price after a discount.",
        },
        {
          id: "investment-roi",
          name: "Investment ROI",
          icon: <LineChart className="w-5 h-5" />,
          desc: "Project return on investment over time with compound interest.",
        },
        {
          id: "salary",
          name: "Salary Breakdown",
          icon: <DollarSign className="w-5 h-5" />,
          desc: "Convert salary between hourly, monthly, and yearly figures.",
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          id: "cgpa",
          name: "CGPA Calculator",
          icon: <GraduationCap className="w-5 h-5" />,
          desc: "Calculate your Cumulative Grade Point Average.",
        },
      ],
    },
    {
      title: "Crypto & Web3",
      items: [
        {
          id: "crypto-profit",
          name: "Crypto Profit Calculator",
          icon: <Bitcoin className="w-5 h-5" />,
          desc: "Calculate potential profits from cryptocurrency trades.",
        },
        {
          id: "impermanent-loss",
          name: "Impermanent Loss",
          icon: <Activity className="w-5 h-5" />,
          desc: "Estimate losses for liquidity providers in DeFi pools.",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-4 md:pt-8 pb-24 relative z-10">
      <Reveal>
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4 text-white">
            All Calculators
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Browse our suite of advanced calculation tools designed for accurate
            financial, crypto, and scientific insights.
          </p>
        </div>
      </Reveal>

      <div className="space-y-16">
        {categories.map((category) => (
          <Reveal key={category.title} delay={0.1}>
            <div>
              <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-[#1f1f2e] pb-4">
                {category.title}
              </h2>
              <StaggerContainer delayChildren={0.1} staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <StaggerItem key={item.id}>
                    <Link
                      to={`/calculators/${item.id}`}
                      className="group glass-panel p-6 hover:bg-[#1a1a24] hover:border-[#2f2f3e] transition-all duration-300 block hover:-translate-y-1 hover:shadow-lg h-full"
                    >
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-[#050507] transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-[#e0e0e0] mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
