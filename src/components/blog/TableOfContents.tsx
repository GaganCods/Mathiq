import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import slugify from 'slugify';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export const TableOfContents = ({ content }: { content: string }) => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from markdown content directly
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const extractedHeadings: TOCItem[] = [];
    
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      extractedHeadings.push({
        level: match[1].length,
        title: match[2],
        id: slugify(match[2], { lower: true, strict: true })
      });
    }
    
    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -35% 0%' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 p-6 border rounded-2xl bg-[#13131a] border-white/5">
      <h3 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">Table of Contents</h3>
      <nav className="space-y-1 text-sm">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`block py-1.5 transition-colors line-clamp-2 ${
              activeId === heading.id 
                ? 'text-[var(--color-brand)] font-medium' 
                : 'text-zinc-400 hover:text-white'
            }`}
            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
          >
            {heading.title}
          </a>
        ))}
      </nav>
    </div>
  );
};
