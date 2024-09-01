import React from 'react';
import { Button } from '@/components/ui/button';

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
      <div className="relative w-full">
        <img
          src={bannerImage}
          alt="Banner Image"
          className="w-full h-[60vh] object-cover"
        />
      </div>

      <div className="w-full px-6 py-20">
        {/* Service Introduction Section */}
        <div className="w-full py-20 bg-black text-white">
          <div className="container mx-auto text-center px-6 md:px-0 pb-12">
            <h2 className="text-4xl font-bold mb-6">{title}</h2>
            <p className="text-lg max-w-3xl mx-auto">{description}</p>
          </div>
        </div>

        {/* Feature A Section */}
        <div className="w-full py-20 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-6 md:px-0 space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6">{featureA.title}</h3>
              <p className="text-base">
                <b className="block mb-4">{featureA.subtitle}</b>
                {featureA.description}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <img src={featureA.image} alt={featureA.title} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid Section */}
        <div className="w-full py-20 bg-black text-white">
          <div className="container mx-auto px-6 md:px-0">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="p-8 bg-element rounded-lg shadow-md">
                    <IconComponent className="h-16 w-16 mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-base font-semibold mb-3">Key Points:</p>
                    <p className="text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Feature B Section */}
        <div className="w-full py-20 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-6 md:px-0 space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <img src={featureB.image} alt={featureB.title} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6">{featureB.title}</h3>
              <p className="text-base">
                <b className="block mb-4">{featureB.subtitle}</b>
                {featureB.description}
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="w-full bg-primary py-20 text-center text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {statistics.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-5xl font-bold mb-4">{stat.value}</h3>
                  <p className="text-xl">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature C Section */}
        <div className="w-full py-20 bg-element text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-6 md:px-0 space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-6">{featureC.title}</h3>
              <p className="text-base">
                <b className="block mb-4">{featureC.subtitle}</b>
                {featureC.description}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <img src={featureC.image} alt={featureC.title} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageComponent;