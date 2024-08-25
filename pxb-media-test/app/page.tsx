"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/modal/quotemodal";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import LaptopIcon from "@mui/icons-material/Laptop";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { SocialIcon } from "react-social-icons";

export default function Component() {
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="bg-black text-white transition-colors duration-300 sticky top-0 z-50">
        <nav className="container mx-auto flex flex-wrap items-center justify-between py-1 px-4 md:px-0">
          <div className="flex items-center space-x-6">
            <a className="text-xl font-bold" href="/">
              <img
                src="/vertical_logo.svg"
                alt="PXB Media Logo"
                className="h-10"
              />
            </a>
            <button
              className="md:hidden rounded border px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-300"
              onClick={handleToggleMenu}
            >
              {menuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
          <div
            ref={menuRef}
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col absolute bg-black w-full mt-2 pb-4 md:pb-0 md:w-auto md:static md:flex md:flex-row md:space-x-6`}
          >
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300">
                SERVICES
              </button>
              <div
                className={`${
                  servicesDropdownOpen ? "block" : "hidden"
                } absolute left-0 w-48 bg-black border border-gray-700 rounded-md shadow-lg`}
              >
                <div className="invisible absolute -top-4 left-0 w-full h-4"></div>
                <a
                  className="block px-4 py-2 hover:bg-gray-800"
                  href="/service/production"
                >
                  PRODUCTION
                </a>
                <a
                  className="block px-4 py-2 hover:bg-gray-800"
                  href="/service/event-staffing"
                >
                  EVENT STAFFING
                </a>
                <a
                  className="block px-4 py-2 hover:bg-gray-800"
                  href="/service/development"
                >
                  DEVELOPMENT
                </a>
              </div>
            </div>
            <a
              className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300"
              href="#contact"
            >
              CONTACT
            </a>
            <a
              className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300"
              href="/about-us"
            >
              ABOUT
            </a>
          </div>
          <Button
            onClick={openModal}
            className="hidden text-[#E3E3E3] md:inline-flex bg-primary hover:bg-primaryAlt"
            size="sm"
            variant="default"
          >
            Get a quote
          </Button>
        </nav>
      </header>
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <main className="no-scrollbar">
        <section
          className="relative h-screen bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/tf.connect-11.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative flex flex-col h-full items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fadeIn">
              Your Partner for All Things Live Production
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fadeIn animation-delay-300">
              Elevating your events with cutting-edge technology and expertise
            </p>
            <button
              onClick={openModal}
              className="h-11 rounded-md px-8 bg-primary text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[#E3E3E3] bg-primaryAlt hover:bg-primary transition-all duration-300 transform hover:scale-105 animate-fadeIn animation-delay-600"
            >
              Get a Free Quote
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-10 flex justify-center animate-bounce">
            <a href="#services" className="text-white">
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
          className="bg-[#040407] py-16 md:py-24 text-white"
        >
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-center mb-12 text-4xl font-bold md:text-5xl">
              Our Services
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <VideoCameraBackIcon fontSize="large" />,
                  title: "Broadcast Production",
                  description:
                    "State-of-the-art esports studio equipped with the latest technology for immersive experiences.",
                  image: "/tf.connect-11.jpg",
                  link: "/services/broadcast-production",
                },
                {
                  icon: <LaptopIcon fontSize="large" />,
                  title: "Web Development",
                  description:
                    "Crafting engaging content from video production to graphic design to showcase your brand.",
                  image: "/tf.connect-11.jpg",
                  link: "/services/web-development",
                },
                {
                  icon: <PeopleOutlineIcon fontSize="large" />,
                  title: "Esports Event Staffing",
                  description:
                    "Handling logistics from venue selection to live streaming for unforgettable events.",
                  image: "/tf.connect-11.jpg",
                  link: "/services/event-staffing",
                },
              ].map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="block bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-primary mr-3">{service.icon}</div>
                      <h3 className="text-2xl font-semibold">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mb-4">{service.description}</p>
                    <span className="inline-block bg-primary hover:bg-primaryAlt transition-colors duration-300 text-white font-bold py-2 px-4 rounded">
                      Learn More
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#040407] py-16 text-white">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-center mb-12 text-3xl font-bold md:text-4xl">
              Trusted By
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
              {[
                "/Logo-esu-border.jpg",
                "/SOL_Logo.svg",
                "/Raketligan-White.png",
                "/riotlogo.jpg",
              ].map((logo, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#040407] py-16 md:py-24 text-white">
  <div className="container mx-auto px-4 md:px-0">
    <h2 className="mb-12 text-4xl font-bold md:text-5xl text-center">
      Our Cases
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          id: "dreamhack",
          img: "/dh1.jpg",
          logo: "/dreamhack-logo.png",
          title: "Dreamhack Summer and Winter",
          desc: "We have provided broadcasting services for Dreamhack LAN stage, BYOC admins and admins for free play areas.",
        },
        {
          id: "tfconnect",
          img: "/tf.connect-11.jpg",
          logo: "/tfconnect-logo.png",
          title: "TF Connect",
          desc: "PXB Media provided a full production service for TF Connect's virtual event.",
        },
        {
          id: "svenskaonlineligan",
          img: "/SOLplayoffs.jpg",
          logo: "/event-logo-3.png",
          title: "Svenska Onlineligan",
          desc: "PXB Media provided a full LAN broadcast production for the Svenska Onlineligan, as well as project management.",
        },
        {
          id: "subzero",
          img: "/subzero1.jpg",
          logo: "/event-logo-4.png",
          title: "Subzero E-Games",
          desc: "PXB Media provided a full-scale esports production, helped plan and build the event, and provided event staffing.",
        },
        {
          id: "esportsm",
          img: "/esportsm1.png",
          logo: "/event-logo-5.png",
          title: "E-sport SM 2023",
          desc: "Together with the Swedish Esports Federation, we provided a full-scale production for E-sport SM 2023.",
        },
        {
          id: "abax",
          img: "/abaximg.png",
          logo: "/event-logo-6.png",
          title: "Abax Webinar",
          desc: "PXB Media provided a live broadcast production for Abax's webinar.",
        },
      ].map((project, index) => (
        <a
          key={index}
          href={`/case/${project.id}`}
          className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6">
            <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm">{project.desc}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
    <div className="text-center mt-12">
      <Button
        size="lg"
        className="bg-primary hover:bg-primaryAlt transition-colors duration-300 text-lg"
        variant="default"
      >
        View All Projects
      </Button>
    </div>
  </div>
</section>
      </main>
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
    </>
  );
}
