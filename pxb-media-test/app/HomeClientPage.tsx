"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/modal/quotemodal";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import LaptopIcon from "@mui/icons-material/Laptop";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { SocialIcon } from "react-social-icons";
import Footer from "@/components/Footer";

export default function HomeClientPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [showQuoteButton, setShowQuoteButton] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Add the services array
  const services = [
    "Live Streaming",
    "Virtual Events",
    "Hybrid Conferences",
    "Audio Visual Support",
    "Web Development",
    "Broadcast Solutions",
    "Technical Direction"
  ];

  // Add the animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
        setIsAnimating(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setShowQuoteButton(window.scrollY > heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="bg-[#040407] text-white transition-colors duration-300 sticky top-0 z-50 border-b border-gray-800/50">
        <nav className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6 h-[64px]">
          <div className="flex items-center">
            <a className="text-xl font-bold" href="/">
              <img
                src="/vertical_logo.svg"
                alt="PXB Media Logo"
                className="h-10"
              />
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <button
              className="md:hidden rounded border border-primary/70 px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary transition-colors duration-300"
              onClick={handleToggleMenu}
            >
              {menuOpen ? "CLOSE" : "MENU"}
            </button>
            <div
              ref={menuRef}
              className={`${
                menuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-full left-0 md:top-auto md:left-auto bg-[#040407] w-full md:w-auto mt-2 pb-4 md:pb-0 md:mt-0 border-b md:border-none border-gray-800/50 z-50`}
            >
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="px-4 py-2 hover:text-primary hover:underline decoration-primary transition-colors duration-300">
                  SERVICES
                </button>
                <div
                  className={`${
                    servicesDropdownOpen ? "block" : "hidden"
                  } absolute left-0 w-48 bg-[#040407] border border-gray-800/50 rounded-md shadow-lg shadow-primary/10`}
                >
                  <div className="invisible absolute -top-4 left-0 w-full h-4"></div>
                  <a
                    className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    href="/service/production"
                  >
                    PRODUCTION
                  </a>
                  <a
                    className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    href="/service/event-staffing"
                  >
                    EVENT STAFFING
                  </a>
                  <a
                    className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    href="/service/development"
                  >
                    DEVELOPMENT
                  </a>
                </div>
              </div>
              <a
                className="px-4 py-2 hover:text-primary hover:underline decoration-primary transition-colors duration-300"
                href="/about-us"
              >
                ABOUT
              </a>
              <a
                className="px-4 py-2 hover:text-primary hover:underline decoration-primary transition-colors duration-300"
                href="/cases"
              >
               CASES
              </a>
            </div>
          </div>
          <div className="flex items-center">
            {showQuoteButton ? (
              <Button
                onClick={openModal}
                className="text-[#E3E3E3] bg-primary hover:bg-primaryAlt h-10 shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                size="sm"
                variant="default"
              >
                Get a quote
              </Button>
            ) : (
              <div className="w-[88px] h-10"></div>
            )}
          </div>
        </nav>
      </header>
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <main className="no-scrollbar">
      <section className="relative h-screen">
        {typeof window !== 'undefined' && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/SOL .webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        )}
        {typeof window === 'undefined' && (
          <img 
            src="/dh1.jpg" 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative flex flex-col h-full items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fadeIn">
              <div className="text-center uppercase w-full px-4 md:px-0">
                <div className="mb-4 text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide">
                  Your Partner for All Things
                </div>
                <div className="min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem] relative">
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-500 text-primary text-2xl md:text-4xl lg:text-5xl font-bold
                      ${isAnimating
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                      }`}
                  >
                    {services[currentIndex]}
                  </span>
                </div>
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fadeIn animation-delay-300 max-w-2xl mx-auto">
              Elevating your events with cutting-edge technology and expertise
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openModal}
                className="h-12 rounded-md px-8 bg-primary text-white inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#E3E3E3] hover:bg-primaryAlt transition-all duration-300 transform hover:scale-105 animate-fadeIn animation-delay-600 shadow-lg shadow-primary/20"
              >
                Get a Free Quote
              </button>
              <a 
                href="#services"
                className="h-12 rounded-md px-8 bg-transparent border border-white/30 hover:border-white/70 text-white inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 transform hover:scale-105 animate-fadeIn animation-delay-700"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-10 flex justify-center animate-bounce">
          <a href="#services" className="text-white hover:text-primary transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

        <section
          id="services"
          className="bg-[#040407] py-16 md:py-24 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
                Our Services
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                We provide comprehensive solutions tailored to your specific needs, combining technical expertise with creative excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <VideoCameraBackIcon fontSize="large" />,
                  title: "Broadcast Production",
                  description:
                    "We offer comprehensive broadcast production services utilizing cutting-edge technology for high-quality live streaming, in-studio recordings, and remote productions.",
                  image: "/tf.connect-11.jpg",
                  link: "/service/production",
                },
                {
                  icon: <LaptopIcon fontSize="large" />,
                  title: "Web Development",
                  description:
                    "We offer a wide range of web development services to help you create a strong online presence.",
                  image: "/pxbsite.png",
                  link: "/service/development",
                },
                {
                  icon: <PeopleOutlineIcon fontSize="large" />,
                  title: "Esports Event Staffing",
                  description:
                    "We provide event staffing services to help you create unforgettable events, whether the help you need is on site or remote.",
                  image: "/esportsm1.png",
                  link: "/service/event-staffing",
                },
              ].map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="group bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 border border-gray-800/50"
                >
                  <div className="h-52 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 z-10 transition-opacity duration-300"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute -top-10 right-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/20 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      <span className="mr-2">Learn More</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="transform group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#040407] py-16 text-white relative">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
                Trusted By
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                We&apos;re proud to work with leading brands and organizations across various industries
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
              {[
                { logo: "/riotwhite.png", url: "https://www.riotgames.com" },
                { logo: "/dreamhack.png", url: "https://dreamhack.com" },
                { logo: "/challengermodewhite.png", url: "https://www.challengermode.com" },
                { logo: "fragbite.png", url: "https://fragbite.com" },
                { logo: "sesf.png", url: "https://svenskesport.se" },
                { logo: "/SOL_Logo.svg", url: "https://svenskaonlineligan.se" },
                { logo: "/Raketligan-White.png", url: "https://svenskaraketligan.se" },
                { logo: "ahusbeach.png", url: "https://www.ahusbeach.com" },
                { logo: "subzero.png", url: "https://subzeroegames.se" },
                { logo: "gigstepwhite.png", url: "https://gigstep.se" },
              ].map(({ logo, url }, index) => (
                <div key={index} className="flex items-center justify-center group">
                  <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 border border-gray-800/30 hover:border-primary/30 transition-all duration-300 flex items-center justify-center h-32 w-full"
                  >
                    <img
                      src={logo}
                      alt={`Client Logo ${index + 1}`}
                      className="h-12 sm:h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#040407] py-16 md:py-24 text-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-30"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
                Our Cases
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                Explore our portfolio of successful projects and see how we&apos;ve helped our clients achieve their goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: "dreamhack",
                  img: "/dh1.jpg",
                  logo: "/dreamhack-logo.png",
                  title: "DreamHack events",
                  desc: "We have provided broadcasting services for Dreamhack LAN stage, BYOC admins and admins for free play areas.",
                },
                {
                  id: "tfconnect",
                  img: "/tf.connect-11.jpg",
                  logo: "/tfconnect-logo.png",
                  title: "TFConnect Charity",
                  desc: "PXB Media provided a full production service for TF Connects virtual charity event.",
                },
                {
                  id: "svenskaonlineligan",
                  img: "/SOLplayoffs.jpg",
                  logo: "/SOL_Logo.svg",
                  title: "Svenska Onlineligan",
                  desc: "PXB Media provided a full LAN broadcast production for the Svenska Onlineligan, as well as project management.",
                },
                {
                  id: "subzero",
                  img: "/subzero1.jpg",
                  logo: "/subzero.png",
                  title: "Subzero E-Games",
                  desc: "PXB Media provided a full-scale esports production, helped plan and build the event, and provided event staffing.",
                },
                {
                  id: "esportsm",
                  img: "/esportsm1.png",
                  logo: "/sesf.png",
                  title: "E-sport SM 2023",
                  desc: "Together with the Swedish Esports Federation, we provided a full-scale production for E-sport SM 2023.",
                },
                {
                  id: "abax",
                  img: "/abaximg.png",
                  logo: "/abax.jpg",
                  title: "Abax Webinar",
                  desc: "PXB Media provided a live broadcast production for Abaxs webinar.",
                },
              ].map((project, index) => (
                <a
                  key={index}
                  href={`/case/${project.id}`}
                  className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 border border-gray-800/50"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm p-2 rounded-full">
                      <img 
                        src={project.logo} 
                        alt={`${project.title} logo`} 
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 p-4 md:hidden group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 pt-12">
                    <div className="transform transition-all duration-300 translate-y-2 group-hover:translate-y-0 mt-2 hidden md:block">
                      <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.desc}</p>
                      <div className="mt-4 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        <span className="mr-2">View Case</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="transform group-hover:translate-x-1 transition-transform duration-300"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a 
                href="/cases" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primaryAlt text-white font-medium rounded-md transition-colors duration-300 shadow-lg shadow-primary/20"
              >
                View All Cases
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 