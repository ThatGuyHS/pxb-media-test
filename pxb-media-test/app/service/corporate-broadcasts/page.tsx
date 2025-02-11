"use client";
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/modal/quotemodal';
import { SocialIcon } from "react-social-icons";
import ServicePageComponent from '@/components/component/service-page';
import VideocamIcon from "@mui/icons-material/Videocam";
import GroupIcon from "@mui/icons-material/Group";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";

const CorporateBroadcastPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const handleMouseEnter = () => setServicesDropdownOpen(true);
  const handleMouseLeave = () => setServicesDropdownOpen(false);

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setServicesDropdownOpen(false);
    }
  };

  const broadcastContent = {
    bannerImage: '/tf.connect-11.jpg',
    title: "Corporate Broadcast Services",
    description: "Transform your corporate communications with our professional broadcast solutions. PXB Media specializes in delivering high-quality virtual events, webinars, and seminars that engage your audience and elevate your message. Our expert team combines technical excellence with creative storytelling to ensure your corporate broadcasts are polished, professional, and impactful.",
    features: [
      {
        icon: VideocamIcon,
        title: "Virtual Events Production",
        description: "Professional end-to-end virtual event production including multi-camera setups, lighting design, and seamless live streaming to your preferred platform."
      },
      {
        icon: GroupIcon,
        title: "Webinar Management",
        description: "Comprehensive webinar solutions featuring interactive audience engagement tools, real-time moderation, and technical support for speakers and attendees."
      },
      {
        icon: LiveTvIcon,
        title: "Live Streaming",
        description: "High-quality live streaming services with redundant systems, multi-platform broadcasting, and real-time monitoring to ensure reliable delivery."
      },
      {
        icon: SettingsIcon,
        title: "Technical Production",
        description: "Expert technical direction including audio/visual setup, broadcast graphics, lower thirds, and smooth transitions for a professional broadcast."
      },
      {
        icon: SupportIcon,
        title: "Event Support",
        description: "Dedicated technical support team handling pre-event testing, live troubleshooting, and post-event analytics to ensure seamless execution."
      },
      {
        icon: ConnectedTvIcon,
        title: "Hybrid Event Solutions",
        description: "Seamless integration of in-person and virtual components for hybrid events, including audience interaction and content distribution."
      }
    ],
    featureA: {
      title: "Virtual Events Production",
      subtitle: "Professional Virtual Event Solutions:",
      description: "Our virtual event production services transform your corporate communications into engaging broadcast experiences. We handle every aspect of production, from pre-event planning to live execution and post-event content delivery. Our team utilizes professional-grade equipment and redundant systems to ensure high-quality video, crystal-clear audio, and reliable streaming for audiences of any size.",
      image: '/tf.connect-11.jpg'
    },
    featureB: {
      title: "Live Streaming Excellence",
      subtitle: "Broadcast-Quality Live Streaming:",
      description: "We deliver your message with broadcast-quality live streaming that maintains professional standards throughout your entire event. Our services include multi-camera switching, professional graphics packages, audience engagement tools, and secure streaming to your chosen platforms. We ensure your content reaches your audience with optimal quality and reliability.",
      image: '/tf.connect-11.jpg'
    },
    featureC: {
      title: "Technical Support",
      subtitle: "Comprehensive Technical Solutions:",
      description: "Our dedicated technical team provides end-to-end support for your virtual events. From initial planning and testing to live event execution and troubleshooting, we ensure every aspect of your broadcast runs smoothly. We offer rehearsal sessions, speaker training, and real-time technical support to guarantee a polished and professional presentation.",
      image: '/tf.connect-11.jpg'
    },
    statistics: [
      { value: "500+", label: "Virtual Events" },
      { value: "99.9%", label: "Uptime" },
      { value: "24/7", label: "Technical Support" }
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
              <button className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300">
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
      
      <ServicePageComponent {...broadcastContent} />
      
      <section className="py-16 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#151515] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Basic Webinar Package</h3>
              <p className="text-3xl font-bold mb-6">$2,500</p>
              <ul className="space-y-2 mb-6">
                <li>• Single-camera HD streaming</li>
                <li>• Up to 2 hours of live broadcast</li>
                <li>• Basic graphics package</li>
                <li>• Technical support</li>
                <li>• Up to 500 viewers</li>
                <li>• Recording provided</li>
              </ul>
              <Button onClick={openModal} className="w-full">Get Quote</Button>
            </div>

            <div className="bg-[#151515] p-6 rounded-lg border-2 border-primary">
              <h3 className="text-xl font-bold text-primary mb-4">Professional Virtual Event</h3>
              <p className="text-3xl font-bold mb-6">$5,000</p>
              <ul className="space-y-2 mb-6">
                <li>• Multi-camera HD streaming</li>
                <li>• Up to 4 hours of live broadcast</li>
                <li>• Custom graphics package</li>
                <li>• Technical rehearsal</li>
                <li>• Up to 2000 viewers</li>
                <li>• Live Q&A management</li>
                <li>• Recording with chapters</li>
              </ul>
              <Button onClick={openModal} className="w-full">Get Quote</Button>
            </div>

            <div className="bg-[#151515] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Enterprise Hybrid Solution</h3>
              <p className="text-3xl font-bold mb-6">$10,000+</p>
              <ul className="space-y-2 mb-6">
                <li>• Multi-camera 4K streaming</li>
                <li>• Full-day event coverage</li>
                <li>• Premium graphics package</li>
                <li>• Multiple rehearsals</li>
                <li>• Unlimited viewers</li>
                <li>• Multi-platform streaming</li>
                <li>• Interactive features</li>
                <li>• Post-production editing</li>
              </ul>
              <Button onClick={openModal} className="w-full">Get Quote</Button>
            </div>
          </div>
        </div>
      </section>
      
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

export default CorporateBroadcastPage;