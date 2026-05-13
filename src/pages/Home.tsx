import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, StaggerContainer, StaggerItem } from "../components/Reveal";
import LightRays from "../components/LightRays";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Cpu,
  Lock,
  DollarSign,
  Activity,
  Calculator,
  Zap,
  FileText,
  PieChart,
  LineChart,
  Bitcoin,
  Home as HomeIcon,
  Box as BoxIcon,
  ChevronDown,
  Rocket,
  ShieldCheck,
  BookOpen,
  GraduationCap
} from "lucide-react";
import { 
  SiGoogle, 
  SiVercel, 
  SiFigma, 
  SiGithub, 
  SiNotion,
  SiOpenai
} from "react-icons/si";

export const Home = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is this calculator free to use?",
      a: "Yes, this calculator is completely free and works on desktop, tablet, and mobile devices.",
    },
    {
      q: "How accurate is this calculator?",
      a: "This calculator uses standard mathematical formulas and provides highly accurate results based on the values entered.",
    },
    {
      q: "Can I use this calculator on mobile?",
      a: "Yes, the calculator is fully optimized for smartphones, tablets, and desktop devices.",
    },
    {
      q: "Do I need to create an account?",
      a: "No, you can use all calculators instantly without signing up.",
    },
    {
      q: "Is my data stored?",
      a: "No personal calculation data is stored unless you choose to save it using your account.",
    },
    {
      q: "Can I share my calculation results?",
      a: "Yes, you can copy, download, or share your calculation results easily.",
    },
    {
      q: "What formula does this calculator use?",
      a: "The calculator uses industry-standard formulas that are explained in the formula section below the calculator.",
    },
    {
      q: "Does this calculator work internationally?",
      a: "Yes, the calculator can be used globally unless specifically designed for country-based calculations like taxes or GST.",
    },
  ];

  return (
    <div className="w-full relative px-6 md:px-12 flex flex-col items-center">
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full max-w-5xl mx-auto mt-8 md:mt-12 flex flex-col items-center text-center relative z-10 scroll-mt-32"
      >
        {/* Light Rays Background */}
        <div className="absolute top-0 left-0 w-full h-[800px] -mt-40 pointer-events-none z-[-1] flex justify-center opacity-70">
          <LightRays
            raysOrigin="top-center"
            raysColor="#f97316"
            raysSpeed={1.5}
            lightSpread={1.5}
            rayLength={1.0}
            fadeDistance={0.8}
            followMouse={true}
            mouseInfluence={0.05}
            noiseAmount={0.1}
            distortion={0.1}
          />
        </div>

        {/* Floating Badges */}
        <motion.div
          drag
          dragSnapToOrigin
          dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 md:top-4 left-0 md:-left-12 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-zinc-300 hidden md:flex items-center gap-2 cursor-grab active:cursor-grabbing"
        >
          <TrendingUp className="w-4 h-4 text-orange-500" /> Crypto
        </motion.div>
        
        <motion.div
          drag
          dragSnapToOrigin
          dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-12 md:top-20 right-0 md:-right-12 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-zinc-300 hidden md:flex items-center gap-2 cursor-grab active:cursor-grabbing"
        >
          <DollarSign className="w-4 h-4 text-orange-500" /> Finance
        </motion.div>

        <motion.div
          drag
          dragSnapToOrigin
          dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-48 md:top-64 left-8 md:-left-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-zinc-300 hidden md:flex items-center gap-2 cursor-grab active:cursor-grabbing"
        >
          <Activity className="w-4 h-4 text-orange-500" /> Health
        </motion.div>

        <motion.div
          drag
          dragSnapToOrigin
          dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-56 md:top-72 right-8 md:-right-4 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-zinc-300 hidden md:flex items-center gap-2 cursor-grab active:cursor-grabbing"
        >
          <Calculator className="w-4 h-4 text-orange-500" /> Math
        </motion.div>

        <motion.div
          drag
          dragSnapToOrigin
          dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-24 md:top-32 left-4 md:-left-24 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-zinc-300 hidden md:flex items-center gap-2 cursor-grab active:cursor-grabbing"
        >
          <Zap className="w-4 h-4 text-orange-500" /> Productivity
        </motion.div>

        <motion.div
          drag
          dragSnapToOrigin
          dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
          whileDrag={{ scale: 1.1, zIndex: 50 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-32 md:top-44 right-4 md:-right-24 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-zinc-300 hidden md:flex items-center gap-2 cursor-grab active:cursor-grabbing"
        >
          <PieChart className="w-4 h-4 text-orange-500" /> Analytics
        </motion.div>

        <Reveal delay={0.2} width="100%">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-semibold tracking-tight leading-tight mb-6 mt-12 md:mt-0">
            Calculate Smarter
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
              with Mathiq.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.4} width="100%">
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Mathiq is a modern all-in-one calculator platform designed for fast, accurate, and intelligent calculations across finance, health, education, productivity, and everyday problem solving.
          </p>
        </Reveal>

        <Reveal delay={0.6} width="100%">
          <Link
            to="/calculators"
            className="animated-button group relative inline-flex justify-center items-center gap-2 font-black uppercase tracking-wider overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </Reveal>
      </section>

      {/* Hero Visual Mockups */}
      <section className="w-full max-w-6xl mx-auto mt-20 relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 h-auto md:h-[450px]">
        {/* Left Mock */}
        <motion.div
          initial={{ opacity: 0, x: "50%", rotate: -5, y: 32, zIndex: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ rotate: 0, y: 0, scale: 1.02, zIndex: 30 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="glass-panel p-6 w-full max-w-[300px] relative mt-8 md:mt-0 md:absolute md:left-4 lg:left-12 cursor-pointer shadow-lg"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold uppercase tracking-wider text-[10px] text-gray-500">
              Formula Library
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 cursor-pointer">
              Explore
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-2 rounded-xl hover:bg-[#1a1a24] border border-transparent hover:border-[#2f2f3e] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-orange-500/20 text-orange-400">
                  <LineChart className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Compound Int.
                  </p>
                  <p className="text-xs text-gray-400 font-mono text-[10px]">
                    FV = P(1+r/n)^nt
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center p-2 rounded-xl hover:bg-[#1a1a24] border border-transparent hover:border-[#2f2f3e] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-orange-400/20 text-orange-400">
                  <Bitcoin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Crypto Profit
                  </p>
                  <p className="text-xs text-green-400 font-mono text-[10px]">
                    +12.4% Avg
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center p-2 rounded-xl hover:bg-[#1a1a24] border border-transparent hover:border-[#2f2f3e] transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-orange-500/20 text-orange-400">
                  <HomeIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Mortgage AI
                  </p>
                  <p className="text-xs text-gray-400 font-mono text-[10px]">
                    Amortization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center Mock */}
        <motion.div
          initial={{ opacity: 0, y: 50, zIndex: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 w-full max-w-[380px] relative z-20 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-[#0d0d12] cursor-default"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="flex justify-between items-center mb-8 border-b border-[#1f1f2e] pb-4">
            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
              <span className="text-white border-b-2 border-orange-400 pb-4 -mb-[17px]">
                Projection
              </span>
              <span className="cursor-pointer hover:text-white">Variables</span>
              <span className="cursor-pointer hover:text-white">Export</span>
            </div>
            <Calculator className="w-4 h-4 text-gray-500" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">
            Future Value (10 Yrs)
          </p>
          <p className="text-3xl font-mono text-white mb-8">
            $152,475{" "}
            <span className="text-[10px] font-sans font-bold uppercase text-gray-500">
              .00
            </span>
          </p>

          <div className="h-24 w-full border-b border-[#1f1f2e] mb-4 relative flex items-end">
            {/* Simple CSS Chart Line */}
            <svg
              className="w-full h-full text-orange-400 overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path
                d="M0,90 Q20,80 40,60 T70,30 T100,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                points="0,80 20,60 40,75 60,30 80,45 100,10"
                opacity="0.2"
              />
            </svg>
          </div>
          <div className="flex justify-between text-xs font-mono">
            <span className="text-gray-400">Interest Earned</span>
            <span className="text-orange-400">+$52,475 (+52%)</span>
          </div>
        </motion.div>

        {/* Right Mock */}
        <motion.div
          initial={{ opacity: 0, x: "-50%", rotate: 5, y: 32, zIndex: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ rotate: 0, y: 0, scale: 1.02, zIndex: 30 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="glass-panel p-6 w-full max-w-[300px] relative mt-8 md:mt-0 md:absolute md:right-4 lg:right-12 cursor-pointer shadow-lg"
        >
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-4 h-4 text-orange-400" />
            <h3 className="font-bold uppercase tracking-wider text-[10px] text-white">
              Scientific Engine
            </h3>
          </div>
          <div className="bg-[#1a1a24] border border-[#2f2f3e] rounded-xl p-4 mb-4">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
              <span>Matrix Det</span>
              <span>3x3</span>
            </div>
            <div className="grid grid-cols-3 gap-2 font-mono text-xs text-center text-gray-300">
              <div className="bg-[#050507] rounded p-1">1</div>
              <div className="bg-[#050507] rounded p-1">4</div>
              <div className="bg-[#050507] rounded p-1">-2</div>
              <div className="bg-[#050507] rounded p-1">3</div>
              <div className="bg-[#050507] rounded p-1">0</div>
              <div className="bg-[#050507] rounded p-1">1</div>
              <div className="bg-[#050507] rounded p-1">2</div>
              <div className="bg-[#050507] rounded p-1">-1</div>
              <div className="bg-[#050507] rounded p-1">5</div>
            </div>
          </div>
          <div className="bg-[#1a1a24] border border-[#2f2f3e] rounded-xl p-4 flex justify-between items-center">
            <span className="text-xs font-bold uppercase text-gray-400">
              Result
            </span>
            <span className="font-mono text-sm text-orange-400">Δ = -45</span>
          </div>
        </motion.div>
      </section>

      {/* Industry Trust Section */}
      <section className="w-full mx-auto mt-24 mb-10 text-center relative py-16">
        <div className="absolute inset-0 bg-[#0d0d12]/30 backdrop-blur-3xl [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[300px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Reveal delay={0.2} width="100%">
            <p className="text-xs md:text-sm text-zinc-400 mb-10 uppercase tracking-widest font-medium">
              Built for Modern Digital Calculations
            </p>
          </Reveal>
          
          <StaggerContainer delayChildren={0.3} staggerChildren={0.1} className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-20 md:gap-y-12">
            {[
              { name: "Google", icon: <SiGoogle size={28} /> },
              { name: "Vercel", icon: <SiVercel size={28} /> },
              { name: "Figma", icon: <SiFigma size={28} /> },
              { name: "GitHub", icon: <SiGithub size={28} /> },
              { name: "Notion", icon: <SiNotion size={28} /> },
              { name: "OpenAI", icon: <SiOpenai size={28} /> }
            ].map((brand, idx) => (
              <StaggerItem key={idx}>
                <div className="flex items-center gap-2.5 text-zinc-500 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:text-white hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)] hover:scale-105 transition-all duration-300 cursor-default">
                  {brand.icon}
                  <span className="font-display font-medium text-lg tracking-wide">{brand.name}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features / Why Choose Section (Bento Grid) */}
      <section
        className="w-full max-w-6xl mx-auto mt-32 mb-20 relative z-10 scroll-mt-32"
        id="why-choose"
      >
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-semibold mb-4 text-white">
              Why Choose <span className="text-orange-400">Mathiq</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              AI-optimized solutions tailored for precise, human-grade analytical
              outputs.
            </p>
          </div>
        </Reveal>

        <StaggerContainer delayChildren={0.3} staggerChildren={0.2} className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[600px]">
          {/* Left Column */}
          <div className="col-span-1 md:col-span-12 lg:col-span-4 flex flex-col gap-6 h-full">
            {/* Top Left: Precision */}
            <StaggerItem className="flex-1 lg:flex-[0.5] glass-panel bg-[#0d0d12] border border-[#1f1f2e] rounded-3xl p-6 flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[40px] rounded-full group-hover:bg-orange-500/20 transition-all"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <Calculator className="w-4 h-4 text-orange-400" />
                </div>
                <h3 className="font-semibold text-white">
                  Military-Grade Precision
                </h3>
              </div>
              <p className="text-xs text-gray-400 mb-6 relative z-10">
                64-bit floating point processing ensures absolute accuracy for
                financial modeling.
              </p>

              <div className="flex-1 w-full bg-[#050507] rounded-2xl border border-[#1f1f2e] p-4 flex flex-col justify-center gap-1 relative z-10 font-mono">
                <span className="text-[10px] text-gray-500">OUTPUT.FLT_64</span>
                <div className="text-xl text-orange-400 break-all tracking-wider md:text-lg lg:text-xl">
                  3.141592653589
                </div>
                <div className="w-full h-[1px] bg-[#1f1f2e] my-2"></div>
                <div className="flex justify-between items-center text-[10px] text-gray-500">
                  <span>ERROR MARGIN</span>
                  <span className="text-green-500">±0.0000000001</span>
                </div>
              </div>
            </StaggerItem>

            {/* Bottom Left: Dynamic Variables */}
            <StaggerItem className="flex-1 lg:flex-[0.5] glass-panel bg-[#0d0d12] border border-[#1f1f2e] rounded-3xl p-6 relative overflow-hidden flex flex-col">
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-orange-400" />
                </div>
                <h3 className="font-semibold text-white">Dynamic Variables</h3>
              </div>
              <p className="text-xs text-gray-400 mb-4 relative z-10">
                Chain variables across multiple calculators to build complex
                workflows.
              </p>

              <div className="w-full space-y-2 relative z-10 mt-auto">
                <div className="flex items-center gap-3 bg-[#050507] border border-[#1f1f2e] rounded-xl p-2 px-3">
                  <span className="text-orange-400 font-mono text-xs font-bold w-3">
                    x
                  </span>
                  <span className="text-gray-500 text-xs">=</span>
                  <span className="text-white font-mono text-xs">4,500</span>
                </div>
                <div className="flex items-center gap-3 bg-[#050507] border border-[#1f1f2e] border-l-2 border-l-orange-400 rounded-xl p-2 px-3 ml-4">
                  <span className="text-orange-400 font-mono text-xs font-bold w-3">
                    y
                  </span>
                  <span className="text-gray-500 text-xs">=</span>
                  <span className="text-white font-mono text-xs">x * 1.15</span>
                </div>
              </div>
            </StaggerItem>
          </div>

          {/* Center Column */}
          <StaggerItem className="col-span-1 md:col-span-12 lg:col-span-4 glass-panel bg-[#0d0d12] border border-[#1f1f2e] rounded-3xl p-8 relative overflow-hidden flex flex-col items-center text-center justify-between min-h-[400px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="w-full space-y-3 mb-8 relative z-10 mt-4 text-left">
              <div className="w-full bg-[#050507] border border-[#1f1f2e] rounded-2xl p-4 flex justify-between items-center hover:border-[#2f2f3e] transition-colors">
                <div className="flex gap-3 items-center">
                  <div className="w-6 h-6 rounded bg-[#1a1a24] text-gray-500 flex items-center justify-center text-xs font-bold font-mono">
                    fx
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-gray-400">
                    Standard Operations
                  </span>
                </div>
                <div className="w-4 h-4 text-gray-600 tracking-widest leading-none pb-2">
                  ...
                </div>
              </div>
              <div className="w-full bg-[#1a1a24] border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.1)] rounded-2xl p-4 flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded bg-orange-400/20 flex items-center justify-center">
                    <PieChart className="w-3 h-3 text-orange-400" />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    Investment ROI Engine
                  </span>
                </div>
                <div className="w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
              <div className="w-full bg-[#050507] border border-[#1f1f2e] rounded-2xl p-4 flex justify-between items-center hover:border-[#2f2f3e] transition-colors">
                <div className="flex gap-3 items-center">
                  <div className="w-6 h-6 rounded bg-[#1a1a24] text-gray-500 flex items-center justify-center text-xs font-bold font-mono">
                    ∑
                  </div>
                  <span className="text-xs lg:text-sm font-medium text-gray-400">
                    Statistical Analysis
                  </span>
                </div>
                <div className="w-4 h-4 text-gray-600 tracking-widest leading-none pb-2">
                  ...
                </div>
              </div>
              <div className="w-full bg-[#050507] border border-[#1f1f2e] rounded-2xl p-4 flex justify-between items-center hover:border-[#2f2f3e] opacity-60 transition-colors">
                <span className="text-xs font-medium text-gray-500 flex items-center gap-2">
                  <div className="w-6 h-6 rounded border border-dashed border-[#2f2f3e] flex items-center justify-center text-[#2f2f3e]">
                    +
                  </div>
                  Custom modular builder
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-auto pb-4">
              <h3 className="text-2xl font-display font-semibold text-white mb-4 leading-tight">
                A Unified Calculation Workspace
              </h3>
              <p className="text-xs text-gray-400 mb-8 max-w-xs mx-auto leading-relaxed">
                Combine basic arithmetic, complex financial algorithms, and
                scientific utility formulas in one fluid interface.
              </p>
              <Link
                to="/calculators"
                className="inline-block px-6 py-3 bg-[#1a1a24] text-white text-xs font-bold rounded-full border border-[#2f2f3e] hover:bg-[#2f2f3e] transition-colors uppercase tracking-widest shadow-lg hover:scale-105 active:scale-95"
              >
                Explore Tools
              </Link>
            </div>
          </StaggerItem>

          {/* Right Column */}
          <div className="col-span-1 md:col-span-12 lg:col-span-4 flex flex-col gap-6 h-full">
            {/* Top Right: Real time recompute */}
            <StaggerItem className="flex-1 lg:flex-[0.5] glass-panel bg-[#0d0d12] border border-[#1f1f2e] rounded-3xl p-6 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-[40px] rounded-full pointer-events-none"></div>
              <div className="flex flex-col mb-6 relative z-10">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center mb-3">
                  <Zap className="w-4 h-4 text-orange-400" />
                </div>
                <h3 className="font-semibold text-white text-sm">
                  Instant Re-Computation
                  <br />
                  <span className="text-gray-500 font-normal mt-1 block text-xs">
                    Evaluates equations as you type
                  </span>
                </h3>
              </div>

              <div className="w-full bg-[#050507] border border-[#1f1f2e] rounded-2xl p-5 relative overflow-hidden z-10 mt-auto">
                <div className="flex justify-between items-end text-xs text-gray-400 mb-2">
                  <span>Interest Rate</span>
                  <span className="text-orange-400 font-bold bg-orange-500/10 px-2 py-0.5 rounded">
                    5.25%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#1a1a24] rounded-full mb-6 relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                    className="h-full bg-orange-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] relative"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-orange-400"></div>
                  </motion.div>
                </div>

                <div className="flex justify-between items-center bg-[#1a1a24] border border-[#2f2f3e] rounded-xl p-3">
                  <span className="text-[10px] text-gray-500 uppercase font-bold">
                    Est. Return
                  </span>
                  <span className="font-mono text-orange-400 text-sm">
                    $12,450.00
                  </span>
                </div>
              </div>
            </StaggerItem>

            {/* Bottom Right: Calculation Tape */}
            <StaggerItem className="flex-1 lg:flex-[0.5] glass-panel bg-[#0d0d12] border border-[#1f1f2e] rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none"></div>
              <div className="flex items-start gap-3 mb-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 mt-1">
                  <FileText className="w-4 h-4 text-orange-400" />
                </div>
                <h3 className="font-semibold text-white leading-tight">
                  Exportable Audit Tapes
                  <br />
                  <span className="text-gray-500 text-xs font-normal">
                    Track every step
                  </span>
                </h3>
              </div>

              <div className="w-full bg-[#16161e] border border-[#1f1f2e] rounded-2xl p-4 pb-5 relative z-10 mt-auto shadow-inner bg-gradient-to-b from-[#16161e] to-[#050507]">
                <div className="space-y-3 font-mono text-[10px] sm:text-xs">
                  <div className="flex justify-between text-gray-500">
                    <span>Base Value</span>
                    <span>1,000.00</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>× Multiplier (1.5)</span>
                    <span>1,500.00</span>
                  </div>
                  <div className="flex justify-between text-orange-400/80">
                    <span>- Tax (20%)</span>
                    <span>-300.00</span>
                  </div>
                  <div className="w-full h-[1px] bg-[#2f2f3e] my-2 border-dashed border-b border-0"></div>
                  <div className="flex justify-between text-orange-300 font-bold">
                    <span>Net Result</span>
                    <span>1,200.00</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </section>

      {/* SEO Content Section / Bento Style */}
      <section className="w-full mt-24 z-10 scroll-mt-32 text-left flex flex-col gap-5 mb-16">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-5">
          {/* Top Huge Card */}
        <div className="w-full border border-white/5 bg-[#121212]/90 backdrop-blur-xl rounded-[28px] p-8 md:p-12 lg:p-14 flex flex-col md:flex-row relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="flex-1 md:pr-12 relative z-10">
            {/* Top icon box */}
            <div className="flex items-center gap-5 mb-6">
              <div className="w-[64px] h-[64px] min-w-[64px] min-h-[64px] rounded-[18px] border border-orange-500/20 bg-orange-500/10 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.15)] relative flex-shrink-0">
                <div className="absolute inset-0 bg-orange-500/20 blur-md rounded-full animate-pulse"></div>
                <div className="grid grid-cols-2 gap-[2px] w-[36px] h-[36px] relative z-10">
                  <div className="w-[17px] h-[17px] rounded-[4px] bg-orange-500/20 flex items-center justify-center text-orange-500 text-[11px] leading-none font-bold pb-[1px]">+</div>
                  <div className="w-[17px] h-[17px] rounded-[4px] bg-orange-500/20 flex items-center justify-center text-orange-500 text-[11px] leading-none font-bold pb-[1px]">-</div>
                  <div className="w-[17px] h-[17px] rounded-[4px] bg-orange-500/20 flex items-center justify-center text-orange-500 text-[11px] leading-none font-bold pb-[1px]">×</div>
                  <div className="w-[17px] h-[17px] rounded-[4px] bg-orange-500 flex items-center justify-center text-white text-[11px] leading-none font-bold pb-[1px]">=</div>
                </div>
              </div>
              <h2 className="text-3xl md:text-[44px] font-display font-semibold text-white tracking-tight leading-[1.1]">
                The Ultimate <br />
                <span className="text-orange-500 font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">All-In-One</span> Calculator Platform
              </h2>
            </div>
            
            <p className="text-zinc-400/90 text-[15px] leading-relaxed mb-8 max-w-xl font-normal">
              Welcome to <strong className="text-white font-medium">Mathiq</strong>, the internet's most advanced and modern <strong className="text-white font-medium">online calculator website</strong>. 
              Whether you are managing personal finances, tracking your health, or solving complex equations, 
              our <strong className="text-white font-medium">free calculator tools</strong> provide fast, accurate, and instant results. Built for students, professionals, 
              and everyday users, Mathiq is designed to be the only smart calculator platform you will ever need.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link to="/calculators" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-semibold py-3.5 px-7 rounded-[14px] transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] shadow-[0_4px_14px_rgba(249,115,22,0.2)]">
                <Rocket className="w-5 h-5" /> Explore Calculators
              </Link>
              <Link to="/converters" className="inline-flex items-center gap-2 bg-[#1a1a24] border border-[#2f2f3e] hover:bg-[#2f2f3e] text-white font-semibold py-3.5 px-7 rounded-[14px] transition-all hover:scale-[1.02]">
                <BoxIcon className="w-5 h-5" /> Explore Converters
              </Link>
            </div>
          </div>

          <div className="w-full md:w-[450px] h-[350px] md:h-auto mt-12 md:mt-0 relative hidden md:flex justify-center items-center perspective-1000">
             {/* Particles/Orbits */}
             <div className="absolute w-[360px] h-[360px] border border-orange-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
             <div className="absolute w-[240px] h-[240px] border border-orange-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
             
             {/* Base platform */}
             <div className="absolute w-[280px] h-[60px] bottom-6 border border-orange-500/40 bg-orange-500/5 rounded-[100%] shadow-[0_0_40px_rgba(249,115,22,0.2)] z-0">
               <div className="absolute inset-0 border-[3px] border-orange-500/20 rounded-[100%] scale-90"></div>
             </div>
             
             {/* Flying dots */}
             <div className="absolute top-1/4 right-10 w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-pulse"></div>
             <div className="absolute bottom-1/3 left-10 w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-[pulse_3s_infinite]"></div>
             
             {/* 3D Calculator */}
             <div className="relative w-[220px] h-[330px] bg-gradient-to-b from-[#252532] to-[#15151c] border-t border-l border-white/10 border-b-4 border-r-4 border-black/40 rounded-[28px] shadow-[20px_20px_40px_rgba(0,0,0,0.6),inset_0px_2px_4px_rgba(255,255,255,0.1)] flex flex-col p-[18px] transform rotate-[15deg] hover:rotate-[10deg] transition-all duration-700 z-10 -translate-y-8 group-hover:-translate-y-12 backdrop-blur-md">
                
                {/* Screen */}
                <div className="w-full h-[68px] bg-[#0c0c11] rounded-[16px] mb-5 flex items-center justify-end px-5 font-mono text-[32px] text-white/90 border border-t-black border-b-white/10 shadow-[inner_0_4px_10px_rgba(0,0,0,0.8)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                  1234
                  <div className="w-[3px] h-8 bg-orange-500 ml-1 animate-pulse"></div>
                </div>

                {/* Keypad */}
                <div className="grid grid-cols-3 gap-x-3 gap-y-3 flex-1 px-1 pb-1">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`rounded-[12px] shadow-[0_4px_0_rgba(0,0,0,0.3),0_1px_2px_rgba(255,255,255,0.1)_inset] active:shadow-[0_0px_0_rgba(0,0,0,0.4),0_1px_2px_rgba(255,255,255,0.1)_inset] active:translate-y-1 transition-all duration-150 ${
                        i === 8 
                          ? 'bg-gradient-to-b from-orange-500 to-orange-600 border border-orange-400 text-white font-bold flex items-center justify-center text-2xl shadow-[0_4px_0_rgba(194,65,12,1),0_1px_2px_rgba(255,255,255,0.2)_inset]' 
                          : 'bg-gradient-to-b from-[#2a2a38] to-[#242430] border border-white/5 text-gray-300 font-semibold flex items-center justify-center text-xl'
                      }`}
                    >
                      {i === 8 ? '+' : (9 - i - 1)}
                    </div>
                  ))}
                </div>

                {/* Highlight curve on top-right */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white flex opacity-[0.03] blur-[20px] rounded-full pointer-events-none"></div>
             </div>
          </div>
        </div>

        {/* Middle Row */}
        <StaggerContainer delayChildren={0.1} staggerChildren={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <StaggerItem className="border border-white/5 bg-[#121212]/90 backdrop-blur-xl rounded-[24px] p-8 flex flex-col items-start hover:-translate-y-1.5 hover:border-orange-500/30 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.15)] transition-all duration-300 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-[50px] h-[50px] rounded-[16px] border border-orange-500/20 bg-orange-500/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:bg-orange-500/20 transition-all z-10 relative">
              <ShieldCheck className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-[22px] font-bold text-white mb-3 leading-tight tracking-tight z-10">
              Why Users<br /> Trust <span className="text-orange-500">Mathiq</span>
            </h3>
            <p className="text-zinc-400 text-[14px] leading-relaxed mb-6 flex-grow font-normal z-10">
              Unlike outdated platforms, Mathiq delivers a premium experience with lightning-fast load times, mobile-optimized responsive design, and completely transparent logic. We use industry-standard formulas to ensure absolute precision. Furthermore, our tools do not require a sign-up—delivering privacy and convenience seamlessly.
            </p>
            <Link to="/#why-choose" className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-auto text-sm z-10">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </StaggerItem>

          {/* Card 2 */}
          <StaggerItem className="border border-white/5 bg-[#121212]/90 backdrop-blur-xl rounded-[24px] p-8 flex flex-col items-start hover:-translate-y-1.5 hover:border-orange-500/30 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.15)] transition-all duration-300 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-[50px] h-[50px] rounded-[16px] border border-orange-500/20 bg-orange-500/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:bg-orange-500/20 transition-all z-10 relative">
              <TrendingUp className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-[22px] font-bold text-white mb-3 leading-tight tracking-tight z-10">
              <span className="text-orange-500">Finance & Investment</span><br /> Calculators
            </h3>
            <p className="text-zinc-400 text-[14px] leading-relaxed mb-6 flex-grow font-normal z-10">
              Navigate the financial world with ease. Use our EMI calculator, SIP planner, Mortgage tool, and GST calculator to analyze your financial decisions accurately without the need for complex spreadsheets.
            </p>
            <Link to="/calculators" className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-auto text-sm z-10">
              Explore Finance Tools <ArrowRight className="w-4 h-4" />
            </Link>
          </StaggerItem>

          {/* Card 3 */}
          <StaggerItem className="border border-white/5 bg-[#121212]/90 backdrop-blur-xl rounded-[24px] p-8 flex flex-col items-start hover:-translate-y-1.5 hover:border-orange-500/30 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.15)] transition-all duration-300 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-[50px] h-[50px] rounded-[16px] border border-orange-500/20 bg-orange-500/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:bg-orange-500/20 transition-all z-10 relative">
              <Activity className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-[22px] font-bold text-white mb-3 leading-tight tracking-tight z-10">
              <span className="text-orange-500">Health & Productivity</span><br /> Calculators
            </h3>
            <p className="text-zinc-400 text-[14px] leading-relaxed mb-6 flex-grow font-normal z-10">
              Keep your wellness in check with our smart body-metrics tools. From simple BMI calculations to advanced physical fitness tracking, our platform takes the guesswork out of daily health goals.
            </p>
            <Link to="/calculators" className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-auto text-sm z-10">
              Explore Health Tools <ArrowRight className="w-4 h-4" />
            </Link>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Card */}
        <Reveal delay={0.2}>
          <div className="w-full border border-white/5 bg-[#121212]/90 backdrop-blur-xl rounded-[24px] p-6 md:p-8 flex items-center flex-col md:flex-row gap-6 md:gap-8 relative overflow-hidden group hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.1)]">
             <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
             <div className="w-[60px] h-[60px] rounded-[18px] border border-orange-500/20 bg-orange-500/10 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:bg-orange-500/20 transition-all relative z-10">
                <BookOpen className="w-7 h-7 text-orange-500" />
             </div>
             <div className="flex-1 text-center md:text-left z-10">
               <h3 className="text-[24px] md:text-[28px] font-display font-semibold text-white mb-1.5 tracking-tight">Educational Content & Formulas</h3>
               <p className="text-zinc-400/90 text-[14px] leading-relaxed max-w-4xl font-normal mx-auto md:mx-0">
                 We believe in solving problems <em className="text-zinc-300">and</em> explaining how they work. Every Mathiq calculator comes with deep educational resources, step-by-step formula breakdowns, use cases, and comprehensive FAQs. Our goal isn't just to give you the answer, but to empower you with the knowledge behind the calculation.
               </p>
             </div>
             <Link to="/calculators" className="inline-flex flex-shrink-0 items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-semibold py-3 px-8 rounded-[12px] transition-all whitespace-nowrap mt-2 md:mt-0 shadow-[0_4px_14px_rgba(249,115,22,0.2)] hover:scale-[1.02] z-10">
               <GraduationCap className="w-[18px] h-[18px]" /> Learn & Grow
             </Link>
          </div>
        </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="w-full max-w-5xl mx-auto mt-20 mb-32 relative z-10 scroll-mt-32"
        id="faq"
      >
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-400 text-sm">
              Everything you need to know about Mathiq.
            </p>
          </div>
        </Reveal>

        <StaggerContainer delayChildren={0.2} staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <div
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className={`glass-panel bg-[#0d0d12] border p-6 rounded-3xl cursor-pointer transition-all duration-300 ${
                  activeFaq === i
                    ? "border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.15)] bg-[#111118]"
                    : "border-[#1f1f2e] hover:border-[#2f2f3e]"
                }`}
              >
                <div className="flex justify-between items-center gap-4">
                  <h4
                    className={`font-semibold text-sm lg:text-base transition-colors ${activeFaq === i ? "text-orange-400" : "text-[#e0e0e0]"}`}
                  >
                    {faq.q}
                  </h4>
                  <div
                    className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                      activeFaq === i
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-[#1a1a24] text-gray-500"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-sm leading-relaxed pr-8 mt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.4}>
          <div className="text-center mt-12">
            <Link
              to="/calculators"
              className="inline-flex items-center gap-2 bg-[#1a1a24] border border-[#2f2f3e] hover:bg-[#2f2f3e] transition-colors px-6 py-3 rounded-full text-sm font-semibold text-white"
            >
              Still Need Help? Explore Tools
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
