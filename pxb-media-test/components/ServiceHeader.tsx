"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ServiceHeaderProps {
  openModal: () => void;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ openModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);
  const handleMouseEnter = () => setServicesDropdownOpen(true);
  const handleMouseLeave = () => setServicesDropdownOpen(false);

  return (
    <header className={`bg-black text-white transition-all duration-300 sticky top-0 z-50 ${isScrolled ? 'bg-opacity-90 backdrop-blur-sm shadow-lg shadow-black/20' : ''}`}>
      <nav className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-xl font-bold">
            <img src="/vertical_logo.svg" alt="PXB Media Logo" className="h-10" />
          </Link>
          <button
            className="md:hidden rounded border border-primary/70 px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary transition-colors duration-300"
            onClick={handleToggleMenu}
          >
            {menuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
        <div 
          ref={menuRef} 
          className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-full left-0 md:top-auto md:left-auto bg-black/95 backdrop-blur-md w-full md:w-auto mt-2 pb-4 md:pb-0 md:mt-0 border-b md:border-none border-gray-800/50 z-50`}
        >
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="px-4 py-2 hover:text-primary hover:underline decoration-primary transition-colors duration-300">
              SERVICES
            </button>
            <div
              className={`${servicesDropdownOpen ? 'block' : 'hidden'} absolute left-0 w-48 bg-black/95 backdrop-blur-md border border-gray-800/50 rounded-md shadow-lg shadow-primary/10`}
            >
              <div className="invisible absolute -top-4 left-0 w-full h-4"></div>
              <Link
                className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                href="/service/production"
              >
                PRODUCTION
              </Link>
              <Link
                className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                href="/service/event-staffing"
              >
                EVENT STAFFING
              </Link>
              <Link
                className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                href="/service/development"
              >
                DEVELOPMENT
              </Link>
            </div>
          </div>
          <Link
            className="px-4 py-2 hover:text-primary hover:underline decoration-primary transition-colors duration-300"
            href="/about-us"
          >
            ABOUT
          </Link>
          <Link
            className="px-4 py-2 hover:text-primary hover:underline decoration-primary transition-colors duration-300"
            href="/cases"
          >
            CASES
          </Link>
        </div>
        <div className="flex items-center">
          <Button
            onClick={openModal}
            className="text-[#E3E3E3] bg-primary hover:bg-primaryAlt h-10 shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
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