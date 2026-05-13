/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Calculators } from "./pages/Calculators";
import { CalculatorView } from "./pages/CalculatorView";
import { Converters } from "./pages/Converters";
import { ConverterView } from "./pages/ConverterView";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { BlogHome } from "./pages/BlogHome";
import { BlogPostView } from "./pages/BlogPostView";
import { BlogCategoryView } from "./pages/BlogCategoryView";
import { Founder } from "./pages/Founder";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { HelmetProvider } from 'react-helmet-async';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="calculators" element={<Calculators />} />
            <Route path="calculators/:id" element={<CalculatorView />} />
            <Route path="converters" element={<Converters />} />
            <Route path="converters/:id" element={<ConverterView />} />
            <Route path="blog" element={<BlogHome />} />
            <Route path="blog/:slug" element={<BlogPostView />} />
            <Route path="blog/category/:categoryId" element={<BlogCategoryView />} />
            <Route path="founder" element={<Founder />} />
            <Route path="about-founder" element={<Founder />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
