"use client";
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/modal/quotemodal';

const featuresData = [
  {
    icon: '/tf.connect-11.jpg',
    title: "Feature Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Feature Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Feature Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Feature Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Feature Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Feature Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla."
  }
];

const ServicesComponent: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const menuRef = useRef<HTMLDivElement>(null);

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
          <div className="relative" ref={dropdownRef}>
              <button
                className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300"
                onClick={handleToggleServicesDropdown}
              >
                SERVICES
              </button>
              <div className={`${servicesDropdownOpen ? 'block' : 'hidden'} absolute left-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg`}>
                <a className="block px-4 py-2 hover:bg-gray-800" href="/service/production">PRODUCTION</a>
                <a className="block px-4 py-2 hover:bg-gray-800" href="/service/event-staffing">EVENT STAFFING</a>
                <a className="block px-4 py-2 hover:bg-gray-800" href="/service/development">DEVELOPMENT</a>
              </div>
            </div>
            <a className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300" href="#">
              SHOWREEL
            </a>
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
      {/* Banner Image Section */}
      <div className="relative w-full">
        <img
          src='/tf.connect-11.jpg'
          alt="Banner Image"
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black to-transparent">
        </div>
      </div>

      <div className="w-full px-4 pt-16">
        {/* Live Broadcast Production Section */}
        <div className="w-full py-16 bg-black text-white">
          <div className="container mx-auto text-center px-8 pb-8">
            <h2 className="text-4xl font-bold mb-4">Live Broadcast Production</h2>
            <p className="text-lg">
              <b>Highlight of Live Broadcast Production: Highlight of Live Broadcast Production:Highlight of Live Broadcast Production:Highlight of Live Broadcast Production:Highlight of Live Broadcast Production:</b><br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
            </p>
          </div>
        </div>

        {/* Feature A Section */}
        <div className="w-full py-16 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-8">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Feature A</h3>
              <p className="text-base mb-4">
                <b>Key Benefits of Feature A:</b><br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src='/tf.connect-11.jpg' alt="Feature A" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>

        {/* Features Grid Section */}
        <div className="w-full py-16 bg-black text-white">
          <div className="container mx-auto px-8">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresData.map((feature, index) => (
                <div key={index} className="p-6">
                  <img src={feature.icon} alt={`${feature.title} icon`} className="h-16 mb-2" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-base font-semibold mb-2">Key Points of {feature.title}:</p>
                  <p className="text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature B Section */}
        <div className="w-full py-16 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-8">
            <div className="md:w-1/2">
              <img src='/tf.connect-11.jpg' alt="Feature B" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4 pl-2">Feature B</h3>
              <p className="text-base mb-4 pl-2">
                <b>Advantages of Feature B:</b><br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="w-full bg-primary py-16 text-center text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-4xl font-bold mb-2">48+</h3>
                <p className="text-lg">Something</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">4</h3>
                <p className="text-lg">Something</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">900,000+</h3>
                <p className="text-lg">Something</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature C Section */}
        <div className="w-full py-16 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-8">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Feature C</h3>
              <p className="text-base mb-4">
                <b>Highlights of Feature C:</b><br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src='/tf.connect-11.jpg' alt="Feature C" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <section id="contact" className="w-full py-16 bg-black text-white">
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
    </div>
  );
};

export default ServicesComponent;
