"use client";
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/modal/quotemodal';
import { SocialIcon } from "react-social-icons";

const featuresData = [
  {
    icon: '/tf.connect-11.jpg',
    title: "High-Quality Equipment",
    description: "We utilize state-of-the-art cameras, lighting, and audio gear to ensure your broadcast looks and sounds professional. Our equipment is regularly maintained and updated to meet industry standards."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Expert Team",
    description: "Our crew consists of experienced professionals in video production, audio engineering, and live streaming. They work seamlessly together to deliver a polished broadcast experience for your audience."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Multi-Platform Streaming",
    description: "We can simultaneously stream your content to various platforms including YouTube, Twitch, Facebook Live, and custom websites. This ensures maximum reach and engagement for your audience."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Real-Time Graphics",
    description: "Enhance your broadcast with dynamic overlays, lower thirds, and custom graphics. Our team can create and implement these elements in real-time to keep your content engaging and informative."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Remote Production",
    description: "We offer remote production capabilities, allowing us to produce high-quality broadcasts from multiple locations. This flexibility is perfect for distributed events or when on-site production isn't feasible."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Post-Production Services",
    description: "Our services extend beyond live broadcasts. We offer comprehensive post-production editing, allowing you to repurpose your live content for on-demand viewing, highlights, or promotional material."
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
      
      <div className="relative w-full">
        <img
          src='/tf.connect-11.jpg'
          alt="Live Broadcast Production"
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black to-transparent">
        </div>
      </div>

      <div className="w-full px-4 pt-16">
        <div className="w-full py-16 bg-black text-white">
          <div className="container mx-auto text-center px-4 md:px-0 pb-8">
            <h2 className="text-4xl font-bold mb-4">Live Broadcast Production</h2>
            <p className="text-lg">
              <b>Elevate Your Content with Professional Live Broadcasting</b><br/><br/>
              At PXB Media, we specialize in delivering high-quality live broadcast productions that captivate audiences and elevate your brand. Our team of experts combines cutting-edge technology with creative storytelling to bring your vision to life. Whether you're hosting a corporate event, streaming a live performance, or producing a webinar series, we have the skills and experience to ensure your broadcast stands out in today's digital landscape. From pre-production planning to real-time execution and post-event analytics, we're committed to making your live broadcast a resounding success.
            </p>
          </div>
        </div>

        <div className="w-full py-16 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-4 md:px-0">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Multi-Camera Production</h3>
              <p className="text-base mb-4">
                <b>Key Benefits of Multi-Camera Production:</b><br/><br/>
                Our multi-camera setup allows for dynamic and engaging broadcasts that keep viewers glued to their screens. By utilizing multiple camera angles, we can capture every important moment from the best perspective, whether it's a speaker on stage, audience reactions, or product demonstrations. This versatility enables smooth transitions between shots, creating a professional and polished look that rivals traditional television broadcasts. Additionally, our multi-camera approach provides redundancy, ensuring uninterrupted coverage even in the unlikely event of technical issues with one camera.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <img src='/tf.connect-11.jpg' alt="Multi-Camera Production" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>

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

        <div className="w-full py-16 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-4 md:px-0">
            <div className="md:w-1/2">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <img src='/tf.connect-11.jpg' alt="Live Streaming Services" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4 pl-2">Live Streaming Services</h3>
              <p className="text-base mb-4 pl-2">
                <b>Advantages of Our Live Streaming Services:</b><br/><br/>
                Our live streaming services ensure your content reaches audiences worldwide in real-time. We handle all technical aspects of streaming, including encoding, CDN distribution, and multi-platform integration. This allows you to focus on your content while we ensure smooth delivery across various devices and bandwidths. Our team monitors stream health throughout the broadcast, quickly addressing any issues to maintain a high-quality viewer experience. We also provide interactive features such as live chat moderation and real-time audience polling to boost engagement and create a more immersive experience for your viewers.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-primary py-16 text-center text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-4xl font-bold mb-2">500+</h3>
                <p className="text-lg">Successful Broadcasts</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">98%</h3>
                <p className="text-lg">Client Satisfaction Rate</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">10M+</h3>
                <p className="text-lg">Viewers Reached</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-16 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-4 md:px-0">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4">Custom Graphics and Overlays</h3>
              <p className="text-base mb-4">
                <b>Highlights of Our Custom Graphics and Overlays:</b><br/><br/>
                Elevate your broadcast with our custom graphics and overlay solutions. Our design team works closely with you to create visually stunning elements that align with your brand and enhance your content. From lower thirds and animated transitions to full-screen graphics and interactive overlays, we bring a professional touch to every aspect of your broadcast. These custom elements not only improve the visual appeal of your stream but also provide valuable information to viewers, increasing engagement and retention. Our graphics are optimized for various streaming platforms, ensuring they look great across all devices and screen sizes.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <img src='/tf.connect-11.jpg' alt="Custom Graphics and Overlays" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
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
