"use client";

import { useState } from 'react';
import { SocialIcon } from "react-social-icons";
import QuoteModal from '@/components/modal/quotemodal';

export default function Footer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <footer id='contact' className="bg-[#040407] text-gray-400 pt-16 pb-8 border-t border-gray-800/50 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="mb-6">
                <img src="/vertical_logo.svg" alt="PXB Media Logo" className="h-12 mb-4" />
                <p className="text-sm leading-relaxed">
                  Innovating in production, event staffing, and development to transform industries and improve lives.
                </p>
              </div>
              <div className="flex space-x-4 mt-6">
                <SocialIcon
                  url="https://twitter.com/PXBMedia"
                  bgColor="#151C38"
                  fgColor="#3ABCF9"
                  className="hover:scale-110 transition-transform duration-300"
                  style={{ height: 36, width: 36 }}
                />
                <SocialIcon
                  url="https://linkedin.com/company/pxbmedia"
                  bgColor="#151C38"
                  fgColor="#3ABCF9"
                  className="hover:scale-110 transition-transform duration-300"
                  style={{ height: 36, width: 36 }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/service/production" className="hover:text-primary transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Production
                  </a>
                </li>
                <li>
                  <a href="/service/event-staffing" className="hover:text-primary transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Event Staffing
                  </a>
                </li>
                <li>
                  <a href="/service/development" className="hover:text-primary transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Development
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about-us" className="hover:text-primary transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/cases" className="hover:text-primary transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Cases
                  </a>
                </li>
                <li>
                  <button onClick={openModal} className="hover:text-primary transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Get a Quote
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hi@pxbmedia.com</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Jönköping, Sweden</span>
                </li>
              </ul>
              <div className="mt-6">
                <button 
                  onClick={openModal}
                  className="bg-primary hover:bg-primaryAlt text-white py-2 px-4 rounded-md transition-colors duration-300 inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} PXB Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
} 