"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import QuoteModal from '@/components/modal/quotemodal';

type ArticleData = {
  id: string;
  title: string;
  author: string;
  date: string;
  categories: string[];
  intro: string;
  imageUrl: string;
  secondaryImageUrl: string;
  imageCredit: string;
  paragraphs: string[];
};

const ArticleComponent: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<ArticleData | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetch(`/api/case/${id}`)
        .then((response) => response.json())
        .then((data: ArticleData) => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [id]);

  if (!data) {
    return <div className='h-[100vh] w-full bg-black text-white font-custom'>Loading...</div>;
  }

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
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />

      {/* Banner Image Section */}
      <div className="relative">
        <img
          src={data.imageUrl}
          alt="Banner Image"
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>

      {/* Featured Image and Title Section */}
      <div className="relative flex justify-center" style={{ marginTop: '-40vh' }}>
        <div className="w-11/12 max-w-4xl relative">
          <img
            src={data.secondaryImageUrl}
            alt="Featured Image"
            className="w-full object-cover shadow-lg rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black via-black/70 to-transparent rounded-lg">
            <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
          </div>
        </div>
      </div>

      {/* Author and Categories Section */}
      <div className="flex flex-col items-center px-8 py-4 text-center">
        <p className="text-lg">
          by {data.author} Published {data.date} in
          {data.categories.map((category, index) => (
            <span key={index} className="text-primary ml-1">
              {category}{index < data.categories.length - 1 ? ',' : ''}
            </span>
          ))}
        </p>
      </div>

      {/* Article Content Section */}
      <div className="px-8 py-12 max-w-4xl mx-auto">
        <p className="text-lg mb-8">{data.intro}</p>
        <p className="text-sm text-gray-400 mb-8">Image Credit: {data.imageCredit}</p>
        <div className="space-y-6 text-base leading-relaxed">
          {data.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Read More Button Section */}
      <div className="flex justify-center py-8">
        <button className="text-lg text-primary border-b-2 border-primary pb-1 hover:text-primaryAlt hover:border-primaryAlt transition">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default ArticleComponent;
