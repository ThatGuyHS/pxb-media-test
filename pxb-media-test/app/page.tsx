"use client";
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/modal/quotemodal';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import LaptopIcon from '@mui/icons-material/Laptop';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { SocialIcon } from "react-social-icons";

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
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
                <div className="invisible absolute -top-4 left-0 w-full h-4"></div> {/* Invisible div to bridge the gap */}
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
          <Button onClick={openModal} className="hidden text-[#E3E3E3] md:inline-flex bg-primary hover:bg-primaryAlt" size="sm" variant="default">
            Get a quote
          </Button>
        </nav>
      </header>
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <main className='no-scrollbar'>
      <section className="relative h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/tf.connect-11.jpg')" }}>
  <div className="absolute inset-0 bg-black opacity-50" />
  <div className="relative flex flex-col h-full items-center justify-center text-center px-4">
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fadeIn">
      Your Partner for All Things Live Production
    </h1>
    <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fadeIn animation-delay-300">
      Elevating your events with cutting-edge technology and expertise
    </p>
    <Button 
      onClick={openModal} 
      className="text-[#E3E3E3] bg-primary hover:bg-primaryAlt transition-all duration-300 transform hover:scale-105 animate-fadeIn animation-delay-600" 
      size="lg"
    >
      Get a Free Quote
    </Button>
  </div>
  <div className="absolute inset-x-0 bottom-10 flex justify-center animate-bounce">
    <a href="#services" className="text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </a>
  </div>
