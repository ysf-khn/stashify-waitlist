"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-display font-bold bg-gradient-to-r from-stashify-600 to-stashify-800 bg-clip-text text-transparent">
            Stashify
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-700 hover:text-stashify-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-700 hover:text-stashify-600 transition-colors"
          >
            How It Works
          </a>

          <a href="#waitlist" className="stashify-button">
            Join Waitlist
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white flex flex-col items-center justify-center transition-all duration-300 transform md:hidden",
          mobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-8 text-xl">
          <a
            href="#features"
            className="text-gray-700 hover:text-stashify-600 transition-colors"
            onClick={toggleMobileMenu}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-700 hover:text-stashify-600 transition-colors"
            onClick={toggleMobileMenu}
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-stashify-600 transition-colors"
            onClick={toggleMobileMenu}
          >
            Testimonials
          </a>
          <a
            href="#waitlist"
            className="stashify-button"
            onClick={toggleMobileMenu}
          >
            Join Waitlist
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
