"use client";
import React, { useState, useRef } from 'react';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import VideocamIcon from '@mui/icons-material/Videocam';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import ComputerIcon from '@mui/icons-material/Computer';

import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/modal/quotemodal';
import { SocialIcon } from "react-social-icons";



const featuresData = [
  {
    icon: AdminPanelSettingsIcon,
    title: "Tournament Administrators",
    description: "Experienced admins who ensure smooth execution of esports tournaments, managing rules, resolving disputes, and maintaining competitive integrity."
  },
  {
    icon: PersonIcon,
    title: "Player Managers",
    description: "Dedicated professionals who handle logistics, communication, and support for players, allowing them to focus on their performance during events."
  },
  {
    icon: RoomServiceIcon,
    title: "Hospitality Staff",
    description: "Trained personnel who create a welcoming environment for attendees, manage VIP areas, and ensure guest comfort throughout the event."
  },
  {
    icon: VideocamIcon,
    title: "Broadcast Staff",
    description: "Skilled technicians and producers who manage live streams, camera operations, and overall production quality for seamless event broadcasts."
  },
  {
    icon: TheaterComedyIcon,
    title: "Stage Managers",
    description: "Experienced professionals who coordinate on-stage activities, manage talent, and ensure smooth transitions between segments of the event."
  },
  {
    icon: ComputerIcon,
    title: "Technical Support",
    description: "Expert IT staff who handle hardware setup, network management, and rapid troubleshooting to keep the event running without technical hitches."
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

      <div className="w-full px-4 py-20">
        {/* Event Staffing Services Section */}
        <div className="w-full py-20 bg-black text-white">
          <div className="container mx-auto text-center px-6 md:px-0">
            <h2 className="text-4xl font-bold mb-6">Event Staffing Services</h2>
            <p className="text-lg max-w-3xl mx-auto">
              <b className="block mb-4">Elevate Your Esports Events with Our Professional Staffing Solutions</b>
              At PXB Media, we provide comprehensive event staffing services tailored specifically for esports tournaments and gaming events. Our team of skilled professionals ensures smooth operations, exceptional experiences for participants and attendees, and flawless execution of your event vision. From tournament administrators to broadcast technicians, we offer the expertise you need to make your event a resounding success.
            </p>
          </div>
        </div>

        {/* Tournament Administration Section */}
        <div className="w-full py-20 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-6 md:px-0 space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6">Tournament Administration</h3>
              <p className="text-base">
                <b className="block mb-4">Key Benefits of Our Tournament Administrators:</b>
                Our experienced tournament administrators are the backbone of any successful esports event. They manage tournament rules, oversee match scheduling, resolve disputes, and ensure fair play. With their expertise, you can focus on delivering an exceptional experience to players and spectators while we handle the intricate details of tournament execution. From group stages to grand finals, our admins maintain the competitive integrity and smooth flow of your event.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <img src='/tf.connect-11.jpg' alt="Tournament Administration" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid Section */}
        <div className="w-full py-16 bg-black text-white">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Event Staffing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresData.map((feature, index) => (
                <div key={index} className="p-6">
                  <feature.icon className="h-16 w-16 mb-2 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-base font-semibold mb-2">Key Responsibilities:</p>
                  <p className="text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Player Management Section */}
        <div className="w-full py-20 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-6 md:px-0 space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <img src='/tf.connect-11.jpg' alt="Player Management" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6">Player Management</h3>
              <p className="text-base">
                <b className="block mb-4">Advantages of Our Player Management Services:</b>
                Our dedicated player managers act as the crucial link between tournament organizers and competitors. They handle player registration, coordinate schedules, manage practice areas, and ensure all player needs are met. By taking care of logistics and communication, our managers allow players to focus entirely on their performance. This personalized support enhances the player experience and contributes to the overall professionalism of your event.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="w-full bg-primary py-20 text-center text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-5xl font-bold mb-4">100+</h3>
                <p className="text-xl">Events Staffed</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-4">500+</h3>
                <p className="text-xl">Skilled Professionals</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-4">1,000,000+</h3>
                <p className="text-xl">Attendees Served</p>
              </div>
            </div>
          </div>
        </div>

        {/* Broadcast Staff Section */}
        <div className="w-full py-20 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-6 md:px-0 space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6">Broadcast Staff</h3>
              <p className="text-base">
                <b className="block mb-4">Highlights of Our Broadcast Team:</b>
                Our professional broadcast staff ensures your event reaches audiences worldwide with top-notch production quality. From camera operators and sound technicians to directors and producers, our team handles every aspect of your live broadcast. We utilize cutting-edge technology and industry best practices to deliver seamless streams, engaging graphics, and immersive viewer experiences. Whether its managing multiple camera feeds, coordinating with casters, or troubleshooting technical issues, our broadcast team guarantees your event shines on screen.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <img src='/tf.connect-11.jpg' alt="Broadcast Staff" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer id='contact' className="bg-[#040407] text-gray-400 py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 className="text-xl font-bold mb-4">About PXB Media</h3>
        <p>Innovating in production, event staffing, and development to transform industries and improve lives.</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <p>Email: hi@pxbmedia.com</p>
        <div className="flex justify-center space-x-4 mt-4">
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
