'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/modal/quotemodal';
import Footer from '@/components/Footer';
import './case-styles.css';

type ArticleData = {
  id: string;
  title: string;
  author: string;
  date: string;
  categories: string[];
  intro: string;
  imageUrl: string;
  secondaryImageUrl: string;
  imageCredit: string;
  paragraphs: string[];
  servicesProvided: {
    [category: string]: string[];
  };
};

const ArticleClientComponent: React.FC<{ initialData: ArticleData }> = ({ initialData }) => {
  const [data] = useState<ArticleData>(initialData);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsScrolled(window.scrollY > headerRef.current.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const handleMouseEnter = () => setServicesDropdownOpen(true);
  const handleMouseLeave = () => setServicesDropdownOpen(false);

  const formatCategoryName = (category: string) => {
    return category.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase();
  };

  return (
    <div className="bg-black text-white font-custom">
      <header ref={headerRef} className={`bg-[#040407] text-white transition-all duration-300 sticky top-0 z-50 ${isScrolled ? 'bg-opacity-90 backdrop-blur-sm' : ''}`}>
        <nav className="container mx-auto flex flex-wrap items-center justify-between py-3 px-4 md:px-6">
          <div className="flex items-center space-x-6">
            <a className="text-xl font-bold" href="/">
              <img src="/vertical_logo.svg" alt="PXB Media Logo" className="h-10" />
            </a>
            <button
              className="md:hidden rounded border px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-300"
              onClick={handleToggleMenu}
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
          <div ref={menuRef} className={`${menuOpen ? 'flex' : 'hidden'} flex-col absolute bg-black w-full mt-2 pb-4 md:pb-0 md:w-auto md:static md:flex md:flex-row md:space-x-6`}>
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300"
              >
                SERVICES
              </button>
              <div className={`${servicesDropdownOpen ? 'block' : 'hidden'} absolute left-0 w-48 bg-black border border-gray-700 rounded-md shadow-lg`}>
                <div className="invisible absolute -top-4 left-0 w-full h-4"></div>
                <a className="block px-4 py-2 hover:bg-gray-800" href="/service/production">PRODUCTION</a>
                <a className="block px-4 py-2 hover:bg-gray-800" href="/service/event-staffing">EVENT STAFFING</a>
                <a className="block px-4 py-2 hover:bg-gray-800" href="/service/development">DEVELOPMENT</a>
              </div>
            </div>
            <a className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300" href="/about-us">
              ABOUT
            </a>
            <a
                className="px-4 py-2 hover:text-primary hover:underline decoration-primary transition-colors duration-300"
                href="/cases"
              >
               CASES
              </a>
          </div>
          <Button onClick={openModal} className="hidden text-[#E3E3E3] md:inline-flex color-primary hover:bg-primaryAlt" size="sm" variant="default">
            Get a quote
          </Button>
        </nav>
      </header>

      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />

      <div className="relative">
        <img
          src={data.imageUrl}
          alt="Banner Image"
          className="w-full h-[50vh] md:h-[70vh] object-cover case-hero-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" style={{ marginTop: '-40vh' }}>
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 text-shadow-lg leading-tight">{data.title}</h1>
        </div>
        
        <div className="w-full max-w-4xl mx-auto relative mt-6">
          <img
            src={data.secondaryImageUrl}
            alt="Featured Image"
            className="w-full object-cover shadow-lg rounded-lg case-image"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent rounded-lg">
            {/* Title moved outside of this container */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 case-container">
        <div className="max-w-6xl mx-auto md:flex md:gap-8">
          {data.servicesProvided && (
            <div className="md:w-1/3 lg:w-1/4 mt-8 md:mt-0 hidden md:block">
              <div className="sticky-sidebar">
                <h3 className="services-provided-title">SERVICES PROVIDED</h3>
                <div className="service-box">
                  {Object.entries(data.servicesProvided).map(([category, services]) => (
                    <div className='service-category' key={category}>
                      <h4 className="service-title">{formatCategoryName(category)}</h4>
                      <ul className="service-list">
                        {services.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="md:w-2/3 lg:w-3/4 case-content">
            <div className="max-w-3xl">
              <p className="text-lg mb-8 leading-relaxed case-intro">{data.intro}</p>
              <p className="text-sm text-gray-400 mb-8 text-left image-credit">{`Image Credit: ${data.imageCredit}`}</p>
              <div className="space-y-6">
                {data.paragraphs.map((paragraph, index) => (
                  <p key={index} className="case-paragraph">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {data.servicesProvided && (
        <div className="md:hidden container mx-auto px-4 md:px-6 mt-8 mb-12">
          <div className="sticky-sidebar">
            <h3 className="services-provided-title">SERVICES PROVIDED</h3>
            <div className="service-box">
              {Object.entries(data.servicesProvided).map(([category, services]) => (
                <div className='service-category' key={category}>
                  <h4 className="service-title">{formatCategoryName(category)}</h4>
                  <ul className="service-list">
                    {services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ArticleClientComponent;