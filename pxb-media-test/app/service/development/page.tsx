"use client";
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/modal/quotemodal';
import { SocialIcon } from "react-social-icons";
import LaptopIcon from "@mui/icons-material/Laptop";
import CodeIcon from "@mui/icons-material/Code";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArticleIcon from "@mui/icons-material/Article";
import BuildIcon from "@mui/icons-material/Build";
import ApiIcon from "@mui/icons-material/Api";



const featuresData = [
  {
    icon: CodeIcon,
    title: "Custom Web Applications",
    description: "We design and develop tailor-made web applications that align perfectly with your business needs, ensuring scalability, performance, and user-friendly interfaces."
  },
  {
    icon: LaptopIcon,
    title: "Responsive Web Design",
    description: "Our team creates visually stunning, mobile-first websites that adapt seamlessly to all devices, providing an optimal user experience across desktops, tablets, and smartphones."
  },
  {
    icon: ShoppingCartIcon,
    title: "E-commerce Solutions",
    description: "We build robust and secure e-commerce platforms that drive sales, integrate payment gateways, and offer intuitive product management systems to boost your online business."
  },
  {
    icon: ArticleIcon,
    title: "Content Management Systems",
    description: "Our custom CMS solutions empower you to easily manage and update your website content, ensuring your site remains fresh and relevant without technical hassle."
  },
  {
    icon: BuildIcon,
    title: "Web Application Maintenance",
    description: "We provide ongoing support and maintenance services to keep your web applications running smoothly, including updates, security patches, and performance optimizations."
  },
  {
    icon: ApiIcon,
    title: "API Development and Integration",
    description: "Our team specializes in creating robust APIs and seamlessly integrating third-party services to enhance your web application's functionality and connectivity."
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

      <div className="w-full px-6 py-20">
        {/* Web Development Services Section */}
        <div className="w-full py-20 bg-black text-white">
          <div className="container mx-auto text-center px-6 md:px-0 pb-12">
            <h2 className="text-4xl font-bold mb-6">Web Development Services</h2>
            <p className="text-lg max-w-3xl mx-auto">
              <b className="block mb-4">Elevate Your Digital Presence with Our Cutting-Edge Web Solutions</b>
              At PXB Media, we specialize in creating powerful, innovative web applications that drive your business forward. Our expert team combines creativity with technical prowess to deliver custom solutions that meet your unique needs. From responsive designs to complex web applications, we are committed to helping you achieve your digital goals and stand out in the online landscape.
            </p>
          </div>
        </div>

        {/* Feature A Section */}
        <div className="w-full py-20 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-6 md:px-0 space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6">Custom Web Applications</h3>
              <p className="text-base">
                <b className="block mb-4">Key Benefits of Custom Web Applications:</b>
                Our bespoke web applications are tailored to your specific business requirements, offering unparalleled flexibility and efficiency. We employ cutting-edge technologies and best practices to ensure your application is scalable, secure, and high-performing. From customer portals to complex management systems, we bring your vision to life with intuitive interfaces and robust functionality that streamline your operations and enhance user engagement.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <img src='/tf.connect-11.jpg' alt="Custom Web Applications" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid Section */}
        <div className="w-full py-20 bg-black text-white">
          <div className="container mx-auto px-6 md:px-0">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Web Development Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuresData.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="p-8 bg-element rounded-lg shadow-md">
                    <IconComponent className="h-16 w-16 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-base font-semibold mb-3">Key Points:</p>
                    <p className="text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Feature B Section */}
        <div className="w-full py-20 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-6 md:px-0 space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <img src='/tf.connect-11.jpg' alt="Responsive Web Design" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6">Responsive Web Design</h3>
              <p className="text-base">
                <b className="block mb-4">Advantages of Responsive Web Design:</b>
                In today's multi-device world, responsive design is crucial. Our approach ensures your website looks stunning and functions flawlessly across all screen sizes. We prioritize mobile-first design, fast loading times, and intuitive navigation to provide an exceptional user experience. This not only improves user engagement but also boosts your search engine rankings, helping you reach a wider audience and drive conversions.
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
                <p className="text-xl">Successful Projects</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-4">98%</h3>
                <p className="text-xl">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-4">24/7</h3>
                <p className="text-xl">Support Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature C Section */}
        <div className="w-full py-20 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-6 md:px-0 space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6">E-commerce Solutions</h3>
              <p className="text-base">
                <b className="block mb-4">Highlights of Our E-commerce Solutions:</b>
                Our e-commerce platforms are built to drive sales and grow your online business. We integrate secure payment gateways, implement user-friendly product management systems, and optimize the checkout process for maximum conversions. Our solutions include features like inventory management, customer accounts, and detailed analytics to help you make data-driven decisions. We ensure your online store is not just a sales channel, but a powerful tool for customer engagement and brand building.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <img src='/tf.connect-11.jpg' alt="E-commerce Solutions" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg" />
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
