import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import slugify from 'slugify';
import { FormulaBlock } from './FormulaBlock';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

// Very basic string parser for props like title="something" formula="x"
const parseProps = (propString: string) => {
  const props: Record<string, string> = {};
  const regex = /(\w+)=["']([^"']*)["']/g;
  let match;
  while ((match = regex.exec(propString)) !== null) {
    props[match[1]] = match[2];
  }
  return props;
};

// Simple array parser for variables="..."
const parseVariables = (varsStr: string) => {
  try {
    // If it's passed as a JSON string, we can't easily do it the way it's written in the mock.
    // In our mock, it looks like JSX: variables={[{name:"...", desc:"..."}]}
    // Since we are parsing a string, let's just use a simpler fallback or regex.
    // For simplicity, we'll extract the string between [{ and }] 
    const extracted = varsStr.match(/\variables=\{\[(.*)\]\}/s);
    if (!extracted) return [];
    
    // Fallback: manually parsing the array of objects string
    const items = extracted[1].match(/\{([^}]+)\}/g);
    if (!items) return [];
    
    return items.map(item => {
      const nameMatch = item.match(/name:\s*["']([^"']+)["']/);
      const descMatch = item.match(/desc:\s*["']([^"']+)["']/);
      return {
        name: nameMatch ? nameMatch[1] : '',
        desc: descMatch ? descMatch[1] : ''
      };
    });
  } catch (e) {
    return [];
  }
};

export const MarkdownRenderer = ({ content }: { content: string }) => {
  // Split by Custom components
  // We'll look for <FormulaBlock ... /> and <CalculatorEmbed ... />
  
  const blocks = [];
  let currentText = '';
  
  // A simple regex to find our blocks
  const blockRegex = /(<FormulaBlock[^>]*\/>|<CalculatorEmbed[^>]*\/>)/g;
  
  const parts = content.split(blockRegex);
  
  const CustomComponents = parts.map((part, index) => {
    if (part.startsWith('<FormulaBlock')) {
      const props = parseProps(part);
      const variables = parseVariables(part);
      return <FormulaBlock key={index} title={props.title || ''} formula={props.formula || ''} variables={variables} example={props.example || ''} />;
    } else if (part.startsWith('<CalculatorEmbed')) {
      const props = parseProps(part);
      return (
        <div key={index} className="my-8 p-8 border border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5 rounded-3xl flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-[var(--color-brand)]/20 flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-[var(--color-brand)]" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Interactive Calculator Available</h4>
          <p className="text-zinc-400 mb-6 max-w-md mx-auto">Use our dedicated {props.id} calculator to compute this instantly.</p>
          <Link to={`/calculators/${props.id}`} className="px-6 py-3 bg-[var(--color-brand)] text-[#050507] font-medium rounded-full hover:bg-orange-400 transition-colors">
            Open Calculator
          </Link>
        </div>
      );
    } else {
      return (
        <ReactMarkdown
          key={index}
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({node, ...props}) => {
              const id = slugify(String(props.children), { lower: true, strict: true });
              return <h2 id={id} className="mt-12 mb-6 text-3xl font-bold text-white scroll-mt-24" {...props} />;
            },
            h3: ({node, ...props}) => {
              const id = slugify(String(props.children), { lower: true, strict: true });
              return <h3 id={id} className="mt-8 mb-4 text-2xl font-bold text-zinc-200 scroll-mt-24" {...props} />;
            },
            p: ({node, ...props}) => <p className="mb-6 text-lg leading-relaxed text-zinc-300" {...props} />,
            ul: ({node, ...props}) => <ul className="pl-6 mb-6 space-y-2 text-lg text-zinc-300 list-disc marker:text-[var(--color-brand)]" {...props} />,
            ol: ({node, ...props}) => <ol className="pl-6 mb-6 space-y-2 text-lg text-zinc-300 list-decimal marker:text-[var(--color-brand)]" {...props} />,
            li: ({node, ...props}) => <li className="pl-2" {...props} />,
            a: ({node, ...props}) => <a className="text-[var(--color-brand)] hover:underline decoration-[var(--color-brand)]/30 underline-offset-4" {...props} />,
            blockquote: ({node, ...props}) => (
              <blockquote className="pl-6 my-8 italic border-l-4 border-[var(--color-brand)] text-zinc-400 bg-white/5 py-4 pr-4 rounded-r-xl" {...props} />
            ),
            code: ({node, className, children, ...props}) => {
              const match = /language-(\w+)/.exec(className || '');
              const inline = !match && !String(children).includes('\\n');
              return inline ? (
                 // @ts-ignore
                <code className="px-1.5 py-0.5 text-sm font-mono text-[var(--color-brand)] bg-[var(--color-brand)]/10 rounded" {...props}>
                  {children}
                </code>
              ) : (
                // @ts-ignore
                <div className="overflow-hidden rounded-xl bg-[#0d0d12] border border-white/10 my-6">
                  <div className="px-4 py-2 text-xs text-zinc-500 border-b border-white/5 font-mono">{match?.[1] || 'Code'}</div>
                  <pre className="p-4 overflow-x-auto text-sm text-zinc-300">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </pre>
                </div>
              );
            }
          }}
        >
          {part}
        </ReactMarkdown>
      );
    }
  });

  return <div className="max-w-none">{CustomComponents}</div>;
};
