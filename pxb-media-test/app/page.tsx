"use client"
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
              className="md:hidden rounded border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-300"
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
          <Button className="hidden md:inline-flex" size="sm" variant="default">
            Get a quote
          </Button>
        </nav>
      </header>
      <main>
        <section className="relative h-[100vh] bg-cover bg-center bg-gradient-to-b from-black to-gray-900 sm:h-[100vh] md:h-[100vh]"
          style={{
            backgroundImage: "url('/tf.connect-11.jpg')",
          }}>
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative flex h-full items-center justify-center">
            <h2 className="max-w-2xl text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Your partner for all things Live Production
            </h2>
          </div>
        </section>
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 md:py-20 text-white">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl">Our Services</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <img src="/tf.connect-11.jpg" alt="Esports Studio" className="mb-4 h-60 w-full object-cover rounded" />
                <h3 className="mb-4 text-xl font-bold md:text-2xl">Esports Studio</h3>
                <p>
                  Our state-of-the-art esports studio is equipped with the latest technology to provide a professional
                  and immersive experience for your esports events.
                </p>
                <Button className="mt-4" variant="default">Read More</Button>

              </div>
              <div>
                <img src="/tf.connect-11.jpg" alt="Content Creation" className="mb-4 h-60 w-full object-cover rounded" />
                <h3 className="mb-4 text-xl font-bold md:text-2xl">Content Creation</h3>
                <p>
                  From video production to graphic design, our team of creatives can help you craft engaging content to
                  showcase your brand or esports team.
                </p>
                <Button className="mt-4" variant="default">Read More</Button>

              </div>
              <div>
                <img src="/tf.connect-11.jpg" alt="Event Management" className="mb-4 h-60 w-full object-cover rounded" />
                <h3 className="mb-4 text-xl font-bold md:text-2xl">Event Management</h3>
                <p>
                  Let us handle the logistics of your esports event, from venue selection to live streaming, so you can
                  focus on delivering an unforgettable experience.
                </p>
                <Button className="mt-4" variant="default">Read More</Button>

              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-b from-gray-800 to-gray-700 py-12 md:py-20 text-white">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl">Our Clients</h2>
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
        <section className="bg-gradient-to-b from-gray-700 to-gray-600 py-12 md:py-20 text-white">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl">Our Work</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <img
                  alt="Project 1"
                  className="mb-4 h-60 w-full rounded object-cover"
                  src="/tf.connect-11.jpg"
                />
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Project 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,
                  nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.</p>
              </div>
              <div>
                <img
                  alt="Project 2"
                  className="mb-4 h-60 w-full rounded object-cover"
                  src="/tf.connect-11.jpg"
                />
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Project 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,
                  nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.</p>
              </div>
              <div>
                <img
                  alt="Project 3"
                  className="mb-4 h-60 w-full rounded object-cover"
                  src="/tf.connect-11.jpg"
                />
                <h3 className="mb-2 text-xl font-bold md:text-2xl">Project 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt,
                  nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-b from-gray-600 to-gray-500 py-12 md:py-20 text-white">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="mb-6 text-3xl font-bold md:mb-8 md:text-4xl">Contact Us</h2>
            <form className="mx-auto max-w-xl">
              <div className="mb-4 sm:mb-6">
                <label className="mb-2 block text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  className="block w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                  id="name"
                  type="text"
                />
              </div>
              <div className="mb-4 sm:mb-6">
                <label className="mb-2 block text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  className="block w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                  id="email"
                  type="email"
                />
              </div>
              <div className="mb-4 sm:mb-6">
                <label className="mb-2 block text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="block w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
                  id="message"
                  rows={4}
                />
              </div>
              <Button className="w-full sm:w-auto" type="submit">
                Send Message
              </Button>
            </form>
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
