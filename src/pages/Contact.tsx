import React from "react";
import { motion } from "motion/react";
import {
  ChevronRight,
  Mail,
  Bug,
  Lightbulb,
  Briefcase,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Contact = () => {
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
            Contact Us
          </span>
        </div>

        {/* Hero */}
        <section className="mb-16 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have questions, suggestions, or partnership ideas? We’d love to
              hear from you.
            </p>
          </motion.div>
        </section>

        {/* Contact Cards */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="mailto:support@yourdomain.com"
            className="glass-panel p-6 flex items-start gap-4 hover:-translate-y-1 hover:border-orange-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
              <Mail className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                General Support
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                Help with calculators and general inquiries.
              </p>
              <span className="text-sm font-mono text-orange-400">
                support@yourdomain.com
              </span>
            </div>
          </a>
          <a
            href="mailto:business@yourdomain.com"
            className="glass-panel p-6 flex items-start gap-4 hover:-translate-y-1 hover:border-orange-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
              <Briefcase className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Business & Partnerships
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                For business inquiries and collaborations.
              </p>
              <span className="text-sm font-mono text-orange-400">
                business@yourdomain.com
              </span>
            </div>
          </a>
          <a
            href="mailto:bugs@yourdomain.com"
            className="glass-panel p-6 flex items-start gap-4 hover:-translate-y-1 hover:border-orange-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
              <Bug className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Report Issues
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                Found a bug or calculation error?
              </p>
              <span className="text-sm font-mono text-red-400">
                bugs@yourdomain.com
              </span>
            </div>
          </a>
          <a
            href="mailto:ideas@yourdomain.com"
            className="glass-panel p-6 flex items-start gap-4 hover:-translate-y-1 hover:border-orange-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Feature Requests
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                Suggest new calculators or features.
              </p>
              <span className="text-sm font-mono text-yellow-400">
                ideas@yourdomain.com
              </span>
            </div>
          </a>
        </section>

        {/* Contact Form and FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20">
          <section className="lg:col-span-3">
            <h2 className="text-2xl font-display font-semibold mb-6">
              Send a Message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-[#1a1a24] border border-[#2f2f3e] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button type="button" className="animated-button w-full mt-2">
                Send Message
              </button>
            </form>
          </section>

          <section className="lg:col-span-2 space-y-10">
            {/* FAQ Preview */}
            <div>
              <h2 className="text-2xl font-display font-semibold mb-6">FAQ</h2>
              <div className="space-y-4">
                <div className="glass-panel p-4">
                  <h4 className="font-bold text-white text-sm mb-1">
                    How quickly do you respond?
                  </h4>
                  <p className="text-xs text-gray-400">
                    Usually within 24-48 hours for support queries.
                  </p>
                </div>
                <div className="glass-panel p-4">
                  <h4 className="font-bold text-white text-sm mb-1">
                    Can I suggest calculators?
                  </h4>
                  <p className="text-xs text-gray-400">
                    Yes! Use the feature request email above.
                  </p>
                </div>
                <div className="glass-panel p-4">
                  <h4 className="font-bold text-white text-sm mb-1">
                    Do you accept partnerships?
                  </h4>
                  <p className="text-xs text-gray-400">
                    We are open to partnerships that bring value to our users.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-xl font-display font-semibold mb-4">
                Connect With Us
              </h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1a24] border border-[#2f2f3e] flex items-center justify-center hover:border-orange-500 hover:text-orange-400 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1a24] border border-[#2f2f3e] flex items-center justify-center hover:border-orange-500 hover:text-orange-400 transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1a24] border border-[#2f2f3e] flex items-center justify-center hover:border-orange-500 hover:text-orange-400 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1a24] border border-[#2f2f3e] flex items-center justify-center hover:border-orange-500 hover:text-orange-400 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1a24] border border-[#2f2f3e] flex items-center justify-center hover:border-orange-500 hover:text-orange-400 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
