import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Calculator, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash, location.pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    if (path.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", path);
      }
    } else if (path === "/" && location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Calculators", path: "/calculators" },
    { name: "Converters", path: "/converters" },
    { name: "Blog", path: "/blog" },
    { name: "Why choose", path: "/#why-choose" },
    { name: "FAQ", path: "/#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-[#0d0d12]/80 backdrop-blur-md border-b border-[#1f1f2e]">
      <Link
        to="/"
        onClick={(e) => handleNavClick(e, "/")}
        className="flex items-center gap-2 text-xl font-display font-semibold transition-opacity hover:opacity-80"
      >
        <div className="w-8 h-8 rounded-full bg-[var(--color-brand)] flex items-center justify-center shadow-[0_0_10px_rgba(249,115,22,0.5)]">
          <Calculator className="w-5 h-5 text-[#050507]" />
        </div>
        <span className="uppercase tracking-tight text-white">
          Math<span className="text-[var(--color-brand)]">iq</span>
        </span>
      </Link>

      <nav className="hidden md:flex items-center bg-[#1a1a24] border border-[#2f2f3e] rounded-full px-2 py-1.5">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={(e) => handleNavClick(e, link.path)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              location.pathname === link.path &&
              link.path !== "/#why-choose" &&
              link.path !== "/#faq"
                ? "bg-[var(--color-brand)] text-[#050507] shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Link
          to="/calculators"
          className="hidden md:flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
        >
          All Tools
        </Link>
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0d0d12]/95 backdrop-blur-xl border-b border-[#1f1f2e] p-6 shadow-2xl md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => {
                  handleNavClick(e, link.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-lg font-medium p-3 rounded-xl transition-all ${
                  location.pathname === link.path &&
                  link.path !== "/#why-choose" &&
                  link.path !== "/#faq"
                    ? "bg-[var(--color-brand)]/10 text-[var(--color-brand)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/calculators"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center w-full px-5 py-3 text-base font-medium rounded-xl bg-[var(--color-brand)] text-[#050507] transition-all"
            >
              All Tools
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
