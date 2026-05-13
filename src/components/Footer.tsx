import React from "react";
import {
  Calculator,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-[#030303] pt-16 pb-8 px-6 md:px-12 mt-24 relative overflow-hidden">
      <div className="glow-background w-[600px] h-[600px] top-[-300px] right-[-200px] opacity-20"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10">
        <div className="flex flex-col">
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full bg-[var(--color-brand)] flex items-center justify-center shadow-[0_0_10px_rgba(249,115,22,0.5)]">
              <Calculator className="w-5 h-5 text-[#050507]" />
            </div>
            <span className="font-bold tracking-tight text-xl uppercase text-white">
              Math<span className="text-[var(--color-brand)]">iq</span>
            </span>
          </Link>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed mb-6 font-semibold text-white/90">
            Modern smart calculators, converters, and educational tools designed for fast problem solving.
          </p>
          <div className="mt-1 text-sm text-zinc-400">
            <span className="font-bold text-white tracking-wide">Stay Updated with Mathiq</span>
            <p className="mt-1 mb-3 text-xs leading-relaxed">Get updates about new calculators, converters, and smart tools.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" className="bg-[#13131a] border border-white/10 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:border-[var(--color-brand)] text-white" />
              <button type="submit" className="bg-[var(--color-brand)] text-[#050507] px-4 py-2 border border-transparent rounded-lg text-xs font-bold hover:bg-orange-400 transition-colors">Subscribe</button>
            </form>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
            Popular Tools
          </h4>
          <ul className="space-y-2 text-gray-400 text-xs font-semibold">
            <li>
              <Link
                to="/calculators/emi"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                EMI Calculator
              </Link>
            </li>
            <li>
              <Link
                to="/calculators/bmi"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                BMI Calculator
              </Link>
            </li>
            <li>
              <Link
                to="/calculators/sip"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                SIP Calculator
              </Link>
            </li>
            <li>
              <Link
                to="/calculators/gst"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                GST Calculator
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
            Resources
          </h4>
          <ul className="space-y-2 text-gray-400 text-xs font-semibold">
            <li>
              <Link
                to="/blog"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/blog/category/how-it-works"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                Formulas
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={scrollToTop} className="hover:text-orange-400 transition-colors">
                Guides
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop} className="hover:text-orange-400 transition-colors">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-gray-400 text-xs font-semibold">
            <li>
              <Link
                to="/about"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/founder"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                Founder
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                onClick={scrollToTop}
                className="hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 relative z-10 gap-4 md:gap-0 text-center md:text-left">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-zinc-400">
            Built and maintained by <Link to="/founder" className="text-[var(--color-brand)] hover:underline">Gagan Pratap</Link>.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Mathiq. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-1">
          <span className="flex items-center gap-2 text-green-500 text-[10px] font-mono uppercase">
            <div className="w-1.5 h-1.5 bg-green-500 animate-pulse rounded-full"></div>{" "}
            Recently Added: Smart BMI & EMI
          </span>
          <span className="text-[10px] font-mono uppercase text-zinc-600">
            Active Platform · New tools added regularly
          </span>
        </div>
      </div>
    </footer>
  );
};
