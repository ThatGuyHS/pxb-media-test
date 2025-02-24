"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from 'react';
import { SocialIcon } from "react-social-icons";
import QuoteModal from '@/components/modal/quotemodal';
import './cases-styles.css';

export default function Component() {
    const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [showQuoteButton, setShowQuoteButton] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setShowQuoteButton(window.scrollY > heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const cases = [
    {
      id: "dreamhack",
      img: "/dh1.jpg",
      title: "Dreamhack Summer and Winter",
      desc: "We have provided broadcasting services for Dreamhack LAN stage, BYOC admins and admins for free play areas.",
    },
    {
      id: "tfconnect",
      img: "/tf.connect-11.jpg",
      logo: "/tfconnect-logo.png",
      title: "TF Connect",
      desc: "PXB Media provided a full production service for TF Connect&apos;s virtual event.",
    },
    {
      id: "svenskaonlineligan",
      img: "/SOLplayoffs.jpg",
      title: "Svenska Onlineligan",
      desc: "PXB Media provided a full LAN broadcast production for the Svenska Onlineligan, as well as project management.",
    },
    {
      id: "subzero",
      img: "/subzero1.jpg",
      title: "Subzero E-Games",
      desc: "PXB Media provided a full-scale esports production, helped plan and build the event, and provided event staffing.",
    },
    {
      id: "esportsm",
      img: "/esportsm1.png",
      title: "E-sport SM 2023",
      desc: "Together with the Swedish Esports Federation, we provided a full-scale production for E-sport SM 2023.",
    },
    {
      id: "abax",
      img: "/abaximg.png",
      logo: "/event-logo-6.png",
      title: "Abax Webinar",
      desc: "PXB Media provided a live broadcast production for Abax&apos;s webinar.",
    },
  ]

  return (
    <>
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <main className="bg-[#040407] min-h-screen text-white">
        <header className="bg-black/90 backdrop-blur-sm text-white transition-colors duration-300 sticky top-0 z-50 border-b border-gray-800/50">
          <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6 h-[72px]">
            <div className="flex items-center">
              <a className="text-xl font-bold" href="/">
                <img
                  src="/vertical_logo.svg"
                  alt="PXB Media Logo"
                  className="h-10"
                />
              </a>
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
                } md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-full left-0 md:top-auto md:left-auto bg-black/95 backdrop-blur-md w-full md:w-auto mt-2 pb-4 md:pb-0 md:mt-0 border-b md:border-none border-gray-800/50 z-50`}
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
                    } absolute left-0 w-48 bg-black/95 backdrop-blur-md border border-gray-800/50 rounded-md shadow-lg shadow-primary/10`}
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
        
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl cases-container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
              Our Cases
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Explore our portfolio of successful projects and see how we&apos;ve helped our clients achieve their goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cases-grid">
            {cases.map((caseItem) => (
              <Link key={caseItem.id} href={`/case/${caseItem.id}`} className="group">
                <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 border border-gray-800/50 case-card">
                  <div className="relative h-64 overflow-hidden case-image-container">
                    <img
                      src={caseItem.img}
                      alt={caseItem.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 case-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
                  </div>
                  <div className="p-6 case-content">
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 case-title">{caseItem.title}</h2>
                    <p className="text-sm text-gray-300 mb-4 case-description">{caseItem.desc}</p>
                    <div className="flex items-center text-primary font-medium case-link">
                      <span className="mr-2">View Case</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="transform group-hover:translate-x-1 transition-transform duration-300 case-link-icon"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
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
                  <span>Stockholm, Sweden</span>
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
  )
}