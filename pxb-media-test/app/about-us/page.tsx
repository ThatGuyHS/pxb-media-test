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
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
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
    <div className="font-custom bg-element text-white">
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
            <a className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300" href="#contact">
              CONTACT
            </a>
            <a className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300" href="#">
              ABOUT
            </a>
          </div>
          <Button onClick={openModal} className="hidden text-[#E3E3E3] md:inline-flex color-primary hover:bg-primaryAlt" size="sm" variant="default">
            Get a quote
          </Button>
        </nav>
      </header>

      {/* Intro / About the Company */}
      <section className="bg-element py-20 text-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg">
              PXB Media is dedicated to providing innovative solutions that enhance the lives of our customers. Our commitment to excellence and passion for innovation drive us to exceed expectations in every project we undertake.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src='/tf.connect-11.jpg' alt="About Us" className="rounded-lg shadow-lg mx-auto pl-4" />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-elementAlt text-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg">
              Our mission is to deliver high-quality products and services that empower our clients to achieve their goals. We believe in the power of technology and creativity to transform industries and improve lives.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src='/tf.connect-11.jpg' alt="Our Mission" className="rounded-lg shadow-lg mx-auto pl-4" />
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 bg-element text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-elementAlt p-6 rounded-lg">
                <img
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-secondary mb-2">{member.role}</p>
                <p>
                  <a href={`mailto:${member.email}`} className="text-primary">
                    {member.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
        <footer id='contact' className="bg-[#040407] text-gray-400 py-4 text-center">
        <div className="container mx-auto px-4">
          <p>
            &copy; {new Date().getFullYear()} PXB Media. All rights reserved.
          </p>
          <p>
            Contact: hi@pxbmedia.com
          </p>
          <div className="flex justify-center space-x-4 mt-2">
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
      </footer>
    </div>
  );
};

export default AboutUs;
