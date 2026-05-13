import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

export const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, send to API here
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative my-16 overflow-hidden border rounded-3xl bg-[#13131a] border-[var(--color-brand)]/30 p-8 md:p-12 text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-brand)]/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-xl mx-auto">
        <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)]">
          <Mail className="w-6 h-6" />
        </div>
        
        <h3 className="mb-4 text-3xl font-bold text-white">Get smarter calculation guides delivered weekly.</h3>
        <p className="mb-8 text-zinc-400">Join 10,000+ professionals learning how to optimize their finances, health, and productivity.</p>
        
        {submitted ? (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center justify-center gap-3 p-4 border rounded-xl bg-green-500/10 border-green-500/20 text-green-400"
          >
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">You're on the list! Check your inbox soon.</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-4 text-white placeholder-zinc-500 bg-[#0d0d12] border border-white/10 rounded-xl focus:outline-none focus:border-[var(--color-brand)] focus:ring-1 focus:ring-[var(--color-brand)] transition-colors"
            />
            <button 
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-4 font-medium text-[#050507] transition-colors rounded-xl bg-[var(--color-brand)] hover:bg-orange-400 whitespace-nowrap"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
};
