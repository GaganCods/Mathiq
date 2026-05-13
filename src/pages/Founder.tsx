import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Calculator, 
  Code, 
  Search, 
  PenTool, 
  TrendingUp, 
  Layout, 
  MonitorSmartphone,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Quote
} from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Founder = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gagan Pratap",
    "url": "https://mathiq.com/founder",
    "jobTitle": "Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "Mathiq"
    },
    "description": "Founder of Mathiq, a modern smart calculator platform focused on educational tools, fast calculations, and futuristic user experiences."
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mathiq",
    "url": "https://mathiq.com",
    "founder": {
      "@type": "Person",
      "name": "Gagan Pratap"
    }
  };

  const skills = [
    { name: "UI/UX Design", icon: <PenTool className="w-5 h-5" /> },
    { name: "Web Development", icon: <Code className="w-5 h-5" /> },
    { name: "Calculator Systems", icon: <Calculator className="w-5 h-5" /> },
    { name: "SEO Optimization", icon: <Search className="w-5 h-5" /> },
    { name: "Content Strategy", icon: <Layout className="w-5 h-5" /> },
    { name: "Productivity Tools", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Digital Branding", icon: <MonitorSmartphone className="w-5 h-5" /> }
  ];

  const timeline = [
    { year: "2020", title: "Started learning design", desc: "Began the journey into modern UI/UX principles and frontend development." },
    { year: "2021", title: "Built digital tools", desc: "Created various standalone utilities to solve everyday productivity problems." },
    { year: "2022", title: "Created calculator systems", desc: "Developed complex mathematical algorithms for financial and health metrics." },
    { year: "2023", title: "Founded Mathiq", desc: "Launched the unified Mathiq platform to bring all smart tools under one premium ecosystem." },
    { year: "2024+", title: "Expanding smart tool ecosystem", desc: "Continuously adding new calculators, educational guides, and interactive tools." }
  ];

  const projects = [
    { title: "Mathiq Core", desc: "The foundational calculator engine powering all mathematical tools on the platform.", path: "/" },
    { title: "Smart Calculators", desc: "A suite of 20+ specialized calculators for finance, health, and education.", path: "/calculators" },
    { title: "Converter Engine", desc: "Live-like conversion tools for length, mass, data, and numeral systems.", path: "/converters" },
    { title: "Educational Blog", desc: "The educational blog ecosystem designed to explain formulas and methodologies.", path: "/blog" }
  ];

  return (
    <>
      <Helmet>
        <title>Founder of Mathiq – Gagan Pratap</title>
        <meta name="description" content="Meet Gagan Pratap, founder of Mathiq — a modern smart calculator platform focused on educational tools, fast calculations, and futuristic user experiences." />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      <div className="pt-24 pb-20 min-h-screen overflow-hidden bg-[#050507]">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-brand)]/10 rounded-full blur-[120px] opacity-30 mix-blend-screen" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] opacity-20 mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 px-6 mx-auto max-w-7xl pt-4 lg:pt-8 md:mb-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-mono text-[var(--color-brand)] bg-[var(--color-brand)]/10 rounded-full border border-[var(--color-brand)]/20 uppercase tracking-widest">
                <span>Visionary</span>
              </div>
              <h1 className="mb-4 text-5xl md:text-7xl font-bold tracking-tighter text-white">
                Gagan Pratap
              </h1>
              <h2 className="mb-8 text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand)] to-orange-400">
                Founder of Mathiq
              </h2>
              <p className="mb-10 text-xl leading-relaxed text-zinc-400">
                Building modern smart tools that make calculations faster, easier, and more accessible for everyone.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#050507] font-medium transition-all rounded-full bg-[var(--color-brand)] hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                  Explore Mathiq <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/calculators" className="inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all border rounded-full border-white/10 bg-white/5 hover:bg-white/10">
                  View Calculators
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <div className="relative w-full max-w-md mx-auto overflow-hidden border border-[var(--color-brand)]/30 rounded-[2.5rem] aspect-[4/5] bg-[#13131a] shadow-[0_0_50px_rgba(249,115,22,0.15)] group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent z-10" />
                <img 
                  src="https://res.cloudinary.com/dw5doeqxs/image/upload/v1778662415/mathiq_g6urpv.png" 
                  alt="Gagan Pratap - Founder of Mathiq" 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Decorative floating elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-8 p-4 bg-[#13131a]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-30"
              >
                <Calculator className="w-8 h-8 text-[var(--color-brand)]" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-8 p-4 bg-[#13131a]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl z-30"
              >
                <div className="text-xl font-bold text-white">20+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Calculators</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative z-10 px-6 mx-auto mb-32 max-w-7xl pt-24 md:pt-0">
          <div className="grid gap-8 md:grid-cols-2">
            {/* About Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 border bg-[#13131a]/60 backdrop-blur-md rounded-[2.5rem] border-white/5 hover:border-[var(--color-brand)]/30 transition-colors"
            >
              <h2 className="flex items-center gap-3 mb-6 text-3xl font-bold text-white">
                <span className="w-2 h-8 bg-[var(--color-brand)] rounded-full"></span>
                About Gagan Pratap
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-zinc-300">
                Gagan Pratap is the founder of Mathiq, a modern calculator and smart tools platform focused on simplifying calculations, improving educational accessibility, and creating premium digital experiences.
              </p>
              <p className="text-lg leading-relaxed text-zinc-300">
                With a passion for design, development, productivity, and problem-solving, Gagan created Mathiq to transform traditional calculators into a modern ecosystem of smart tools, educational resources, and interactive utilities.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-12 border bg-gradient-to-br from-[var(--color-brand)]/10 to-[#13131a]/60 backdrop-blur-md rounded-[2.5rem] border-[var(--color-brand)]/20 hover:border-[var(--color-brand)]/40 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Quote className="w-32 h-32 text-[var(--color-brand)]" />
              </div>
              <h2 className="flex items-center gap-3 mb-6 text-3xl font-bold text-white relative z-10">
                <span className="w-2 h-8 bg-[var(--color-brand)] rounded-full"></span>
                Vision Behind Mathiq
              </h2>
              <p className="text-xl italic leading-relaxed text-zinc-200 relative z-10 font-light">
                "The vision behind Mathiq is to build a smarter and more modern calculation platform that combines speed, simplicity, education, and beautiful user experience into one ecosystem."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="relative z-10 px-6 mx-auto mb-32 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl md:text-5xl font-bold text-white">Expertise</h2>
            <p className="text-xl text-zinc-400">The technical and creative skills driving Mathiq.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(249,115,22,0.3)" }}
                className="flex items-center gap-3 px-6 py-4 transition-all border rounded-2xl bg-[#13131a] border-white/5 hover:border-[var(--color-brand)]/50 group"
              >
                <div className="text-zinc-500 group-hover:text-[var(--color-brand)] transition-colors">
                  {skill.icon}
                </div>
                <span className="font-medium text-zinc-300 group-hover:text-white transition-colors">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="relative z-10 px-6 mx-auto mb-32 max-w-3xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl md:text-5xl font-bold text-white">The Journey</h2>
            <p className="text-xl text-zinc-400">A timeline of building the future of calculation.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-brand)]/30 before:to-transparent">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                {/* Node */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050507] bg-[var(--color-brand)]/20 text-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-[#050507] transition-colors shadow-[0_0_15px_rgba(249,115,22,0.2)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-current" />
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-[#13131a] border border-white/5 group-hover:border-[var(--color-brand)]/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <div className="text-sm font-mono text-[var(--color-brand)] mb-3">{item.year}</div>
                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="relative z-10 px-6 mx-auto mb-32 max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl md:text-5xl font-bold text-white">Target Ecosystem</h2>
            <p className="text-xl text-zinc-400">Core pillars and featured projects inside Mathiq.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden group p-8 rounded-3xl bg-[#13131a] border border-white/5 hover:border-[var(--color-brand)]/50 transition-all hover:bg-[#1a1a24]"
              >
                <Link to={project.path} className="absolute inset-0 z-20" aria-label={`Explore ${project.title}`} />
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transition-all duration-500 group-hover:bg-blue-500/20 group-hover:scale-150" />
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 group-hover:text-[var(--color-brand)] transition-colors">{project.title}</h3>
                <p className="text-zinc-400 relative z-10 leading-relaxed">{project.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-bold tracking-wider text-white uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Explore <ArrowRight className="w-4 h-4 text-[var(--color-brand)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quote Block */}
        <section className="relative z-10 px-6 mx-auto mb-32 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-24 text-center relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-brand)]/10 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10">
              <Quote className="w-12 h-12 text-[var(--color-brand)]/50 mx-auto mb-8" />
              <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-8 max-w-4xl mx-auto">
                "Technology should simplify problem solving, not complicate it. Modern tools should feel fast, intelligent, and accessible to everyone."
              </h2>
              <div className="font-mono text-[var(--color-brand)] uppercase tracking-widest text-sm">— Gagan Pratap</div>
            </div>
          </motion.div>
        </section>

        {/* Social / Contact */}
        <section className="relative z-10 px-6 mx-auto mb-32 max-w-7xl">
          <div className="p-12 border bg-[#13131a]/80 backdrop-blur-xl rounded-[2.5rem] border-[var(--color-brand)]/20 shadow-[0_0_50px_rgba(249,115,22,0.05)] text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Connect with the Founder</h2>
            <p className="mb-10 text-zinc-400 max-w-xl mx-auto">Follow along for updates on Mathiq, educational content, and insights into building modern web tools.</p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { icon: <XIcon className="w-5 h-5" />, label: "X (Twitter)", url: "https://twitter.com/thegaganpratap" },
                { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", url: "https://www.linkedin.com/in/gagan-pratap/" },
                { icon: <Instagram className="w-6 h-6" />, label: "Instagram", url: "https://www.instagram.com/thegaganpratap/" },
                { icon: <Youtube className="w-6 h-6" />, label: "YouTube", url: "https://www.youtube.com/@thegaganpratap" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-4 transition-colors border rounded-2xl bg-[#050507] border-white/5 text-zinc-400 hover:text-[var(--color-brand)] hover:border-[var(--color-brand)]/40 hover:bg-[#1a1a24] shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Text Block */}
        <section className="relative z-10 px-6 mx-auto max-w-4xl opacity-60 text-xs text-zinc-500 space-y-4">
          <p>
            <strong>About Mathiq & Gagan Pratap:</strong> Mathiq is a premier ecosystem of modern smart calculators, conversion tools, and educational guides. Founded by Gagan Pratap, the platform is driven by a vision to modernize digital productivity tools and provide fast, beautifully designed, and highly accessible mathematical solutions for students, professionals, and developers.
          </p>
          <p>
            The Mathiq project encompasses a wide array of tools including financial planners like EMI, SIP, and Investment ROI calculators, alongside health metrics like BMI calculators, developer utilities for base conversions, and comprehensive educational knowledge bases. Gagan Pratap's focus on UI/UX design, performance optimization, and authentic digital branding shapes every aspect of the Mathiq experience.
          </p>
        </section>

      </div>
    </>
  );
};
