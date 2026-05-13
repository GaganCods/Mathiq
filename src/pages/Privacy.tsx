import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-8">
          <Link to="/" className="hover:text-orange-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white bg-white/10 px-2 py-0.5 rounded">
            Privacy Policy
          </span>
        </div>

        {/* Hero */}
        <section className="mb-12 relative border-b border-[#1f1f2e] pb-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400">
              Read about how we handle and protect your data.
            </p>
            <p className="mt-4 text-xs font-mono uppercase tracking-widest text-orange-400">
              Last Updated: October 2023
            </p>
          </motion.div>
        </section>

        {/* Content Content content */}
        <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              1. Introduction
            </h2>
            <p>
              We value your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how information
              is collected and used when you access our platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:orange-400 before:bg-orange-400 before:mr-4 before:rounded-full">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400 bg-[#0d0d12] p-6 rounded-2xl border border-[#1f1f2e]">
              <li>Email address (if provided)</li>
              <li>Usage analytics</li>
              <li>Browser and device information</li>
              <li>Cookies</li>
              <li>Saved calculation preferences</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              3. How We Use Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400 bg-[#0d0d12] p-6 rounded-2xl border border-[#1f1f2e]">
              <li>Improve user experience</li>
              <li>Analyze website performance</li>
              <li>Save calculator preferences locally</li>
              <li>Provide support and respond to inquiries</li>
              <li>Prevent platform abuse</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              4. Cookies Policy
            </h2>
            <p>
              We use cookies to ensure you get the best experience on our
              website. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>
                <strong className="text-white">Essential cookies:</strong>{" "}
                Required for the platform to function correctly.
              </li>
              <li>
                <strong className="text-white">Analytics cookies:</strong> Used
                to understand how visitors interact with the site.
              </li>
              <li>
                <strong className="text-white">Preference cookies:</strong> Used
                to remember your settings and configurations.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              5. Third-Party Services
            </h2>
            <p>
              Our platform may utilize third-party services that collect data,
              such as Google Analytics, advertising networks, and authentication
              providers. These services operate under their own privacy
              policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              6. Data Security
            </h2>
            <p>
              We prioritize the security of your data. We implement reasonable
              measures including encryption, secure servers, and protection
              measures to secure and protect personal information against loss,
              misuse, and unauthorized access.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              7. User Rights
            </h2>
            <p>
              As a user, you have the right to request data deletion, contact
              support to inquire about your data, and disable cookies in your
              browser settings at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              8. Changes To Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>

          <section className="pt-8 border-t border-[#1f1f2e]">
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Contact Information
            </h2>
            <p>
              If you have any questions about this Privacy Policy, you can
              contact us at:
            </p>
            <a
              href="mailto:privacy@yourdomain.com"
              className="inline-block mt-4 text-orange-400 hover:text-orange-300 font-mono"
            >
              privacy@yourdomain.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};
