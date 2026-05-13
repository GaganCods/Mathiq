import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Reveal, StaggerContainer, StaggerItem } from "../components/Reveal";
import {
  Currency,
  Ruler,
  Weight,
  Square,
  Clock,
  HardDrive,
  Beaker,
  Binary,
  Gauge,
  Thermometer,
  Percent,
  Activity
} from "lucide-react";

export const Converters = () => {
  useEffect(() => {
    document.title = "Mathiq Converters | Smart Online Conversion Tools";
  }, []);

  const categories = [
    {
      title: "Common Converters",
      items: [
        {
          id: "length-converter",
          name: "Length Converter",
          icon: <Ruler className="w-5 h-5" />,
          desc: "Fast conversions between meters, inches, feet, miles, and more.",
        },
        {
          id: "mass-converter",
          name: "Mass Converter",
          icon: <Weight className="w-5 h-5" />,
          desc: "Convert kilograms, pounds, ounces, grams, and tons instantly.",
        },
        {
          id: "temperature-converter",
          name: "Temperature Converter",
          icon: <Thermometer className="w-5 h-5" />,
          desc: "Convert degrees Celsius, Fahrenheit, and Kelvin seamlessly.",
        },
      ],
    },
    {
      title: "Science & Engineering",
      items: [
        {
          id: "area-converter",
          name: "Area Converter",
          icon: <Square className="w-5 h-5" />,
          desc: "Convert square meters, acres, hectares, and square feet.",
        },
        {
          id: "volume-converter",
          name: "Volume Converter",
          icon: <Beaker className="w-5 h-5" />,
          desc: "Convert liters, gallons, milliliters, and cubic meters.",
        },
        {
          id: "speed-converter",
          name: "Speed Converter",
          icon: <Gauge className="w-5 h-5" />,
          desc: "Convert between km/h, mph, m/s, and knots accurately.",
        },
      ],
    },
    {
      title: "Digital & Time",
      items: [
        {
          id: "time-converter",
          name: "Time Converter",
          icon: <Clock className="w-5 h-5" />,
          desc: "Convert seconds, minutes, hours, days, weeks, and years.",
        },
        {
          id: "data-converter",
          name: "Data Converter",
          icon: <HardDrive className="w-5 h-5" />,
          desc: "Convert bytes, KB, MB, GB, and TB efficiently.",
        },
        {
          id: "numeral-system-converter",
          name: "Numeral System Converter",
          icon: <Binary className="w-5 h-5" />,
          desc: "Convert between binary, decimal, octal, and hexadecimal.",
        },
      ],
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-4 md:pt-8 pb-24 relative z-10">
      <Reveal>
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4 text-white">
            Smart Online <span className="text-orange-400">Converters</span> by Mathiq
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Convert units, measurements, currencies, temperatures, data sizes, and more instantly with modern smart conversion tools.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#popular" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-semibold py-3 px-6 rounded-[12px] transition-all hover:scale-[1.02] shadow-[0_4px_14px_rgba(249,115,22,0.2)]">
              Explore Converters
            </a>
          </div>
        </div>
      </Reveal>

      <div id="popular" className="space-y-16 scroll-mt-24">
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
                      to={`/converters/${item.id}`}
                      className="group glass-panel p-6 hover:bg-[#1a1a24] hover:border-[#2f2f3e] transition-all duration-300 block hover:-translate-y-1 hover:shadow-lg h-full relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-[#050507] transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-[#e0e0e0] mb-2 group-hover:text-white transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
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
