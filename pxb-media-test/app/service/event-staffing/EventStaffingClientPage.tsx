"use client";
import React, { useState } from 'react';
import QuoteModal from '@/components/modal/quotemodal';
import ServicePageComponent from '@/components/component/service-page';
import Footer from '@/components/Footer';
import ServiceHeader from '@/components/ServiceHeader';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonIcon from '@mui/icons-material/Person';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import VideocamIcon from '@mui/icons-material/Videocam';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import ComputerIcon from '@mui/icons-material/Computer';

const EventStaffingClientPage: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const eventStaffingContent = {
    bannerImage: '/tf.connect-11.jpg',
    title: "Event Staffing Services",
    description: "Elevate Your Esports Events with Our Professional Staffing Solutions. At PXB Media, we provide comprehensive event staffing services tailored specifically for esports tournaments and gaming events. Our team of skilled professionals ensures smooth operations, exceptional experiences for participants and attendees, and flawless execution of your event vision. From tournament administrators to broadcast technicians, we offer the expertise you need to make your event a resounding success.",
    features: [
      {
        icon: AdminPanelSettingsIcon,
        title: "Tournament Administrators",
        description: "Experienced admins who ensure smooth execution of esports tournaments, managing rules, resolving disputes, and maintaining competitive integrity."
      },
      {
        icon: PersonIcon,
        title: "Player Managers",
        description: "Dedicated professionals who handle logistics, communication, and support for players, allowing them to focus on their performance during events."
      },
      {
        icon: RoomServiceIcon,
        title: "Hospitality Staff",
        description: "Trained personnel who create a welcoming environment for attendees, manage VIP areas, and ensure guest comfort throughout the event."
      },
      {
        icon: VideocamIcon,
        title: "Broadcast Staff",
        description: "Skilled technicians and producers who manage live streams, camera operations, and overall production quality for seamless event broadcasts."
      },
      {
        icon: TheaterComedyIcon,
        title: "Stage Managers",
        description: "Experienced professionals who coordinate on-stage activities, manage talent, and ensure smooth transitions between segments of the event."
      },
      {
        icon: ComputerIcon,
        title: "Technical Support",
        description: "Expert IT staff who handle hardware setup, network management, and rapid troubleshooting to keep the event running without technical hitches."
      }
    ],
    featureA: {
      title: "Tournament Administration",
      subtitle: "Key Benefits of Our Tournament Administrators:",
      description: "Our experienced tournament administrators are the backbone of any successful esports event. They manage tournament rules, oversee match scheduling, resolve disputes, and ensure fair play. With their expertise, you can focus on delivering an exceptional experience to players and spectators while we handle the intricate details of tournament execution. From group stages to grand finals, our admins maintain the competitive integrity and smooth flow of your event.",
      image: '/tf.connect-11.jpg'
    },
    featureB: {
      title: "Player Management",
      subtitle: "Advantages of Our Player Management Services:",
      description: "Our dedicated player managers act as the crucial link between tournament organizers and competitors. They handle player registration, coordinate schedules, manage practice areas, and ensure all player needs are met. By taking care of logistics and communication, our managers allow players to focus entirely on their performance. This personalized support enhances the player experience and contributes to the overall professionalism of your event.",
      image: '/tf.connect-11.jpg'
    },
    featureC: {
      title: "Broadcast Staff",
      subtitle: "Highlights of Our Broadcast Team:",
      description: "Our professional broadcast staff ensures your event reaches audiences worldwide with top-notch production quality. From camera operators and sound technicians to directors and producers, our team handles every aspect of your live broadcast. We utilize cutting-edge technology and industry best practices to deliver seamless streams, engaging graphics, and immersive viewer experiences. Whether it's managing multiple camera feeds, coordinating with casters, or troubleshooting technical issues, our broadcast team guarantees your event shines on screen.",
      image: '/tf.connect-11.jpg'
    },
    statistics: [
      { value: "100+", label: "Events Staffed" },
      { value: "500+", label: "Skilled Professionals" },
      { value: "1,000,000+", label: "Attendees Served" }
    ]
  };

  return (
    <div className="bg-black text-white font-custom">
      <ServiceHeader openModal={openModal} />
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      
      <ServicePageComponent {...eventStaffingContent} />
      
      <Footer />
    </div>
  );
};

export default EventStaffingClientPage; 