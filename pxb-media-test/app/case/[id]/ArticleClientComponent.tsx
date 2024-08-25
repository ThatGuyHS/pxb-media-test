'use client';

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/modal/quotemodal';

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

  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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
      <header className="bg-black text-white transition-colors duration-300 sticky top-0 z-50">
        <nav className="container mx-auto flex flex-wrap items-center justify-between py-1 px-4 md:px-0">
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
            <a className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300" href="#contact">
              CONTACT
            </a>
            <a className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300" href="/about-us">
              ABOUT
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
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>

      <div className="relative flex justify-center" style={{ marginTop: '-40vh' }}>
        <div className="w-11/12 max-w-4xl relative">
          <img
            src={data.secondaryImageUrl}
            alt="Featured Image"
            className="w-full object-cover shadow-lg rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/70 to-transparent rounded-lg">
            <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-8 py-4 text-center">
        <p className="text-lg">
          by {data.author} Published {data.date} in
          {data.categories.map((category, index) => (
            <span key={index} className="text-primary ml-1">
              {category}{index < data.categories.length - 1 ? ',' : ''}
            </span>
          ))}
        </p>
      </div>

      <div className="px-8 py-12 max-w-4xl mx-auto md:flex md:gap-8">
        {data.servicesProvided && (
          <div className="md:w-1/3 mt-8 md:mt-0 hidden md:block">
            <div className="bg-black bg-opacity-70 p-4 rounded-lg">
              <h3 className="text-primary text-lg font-bold mb-2">SERVICES PROVIDED</h3>
              {Object.entries(data.servicesProvided).map(([category, services]) => (
                <div className='pb-4' key={category}>
                  <h4 className="bg-primary px-2 text-white justify-center font-bold mb-1">{formatCategoryName(category)}</h4>
                  <ul className="text-sm text-gray-300 list-disc list-inside mb-2">
                    {services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="md:w-2/3">
          <p className="text-lg mb-8">{data.intro}</p>
          <p className="text-sm text-gray-400 mb-8">Image Credit: {data.imageCredit}</p>
          <div className="space-y-6 text-base leading-relaxed">
            {data.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {data.servicesProvided && (
        <div className="md:hidden px-8">
          <div className="bg-black bg-opacity-70 p-4 rounded-lg">
            <h3 className="text-primary text-lg font-bold mb-2">SERVICES PROVIDED</h3>
            {Object.entries(data.servicesProvided).map(([category, services]) => (
              <div className='pb-4' key={category}>
                <h4 className="bg-primary px-2 text-white justify-center font-bold mb-1">{formatCategoryName(category)}</h4>
                <ul className="text-sm text-gray-300 list-disc pl-4 mb-2">
                  {services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleClientComponent;