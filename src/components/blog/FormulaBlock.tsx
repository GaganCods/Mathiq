import React from 'react';
import { motion } from 'motion/react';

interface FormulaBlockProps {
  title: string;
  formula: string;
  variables: { name: string; desc: string }[];
  example?: string;
}

export const FormulaBlock: React.FC<FormulaBlockProps> = ({ title, formula, variables, example }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-10 overflow-hidden border rounded-3xl bg-[#13131a] border-white/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
    >
      <div className="p-6 md:p-8 bg-gradient-to-br from-white/5 to-transparent border-b border-white/5">
        <h4 className="mb-4 text-sm font-semibold tracking-wider text-zinc-400 uppercase">{title}</h4>
        <div className="flex items-center justify-center py-6 px-4 bg-[#0d0d12] rounded-2xl border border-[var(--color-brand)]/20 shadow-[0_0_15px_rgba(249,115,22,0.1)_inset]">
          <code className="text-xl md:text-3xl font-mono text-[var(--color-brand)] text-center break-words whitespace-pre-wrap">
            {formula}
          </code>
        </div>
      </div>
      
      {variables.length > 0 && (
        <div className="p-6 md:p-8 border-b border-white/5">
          <h5 className="mb-4 text-sm font-semibold text-white">Variables:</h5>
          <ul className="space-y-3">
            {variables.map((v, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded shrink-0">{v.name}</span>
                <span className="text-zinc-400 mt-0.5">{v.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {example && (
        <div className="p-6 md:p-8 bg-[var(--color-brand)]/5">
          <h5 className="mb-2 text-sm font-semibold text-[var(--color-brand)] flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[var(--color-brand)] rounded-full inline-block"></span>
            Example Calculation
          </h5>
          <p className="text-sm leading-relaxed text-zinc-300">
            {example}
          </p>
        </div>
      )}
    </motion.div>
  );
};
