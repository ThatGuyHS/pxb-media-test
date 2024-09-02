"use client";
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/modal/quotemodal';
import { SocialIcon } from "react-social-icons";
import ServicePageComponent from '@/components/component/service-page';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import VideocamIcon from '@mui/icons-material/Videocam';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import ComputerIcon from '@mui/icons-material/Computer';

const EventStaffingServicesPage: React.FC = () => {
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

  const eventStaffingContent = {
    bannerImage: '/tf.connect-11.jpg',
    title: "Event Staffing Services",
    description: "Elevate Your Esports Events with Our Professional Staffing Solutions. At PXB Media, we provide comprehensive event staffing services tailored specifically for esports tournaments and gaming events. Our team of skilled professionals ensures smooth operations, exceptional experiences for participants and attendees, and flawless execution of your event vision. From tournament administrators to broadcast technicians, we offer the expertise you need to make your event a resounding success.",
    features: [
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
    ],
    featureA: {
      title: "Tournament Administration",
      subtitle: "Key Benefits of Our Tournament Administrators:",
      description: "Our experienced tournament administrators are the backbone of any successful esports event. They manage tournament rules, oversee match scheduling, resolve disputes, and ensure fair play. With their expertise, you can focus on delivering an exceptional experience to players and spectators while we handle the intricate details of tournament execution. From group stages to grand finals, our admins maintain the competitive integrity and smooth flow of your event.",
      image: '/tf.connect-11.jpg'
    },
    featureB: {
      title: "Player Management",
      subtitle: "Advantages of Our Player Management Services:",
      description: "Our dedicated player managers act as the crucial link between tournament organizers and competitors. They handle player registration, coordinate schedules, manage practice areas, and ensure all player needs are met. By taking care of logistics and communication, our managers allow players to focus entirely on their performance. This personalized support enhances the player experience and contributes to the overall professionalism of your event.",
      image: '/tf.connect-11.jpg'
    },
    featureC: {
      title: "Broadcast Staff",
      subtitle: "Highlights of Our Broadcast Team:",
      description: "Our professional broadcast staff ensures your event reaches audiences worldwide with top-notch production quality. From camera operators and sound technicians to directors and producers, our team handles every aspect of your live broadcast. We utilize cutting-edge technology and industry best practices to deliver seamless streams, engaging graphics, and immersive viewer experiences. Whether it's managing multiple camera feeds, coordinating with casters, or troubleshooting technical issues, our broadcast team guarantees your event shines on screen.",
      image: '/tf.connect-11.jpg'
    },
    statistics: [
      { value: "100+", label: "Events Staffed" },
      { value: "500+", label: "Skilled Professionals" },
      { value: "1,000,000+", label: "Attendees Served" }
    ]
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
      
      <ServicePageComponent {...eventStaffingContent}  />
      
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

export default EventStaffingServicesPage;