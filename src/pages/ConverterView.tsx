import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Reveal, StaggerContainer, StaggerItem } from "../components/Reveal";
import {
  ArrowLeft,
  Ruler,
  Weight,
  Square,
  Clock,
  HardDrive,
  Beaker,
  Binary,
  Gauge,
  Thermometer
} from "lucide-react";
import { getConverterSEOContent } from "../data/converterSeoContent";

import { LengthConverter } from "../components/converters/LengthConverter";
import { MassConverter } from "../components/converters/MassConverter";
import { TemperatureConverter } from "../components/converters/TemperatureConverter";
import { AreaConverter } from "../components/converters/AreaConverter";
import { VolumeConverter } from "../components/converters/VolumeConverter";
import { SpeedConverter } from "../components/converters/SpeedConverter";
import { TimeConverter } from "../components/converters/TimeConverter";
import { DataConverter } from "../components/converters/DataConverter";
import { NumeralSystemConverter } from "../components/converters/NumeralSystemConverter";

const PlaceholderConverter = ({ name }: { name: string }) => (
  <div className="text-zinc-400 p-12 text-center border border-dashed border-white/10 rounded-2xl bg-[#121212]/50">
    The {name} is currently being built by our engineers.
  </div>
);

const converterConfig: Record<
  string,
  {
    name: string;
    icon: React.ReactNode;
    component: React.ReactNode;
    desc: string;
  }
> = {
  "length-converter": {
    name: "Length Converter",
    icon: <Ruler className="w-6 h-6" />,
    component: <LengthConverter />,
    desc: "Fast conversions between meters, inches, feet, miles, and more.",
  },
  "mass-converter": {
    name: "Mass Converter",
    icon: <Weight className="w-6 h-6" />,
    component: <MassConverter />,
    desc: "Convert kilograms, pounds, ounces, grams, and tons instantly.",
  },
  "temperature-converter": {
    name: "Temperature Converter",
    icon: <Thermometer className="w-6 h-6" />,
    component: <TemperatureConverter />,
    desc: "Convert degrees Celsius, Fahrenheit, and Kelvin seamlessly.",
  },
  "area-converter": {
    name: "Area Converter",
    icon: <Square className="w-6 h-6" />,
    component: <AreaConverter />,
    desc: "Convert square meters, acres, hectares, and square feet.",
  },
  "volume-converter": {
    name: "Volume Converter",
    icon: <Beaker className="w-6 h-6" />,
    component: <VolumeConverter />,
    desc: "Convert liters, gallons, milliliters, and cubic meters.",
  },
  "speed-converter": {
    name: "Speed Converter",
    icon: <Gauge className="w-6 h-6" />,
    component: <SpeedConverter />,
    desc: "Convert between km/h, mph, m/s, and knots accurately.",
  },
  "time-converter": {
    name: "Time Converter",
    icon: <Clock className="w-6 h-6" />,
    component: <TimeConverter />,
    desc: "Convert seconds, minutes, hours, days, weeks, and years.",
  },
  "data-converter": {
    name: "Data Converter",
    icon: <HardDrive className="w-6 h-6" />,
    component: <DataConverter />,
    desc: "Convert bytes, KB, MB, GB, and TB efficiently.",
  },
  "numeral-system-converter": {
    name: "Numeral System Converter",
    icon: <Binary className="w-6 h-6" />,
    component: <NumeralSystemConverter />,
    desc: "Convert between binary, decimal, octal, and hexadecimal.",
  },
  default: {
    name: "Tool Under Development",
    icon: <Beaker className="w-6 h-6" />,
    component: <PlaceholderConverter name="Tool" />,
    desc: "Check back soon for updates.",
  },
};

export const ConverterView = () => {
  const { id } = useParams<{ id: string }>();
  const calc = converterConfig[id as string] || converterConfig["default"];
  const seo = getConverterSEOContent(id || "default", calc.name);

  useEffect(() => {
    document.title = `${calc.name} – Free Online Unit Conversion Tool | Mathiq`;
    
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
      
      <Reveal delay={0.1}>
        <div className="w-full mb-8">
          <Link
            to="/converters"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all converters
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

      {/* Actual Converter Tool */}
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
            Conversion Insight & Education
          </h2>
          <div className="prose prose-invert max-w-none text-sm md:text-base text-gray-300 leading-relaxed space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                How the {calc.name} works
              </h2>
              {seo.howToUse}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Under The Hood: Formulas
              </h2>
              {seo.formula}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Use Cases & Applications
              </h2>
              {seo.useCases}
            </section>

            {/* FAQ Section */}
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

            {/* Related Converters Internal Linking */}
            <section className="pt-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Related Mathiq Converters
              </h3>
              <StaggerContainer delayChildren={0.2} staggerChildren={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {seo.related.map((rel) => (
                  <StaggerItem key={rel.id}>
                    <Link
                      to={`/converters/${rel.id}`}
                      className="block p-4 rounded-2xl bg-[#1a1a24] border border-[#2f2f3e] hover:border-orange-500/50 hover:bg-[#20202c] transition-colors"
                    >
                      <p className="font-bold text-white text-sm">{rel.name}</p>
                      <p className="text-xs text-orange-400 mt-2 font-medium uppercase tracking-wider">
                        Quick Convert &rarr;
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
