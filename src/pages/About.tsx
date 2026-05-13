import React from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  ChevronRight,
  Calculator,
  Home,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-8">
          <Link to="/" className="hover:text-orange-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white bg-white/10 px-2 py-0.5 rounded">
            About Us
          </span>
        </div>

        {/* Hero */}
        <section className="mb-20 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight leading-tight mb-6">
              About Our Platform
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              “We’re building a smarter, faster, and more modern way to solve
              calculations online.”
            </p>
          </motion.div>
        </section>

        {/* Brand Story */}
        <section className="mb-20">
          <div className="glass-panel p-8 md:p-12 border-l-4 border-l-orange-400">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-orange-400" />
              Who We Are
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                We created this platform to simplify everyday calculations with
                a modern experience that feels fast, accurate, and easy to use.
              </p>
              <p>
                From basic math tools to advanced finance, health, education,
                and developer calculators, our goal is to provide reliable tools
                that anyone can use instantly without complexity.
              </p>
              <p>
                We believe calculators should not look outdated or confusing.
                That’s why we built a clean, futuristic platform focused on
                speed, clarity, and user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Our mission is to create the internet’s most useful and visually
              modern calculator ecosystem.
            </p>
          </div>

          <div className="bg-[#0a0a0f] border border-[#1f1f2e] rounded-3xl p-8 md:p-12 text-center text-gray-300">
            <p className="max-w-2xl mx-auto leading-relaxed text-lg">
              We aim to help students, professionals, developers, creators,
              businesses, and everyday users solve problems faster with accurate
              and easy-to-understand tools.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-20">
          <h2 className="text-3xl font-display font-semibold mb-10 text-center">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Accurate Calculations",
                desc: "Built using trusted formulas and reliable logic.",
              },
              {
                title: "Modern Experience",
                desc: "Premium UI inspired by modern fintech and AI platforms.",
              },
              {
                title: "Educational Content",
                desc: "Every calculator includes explanations, formulas, examples, and FAQs.",
              },
              {
                title: "Mobile Optimized",
                desc: "Fast and responsive on every device.",
              },
              {
                title: "Free To Use",
                desc: "Most tools are accessible without sign-up.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="glass-panel p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-orange-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Future Vision */}
        <section className="mb-20 glass-panel p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] pointer-events-none"></div>
          <h2 className="text-2xl font-display font-semibold mb-4 flex items-center gap-3">
            <Zap className="w-6 h-6 text-orange-400" /> Future Vision
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg max-w-3xl relative z-10">
            We’re continuously expanding the platform with smarter tools,
            AI-powered features, educational resources, and advanced utilities
            designed for the next generation of the web.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center pt-10 border-t border-[#1f1f2e]">
          <h2 className="text-3xl font-display font-semibold mb-8">
            Start Exploring Our Calculators
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/calculators"
              className="animated-button flex justify-center items-center gap-2"
            >
              Explore Tools <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
