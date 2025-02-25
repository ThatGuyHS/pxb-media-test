"use client";
import React, { useState } from 'react';
import QuoteModal from '@/components/modal/quotemodal';
import ServicePageComponent from '@/components/component/service-page';
import Footer from '@/components/Footer';
import ServiceHeader from '@/components/ServiceHeader';
import LaptopIcon from "@mui/icons-material/Laptop";
import CodeIcon from "@mui/icons-material/Code";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArticleIcon from "@mui/icons-material/Article";
import BuildIcon from "@mui/icons-material/Build";
import ApiIcon from "@mui/icons-material/Api";

const DevelopmentClientPage: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const webDevelopmentContent = {
    bannerImage: '/tf.connect-11.jpg',
    title: "Web Development Services",
    description: "Elevate Your Digital Presence with Our Cutting-Edge Web Solutions. At PXB Media, we specialize in creating powerful, innovative web applications that drive your business forward. Our expert team combines creativity with technical prowess to deliver custom solutions that meet your unique needs. From responsive designs to complex web applications, we are committed to helping you achieve your digital goals and stand out in the online landscape.",
    features: [
      {
        icon: CodeIcon,
        title: "Custom Web Applications",
        description: "We design and develop tailor-made web applications that align perfectly with your business needs, ensuring scalability, performance, and user-friendly interfaces."
      },
      {
        icon: LaptopIcon,
        title: "Responsive Web Design",
        description: "Our team creates visually stunning, mobile-first websites that adapt seamlessly to all devices, providing an optimal user experience across desktops, tablets, and smartphones."
      },
      {
        icon: ShoppingCartIcon,
        title: "E-commerce Solutions",
        description: "We build robust and secure e-commerce platforms that drive sales, integrate payment gateways, and offer intuitive product management systems to boost your online business."
      },
      {
        icon: ArticleIcon,
        title: "Content Management Systems",
        description: "Our custom CMS solutions empower you to easily manage and update your website content, ensuring your site remains fresh and relevant without technical hassle."
      },
      {
        icon: BuildIcon,
        title: "Web Application Maintenance",
        description: "We provide ongoing support and maintenance services to keep your web applications running smoothly, including updates, security patches, and performance optimizations."
      },
      {
        icon: ApiIcon,
        title: "API Development and Integration",
        description: "Our team specializes in creating robust APIs and seamlessly integrating third-party services to enhance your web application's functionality and connectivity."
      }
    ],
    featureA: {
      title: "Custom Web Applications",
      subtitle: "Key Benefits of Custom Web Applications:",
      description: "Our bespoke web applications are tailored to your specific business requirements, offering unparalleled flexibility and efficiency. We employ cutting-edge technologies and best practices to ensure your application is scalable, secure, and high-performing. From customer portals to complex management systems, we bring your vision to life with intuitive interfaces and robust functionality that streamline your operations and enhance user engagement.",
      image: '/tf.connect-11.jpg'
    },
    featureB: {
      title: "Responsive Web Design",
      subtitle: "Advantages of Responsive Web Design:",
      description: "In today's multi-device world, responsive design is crucial. Our approach ensures your website looks stunning and functions flawlessly across all screen sizes. We prioritize mobile-first design, fast loading times, and intuitive navigation to provide an exceptional user experience. This not only improves user engagement but also boosts your search engine rankings, helping you reach a wider audience and drive conversions.",
      image: '/tf.connect-11.jpg'
    },
    featureC: {
      title: "E-commerce Solutions",
      subtitle: "Highlights of Our E-commerce Solutions:",
      description: "Our e-commerce platforms are built to drive sales and grow your online business. We integrate secure payment gateways, implement user-friendly product management systems, and optimize the checkout process for maximum conversions. Our solutions include features like inventory management, customer accounts, and detailed analytics to help you make data-driven decisions. We ensure your online store is not just a sales channel, but a powerful tool for customer engagement and brand building.",
      image: '/tf.connect-11.jpg'
    },
    statistics: [
      { value: "100+", label: "Successful Projects" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "24/7", label: "Support Available" }
    ]
  };

  return (
    <div className="bg-black text-white font-custom">
      <ServiceHeader openModal={openModal} />
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      
      <ServicePageComponent {...webDevelopmentContent} />
      
      <Footer />
    </div>
  );
};

export default DevelopmentClientPage; 