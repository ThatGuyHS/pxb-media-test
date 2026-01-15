"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import './service-page-styles.css';

const ServicePageComponent = ({
  bannerImage,
  title,
  description,
  features,
  featureA,
  featureB,
  featureC,
  statistics,
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <main id="main-content" className="bg-[#040407] text-white font-custom">
      {/* Banner Image Section */}
      <section className="service-banner relative" aria-labelledby="service-title">
        <img
          src={bannerImage}
          alt=""
          width={1920}
          height={600}
          className="w-full h-[50vh] min-h-[400px] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040407] via-[#040407]/60 to-transparent" />
        <div className="service-banner-content container mx-auto px-4 md:px-6 absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-4xl">
            <h1 id="service-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* Service Introduction Section */}
      <section className="py-16 md:py-24" aria-labelledby="intro-heading">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 id="intro-heading" className="sr-only">About {title}</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent" aria-labelledby="expertise-heading">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 id="expertise-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Our Expertise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <article
                  key={index}
                  className={`group p-6 md:p-8 rounded-2xl bg-gradient-to-b from-gray-900/80 to-black border border-gray-800/50 hover:border-primary/30
                    ${!prefersReducedMotion ? 'transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1' : 'hover:shadow-lg'}`}
                >
                  <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary
                    ${!prefersReducedMotion ? 'transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110' : ''}`}>
                    <IconComponent className="text-3xl" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature A Section */}
      <section className="py-16 md:py-24" aria-labelledby="feature-a-heading">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                {featureA.subtitle}
              </span>
              <h2 id="feature-a-heading" className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                {featureA.title}
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {featureA.description}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className={`relative rounded-2xl overflow-hidden border border-gray-800/50
                ${!prefersReducedMotion ? 'transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20' : ''}`}>
                <img
                  src={featureA.image}
                  alt=""
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 via-primaryAlt/10 to-primary/10" aria-labelledby="stats-heading">
        <div className="container mx-auto px-4 md:px-6">
          <h2 id="stats-heading" className="sr-only">Our Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {statistics.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature B Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" aria-labelledby="feature-b-heading">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className={`relative rounded-2xl overflow-hidden border border-gray-800/50
                ${!prefersReducedMotion ? 'transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20' : ''}`}>
                <img
                  src={featureB.image}
                  alt=""
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                {featureB.subtitle}
              </span>
              <h2 id="feature-b-heading" className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                {featureB.title}
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {featureB.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature C Section */}
      <section className="py-16 md:py-24" aria-labelledby="feature-c-heading">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                {featureC.subtitle}
              </span>
              <h2 id="feature-c-heading" className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                {featureC.title}
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {featureC.description}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className={`relative rounded-2xl overflow-hidden border border-gray-800/50
                ${!prefersReducedMotion ? 'transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20' : ''}`}>
                <img
                  src={featureC.image}
                  alt=""
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to elevate your project?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Contact us today to discuss how our {title.toLowerCase()} can help you achieve your goals.
          </p>
          <Button
            className={`h-14 px-8 bg-primary hover:bg-primaryAlt text-white font-semibold text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#040407]
              ${!prefersReducedMotion ? 'transition-all duration-300' : ''}`}
            onClick={() => document.querySelector('[data-modal-trigger]')?.click()}
          >
            Get a Quote
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ServicePageComponent;
