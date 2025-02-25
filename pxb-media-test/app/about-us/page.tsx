"use client"
import React, { useState } from 'react';
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

const AboutUs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <div className="font-custom bg-black text-white min-h-screen">
        <ServiceHeader openModal={openModal} />
        <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />

        {/* Intro / About the Company */}
        <section className="about-section">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 about-content">
                <h1 className="about-title">About Us</h1>
                <p className="about-text">
                  PXB Media is dedicated to providing innovative solutions that enhance the lives of our customers. Our commitment to excellence and passion for innovation drive us to exceed expectations in every project we undertake.
                </p>
                <p className="about-text">
                  Founded with a vision to transform digital experiences, we combine technical expertise with creative thinking to deliver results that make a difference.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="about-image-container">
                  <img src='/subzero1.jpg' alt="About Us" className="about-image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="about-section alt">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2 about-content">
                <h2 className="about-title">Our Mission</h2>
                <p className="about-text">
                  Our mission is to deliver high-quality products and services that empower our clients to achieve their goals. We believe in the power of technology and creativity to transform industries and improve lives.
                </p>
                <p className="about-text">
                  Through innovative solutions and dedicated service, we strive to be the partner of choice for businesses looking to make an impact in their respective fields.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="about-image-container">
                  <img src='/esportsm1.png' alt="Our Mission" className="about-image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="team-section">
          <div className="container mx-auto px-6 py-4 text-center">
            <h2 className="team-title mx-auto">The Team</h2>
            <p className="max-w-2xl mx-auto text-lg mb-12 text-gray-300">
              Meet the talented individuals who make our vision a reality. Our diverse team brings together expertise from various fields to deliver exceptional results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <img
                    className="team-avatar"
                    src={member.image}
                    alt={member.name}
                  />
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <a href={`mailto:${member.email}`} className="team-email">
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AboutUs;
