import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Mathiq — The Ultimate All-in-One Calculator Platform";
    } else if (location.pathname === "/calculators") {
      document.title = "All Calculators – Smart Math Tools | Mathiq";
    } else if (location.pathname === "/about") {
      document.title = "About Us – Mathiq";
    } else if (location.pathname === "/terms") {
      document.title = "Terms of Service – Mathiq";
    } else if (location.pathname === "/privacy") {
      document.title = "Privacy Policy – Mathiq";
    } else if (location.pathname === "/contact") {
      document.title = "Contact Us – Mathiq";
    }
  }, [location.pathname]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://mathiq.app/#website",
        "url": "https://mathiq.app/",
        "name": "Mathiq",
        "description": "Mathiq is a modern smart calculator platform built for fast calculations, educational insights, and everyday productivity.",
        "publisher": {
          "@id": "https://mathiq.app/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://mathiq.app/#organization",
        "name": "Mathiq",
        "url": "https://mathiq.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mathiq.app/logo.png"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col pt-20 relative overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {/* Global glow behind everything */}
      <div className="glow-background w-[800px] h-[800px] top-[-200px] left-1/2 -translate-x-1/2 opacity-40 mix-blend-screen"></div>

      <Header />
      <main className="flex-1 flex flex-col w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
