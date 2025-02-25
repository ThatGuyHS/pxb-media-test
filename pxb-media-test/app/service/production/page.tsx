"use client";
import React, { useState } from 'react';
import QuoteModal from '@/components/modal/quotemodal';
import ServicePageComponent from '@/components/component/service-page';
import Footer from '@/components/Footer';
import ServiceHeader from '@/components/ServiceHeader';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupIcon from '@mui/icons-material/Group';
import StreamIcon from '@mui/icons-material/Stream';
import BrushIcon from '@mui/icons-material/Brush';
import LanguageIcon from '@mui/icons-material/Language';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

const LiveBroadcastProductionPage: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const liveBroadcastContent = {
    bannerImage: '/dh2.jpg',
    title: "Live Broadcast Production",
    description: "Elevate Your Content with Professional Live Broadcasting. At PXB Media, we specialize in delivering high-quality live broadcast productions that captivate audiences and elevate your brand. Our team of experts combines cutting-edge technology with creative storytelling to bring your vision to life. Whether you are hosting a corporate event, streaming a live performance, or producing a webinar series, we have the skills and experience to ensure your broadcast stands out in today's digital landscape. From pre-production planning to real-time execution and post-event analytics, we are committed to making your live broadcast a resounding success.",
    features: [
      {
        icon: VideocamIcon,
        title: "High-Quality Equipment",
        description: "We utilize state-of-the-art cameras, lighting, and audio gear to ensure your broadcast looks and sounds professional. Our equipment is regularly maintained and updated to meet industry standards."
      },
      {
        icon: GroupIcon,
        title: "Expert Team",
        description: "Our crew consists of experienced professionals in video production, audio engineering, and live streaming. They work seamlessly together to deliver a polished broadcast experience for your audience."
      },
      {
        icon: StreamIcon,
        title: "Multi-Platform Streaming",
        description: "We can simultaneously stream your content to various platforms including YouTube, Twitch, Facebook Live, and custom websites. This ensures maximum reach and engagement for your audience."
      },
      {
        icon: BrushIcon,
        title: "Real-Time Graphics",
        description: "Enhance your broadcast with dynamic overlays, lower thirds, and custom graphics. Our team can create and implement these elements in real-time to keep your content engaging and informative."
      },
      {
        icon: LanguageIcon,
        title: "Remote Production",
        description: "We offer remote production capabilities, allowing us to produce high-quality broadcasts from multiple locations. This flexibility is perfect for distributed events or when on-site production is not feasible."
      },
      {
        icon: MovieFilterIcon,
        title: "Post-Production Services",
        description: "Our services extend beyond live broadcasts. We offer comprehensive post-production editing, allowing you to repurpose your live content for on-demand viewing, highlights, or promotional material."
      }
    ],
    featureA: {
      title: "Multi-Camera Production",
      subtitle: "Key Benefits of Multi-Camera Production:",
      description: "Our multi-camera setup allows for dynamic and engaging broadcasts that keep viewers glued to their screens. By utilizing multiple camera angles, we can capture every important moment from the best perspective, whether it is a speaker on stage, audience reactions, or product demonstrations. This versatility enables smooth transitions between shots, creating a professional and polished look that rivals traditional television broadcasts. Additionally, our multi-camera approach provides redundancy, ensuring uninterrupted coverage even in the unlikely event of technical issues with one camera.",
      image: '/dh1.jpg'
    },
    featureB: {
      title: "Live Streaming Services",
      subtitle: "Advantages of Our Live Streaming Services:",
      description: "Our live streaming services ensure your content reaches audiences worldwide in real-time. We handle all technical aspects of streaming, including encoding, CDN distribution, and multi-platform integration. This allows you to focus on your content while we ensure smooth delivery across various devices and bandwidths. Our team monitors stream health throughout the broadcast, quickly addressing any issues to maintain a high-quality viewer experience. We also provide interactive features such as live chat moderation and real-time audience polling to boost engagement and create a more immersive experience for your viewers.",
      image: '/SOLplayoffs.jpg'
    },
    featureC: {
      title: "Custom Graphics and Overlays",
      subtitle: "Highlights of Our Custom Graphics and Overlays:",
      description: "Elevate your broadcast with our custom graphics and overlay solutions. Our design team works closely with you to create visually stunning elements that align with your brand and enhance your content. From lower thirds and animated transitions to full-screen graphics and interactive overlays, we bring a professional touch to every aspect of your broadcast. These custom elements not only improve the visual appeal of your stream but also provide valuable information to viewers, increasing engagement and retention. Our graphics are optimized for various streaming platforms, ensuring they look great across all devices and screen sizes.",
      image: '/subzero1.jpg'
    },
    statistics: [
      { value: "500+", label: "Successful Broadcasts" },
      { value: "98%", label: "Client Satisfaction Rate" },
      { value: "10M+", label: "Viewers Reached" }
    ]
  };

  return (
    <div className="bg-black text-white font-custom">
      <ServiceHeader openModal={openModal} />
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      
      <ServicePageComponent {...liveBroadcastContent} />
      
      <Footer />
    </div>
  );
};

export default LiveBroadcastProductionPage;