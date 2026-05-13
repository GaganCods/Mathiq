import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { motion } from 'motion/react';
import { Clock, Calendar, ArrowLeft, Twitter, Linkedin, Link as LinkIcon, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { TableOfContents } from '../components/blog/TableOfContents';
import { MarkdownRenderer } from '../components/blog/MarkdownRenderer';
import { NewsletterCTA } from '../components/blog/NewsletterCTA';
import { Helmet } from 'react-helmet-async';

export const BlogPostView = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen pt-24 text-center px-6">
        <h1 className="mb-4 text-4xl font-bold text-white">Article Not Found</h1>
        <p className="mb-8 text-zinc-400">The guide you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="px-6 py-3 font-medium text-[#050507] bg-[var(--color-brand)] rounded-full hover:bg-orange-400 transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Schema.org structured data for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [
      post.featuredImage
    ],
    "datePublished": new Date(post.date).toISOString(),
    "author": [{
        "@type": "Person",
        "name": post.author.name,
        "url": `https://mathiq.com/author/${post.author.id}`
      }]
  };

  const faqSchema = post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    // Could add toast here
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Mathiq Blog</title>
        <meta name="description" content={post.excerpt} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      <div className="pt-24 pb-20 overflow-x-hidden min-h-screen">
        {/* Breadcrumb & Navigation */}
        <div className="px-6 mx-auto max-w-7xl mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-[var(--color-brand)] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-2 text-sm text-zinc-500 mt-4">
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors">
              {post.category}
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="px-6 mx-auto max-w-4xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 text-xs font-medium text-[var(--color-brand)] bg-[var(--color-brand)]/10 rounded-full border border-[var(--color-brand)]/20">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-zinc-400">
                <Calendar className="w-4 h-4" />
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-zinc-400">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {post.title}
            </h1>
            
            <p className="mb-8 text-xl text-zinc-400 font-light leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <div className="font-bold text-white">{post.author.name}</div>
                  <div className="text-sm text-[var(--color-brand)]">{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button title="Share on Twitter" className="p-2.5 rounded-full bg-white/5 text-zinc-400 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button title="Share on LinkedIn" className="p-2.5 rounded-full bg-white/5 text-zinc-400 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button onClick={copyLink} title="Copy Link" className="p-2.5 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                  <LinkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Featured Image */}
        <section className="px-6 mx-auto max-w-5xl mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12]/80 via-transparent to-transparent z-10" />
            <img src={post.featuredImage} alt={post.title} className="w-full aspect-[21/9] md:aspect-[21/8] object-cover" />
          </motion.div>
        </section>

        {/* Main Content Layout */}
        <section className="px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar Desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <TableOfContents content={post.content} />
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-6 content-wrapper max-w-3xl">
              <MarkdownRenderer content={post.content} />
              
              {/* FAQs Section inside content */}
              {post.faqs.length > 0 && (
                <div className="mt-16 pt-12 border-t border-white/10">
                  <h2 className="mb-8 text-3xl font-bold text-white">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {post.faqs.map((faq, i) => (
                      <div key={i} className="p-6 border rounded-2xl bg-[#13131a] border-white/5">
                        <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                        <p className="text-zinc-400">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <NewsletterCTA />
            </article>

            {/* Right Sidebar (Related Tools) */}
            <aside className="lg:col-span-3 space-y-8">
              {post.relatedCalculators.length > 0 && (
                <div className="p-6 border rounded-2xl bg-[#1a1a24] border-[var(--color-brand)]/20 shadow-[0_0_20px_rgba(249,115,22,0.05)] sticky top-24">
                  <h3 className="mb-4 text-sm font-bold tracking-wider text-[var(--color-brand)] uppercase flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-[var(--color-brand)] rounded-full"></span>
                    Related Tools
                  </h3>
                  <div className="flex flex-col gap-3">
                    {post.relatedCalculators.map((calc, i) => (
                      <Link
                        key={i}
                        to={calc.url}
                        className="flex items-center justify-between p-4 transition-all border rounded-xl bg-[#0d0d12] border-white/5 hover:border-[var(--color-brand)] border-[var(--color-brand)]/50 group hover:-translate-y-1"
                      >
                        <span className="font-medium text-zinc-300 group-hover:text-white">{calc.name}</span>
                        <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-[var(--color-brand)]" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio Card */}
              <div className="p-6 border rounded-2xl bg-[#13131a] border-white/5">
                <h3 className="mb-4 text-sm font-bold tracking-wider text-white uppercase flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-white/20 rounded-full"></span>
                  About the Author
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <img src={post.author.avatar} alt={post.author.name} className="w-14 h-14 rounded-full border border-white/10" />
                  <div>
                    <div className="font-bold text-white">{post.author.name}</div>
                    <div className="text-xs text-[var(--color-brand)]">{post.author.role}</div>
                  </div>
                </div>
                <p className="text-sm text-zinc-400">
                  {post.author.bio}
                </p>
              </div>
            </aside>

          </div>
        </section>
      </div>
    </>
  );
};