</section>

        <section id='services' className="bg-[#040407] py-12 md:py-20 text-white font-semibold">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-center mb-8 text-3xl font-bold md:text-4xl">Our Services</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <img src="/tf.connect-11.jpg" alt="Broadcast Production" className="mb-4 h-60 w-full object-cover rounded" />
                <div className="flex flex-col items-center">
                  <VideoCameraBackIcon fontSize="large" className='mb-2' />
                  <h3 className="text-xl md:text-2xl">Broadcast Production</h3>
                </div>
                <p className="px-4">
                  Our state-of-the-art esports studio is equipped with the latest technology to provide a professional and immersive experience for your esports events.
                </p>
                <Button className="mt-4 bg-primary hover:bg-primaryAlt" variant="default">Read More</Button>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/tf.connect-11.jpg" alt="Web Development" className="mb-4 h-60 w-full object-cover rounded" />
                <div className="flex flex-col items-center">
                  <LaptopIcon fontSize='large' className='mb-2' />
                  <h3 className="text-xl md:text-2xl">Web Development</h3>
                </div>
                <p className="px-4">
                  From video production to graphic design, our team of creatives can help you craft engaging content to showcase your brand or esports team.
                </p>
                <Button className="mt-4 bg-primary hover:bg-primaryAlt" variant="default">Read More</Button>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="/tf.connect-11.jpg" alt="Esports Event Staffing" className="mb-4 h-60 w-full object-cover rounded" />
                <div className="flex flex-col items-center">
                  <PeopleOutlineIcon fontSize='large' className='mb-2' />
                  <h3 className="text-xl md:text-2xl">Esports Event Staffing</h3>
                </div>
                <p className="px-4">
                  Let us handle the logistics of your esports event, from venue selection to live streaming, so you can focus on delivering an unforgettable experience.
                </p>
                <Button className="mt-4 bg-primary hover:bg-primaryAlt" variant="default">Read More</Button>
              </div>
            </div>
          </div>
        </section>

        

        <section className="bg-[#040407] py-12 md:py-20 text-white no-scrollbar">
          <div className="container mx-auto px-4 md:px-0">
            <div style={{ display: 'flex', overflowX: 'auto', alignItems: 'center', whiteSpace: 'nowrap' }} className="no-scrollbar">
              <div style={{ flexShrink: 0, minWidth: '200px', marginRight: '10px' }}>
                <img alt="Client Logo" className="h-12 w-auto" src="/Logo-esu-border.jpg" />
              </div>
              <div style={{ flexShrink: 0, minWidth: '200px', marginRight: '10px' }}>
                <img alt="Client Logo" className="h-12 w-auto" src="/SOL_Logo.svg" />
              </div>
              <div style={{ flexShrink: 0, minWidth: '200px', marginRight: '10px' }}>
                <img alt="Client Logo" className="h-12 w-auto" src="/Raketligan-White.png" />
              </div>
              <div style={{ flexShrink: 0, minWidth: '200px', marginRight: '10px' }}>
                <img alt="Client Logo" className="h-12 w-auto" src="/riotlogo.jpg" />
              </div>
              <div style={{ flexShrink: 0, minWidth: '200px', marginRight: '10px' }}>
                <img alt="Client Logo" className="h-12 w-auto" src="/riotlogo.jpg" />
              </div>
              <div style={{ flexShrink: 0, minWidth: '200px', marginRight: '10px' }}>
                <img alt="Client Logo" className="h-12 w-auto" src="/riotlogo.jpg" />
              </div>
              <div style={{ flexShrink: 0, minWidth: '200px', marginRight: '10px' }}>
                <img alt="Client Logo" className="h-12 w-auto" src="/riotlogo.jpg" />
              </div>
              <div style={{ flexShrink: 0, minWidth: '200px', marginRight: '10px' }}>
                <img alt="Client Logo" className="h-12 w-auto" src="/riotlogo.jpg" />
              </div>
            </div>
          </div>
        </section>

  

        <section className="bg-[#040407] py-12 md:py-20 text-white">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl"> Cases </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <a href="/project-1" className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="Project 1"
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/tf.connect-11.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <img src="/event-logo-1.png" alt="Event Logo" className="h-8 mb-2" />
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </a>
              <a href="/project-2" className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="Project 2"
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/tf.connect-11.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <img src="/event-logo-2.png" alt="Event Logo" className="h-8 mb-2" />
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </a>
              <a href="/project-3" className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="Project 3"
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/tf.connect-11.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <img src="/event-logo-3.png" alt="Event Logo" className="h-8 mb-2" />
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </a>
              <a href="/project-4" className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="Project 4"
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/tf.connect-11.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <img src="/event-logo-4.png" alt="Event Logo" className="h-8 mb-2" />
                  <h3 className="text-xl font-bold">Project 4</h3>
                  <p>Pellentesque habitant morbi tristique senectus.</p>
                </div>
              </a>
              <a href="/project-5" className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="Project 5"
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/tf.connect-11.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <img src="/event-logo-5.png" alt="Event Logo" className="h-8 mb-2" />
                  <h3 className="text-xl font-bold">Project 5</h3>
                  <p>Etiam porta sem malesuada magna mollis euismod.</p>
                </div>
              </a>
              <a href="/project-6" className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  alt="Project 6"
                  className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="/tf.connect-11.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <img src="/event-logo-6.png" alt="Event Logo" className="h-8 mb-2" />
                  <h3 className="text-xl font-bold">Project 6</h3>
                  <p>Nulla vitae elit libero, a pharetra augue.</p>
                </div>
              </a>
            </div>
          </div>
        </section>

   

        <section id="contact" className="bg-[#040407] py-12 md:py-20 text-white">
          <div className="container mx-auto px-4 md:px-0 text-center">
            <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl">Contact Us</h2>
            <p className="text-xl md:text-2xl">Reach out to us at:</p>
            <div className="text-3xl md:text-4xl font-bold mt-6 md:mt-8 flex justify-center space-x-1">
              <span className="inline-block animate-pulse">h</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.1s' }}>i</span>
              <span className="inline-block">@</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.2s' }}>p</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.3s' }}>x</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.4s' }}>b</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.5s' }}>m</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.6s' }}>e</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.7s' }}>d</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.8s' }}>i</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '0.9s' }}>a</span>
              <span className="inline-block">.</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '1s' }}>c</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '1.1s' }}>o</span>
              <span className="inline-block animate-pulse" style={{ animationDelay: '1.2s' }}>m</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#040407] text-gray-400 py-4 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} PXB Media. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
          <SocialIcon
            url="https://facebook.com/svenskesport"
            bgColor="#101737"
            fgColor="#3ABCF9"
          />
          <SocialIcon
            url="https://twitter.com/svenskesport"
            bgColor="#101737"
            fgColor="#3ABCF9"
          />
          <SocialIcon
            url="https://discord.gg/RshFVxJpHp"
            bgColor="#101737"
            fgColor="#3ABCF9"
          />
          </div>
        </div>
      </footer>
    </>
  );
}
