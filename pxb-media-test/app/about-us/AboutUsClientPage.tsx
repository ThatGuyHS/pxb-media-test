'use client'

import React, { useState, useEffect } from 'react';
import QuoteModal from '@/components/modal/quotemodal';
import Footer from '@/components/Footer';
import ServiceHeader from '@/components/ServiceHeader';
import './about-styles.css';

const teamMembers = [
  {
    name: 'Viktor Erlandsson',
    role: 'Lead Producer',
    email: 'viktor@pxbmedia.com',
    image: '/headshot_viktor.jpg',
  },
  {
    name: 'Guido Andriol',
    role: 'Lead Broadcast Technician',
    email: 'guido@pxbmedia.com',
    image: '/guiDO.jpg',
  },
  {
    name: 'Adam Peleback',
    role: 'Web Developer and copywriter',
    email: 'adam@pxbmedia.com',
    image: '/adam.png',
  },
  {
    name: 'Daniel Kauppinen',
    role: 'Lead Project Manager',
    email: 'daniel@pxbmedia.com',
    image: '/kappez.jpg',
  },
];

export default function AboutUsClientPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <div className="font-custom bg-[#040407] text-white min-h-screen">
        <ServiceHeader openModal={openModal} />
        <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />

        <main id="main-content">
          {/* Intro / About the Company */}
          <section className="py-16 md:py-24 relative overflow-hidden" aria-labelledby="about-heading">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                    Who We Are
                  </span>
                  <h1 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                    About Us
                  </h1>
                  <p className="text-gray-400 text-lg leading-relaxed mb-4">
                    PXB Media is dedicated to providing innovative solutions that enhance the lives of our customers. Our commitment to excellence and passion for innovation drive us to exceed expectations in every project we undertake.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Founded with a vision to transform digital experiences, we combine technical expertise with creative thinking to deliver results that make a difference.
                  </p>
                </div>
                <div>
                  <div className={`relative rounded-2xl overflow-hidden border border-gray-800/50
                    ${!prefersReducedMotion ? 'transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20' : ''}`}>
                    <img
                      src='/subzero1.jpg'
                      alt="PXB Media team working at an esports event"
                      width={600}
                      height={400}
                      loading="eager"
                      className="w-full h-auto object-cover aspect-video"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Mission */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" aria-labelledby="mission-heading">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className={`relative rounded-2xl overflow-hidden border border-gray-800/50
                    ${!prefersReducedMotion ? 'transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20' : ''}`}>
                    <img
                      src='/esportsm1.png'
                      alt="E-sport SM 2023 production showcase"
                      width={600}
                      height={400}
                      loading="lazy"
                      className="w-full h-auto object-cover aspect-video"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                    Our Purpose
                  </span>
                  <h2 id="mission-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                    Our Mission
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-4">
                    Our mission is to deliver high-quality products and services that empower our clients to achieve their goals. We believe in the power of technology and creativity to transform industries and improve lives.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Through innovative solutions and dedicated service, we strive to be the partner of choice for businesses looking to make an impact in their respective fields.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Team */}
          <section className="py-16 md:py-24 relative overflow-hidden" aria-labelledby="team-heading">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 opacity-50" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="text-center mb-12 md:mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                  Meet the Experts
                </span>
                <h2 id="team-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                  The Team
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
                  Meet the talented individuals who make our vision a reality. Our diverse team brings together expertise from various fields to deliver exceptional results.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {teamMembers.map((member, index) => (
                  <article
                    key={index}
                    className={`group text-center p-6 md:p-8 rounded-2xl bg-gradient-to-b from-gray-900/80 to-black border border-gray-800/50 hover:border-primary/30
                      ${!prefersReducedMotion ? 'transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1' : 'hover:shadow-lg'}`}
                  >
                    <div className={`relative mx-auto w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-gray-800 group-hover:border-primary
                      ${!prefersReducedMotion ? 'transition-colors duration-300' : ''}`}>
                      <img
                        src={member.image}
                        alt={`${member.name}, ${member.role}`}
                        width={128}
                        height={128}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className={`text-xl font-bold mb-1 ${!prefersReducedMotion ? 'transition-colors duration-300 group-hover:text-primary' : ''}`}>
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{member.role}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className={`inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#040407] rounded-md px-2 py-1
                        ${!prefersReducedMotion ? 'transition-colors duration-300' : ''}`}
                      aria-label={`Email ${member.name} at ${member.email}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      {member.email}
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
