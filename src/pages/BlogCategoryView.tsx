import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { blogPosts, blogCategories } from '../data/blogPosts';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet-async';

export const BlogCategoryView = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Create readable category name from slug
  const categoryName = blogCategories.find(c => c.toLowerCase().replace(/\s+/g, '-') === categoryId);
  const posts = blogPosts.filter(p => p.category === categoryName);

  if (!categoryName) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen pt-24 text-center px-6">
        <h1 className="mb-4 text-4xl font-bold text-white">Category Not Found</h1>
        <Link to="/blog" className="px-6 py-3 font-medium text-[#050507] bg-[var(--color-brand)] rounded-full hover:bg-orange-400 transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{categoryName} Guides | Mathiq Blog</title>
        <meta name="description" content={`Explore all Mathiq guides, formulas, and educational content related to ${categoryName}.`} />
      </Helmet>
      
      <div className="pt-24 pb-20 min-h-screen">
        <section className="px-6 py-12 mx-auto max-w-7xl">
          <Link to="/blog" className="inline-flex items-center gap-2 mb-8 text-sm text-zinc-400 hover:text-[var(--color-brand)] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <h1 className="mb-4 text-4xl font-bold md:text-5xl text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand)] to-orange-400">
              {categoryName}
            </span> Guides
          </h1>
          <p className="mb-12 text-xl text-zinc-400 max-w-2xl">
            Explore our expert-written tutorials and resources focused on {categoryName.toLowerCase()}.
          </p>

          {posts.length > 0 ? (
             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             {posts.map((post, i) => (
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
          ) : (
            <div className="p-12 text-center border border-white/5 rounded-3xl bg-[#13131a]">
              <h3 className="text-xl font-bold text-white mb-2">No posts found</h3>
              <p className="text-zinc-400">We're still writing epic content for this category. Check back soon!</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
};
