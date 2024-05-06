"use client"
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/modal/quotemodal';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import LaptopIcon from '@mui/icons-material/Laptop';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    
    <>
      <header className="bg-black text-white transition-colors duration-300 sticky top-0 z-50">
        <nav className="container mx-auto flex flex-wrap items-center justify-between py-6 px-4 md:px-0">
          <div className="flex items-center space-x-8">
            <a className="text-xl font-bold" href="#">
              PXB MEDIA
            </a>
            <button
              className="md:hidden rounded border px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-300"
              onClick={handleToggleMenu}
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
          <div ref={menuRef} className={`${menuOpen ? 'flex' : 'hidden'} flex-col absolute bg-black w-full mt-2 pb-4 md:pb-0 md:w-auto md:static md:flex md:flex-row md:space-x-6`}>
            <a className="px-4 py-2 hover:text-gray-300 transition-colors duration-300" href="#">
              SERVICES
            </a>
            <a className="px-4 py-2 hover:text-gray-300 transition-colors duration-300" href="#">
              SHOWREEL
            </a>
            <a className="px-4 py-2 hover:text-gray-300 transition-colors duration-300" href="#">
              CONTACT
            </a>
            <a className="px-4 py-2 hover:text-gray-300 transition-colors duration-300" href="#">
              ABOUT
            </a>
          </div>
          <Button onClick={openModal} className="hidden md:inline-flex" size="sm" variant="default">
            Get a quote
          </Button>
        </nav>
      </header>
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <main>
        <section className="relative h-screen bg-cover bg-center bg-gradient-to-b from-black via-gray-800 to-gray-900"
         style={{ backgroundImage: "url('/tf.connect-11.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative flex h-full items-center justify-center">
            <h2 className="max-w-2xl text-center uppercase text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Your partner for all things Live Production
            </h2>
          </div>
          <div className="absolute inset-x-0 bottom-20 flex justify-center">
            <div className="animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 md:py-20 text-white">
    <div className="container mx-auto px-4 md:px-0">
        <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl">Our Services</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <img src="/tf.connect-11.jpg" alt="Esports Studio" className="mb-4 h-60 w-full object-cover rounded" />
                <div className="flex items-center mb-4">
                <VideoCameraBackIcon className='pr-2'/>
                    <h3 className="text-xl font-bold md:text-2xl">Broadcast Production</h3>
                </div>
                <p>
                    Our state-of-the-art esports studio is equipped with the latest technology to provide a professional and immersive experience for your esports events.
                </p>
                <Button className="mt-4" variant="default">Read More</Button>
            </div>
            <div>
                <img src="/tf.connect-11.jpg" alt="Content Creation" className="mb-4 h-60 w-full object-cover rounded" />
                <div className="flex items-center mb-4">
                <LaptopIcon className='pr-2'/>
                    <h3 className="text-xl font-bold md:text-2xl">Web Development</h3>
                </div>
                <p>
                    From video production to graphic design, our team of creatives can help you craft engaging content to showcase your brand or esports team.
                </p>
                <Button className="mt-4" variant="default">Read More</Button>
            </div>
            <div>
                <img src="/tf.connect-11.jpg" alt="Event Management" className="mb-4 h-60 w-full object-cover rounded" />
                <div className="flex items-center mb-4">
                <PeopleOutlineIcon className='pr-2'/>
                    <h3 className="text-xl font-bold md:text-2xl">Esports Event Staffing</h3>
                </div>
                <p>
                    Let us handle the logistics of your esports event, from venue selection to live streaming, so you can focus on delivering an unforgettable experience.
                </p>
                <Button className="mt-4" variant="default">Read More</Button>
            </div>
        </div>
    </div>
</section>

        <section className="bg-gradient-to-b from-gray-800 to-black py-12 md:py-20 text-white">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl">Trusted By</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              <div>
                <img alt="Client Logo" className="h-12 w-auto" src="/Logo-esu-border.jpg" />
              </div>
              <div>
                <img alt="Client Logo" className="h-12 w-auto" src="/SOL_Logo.svg" />
              </div>
              <div>
                <img alt="Client Logo" className="h-12 w-auto" src="/Raketligan-White.png" />
              </div>
              <div>
                <img alt="Client Logo" className="h-12 w-auto" src="/riotlogo.jpg" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-b from-gray-800 to-black py-12 md:py-20 text-white">
    <div className="container mx-auto px-4 md:px-0">
        <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl">Recent Works</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a href="/project-1" className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                    alt="Project 1"
                    className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="/tf.connect-11.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <img src="/event-logo-1.png" alt="Event Logo" className="h-8 mb-2"/>
                    <h3 className="text-xl font-bold">Project 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </a>
            <a href="/project-2" className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                    alt="Project 2"
                    className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="/tf.connect-11.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <img src="/event-logo-2.png" alt="Event Logo" className="h-8 mb-2"/>
                    <h3 className="text-xl font-bold">Project 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </a>
            <a href="/project-3" className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                    alt="Project 3"
                    className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="/tf.connect-11.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <img src="/event-logo-3.png" alt="Event Logo" className="h-8 mb-2"/>
                    <h3 className="text-xl font-bold">Project 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </a>
            <a href="/project-4" className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                    alt="Project 4"
                    className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="/tf.connect-11.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <img src="/event-logo-4.png" alt="Event Logo" className="h-8 mb-2"/>
                    <h3 className="text-xl font-bold">Project 4</h3>
                    <p>Pellentesque habitant morbi tristique senectus.</p>
                </div>
            </a>
            <a href="/project-5" className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                    alt="Project 5"
                    className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="/tf.connect-11.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <img src="/event-logo-5.png" alt="Event Logo" className="h-8 mb-2"/>
                    <h3 className="text-xl font-bold">Project 5</h3>
                    <p>Etiam porta sem malesuada magna mollis euismod.</p>
                </div>
            </a>
            <a href="/project-6" className="group relative block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                    alt="Project 6"
                    className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="/tf.connect-11.jpg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <img src="/event-logo-6.png" alt="Event Logo" className="h-8 mb-2"/>
                    <h3 className="text-xl font-bold">Project 6</h3>
                    <p>Nulla vitae elit libero, a pharetra augue.</p>
                </div>
            </a>
        </div>
    </div>
</section>

<section className="bg-gradient-to-b from-gray-800 to-black py-12 md:py-20 text-white">
    <div className="container mx-auto px-4 md:px-0 text-center">
        <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl">Contact Us</h2>
        <p className="text-xl md:text-2xl">Reach out to us at:</p>
        <div className="text-3xl md:text-4xl font-bold mt-6 md:mt-8 flex justify-center space-x-1">
            <span className="inline-block animate-pulse">h</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.1s' }}>i</span>
            <span className="inline-block">@</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.2s' }}>p</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.3s' }}>x</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.4s' }}>b</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.5s' }}>m</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.6s' }}>e</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.7s' }}>d</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.8s' }}>i</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '0.9s' }}>a</span>
            <span className="inline-block">.</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '1s' }}>c</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '1.1s' }}>o</span>
            <span className="inline-block animate-pulse" style={{ animationDelay: '1.2s' }}>m</span>
        </div>
    </div>
</section>




      </main>
      <footer className="bg-black text-gray-400 py-4 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} PXB Media. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Instagram</a>
          </div>
        </div>
      </footer>
      
    </>
  )
}
