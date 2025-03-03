'use client'

import React, { useState, useEffect } from 'react';
import QuoteModal from '@/components/modal/quotemodal';
import Footer from '@/components/Footer';
import ServiceHeader from '@/components/ServiceHeader';
import Image from 'next/image';
import './brand-styles.css';

export default function BrandClientPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [debugMode, setDebugMode] = useState(false);

  const openModal = () => {
    console.log('openModal function called');
    alert('Contact button clicked!'); // Add an alert for immediate visual feedback
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);

  // Enable debug mode with keyboard shortcut (Ctrl+Shift+D)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setDebugMode(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Add debug visualization when debug mode is active
    if (debugMode) {
      // Add outline to all interactive elements
      const buttons = document.querySelectorAll('button, [role="button"], a, .cursor-pointer');
      buttons.forEach((button, index) => {
        const element = button as HTMLElement;
        const originalOutline = element.style.outline;
        const originalPosition = element.style.position;
        const originalZIndex = element.style.zIndex;
        
        element.style.outline = '2px solid red';
        element.style.position = 'relative';
        
        // Add debug info
        const debugInfo = document.createElement('div');
        debugInfo.style.position = 'absolute';
        debugInfo.style.top = '-20px';
        debugInfo.style.left = '0';
        debugInfo.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        debugInfo.style.color = 'white';
        debugInfo.style.padding = '2px 5px';
        debugInfo.style.fontSize = '10px';
        debugInfo.style.zIndex = '10001';
        debugInfo.style.whiteSpace = 'nowrap';
        
        const computedStyle = window.getComputedStyle(element);
        debugInfo.textContent = `z-index: ${computedStyle.zIndex}, position: ${computedStyle.position}`;
        
        element.appendChild(debugInfo);
        
        // Store original styles for cleanup
        element.dataset.originalOutline = originalOutline;
        element.dataset.originalPosition = originalPosition;
        element.dataset.originalZIndex = originalZIndex;
        element.dataset.debugInfoAdded = 'true';
      });
      
      return () => {
        // Clean up debug visualization
        buttons.forEach(button => {
          const element = button as HTMLElement;
          if (element.dataset.debugInfoAdded === 'true') {
            element.style.outline = element.dataset.originalOutline || '';
            element.style.position = element.dataset.originalPosition || '';
            element.style.zIndex = element.dataset.originalZIndex || '';
            
            // Remove debug info
            const debugInfo = element.querySelector('div[style*="z-index: 10001"]');
            if (debugInfo) {
              element.removeChild(debugInfo);
            }
            
            delete element.dataset.debugInfoAdded;
          }
        });
      };
    }
    
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [debugMode]);

  // Color palette from the brand guide
  const colors = {
    primary: [
      { name: 'Primary', hex: '#00ABF5', rgb: 'rgb(0, 171, 245)' },
      { name: 'Primary Alt', hex: '#0066F1', rgb: 'rgb(0, 102, 241)' }
    ],
    secondary: [
      { name: 'Secondary', hex: '#F53769', rgb: 'rgb(245, 55, 105)' },
      { name: 'Secondary Alt', hex: '#CD186A', rgb: 'rgb(205, 24, 106)' }
    ],
    neutral: [
      { name: 'Black', hex: '#040407', rgb: 'rgb(4, 4, 7)' },
      { name: 'Element', hex: '#080B16', rgb: 'rgb(8, 11, 22)' },
      { name: 'Element Alt', hex: '#151C38', rgb: 'rgb(21, 28, 56)' },
      { name: 'White', hex: '#E3E3E3', rgb: 'rgb(227, 227, 227)' }
    ],
    accent: [
      { name: 'Green', hex: '#2FD96A', rgb: 'rgb(47, 217, 106)' },
      { name: 'Yellow', hex: '#F6A922', rgb: 'rgb(246, 169, 34)' },
      { name: 'Orange', hex: '#FD622A', rgb: 'rgb(253, 98, 42)' },
      { name: 'Pink', hex: '#E57782', rgb: 'rgb(229, 119, 130)' },
      { name: 'Purple', hex: '#7123D2', rgb: 'rgb(113, 35, 210)' }
    ]
  };

  // Button styles from the brand guide
  const buttons = [
    { type: 'Primary', hover: 'Hover', alt: 'Alt' },
    { type: 'Secondary', hover: 'Hover', alt: 'Alt' },
    { type: 'Tertiary', hover: 'Hover', alt: 'Alt' }
  ];

  return (
    <div className="bg-black text-white font-custom">
      <ServiceHeader openModal={openModal} />
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      
      {/* Debug Overlay */}
      {debugMode && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            background: 'rgba(255, 0, 0, 0.1)',
            color: 'white',
            zIndex: 10000,
            padding: '10px',
            fontSize: '12px'
          }}
        >
          DEBUG MODE ACTIVE - Press Ctrl+Shift+D to toggle
          <div>
            Modal is {modalIsOpen ? 'OPEN' : 'CLOSED'}
          </div>
        </div>
      )}
      
      {/* Brand Guidelines Header */}
      <section className="brand-header">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">PXB Media Brand Guidelines</h1>
          <p className="text-xl max-w-3xl">
            Our brand identity is a reflection of who we are. This guide will help you understand how to properly use our brand elements to maintain consistency across all platforms.
          </p>
        </div>
      </section>

      {/* Logo Section */}
      <section className="brand-section">
        <div className="container mx-auto px-6 py-12">
          <h2 className="section-title">Logo</h2>
          <p className="section-description">
            Our logo is the primary visual identifier of PXB Media. It should be used consistently and respectfully across all applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="logo-display bg-black p-8 rounded-lg flex flex-col items-center justify-center">
              <Image src="/vertical_logo.svg" alt="PXB Media Vertical Logo" className="h-32 mb-6" width={128} height={128} />
              <p className="text-center text-lg font-medium">Vertical Logo</p>
              <button
                className="mt-4 download-button relative z-50"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/vertical_logo.svg';
                  link.setAttribute('download', 'PXB_Media_Vertical_Logo.svg');
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download SVG
              </button>
            </div>
            <div className="logo-display bg-black p-8 rounded-lg flex flex-col items-center justify-center">
              <Image src="/horizontal_logo.svg" alt="PXB Media Horizontal Logo" className="h-16 mb-6" width={200} height={64} />
              <p className="text-center text-lg font-medium">Horizontal Logo</p>
              <button
                className="mt-4 download-button relative z-50"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/horizontal_logo.svg';
                  link.setAttribute('download', 'PXB_Media_Horizontal_Logo.svg');
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download SVG
              </button>
            </div>
          </div>

          <div className="logo-guidelines mt-12">
            <h3 className="text-2xl font-bold mb-4">Logo Usage Guidelines</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Always maintain clear space around the logo equal to the height of the &ldquo;P&rdquo; in the logo</li>
              <li>Do not stretch, distort, or alter the proportions of the logo</li>
              <li>Do not change the colors of the logo</li>
              <li>Do not place the logo on busy backgrounds that reduce legibility</li>
              <li>The minimum size for the horizontal logo is 100px wide</li>
              <li>The minimum size for the vertical logo is 60px wide</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="brand-section alt">
        <div className="container mx-auto px-6 py-12">
          <h2 className="section-title">Colours</h2>
          <p className="section-description">
            Our color palette is designed to be bold, modern, and versatile. The primary blue represents innovation and reliability, while our secondary colors add energy and creativity.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Primary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {colors.primary.map((color, index) => (
                <div key={index} className="color-card">
                  <div className="color-sample" style={{ backgroundColor: color.hex }}></div>
                  <div className="color-info">
                    <h4 className="color-name">{color.name}</h4>
                    <p className="color-hex">{color.hex}</p>
                    <p className="color-rgb">{color.rgb}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Secondary Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {colors.secondary.map((color, index) => (
                <div key={index} className="color-card">
                  <div className="color-sample" style={{ backgroundColor: color.hex }}></div>
                  <div className="color-info">
                    <h4 className="color-name">{color.name}</h4>
                    <p className="color-hex">{color.hex}</p>
                    <p className="color-rgb">{color.rgb}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Neutral Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {colors.neutral.map((color, index) => (
                <div key={index} className="color-card">
                  <div className="color-sample" style={{ backgroundColor: color.hex }}></div>
                  <div className="color-info">
                    <h4 className="color-name">{color.name}</h4>
                    <p className="color-hex">{color.hex}</p>
                    <p className="color-rgb">{color.rgb}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Accent Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {colors.accent.map((color, index) => (
                <div key={index} className="color-card">
                  <div className="color-sample" style={{ backgroundColor: color.hex }}></div>
                  <div className="color-info">
                    <h4 className="color-name">{color.name}</h4>
                    <p className="color-hex">{color.hex}</p>
                    <p className="color-rgb">{color.rgb}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="brand-section">
        <div className="container mx-auto px-6 py-12">
          <h2 className="section-title">Typography</h2>
          <p className="section-description">
            Our typography system is designed to be clear, modern, and versatile across all platforms and materials.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Headings</h3>
            <div className="typography-sample">
              <h1 className="text-5xl font-bold mb-4">H1, CAMPTON BOLD 48</h1>
              <h2 className="text-4xl font-medium mb-4">H2, CAMPTON MEDIUM 32</h2>
              <h3 className="text-3xl font-bold mb-4">H3, CAMPTON BOLD 22</h3>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Body Text</h3>
            <div className="typography-sample">
              <p className="text-base mb-4">Body, Inter Regular 16</p>
              <p className="text-sm mb-4">Small Text, Inter Regular 14</p>
              <p className="text-xs mb-4">Extra Small Text, Inter Regular 12</p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Typography Guidelines</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use Campton for headings and display text</li>
              <li>Use Inter for body text and UI elements</li>
              <li>Maintain proper hierarchy with consistent sizing</li>
              <li>Ensure sufficient contrast between text and background</li>
              <li>Avoid using more than 2-3 different font weights in a single design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="brand-section alt">
        <div className="container mx-auto px-6 py-12">
          <h2 className="section-title">Buttons</h2>
          <p className="section-description">
            Our button system is designed to be clear, accessible, and consistent across all interfaces.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            {buttons.map((button, index) => (
              <div key={index} className="button-category">
                <h3 className="text-2xl font-bold mb-6">{button.type}</h3>
                <div className="button-samples space-y-6">
                  <div className="button-sample">
                    <button className={`brand-button ${button.type.toLowerCase()}`}>
                      {button.type.toUpperCase()}
                    </button>
                  </div>
                  <div className="button-sample">
                    <button className={`brand-button ${button.type.toLowerCase()} hover`}>
                      {button.hover.toUpperCase()}
                    </button>
                  </div>
                  <div className="button-sample">
                    <button className={`brand-button ${button.type.toLowerCase()} alt`}>
                      {button.alt.toUpperCase()}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Voice Section */}
      <section className="brand-section">
        <div className="container mx-auto px-6 py-12">
          <h2 className="section-title">Brand Voice</h2>
          <p className="section-description">
            Our brand voice is professional, approachable, and knowledgeable. It reflects our expertise while remaining accessible to our audience.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="voice-guidelines">
              <h3 className="text-2xl font-bold mb-6">We Are</h3>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <span className="font-bold">Professional</span>
                  <p>We communicate with clarity and expertise, demonstrating our industry knowledge.</p>
                </li>
                <li>
                  <span className="font-bold">Innovative</span>
                  <p>We embrace new ideas and approaches, always looking for better solutions.</p>
                </li>
                <li>
                  <span className="font-bold">Approachable</span>
                  <p>We use clear, straightforward language that is accessible to all audiences.</p>
                </li>
                <li>
                  <span className="font-bold">Passionate</span>
                  <p>We show enthusiasm for our work and commitment to our clients&apos; success.</p>
                </li>
              </ul>
            </div>
            <div className="voice-guidelines">
              <h3 className="text-2xl font-bold mb-6">We Are Not</h3>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <span className="font-bold">Overly Technical</span>
                  <p>We avoid jargon and unnecessarily complex language that might confuse our audience.</p>
                </li>
                <li>
                  <span className="font-bold">Casual to a Fault</span>
                  <p>While approachable, we maintain a level of professionalism appropriate for our industry.</p>
                </li>
                <li>
                  <span className="font-bold">Impersonal</span>
                  <p>We avoid cold, corporate language that fails to connect with our audience.</p>
                </li>
                <li>
                  <span className="font-bold">Exaggerated</span>
                  <p>We make realistic claims and avoid hyperbole or overpromising.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="brand-section alt">
        <div className="container mx-auto px-6 py-12 text-center">
          <h2 className="section-title mx-auto">Need Help?</h2>
         
          
          {/* New Contact Us Button Implementation */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              console.log('Contact button clicked');
              setModalIsOpen(true);
            }}
            style={{
              display: modalIsOpen ? 'none' : 'inline-block',
              backgroundColor: '#00ABF5',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              fontSize: '18px',
              fontWeight: 'bold',
              textDecoration: 'none',
              margin: '20px 0',
              cursor: 'pointer',
              border: 'none',
              position: 'relative',
              zIndex: 9999
            }}
          >
            CONTACT US
          </a>
          
          <div className="mt-4 text-sm text-gray-400">
            Try clicking the button above. If you see an alert, the button is working.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 
