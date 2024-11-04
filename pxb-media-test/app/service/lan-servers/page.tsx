"use client";
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/modal/quotemodal';
import { SocialIcon } from "react-social-icons";
import ServicePageComponent from '@/components/component/service-page';
import { Server, Users, Shield, Wifi, Monitor, Clock } from 'lucide-react';

const CSLANServicesPage: React.FC = () => {
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

  const csLANContent = {
    bannerImage: '/dh-stage.jpg',
    title: "CS Tournament LAN Servers",
    description: "Experience lag-free, competitive gaming with our professional-grade LAN server setup designed specifically for Counter-Strike tournaments. We provide everything you need for a seamless competitive gaming experience. Our comprehensive solutions ensure your tournament runs smoothly from start to finish, with dedicated support and enterprise-grade hardware.",
    features: [
      {
        icon: Server,
        title: "Dedicated Servers",
        description: "128-tick servers with anti-cheat integration, match medic functionality, and automatic demo recording for professional tournament standards."
      },
      {
        icon: Users,
        title: "Player Capacity",
        description: "Support for up to 128 concurrent players with multiple tournament servers running simultaneously for large-scale events."
      },
      {
        icon: Shield,
        title: "Security",
        description: "Built-in DDoS protection, firewall configuration, and secure player authentication systems to ensure tournament integrity."
      },
      {
        icon: Wifi,
        title: "Enterprise Networking",
        description: "Enterprise-grade switches and routers with redundant connections for zero downtime throughout your event."
      },
      {
        icon: Monitor,
        title: "Admin Tools",
        description: "Complete tournament management interface with live server monitoring and control for seamless event management."
      },
      {
        icon: Clock,
        title: "24/7 Support",
        description: "On-site technical support throughout your entire tournament duration, ensuring immediate resolution of any issues."
      }
    ],
    featureA: {
      title: "Complete Tournament Infrastructure",
      subtitle: "Professional Grade Hardware and Support",
      description: "Our LAN setup includes high-performance servers, networking equipment, and backup systems to ensure your tournament runs flawlessly from start to finish. We provide comprehensive technical support and monitoring throughout your event, allowing you to focus on running your tournament while we handle the technical details.",
      image: '/dh-stage.jpg'
    },
    featureB: {
      title: "Tournament-Ready Solutions",
      subtitle: "Everything You Need to Run a Professional Tournament",
      description: "Our service includes server configuration, network setup, technical support, and all necessary software licenses. We handle all technical aspects including anti-cheat implementation, custom server configurations, and real-time monitoring to ensure a smooth tournament experience for all participants.",
      image: '/dh-stage.jpg'
    },
    featureC: {
      title: "Pricing Plans",
      subtitle: "Flexible Options for Every Tournament Size",
      description: `Our Basic Package at $599/day includes 2 dedicated servers with basic admin tools and technical support, perfect for smaller tournaments up to 32 players.

The Pro Package at $999/day offers 4 dedicated servers with advanced admin interface, priority support, and custom server configs, ideal for medium-sized events up to 64 players.

For large tournaments, our Enterprise Package at $1,799/day provides 8 dedicated servers, full tournament management system, 24/7 on-site support, custom branding, and backup servers, supporting up to 128 players.`,
      image: '/dh-stage.jpg'
    },
    statistics: [
      { value: "5ms", label: "Average Server Latency" },
      { value: "99.99%", label: "Uptime Guarantee" },
      { value: "1000+", label: "Tournaments Hosted" }
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
      
      <ServicePageComponent {...csLANContent} />
      
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
                  url="https://twitter.com/PXBMedia"
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

export default CSLANServicesPage;