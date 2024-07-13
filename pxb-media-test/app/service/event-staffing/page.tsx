"use client";
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/modal/quotemodal';
import { SocialIcon } from "react-social-icons";

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
          <div className="container mx-auto text-center px-4 md:px-0 pb-8">
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
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-4 md:px-0">
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
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <img src='/tf.connect-11.jpg' alt="Feature A" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid Section */}
        <div className="w-full py-16 bg-black text-white">
          <div className="container mx-auto px-4 md:px-0">
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
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-4 md:px-0">
            <div className="md:w-1/2">
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <img src='/tf.connect-11.jpg' alt="Feature B" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
              </div>
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
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-4 md:px-0">
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
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <img src='/tf.connect-11.jpg' alt="Feature C" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer id='contact' className="bg-[#040407] text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About PXB Media</h3>
              <p>Innovating in production, event staffing, and development to transform industries and improve lives.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>Email: hi@pxbmedia.com</p>
              <div className="flex space-x-4 mt-4">
                <SocialIcon
                  url="https://facebook.com/svenskesport"
                  bgColor="#151C38"
                  fgColor="#3ABCF9"
                />
                <SocialIcon
                  url="https://twitter.com/svenskesport"
                  bgColor="#151C38"
                  fgColor="#3ABCF9"
                />
                <SocialIcon
                  url="https://discord.gg/RshFVxJpHp"
                  bgColor="#151C38"
                  fgColor="#3ABCF9"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul>
                <li><a href="/service/production" className="hover:text-primary">Production</a></li>
                <li><a href="/service/event-staffing" className="hover:text-primary">Event Staffing</a></li>
                <li><a href="/service/development" className="hover:text-primary">Development</a></li>
              </ul>
            </div>
          
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} PXB Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesComponent;
