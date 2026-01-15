"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/modal/quotemodal";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import LaptopIcon from "@mui/icons-material/Laptop";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Footer from "@/components/Footer";

export default function HomeClientPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [showQuoteButton, setShowQuoteButton] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const services = [
    "Live Streaming",
    "Virtual Events",
    "Hybrid Conferences",
    "Audio Visual Support",
    "Web Development",
    "Broadcast Solutions",
    "Technical Direction"
  ];

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Text rotation animation - respects reduced motion
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
        setIsAnimating(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length, prefersReducedMotion]);

  const handleToggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const openModal = useCallback(() => setModalIsOpen(true), []);
  const closeModal = useCallback(() => setModalIsOpen(false), []);

  const handleMouseEnter = useCallback(() => {
    setServicesDropdownOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setServicesDropdownOpen(false);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setServicesDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setShowQuoteButton(window.scrollY > heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleClickOutside]);

  return (
    <>
      <header className="bg-[#040407] text-white sticky top-0 z-50 border-b border-gray-800/50">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md">
          Skip to main content
        </a>
        <nav className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6 h-16" aria-label="Main navigation">
          <div className="flex items-center">
            <a className="text-xl font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#040407] rounded-md" href="/">
              <img
                src="/vertical_logo.svg"
                alt="PXB Media - Home"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <button
              className="md:hidden rounded border border-primary/70 px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#040407]"
              onClick={handleToggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? "CLOSE" : "MENU"}
            </button>
            <div
              ref={menuRef}
              id="mobile-menu"
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
                <button
                  className="px-4 py-2 hover:text-primary hover:underline decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#040407] rounded-md"
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                  aria-controls="services-dropdown"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  SERVICES
                </button>
                <div
                  id="services-dropdown"
                  role="menu"
                  className={`${
                    servicesDropdownOpen ? "block" : "hidden"
                  } absolute left-0 w-48 bg-[#040407] border border-gray-800/50 rounded-md shadow-lg shadow-primary/10`}
                >
                  <div className="invisible absolute -top-4 left-0 w-full h-4"></div>
                  <a
                    role="menuitem"
                    className="block px-4 py-2 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:bg-primary/10 focus-visible:text-primary"
                    href="/service/production"
                  >
                    PRODUCTION
                  </a>
                  <a
                    role="menuitem"
                    className="block px-4 py-2 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:bg-primary/10 focus-visible:text-primary"
                    href="/service/event-staffing"
                  >
                    EVENT STAFFING
                  </a>
                  <a
                    role="menuitem"
                    className="block px-4 py-2 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:bg-primary/10 focus-visible:text-primary"
                    href="/service/development"
                  >
                    DEVELOPMENT
                  </a>
                </div>
              </div>
              <a
                className="px-4 py-2 hover:text-primary hover:underline decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#040407] rounded-md"
                href="/about-us"
              >
                ABOUT
              </a>
              <a
                className="px-4 py-2 hover:text-primary hover:underline decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#040407] rounded-md"
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
                className="text-[#E3E3E3] bg-primary hover:bg-primaryAlt h-10 shadow-md shadow-primary/20 hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#040407]"
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
      <main id="main-content" className="no-scrollbar">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center" aria-labelledby="hero-heading">
          {/* Background Video/Image */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="/dh1.jpg"
            >
              <source src="/SOL .webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-primary/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 md:px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
             

              {/* Main Heading */}
              <h1 id="hero-heading" className="text-balance mb-6">
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                  Your Partner for All Things
                </span>
                <span className="relative block min-h-[3.5rem] md:min-h-[4.5rem] lg:min-h-[5.5rem]">
                  <span
                    className={`absolute inset-x-0 text-3xl md:text-5xl lg:text-6xl font-bold text-primary ${
                      !prefersReducedMotion
                        ? `transition-all duration-500 ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`
                        : ''
                    }`}
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {services[currentIndex]}
                  </span>
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
                Elevating your events with cutting-edge technology and expertise
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={openModal}
                  className={`group relative h-14 rounded-lg px-8 bg-primary text-white font-semibold text-base
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black
                    shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-primaryAlt
                    ${!prefersReducedMotion ? 'transition-all duration-300 hover:scale-[1.02]' : ''}`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Free Quote
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${!prefersReducedMotion ? 'group-hover:translate-x-1 transition-transform' : ''}`} aria-hidden="true">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </button>
                <a
                  href="#services"
                  className={`group h-14 rounded-lg px-8 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold text-base
                    inline-flex items-center justify-center gap-2
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black
                    hover:bg-white/10 hover:border-white/40
                    ${!prefersReducedMotion ? 'transition-all duration-300' : ''}`}
                >
                  Explore Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4">Trusted by industry leaders</p>
                <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                  <img src="/dreamhack.png" alt="DreamHack" width={100} height={30} className="h-6 w-auto grayscale hover:grayscale-0 transition-all" loading="eager" />
                  <img src="/riotwhite.png" alt="Riot Games" width={80} height={30} className="h-6 w-auto grayscale hover:grayscale-0 transition-all" loading="eager" />
                  <img src="/challengermodewhite.png" alt="Challengermode" width={100} height={30} className="h-5 w-auto grayscale hover:grayscale-0 transition-all" loading="eager" />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute inset-x-0 bottom-8 flex justify-center ${!prefersReducedMotion ? 'animate-bounce' : ''}`}>
            <a
              href="#services"
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black transition-colors"
              aria-label="Scroll to services section"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="bg-[#040407] py-20 md:py-32 text-white relative overflow-hidden"
          aria-labelledby="services-heading"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primaryAlt/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                What We Do
              </span>
              <h2 id="services-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Our Services
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                We provide comprehensive solutions tailored to your specific needs, combining technical expertise with creative excellence.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <VideoCameraBackIcon fontSize="large" aria-hidden="true" />,
                  title: "Broadcast Production",
                  description: "Comprehensive broadcast production services utilizing cutting-edge technology for high-quality live streaming, in-studio recordings, and remote productions.",
                  image: "/tf.connect-11.jpg",
                  link: "/service/production",
                  accent: "from-primary/20 to-primaryAlt/20",
                },
                {
                  icon: <LaptopIcon fontSize="large" aria-hidden="true" />,
                  title: "Web Development",
                  description: "Full-range web development services to help you create a strong, modern online presence that drives results.",
                  image: "/pxbsite.png",
                  link: "/service/development",
                  accent: "from-purple/20 to-primary/20",
                },
                {
                  icon: <PeopleOutlineIcon fontSize="large" aria-hidden="true" />,
                  title: "Esports Event Staffing",
                  description: "Professional event staffing services to help you create unforgettable events, whether on-site or remote.",
                  image: "/esportsm1.png",
                  link: "/service/event-staffing",
                  accent: "from-secondary/20 to-orange/20",
                },
              ].map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className={`group relative bg-gradient-to-b from-gray-900/80 to-black rounded-2xl overflow-hidden border border-gray-800/50
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#040407]
                    ${!prefersReducedMotion ? 'transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1' : 'hover:shadow-xl hover:shadow-primary/20'}`}
                >
                  {/* Card Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 z-10 ${!prefersReducedMotion ? 'transition-opacity duration-500' : ''}`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                    <img
                      src={service.image}
                      alt=""
                      width={400}
                      height={224}
                      loading="lazy"
                      className={`w-full h-full object-cover ${!prefersReducedMotion ? 'transition-transform duration-700 group-hover:scale-105' : ''}`}
                    />
                    {/* Icon Badge */}
                    <div className={`absolute top-4 right-4 z-20 w-14 h-14 bg-black/60 backdrop-blur-md rounded-xl flex items-center justify-center text-primary border border-white/10
                      ${!prefersReducedMotion ? 'transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white' : ''}`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8">
                    <h3 className={`text-xl md:text-2xl font-bold mb-3 ${!prefersReducedMotion ? 'transition-colors duration-300 group-hover:text-primary' : ''}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className={`inline-flex items-center gap-2 text-primary font-semibold ${!prefersReducedMotion ? 'transition-colors' : ''}`}>
                      <span>Learn more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${!prefersReducedMotion ? 'transition-transform duration-300 group-hover:translate-x-1' : ''}`} aria-hidden="true">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="bg-[#040407] py-20 md:py-28 text-white relative" aria-labelledby="clients-heading">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-4">
                Our Partners
              </span>
              <h2 id="clients-heading" className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                Trusted By Industry Leaders
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                We&apos;re proud to work with leading brands and organizations across various industries
              </p>
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {[
                { logo: "/riotwhite.png", name: "Riot Games", url: "https://www.riotgames.com" },
                { logo: "/dreamhack.png", name: "DreamHack", url: "https://dreamhack.com" },
                { logo: "/challengermodewhite.png", name: "Challengermode", url: "https://www.challengermode.com" },
                { logo: "/fragbite.png", name: "Fragbite", url: "https://fragbite.com" },
                { logo: "/sesf.png", name: "Swedish Esports Federation", url: "https://svenskesport.se" },
                { logo: "/SOL_Logo.svg", name: "Svenska Onlineligan", url: "https://svenskaonlineligan.se" },
                { logo: "/Raketligan-White.png", name: "Svenska Raketligan", url: "https://svenskaraketligan.se" },
                { logo: "/ahusbeach.png", name: "Åhus Beach", url: "https://www.ahusbeach.com" },
                { logo: "/subzero.png", name: "Subzero E-Games", url: "https://subzeroegames.se" },
                { logo: "/gigstepwhite.png", name: "Gigstep", url: "https://gigstep.se" },
              ].map(({ logo, name, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-primary/30 flex items-center justify-center h-28 md:h-32
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#040407]
                    ${!prefersReducedMotion ? 'transition-all duration-300' : ''}`}
                  aria-label={`Visit ${name} website`}
                >
                  <img
                    src={logo}
                    alt={name}
                    width={120}
                    height={48}
                    loading="lazy"
                    className={`h-10 md:h-12 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100
                      ${!prefersReducedMotion ? 'transition-all duration-300' : ''}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className="bg-[#040407] py-20 md:py-32 text-white relative" aria-labelledby="cases-heading">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 opacity-50"></div>
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                Portfolio
              </span>
              <h2 id="cases-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Our Cases
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Explore our portfolio of successful projects and see how we&apos;ve helped our clients achieve their goals
              </p>
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  id: "dreamhack",
                  img: "/dh1.jpg",
                  logo: "/dreamhack-logo.png",
                  title: "DreamHack Events",
                  desc: "Broadcasting services for DreamHack LAN stage, BYOC admins, and free play area management.",
                  tags: ["Broadcasting", "Event Staff"],
                },
                {
                  id: "tfconnect",
                  img: "/tf.connect-27.jpg",
                  logo: "/tfconnect-logo.png",
                  title: "TFConnect Charity",
                  desc: "Full production service for TFConnect's virtual charity event.",
                  tags: ["Production", "Virtual Event"],
                },
                {
                  id: "svenskaonlineligan",
                  img: "/SOLplayoffs.jpg",
                  logo: "/SOL_Logo.svg",
                  title: "Svenska Onlineligan",
                  desc: "Complete LAN broadcast production and project management for Svenska Onlineligan.",
                  tags: ["LAN Production", "Management"],
                },
                {
                  id: "subzero",
                  img: "/subzero1.jpg",
                  logo: "/subzero.png",
                  title: "Subzero E-Games",
                  desc: "Full-scale esports production, event planning, and staffing solutions.",
                  tags: ["Full Production", "Staffing"],
                },
                {
                  id: "esportsm",
                  img: "/esportsm1.png",
                  logo: "/sesf.png",
                  title: "E-sport SM 2023",
                  desc: "Full-scale production in partnership with the Swedish Esports Federation.",
                  tags: ["National Event", "Production"],
                },
                {
                  id: "abax",
                  img: "/abaximg.png",
                  logo: "/abax.jpg",
                  title: "Abax Webinar",
                  desc: "Professional live broadcast production for corporate webinar.",
                  tags: ["Corporate", "Broadcast"],
                },
              ].map((project, index) => (
                <a
                  key={index}
                  href={`/case/${project.id}`}
                  className={`group relative overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-primary/30
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#040407]
                    ${!prefersReducedMotion ? 'transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1' : 'hover:shadow-xl'}`}
                >
                  {/* Image Container */}
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img
                      src={project.img}
                      alt=""
                      width={400}
                      height={256}
                      loading="lazy"
                      className={`w-full h-full object-cover ${!prefersReducedMotion ? 'transition-transform duration-700 group-hover:scale-105' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                    {/* Logo Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10">
                      <img
                        src={project.logo}
                        alt=""
                        width={32}
                        height={32}
                        loading="lazy"
                        className="w-8 h-8 object-contain"
                      />
                    </div>

                    {/* Tags */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2.5 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm rounded-full text-gray-300 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${!prefersReducedMotion ? 'transition-colors duration-300 group-hover:text-primary' : ''}`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>
                    <div className={`inline-flex items-center gap-2 text-primary text-sm font-semibold ${!prefersReducedMotion ? 'transition-colors' : ''}`}>
                      <span>View case study</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${!prefersReducedMotion ? 'transition-transform duration-300 group-hover:translate-x-1' : ''}`} aria-hidden="true">
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12 md:mt-16 text-center">
              <a
                href="/cases"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primaryAlt text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#040407]
                  ${!prefersReducedMotion ? 'transition-all duration-300' : ''}`}
              >
                View All Cases
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
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