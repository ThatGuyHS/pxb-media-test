"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SocialIcon } from "react-social-icons";

const teamMembers = [
  {
    name: 'Viktor Erlandsson',
    role: 'Founder',
    email: 'viktor@pxbmedia.com',
    image: '/headshot_viktor.jpg',
  },
  {
    name: 'Guido Andriol',
    role: 'Head of Broadcast Tech & Co-Founder',
    email: 'guido@pxbmedia.com',
    image: '/guiDO.jpg',
  },
  {
    name: 'Adam Peleback',
    role: 'Web Developer / Co-owner',
    email: 'adam@pxbmedia.com',
    image: '/adam.png',
  },
  {
    name: 'Daniel Kauppinen',
    role: 'Project Manager',
    email: 'daniel@pxbmedia.com',
    image: '/kappez.jpg',
  },
];

const AboutUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (!menuRef.current?.contains(event.target as Node)) {
      setMenuOpen(false);
    }
    if (!dropdownRef.current?.contains(event.target as Node)) {
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
    <div className="font-custom bg-element text-white">
      {/* Header */}
      <header className="bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg text-white transition-colors duration-300 sticky top-0 z-50">
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
            <a className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300" href="#contact">
              CONTACT
            </a>
          </div>
          <Button onClick={openModal} className="hidden text-[#E3E3E3] md:inline-flex color-primary hover:bg-primaryAlt" size="sm" variant="default">
            Get a quote
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/tf.connect-11.jpg')"}}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-6">About PXB Media</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Dedicated to providing innovative solutions that enhance the lives of our customers through technology and creativity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primaryAlt text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              {/* Add an appropriate icon or illustration */}
              <img src="/mission-icon.svg" alt="Mission" className="w-32 h-32 mx-auto" />
            </div>
            <p className="text-lg w-full md:w-3/4 text-left md:pl-8">
              Our mission is to deliver high-quality products and services that empower our clients to achieve their goals. We believe in the power of technology and creativity to transform industries and improve lives.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-element text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-elementAlt p-6 rounded-lg">
              <img src="/innovation-icon.svg" alt="Innovation" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>Constantly pushing boundaries and exploring new possibilities.</p>
            </div>
            <div className="bg-elementAlt p-6 rounded-lg">
              <img src="/quality-icon.svg" alt="Quality" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p>Delivering excellence in every project we undertake.</p>
            </div>
            <div className="bg-elementAlt p-6 rounded-lg">
              <img src="/collaboration-icon.svg" alt="Collaboration" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p>Working together to achieve extraordinary results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-elementAlt">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-element p-6 rounded-lg transform transition duration-300 hover:scale-105">
                <img
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-secondary mb-2">{member.role}</p>
                <p>
                  <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                    {member.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Enhanced Footer */}
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

export default AboutUs;