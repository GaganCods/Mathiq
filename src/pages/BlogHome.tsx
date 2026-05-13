import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../data/blogPosts';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet-async';

export const BlogHome = () => {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>Mathiq Blog | Calculators & Finance Guides</title>
        <meta name="description" content="Explore smart guides, formulas, tutorials, and educational content designed to help you calculate smarter with Mathiq." />
      </Helmet>

      <div className="pt-4 md:pt-12 pb-20 min-h-screen">
        {/* Hero Section */}
        <section className="relative px-6 py-8 md:py-12 text-center max-w-5xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-brand)]/20 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm text-[var(--color-brand)] bg-[var(--color-brand)]/10 rounded-full border border-[var(--color-brand)]/20">
              <BookOpen className="w-4 h-4" />
              <span>Mathiq Education</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
              Mathiq <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand)] to-orange-400 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">Blog</span>
            </h1>
            
            <p className="max-w-2xl mx-auto mb-10 text-xl text-zinc-400">
              Smart guides, formulas, tutorials, and educational content designed to help you calculate smarter.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3.5 font-medium text-[#050507] bg-[var(--color-brand)] rounded-full hover:bg-orange-400 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                Explore Articles
              </button>
            </div>
          </motion.div>
        </section>

        {/* Categories Scroller */}
        <section className="px-6 mx-auto mb-20 max-w-7xl">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {blogCategories.map((cat, i) => (
              <Link
                to={`/blog/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                key={i}
                className="whitespace-nowrap px-5 py-2.5 rounded-full bg-[#1a1a24] border border-[#2f2f3e] text-zinc-300 hover:text-white hover:border-[var(--color-brand)]/50 transition-all snap-start shadow-sm"
              >
                {cat}
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section id="featured" className="px-6 mx-auto mb-20 max-w-7xl">
            <h2 className="mb-8 text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[var(--color-brand)] rounded-full"></span>
              Featured Article
            </h2>
            <Link to={`/blog/${featuredPost.slug}`}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative flex flex-col overflow-hidden transition-colors border group md:flex-row rounded-3xl bg-[#13131a] border-white/5 hover:border-[var(--color-brand)]/30"
              >
                <div className="md:w-1/2 aspect-video md:aspect-auto h-64 md:h-auto overflow-hidden relative">
                  <div className="absolute inset-0 bg-[var(--color-brand)]/10 group-hover:opacity-0 transition-opacity z-10 mix-blend-overlay" />
                  <img 
                    src={featuredPost.featuredImage} 
                    alt={featuredPost.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="flex flex-col justify-center p-8 md:p-12 md:w-1/2">
                  <div className="flex items-center gap-4 mb-6 text-sm">
                    <span className="px-3 py-1 text-xs font-medium text-[var(--color-brand)] bg-[var(--color-brand)]/10 rounded-full border border-[var(--color-brand)]/20">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-400">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <h3 className="mb-4 text-3xl font-bold text-white transition-colors group-hover:text-[var(--color-brand)] line-clamp-2">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="mb-8 text-lg text-zinc-400 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-10 h-10 rounded-full border border-white/10" />
                    <div>
                      <div className="font-medium text-white">{featuredPost.author.name}</div>
                      <div className="text-sm text-zinc-500">{format(new Date(featuredPost.date), 'MMMM d, yyyy')}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </section>
        )}

        {/* Recent Posts Grid */}
        <section className="px-6 mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[var(--color-brand)] rounded-full"></span>
              Trending Guides
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, i) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col h-full overflow-hidden transition-all border group rounded-3xl bg-[#13131a] border-white/5 hover:border-[var(--color-brand)]/30 hover:shadow-[0_10px_30px_-15px_rgba(249,115,22,0.2)]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-[var(--color-brand)]/10 group-hover:opacity-0 transition-opacity z-10 mix-blend-overlay" />
                    <img 
                      src={post.featuredImage} 
                      alt={post.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 text-xs font-medium text-[var(--color-brand)] bg-[#0d0d12]/80 backdrop-blur-md rounded-full border border-[var(--color-brand)]/20">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-4 mb-4 text-xs text-zinc-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {format(new Date(post.date), 'MMM d, yyyy')}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="mb-3 text-xl font-bold leading-tight text-white transition-colors group-hover:text-[var(--color-brand)] line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="mb-6 text-sm text-zinc-400 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full border border-white/10" />
                        <span className="text-sm font-medium text-zinc-300">{post.author.name}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
