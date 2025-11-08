"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ThemeToggleWrapper from "./ThemeToggleWrapper";
import MicroInteraction from "./MicroInteraction";

const Navbar: React.FC<{}> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'À propos' },
    { id: 'experience', label: 'Expérience' },
    { id: 'projects', label: 'Projets' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'testimonials', label: 'Avis' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[50] transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full h-[65px] px-4 md:px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <Link href="/" className="hover:scale-105 transition-transform duration-200">
            <Image
              src="/Logo.png"
              alt="logo"
              width={100}
              height={100}
              sizes="(max-width: 768px) 100vw, 100px"
              className="cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row items-center gap-6">
            {navItems.map((item, index) => (
              <MicroInteraction key={item.id} type="button" delay={index * 0.1}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-white transition-colors duration-200 font-medium text-sm uppercase tracking-wider hover:scale-105"
                >
                  {item.label}
                </button>
              </MicroInteraction>
            ))}
            <ThemeToggleWrapper />
            <MicroInteraction type="button" delay={0.6}>
              <a
                href="mailto:abdelali.noureddine86@gmail.com"
                className="bg-white text-black hover:bg-gray-200 font-semibold py-2 px-6 rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Contact
              </a>
            </MicroInteraction>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white hover:text-purple-400 transition-colors duration-200 font-medium text-sm uppercase tracking-wider py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-between py-2">
                <span className="text-white text-sm font-medium">Thème</span>
                <ThemeToggleWrapper />
              </div>
              <a
                href="mailto:abdelali.noureddine86@gmail.com"
                className="block w-full bg-white text-black hover:bg-gray-200 font-semibold py-3 px-6 rounded-full transition-all duration-200 text-center"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
