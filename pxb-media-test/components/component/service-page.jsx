import React from 'react';
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
  return (
    <div className="bg-black text-white font-custom">
      {/* Banner Image Section */}
      <div className="service-banner">
        <img
          src={bannerImage}
          alt={title}
          className="w-full"
        />
        <div className="service-banner-content container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="service-title">{title}</h1>
          </div>
        </div>
      </div>

      {/* Service Introduction Section */}
      <div className="service-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="service-description">{description}</p>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="service-section alt">
        <div className="container mx-auto px-6">
          <h2 className="service-section-title mx-auto text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="feature-card">
                  <IconComponent className="feature-icon" />
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Feature A Section */}
      <div className="service-section">
        <div className="container mx-auto px-6">
          <div className="feature-highlight">
            <div className="feature-highlight-content">
              <h3 className="feature-highlight-title">{featureA.title}</h3>
              <p className="feature-highlight-subtitle">{featureA.subtitle}</p>
              <p className="feature-highlight-description">{featureA.description}</p>
            </div>
            <div className="feature-highlight-image">
              <img src={featureA.image} alt={featureA.title} />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <div className="container mx-auto px-6 stats-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature B Section */}
      <div className="service-section alt">
        <div className="container mx-auto px-6">
          <div className="feature-highlight reverse">
            <div className="feature-highlight-image">
              <img src={featureB.image} alt={featureB.title} />
            </div>
            <div className="feature-highlight-content">
              <h3 className="feature-highlight-title">{featureB.title}</h3>
              <p className="feature-highlight-subtitle">{featureB.subtitle}</p>
              <p className="feature-highlight-description">{featureB.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature C Section */}
      <div className="service-section">
        <div className="container mx-auto px-6">
          <div className="feature-highlight">
            <div className="feature-highlight-content">
              <h3 className="feature-highlight-title">{featureC.title}</h3>
              <p className="feature-highlight-subtitle">{featureC.subtitle}</p>
              <p className="feature-highlight-description">{featureC.description}</p>
            </div>
            <div className="feature-highlight-image">
              <img src={featureC.image} alt={featureC.title} />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="service-section alt text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to elevate your project?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our {title.toLowerCase()} services can help you achieve your goals.
          </p>
          <Button 
            className="bg-primary hover:bg-primaryAlt text-white py-3 px-8 rounded-md text-lg transition-colors duration-300"
            onClick={() => document.querySelector('[data-modal-trigger]')?.click()}
          >
            Get a Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicePageComponent;