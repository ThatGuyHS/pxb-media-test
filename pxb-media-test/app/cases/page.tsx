"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from 'react';
import { SocialIcon } from "react-social-icons";

export default function Component() {
    const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [showQuoteButton, setShowQuoteButton] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
  const cases = [
    {
      id: "dreamhack",
      img: "/dh1.jpg",
      title: "Dreamhack Summer and Winter",
      desc: "We have provided broadcasting services for Dreamhack LAN stage, BYOC admins and admins for free play areas.",
    },
    {
      id: "tfconnect",
      img: "/tf.connect-11.jpg",
      logo: "/tfconnect-logo.png",
      title: "TF Connect",
      desc: "PXB Media provided a full production service for TF Connect&apos;s virtual event.",
    },
    {
      id: "svenskaonlineligan",
      img: "/SOLplayoffs.jpg",
      title: "Svenska Onlineligan",
      desc: "PXB Media provided a full LAN broadcast production for the Svenska Onlineligan, as well as project management.",
    },
    {
      id: "subzero",
      img: "/subzero1.jpg",
      title: "Subzero E-Games",
      desc: "PXB Media provided a full-scale esports production, helped plan and build the event, and provided event staffing.",
    },
    {
      id: "esportsm",
      img: "/esportsm1.png",
      title: "E-sport SM 2023",
      desc: "Together with the Swedish Esports Federation, we provided a full-scale production for E-sport SM 2023.",
    },
    {
      id: "abax",
      img: "/abaximg.png",
      logo: "/event-logo-6.png",
      title: "Abax Webinar",
      desc: "PXB Media provided a live broadcast production for Abax&apos;s webinar.",
    },
  ]

  return (
    <>
    <main className="bg-[#040407] min-h-screen text-white">
         <header className="bg-black text-white transition-colors duration-300 sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0 h-[72px]"> {/* Adjusted height and padding */}
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
              className="md:hidden rounded border px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-300"
              onClick={handleToggleMenu}
            >
              {menuOpen ? "CLOSE" : "MENU"}
            </button>
            <div
              ref={menuRef}
              className={`${
                menuOpen ? "flex" : "hidden"
              } md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-full left-0 md:top-auto md:left-auto bg-black w-full md:w-auto mt-2 pb-4 md:pb-0 md:mt-0`}
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
                href="/about-us"
              >
                ABOUT
              </a>
              <a
                className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300"
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
                className="text-[#E3E3E3] bg-primary hover:bg-primaryAlt h-10" // Adjusted height
                size="sm"
                variant="default"
              >
                Get a quote
              </Button>
            ) : (
              <div className="w-[88px] h-10"></div> // Adjusted height
            )}
          </div>
        </nav>
      </header>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Cases</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <Link key={caseItem.id} href={`/case/${caseItem.id}`} className="group">
              <div className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={caseItem.img}
                    alt={caseItem.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6">
                    <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      <h2 className="text-xl font-bold mb-2">{caseItem.title}</h2>
                      <p className="text-sm text-gray-300">{caseItem.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
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
   </>
  )
}