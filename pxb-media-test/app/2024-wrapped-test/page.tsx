'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EventCard from './components/EventCard'
import Summary from './components/Summary'

const cases = [
  {
    id: "dreamhack",
    name: "Dreamhack Summer and Winter",
    date: "2024",
    viewership: 1500000,
    broadcastHours: 72,
    image: "/dh1.jpg",
    description: "We have provided broadcasting services for Dreamhack LAN stage, BYOC admins and admins for free play areas.",
    highlights: ['LAN stage broadcasting', 'BYOC admin services', 'Free play area management'],
  },
  {
    id: "tfconnect",
    name: "TF Connect",
    date: "2024",
    viewership: 50000,
    broadcastHours: 8,
    image: "/tf.connect-11.jpg",
    description: "PXB Media provided a full production service for TF Connect&apos;s virtual event.",
    highlights: ['Full production service', 'Virtual event management', 'Live streaming'],
  },
  {
    id: "svenskaonlineligan",
    name: "Svenska Onlineligan",
    date: "2024",
    viewership: 200000,
    broadcastHours: 24,
    image: "/SOLplayoffs.jpg",
    description: "PXB Media provided a full LAN broadcast production for the Svenska Onlineligan, as well as project management.",
    highlights: ['Full LAN broadcast production', 'Project management', 'Live commentary'],
  },
  {
    id: "subzero",
    name: "Subzero E-Games",
    date: "2024",
    viewership: 300000,
    broadcastHours: 36,
    image: "/subzero1.jpg",
    description: "PXB Media provided a full-scale esports production, helped plan and build the event, and provided event staffing.",
    highlights: ['Full-scale esports production', 'Event planning and building', 'Event staffing'],
  },
  {
    id: "esportsm",
    name: "E-sport SM 2024",
    date: "2024",
    viewership: 500000,
    broadcastHours: 48,
    image: "/esportsm1.png",
    description: "Together with the Swedish Esports Federation, we provided a full-scale production for E-sport SM 2024.",
    highlights: ['Full-scale production', 'Collaboration with Swedish Esports Federation', 'Multi-game tournament coverage'],
  },
  {
    id: "abax",
    name: "Abax Webinar",
    date: "2024",
    viewership: 10000,
    broadcastHours: 2,
    image: "/abaximg.png",
    description: "PXB Media provided a live broadcast production for Abax&apos;s webinar.",
    highlights: ['Live broadcast production', 'Webinar management', 'Interactive Q&A session'],
  },
]

export default function PXBWrapped() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextEvent = () => {
    if (currentIndex < cases.length) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const resetToHome = () => {
    setCurrentIndex(0)
  }

  return (
    <div className="min-h-screen bg-[#040407] text-white">
      <AnimatePresence mode="wait">
        {currentIndex < cases.length ? (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            <EventCard event={cases[currentIndex]} onNext={nextEvent} />
          </motion.div>
        ) : (
          <motion.div
            key="summary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex items-center justify-center"
          >
            <Summary events={cases} onReset={resetToHome} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

