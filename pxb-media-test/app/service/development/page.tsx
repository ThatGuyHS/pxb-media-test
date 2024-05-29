"use client";
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

const featuresData = [
  {
    icon: '/tf.connect-11.jpg',
    title: "Feature Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Feature Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Feature Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Feature Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Feature Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla."
  },
  {
    icon: '/tf.connect-11.jpg',
    title: "Feature Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla."
  }
];

const ServicesComponent: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black text-white font-custom">
      <header className="bg-black text-white transition-colors duration-300 sticky top-0 z-50">
        <nav className="container mx-auto flex flex-wrap items-center justify-between py-1 px-4 md:px-0">
          <div className="flex items-center space-x-6">
            <a className="text-xl font-bold" href="#">
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
            <a className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300" href="#">
              SERVICES
            </a>
            <a className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300" href="#">
              SHOWREEL
            </a>
            <a className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300" href="#contact">
              CONTACT
            </a>
            <a className="px-4 py-2 hover:text-gray-300 hover:underline decoration-primary transition-colors duration-300" href="#">
              ABOUT
            </a>
          </div>
          <Button onClick={openModal} className="hidden text-[#E3E3E3] md:inline-flex color-primary hover:bg-primaryAlt" size="sm" variant="default">
            Get a quote
          </Button>
        </nav>
      </header>
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

      <div className="w-full px-4 pt-16">
        {/* Live Broadcast Production Section */}
        <div className="text-center px-8 pb-8">
          <h2 className="text-4xl font-bold mb-4">Live Broadcast Production</h2>
          <p className="text-lg max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
          </p>
        </div>

        {/* Feature A Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left bg-element px-8 py-8">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-4">Feature A</h3>
            <p className="text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src='/tf.connect-11.jpg' alt="Feature A" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>

        {/* Features Grid Section */}
        <div className="text-center px-8 py-8">
          <h2 className="text-4xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg shadow-lg">
                <img src={feature.icon} alt={`${feature.title} icon`} className="h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

       {/* Feature B Section */}
<div className="bg-element flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-8 py-8">
  <div className="md:w-1/2">
    <img src='/tf.connect-11.jpg' alt="Feature B" className="w-full h-64 object-cover rounded-lg" />
  </div>
  <div className="md:w-1/2">
    <h3 className="text-3xl font-semibold mb-4 pl-2">Feature B</h3>
    <p className="text-base mb-4 pl-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
    </p>
  </div>
</div>


        {/* Statistics Section */}
        <div className="bg-primary py-16 text-center text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-4xl font-bold mb-2">48+</h3>
                <p className="text-lg">Something</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">4</h3>
                <p className="text-lg">Something</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2">900,000+</h3>
                <p className="text-lg">Something</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature C Section */}
        <div className="bg-element flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-8 py-8">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-4">Feature C</h3>
            <p className="text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mauris commodo, tempus leo in, congue urna. Sed in justo vitae mi rutrum eleifend finibus non nulla.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src='/tf.connect-11.jpg' alt="Feature C" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
