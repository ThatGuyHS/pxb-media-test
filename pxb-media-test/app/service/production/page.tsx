"use client";
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/modal/quotemodal';
import { SocialIcon } from "react-social-icons";
import ServicePageComponent from '@/components/component/service-page';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupIcon from '@mui/icons-material/Group';
import StreamIcon from '@mui/icons-material/Stream';
import BrushIcon from '@mui/icons-material/Brush';
import LanguageIcon from '@mui/icons-material/Language';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

const LiveBroadcastProductionPage: React.FC = () => {
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

  const liveBroadcastContent = {
    bannerImage: '/tf.connect-11.jpg',
    title: "Live Broadcast Production",
    description: "Elevate Your Content with Professional Live Broadcasting. At PXB Media, we specialize in delivering high-quality live broadcast productions that captivate audiences and elevate your brand. Our team of experts combines cutting-edge technology with creative storytelling to bring your vision to life. Whether you are hosting a corporate event, streaming a live performance, or producing a webinar series, we have the skills and experience to ensure your broadcast stands out in today's digital landscape. From pre-production planning to real-time execution and post-event analytics, we are committed to making your live broadcast a resounding success.",
    features: [
      {
        icon: VideocamIcon,
        title: "High-Quality Equipment",
        description: "We utilize state-of-the-art cameras, lighting, and audio gear to ensure your broadcast looks and sounds professional. Our equipment is regularly maintained and updated to meet industry standards."
      },
      {
        icon: GroupIcon,
        title: "Expert Team",
        description: "Our crew consists of experienced professionals in video production, audio engineering, and live streaming. They work seamlessly together to deliver a polished broadcast experience for your audience."
      },
      {
        icon: StreamIcon,
        title: "Multi-Platform Streaming",
        description: "We can simultaneously stream your content to various platforms including YouTube, Twitch, Facebook Live, and custom websites. This ensures maximum reach and engagement for your audience."
      },
      {
        icon: BrushIcon,
        title: "Real-Time Graphics",
        description: "Enhance your broadcast with dynamic overlays, lower thirds, and custom graphics. Our team can create and implement these elements in real-time to keep your content engaging and informative."
      },
      {
        icon: LanguageIcon,
        title: "Remote Production",
        description: "We offer remote production capabilities, allowing us to produce high-quality broadcasts from multiple locations. This flexibility is perfect for distributed events or when on-site production is not feasible."
      },
      {
        icon: MovieFilterIcon,
        title: "Post-Production Services",
        description: "Our services extend beyond live broadcasts. We offer comprehensive post-production editing, allowing you to repurpose your live content for on-demand viewing, highlights, or promotional material."
      }
    ],
    featureA: {
      title: "Multi-Camera Production",
      subtitle: "Key Benefits of Multi-Camera Production:",
      description: "Our multi-camera setup allows for dynamic and engaging broadcasts that keep viewers glued to their screens. By utilizing multiple camera angles, we can capture every important moment from the best perspective, whether it is a speaker on stage, audience reactions, or product demonstrations. This versatility enables smooth transitions between shots, creating a professional and polished look that rivals traditional television broadcasts. Additionally, our multi-camera approach provides redundancy, ensuring uninterrupted coverage even in the unlikely event of technical issues with one camera.",
      image: '/tf.connect-11.jpg'
    },
    featureB: {
      title: "Live Streaming Services",
      subtitle: "Advantages of Our Live Streaming Services:",
      description: "Our live streaming services ensure your content reaches audiences worldwide in real-time. We handle all technical aspects of streaming, including encoding, CDN distribution, and multi-platform integration. This allows you to focus on your content while we ensure smooth delivery across various devices and bandwidths. Our team monitors stream health throughout the broadcast, quickly addressing any issues to maintain a high-quality viewer experience. We also provide interactive features such as live chat moderation and real-time audience polling to boost engagement and create a more immersive experience for your viewers.",
      image: '/tf.connect-11.jpg'
    },
    featureC: {
      title: "Custom Graphics and Overlays",
      subtitle: "Highlights of Our Custom Graphics and Overlays:",
      description: "Elevate your broadcast with our custom graphics and overlay solutions. Our design team works closely with you to create visually stunning elements that align with your brand and enhance your content. From lower thirds and animated transitions to full-screen graphics and interactive overlays, we bring a professional touch to every aspect of your broadcast. These custom elements not only improve the visual appeal of your stream but also provide valuable information to viewers, increasing engagement and retention. Our graphics are optimized for various streaming platforms, ensuring they look great across all devices and screen sizes.",
      image: '/tf.connect-11.jpg'
    },
    statistics: [
      { value: "500+", label: "Successful Broadcasts" },
      { value: "98%", label: "Client Satisfaction Rate" },
      { value: "10M+", label: "Viewers Reached" }
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
      
      <ServicePageComponent {...liveBroadcastContent} />
      
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

export default LiveBroadcastProductionPage;