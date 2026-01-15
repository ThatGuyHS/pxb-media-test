"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceHeaderProps {
  openModal: () => void;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ openModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setServicesDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleToggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setServicesDropdownOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setServicesDropdownOpen(false);
  }, []);

  return (
    <header className={`bg-[#040407] text-white sticky top-0 z-50 border-b border-gray-800/50 ${
      isScrolled ? 'bg-opacity-90 backdrop-blur-sm shadow-lg shadow-black/20' : ''
    } ${!prefersReducedMotion ? 'transition-all duration-300' : ''}`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
      <nav
        className="container mx-auto flex flex-wrap items-center justify-between py-3 px-4 md:px-6 h-16"
        aria-label="Main navigation"
      >
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#040407] rounded-md"
          >
            <img
              src="/vertical_logo.svg"
              alt="PXB Media - Home"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <button
            className="md:hidden rounded border border-primary/70 px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#040407]"
            onClick={handleToggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-full left-0 md:top-auto md:left-auto bg-[#040407] backdrop-blur-md w-full md:w-auto mt-2 pb-4 md:pb-0 md:mt-0 border-b md:border-none border-gray-800/50 z-50`}
        >
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="px-4 py-2 hover:text-primary hover:underline decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#040407] rounded-md"
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              aria-controls="services-dropdown"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            >
              SERVICES
            </button>
            <div
              id="services-dropdown"
              role="menu"
              className={`${servicesDropdownOpen ? 'block' : 'hidden'} absolute left-0 w-48 bg-[#040407] backdrop-blur-md border border-gray-800/50 rounded-md shadow-lg shadow-primary/10`}
            >
              <div className="invisible absolute -top-4 left-0 w-full h-4"></div>
              <Link
                role="menuitem"
                className="block px-4 py-2 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:bg-primary/10 focus-visible:text-primary"
                href="/service/production"
              >
                PRODUCTION
              </Link>
              <Link
                role="menuitem"
                className="block px-4 py-2 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:bg-primary/10 focus-visible:text-primary"
                href="/service/event-staffing"
              >
                EVENT STAFFING
              </Link>
              <Link
                role="menuitem"
                className="block px-4 py-2 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:bg-primary/10 focus-visible:text-primary"
                href="/service/development"
              >
                DEVELOPMENT
              </Link>
            </div>
          </div>
          <Link
            className="px-4 py-2 hover:text-primary hover:underline decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#040407] rounded-md"
            href="/about-us"
          >
            ABOUT
          </Link>
          <Link
            className="px-4 py-2 hover:text-primary hover:underline decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#040407] rounded-md"
            href="/cases"
          >
            CASES
          </Link>
        </div>
        <div className="flex items-center">
          <Button
            onClick={openModal}
            className="text-[#E3E3E3] bg-primary hover:bg-primaryAlt h-10 shadow-md shadow-primary/20 hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#040407]"
            size="sm"
            variant="default"
            data-modal-trigger
          >
            Get a quote
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default ServiceHeader;
