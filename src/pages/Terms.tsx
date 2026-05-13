import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Terms = () => {
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
            Terms of Service
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
              Terms of Service
            </h1>
            <p className="text-gray-400">
              Rules and guidelines for using the Mathiq platform.
            </p>
            <p className="mt-4 text-xs font-mono uppercase tracking-widest text-orange-400">
              Last Updated: October 2023
            </p>
          </motion.div>
        </section>

        {/* Content */}
        <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using our platform, you agree to be bound by these
              Terms of Service. If you disagree with any part of the terms, you
              may not access the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              2. Use of Services
            </h2>
            <p>
              Users are expected to use the platform responsibly. You must not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400 bg-[#0d0d12] p-6 rounded-2xl border border-[#1f1f2e]">
              <li>Abuse the calculators or other tools</li>
              <li>Attempt to attack or overload our servers</li>
              <li>Use automated bots maliciously on the platform</li>
              <li>Copy, reproduce, or resell the platform illegally</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              3. Accuracy Disclaimer
            </h2>
            <div className="p-6 border-l-4 border-l-yellow-500 bg-yellow-500/5 text-gray-300 rounded-r-2xl">
              <p className="font-bold text-white mb-2">Important Notice</p>
              <p>
                All calculations provided on this platform are for informational
                purposes only and should not replace professional advice.
              </p>
              <p className="mt-2 text-sm text-gray-400">
                This is especially critical for financial tools (Mortgages, SIP,
                Crypto), health calculators, and tax calculations. Always
                consult with a certified professional before making significant
                decisions.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              4. Intellectual Property
            </h2>
            <p>
              The Service and its original content, including but not limited to
              the design, branding, calculators logic, logos, and features are
              and will remain the exclusive property of Mathiq and its
              licensors. They are protected by copyright, trademark, and other
              laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              5. Limitation of Liability
            </h2>
            <p>
              In no event shall the platform, its operators, or developers be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including without limitation:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Financial losses incurred through investments</li>
              <li>Incorrect decisions based on calculation outputs</li>
              <li>Any form of misuse of the given calculators</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              6. External Links
            </h2>
            <p>
              Our Service may contain links to third-party web sites or services
              that are not owned or controlled by us. We assume no
              responsibility for the content, privacy policies, or practices of
              any third party web sites or services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              7. Account Rules
            </h2>
            <p>
              If and when user accounts are supported, users must maintain the
              confidentiality of their account credentials. Users are
              responsible for all activity that occurs under their account.
              Accounts may be suspended or terminated for abuse without prior
              notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center before:content-[''] before:w-6 before:h-1 before:bg-orange-400 before:mr-4 before:rounded-full">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. By continuing to access or use our
              Service after those revisions become effective, you agree to be
              bound by the revised terms.
            </p>
          </section>

          <section className="pt-8 border-t border-[#1f1f2e]">
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <a
              href="mailto:legal@yourdomain.com"
              className="inline-block mt-4 text-orange-400 hover:text-orange-300 font-mono"
            >
              legal@yourdomain.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};
