'use client';

import { Metadata } from 'next';
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import QuoteModal from '@/components/modal/quotemodal';
import Footer from '@/components/Footer';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleMouseEnter = () => {
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setServicesDropdownOpen(false);
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setServicesDropdownOpen(false);
    }
  };

  return (
    <>
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <div className="min-h-screen bg-[#040407]">
        {/* Admin Header */}
        <header className="bg-[#040407] text-white transition-colors duration-300 sticky top-0 z-50 border-b border-gray-800/50">
          <nav className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6 h-[64px]">
            <div className="flex items-center">
              <a className="text-xl font-bold" href="/">
                <img
                  src="/vertical_logo.svg"
                  alt="PXB Media Logo"
                  className="h-10"
                />
              </a>
              <span className="ml-4 px-2 py-1 text-xs bg-primary/20 text-primary border border-primary/30 rounded-full">
                ADMIN
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <button
                className="md:hidden rounded border border-primary/70 px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary transition-colors duration-300"
                onClick={handleToggleMenu}
              >
                {menuOpen ? "CLOSE" : "MENU"}
              </button>
              <div
                ref={menuRef}
                className={`${
                  menuOpen ? "flex" : "hidden"
                } md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-full left-0 md:top-auto md:left-auto bg-[#040407] backdrop-blur-md w-full md:w-auto mt-2 pb-4 md:pb-0 md:mt-0 border-b md:border-none border-gray-800/50 z-50`}
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
                    className={`${
                      servicesDropdownOpen ? "block" : "hidden"
                    } absolute left-0 w-48 bg-[#040407] backdrop-blur-md border border-gray-800/50 rounded-md shadow-lg shadow-primary/10`}
                  >
                    <div className="invisible absolute -top-4 left-0 w-full h-4"></div>
                    <a
                      className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      href="/service/production"
                    >
                      PRODUCTION
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      href="/service/event-staffing"
                    >
                      EVENT STAFFING
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      href="/service/development"
                    >
                      DEVELOPMENT
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      href="/equipment"
                    >
                      EQUIPMENT RENTAL
                    </a>
                  </div>
                </div>
                <a
                  className="px-4 py-2 hover:text-primary hover:underline decoration-primary transition-colors duration-300"
                  href="/about-us"
                >
                  ABOUT
                </a>
                <a
                  className="px-4 py-2 hover:text-primary hover:underline decoration-primary transition-colors duration-300"
                  href="/cases"
                >
                 CASES
                </a>
                <a
                  className="px-4 py-2 hover:text-primary hover:underline decoration-primary transition-colors duration-300"
                  href="/admin/equipment"
                >
                 ADMIN
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Button
                onClick={openModal}
                className="text-[#E3E3E3] bg-primary hover:bg-primaryAlt h-10 shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                size="sm"
                variant="default"
              >
                Get a quote
              </Button>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        <Footer />
      </div>
    </>
  );
} 