'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react';
import QuoteModal from '@/components/modal/quotemodal';
import Footer from '@/components/Footer';
import ServiceHeader from '@/components/ServiceHeader';
import './cases-styles.css';

const cases = [
  {
    id: "dreamhack",
    img: "/dh1.jpg",
    title: "Dreamhack Summer and Winter",
    desc: "We have provided broadcasting services for Dreamhack LAN stage, BYOC admins and admins for free play areas.",
    tags: ["Broadcasting", "Event Staff"],
  },
  {
    id: "tfconnect",
    img: "/tf.connect-11.jpg",
    title: "TF Connect",
    desc: "PXB Media provided a full production service for TF Connect's virtual event.",
    tags: ["Production", "Virtual Event"],
  },
  {
    id: "svenskaonlineligan",
    img: "/SOLplayoffs.jpg",
    title: "Svenska Onlineligan",
    desc: "PXB Media provided a full LAN broadcast production for the Svenska Onlineligan, as well as project management.",
    tags: ["LAN Production", "Management"],
  },
  {
    id: "subzero",
    img: "/subzero1.jpg",
    title: "Subzero E-Games",
    desc: "PXB Media provided a full-scale esports production, helped plan and build the event, and provided event staffing.",
    tags: ["Full Production", "Staffing"],
  },
  {
    id: "esportsm",
    img: "/esportsm1.png",
    title: "E-sport SM 2023",
    desc: "Together with the Swedish Esports Federation, we provided a full-scale production for E-sport SM 2023.",
    tags: ["National Event", "Production"],
  },
  {
    id: "abax",
    img: "/abaximg.png",
    title: "Abax Webinar",
    desc: "PXB Media provided a live broadcast production for Abax's webinar.",
    tags: ["Corporate", "Broadcast"],
  },
];

export default function CasesClientPage() {
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

  const openModal = useCallback(() => setModalIsOpen(true), []);
  const closeModal = useCallback(() => setModalIsOpen(false), []);

  return (
    <>
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <div className="bg-[#040407] min-h-screen text-white">
        <ServiceHeader openModal={openModal} />

        <main id="main-content" className="container mx-auto px-4 md:px-6 py-16 md:py-24 max-w-7xl">
          {/* Page Header */}
          <section className="text-center mb-12 md:mb-16" aria-labelledby="cases-heading">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Portfolio
            </span>
            <h1 id="cases-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Our Cases
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our portfolio of successful projects and see how we helped our clients achieve their goals
            </p>
          </section>

          {/* Cases Grid */}
          <section aria-label="Case studies">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cases.map((caseItem) => (
                <Link
                  key={caseItem.id}
                  href={`/case/${caseItem.id}`}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900/80 to-black border border-gray-800/50 hover:border-primary/30
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#040407]
                    ${!prefersReducedMotion ? 'transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1' : 'hover:shadow-xl'}`}
                >
                  {/* Image Container */}
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img
                      src={caseItem.img}
                      alt=""
                      width={400}
                      height={256}
                      loading="lazy"
                      className={`w-full h-full object-cover ${!prefersReducedMotion ? 'transition-transform duration-700 group-hover:scale-105' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                    {/* Tags */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {caseItem.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm rounded-full text-gray-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className={`text-xl font-bold mb-2 ${!prefersReducedMotion ? 'transition-colors duration-300 group-hover:text-primary' : ''}`}>
                      {caseItem.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {caseItem.desc}
                    </p>
                    <div className={`inline-flex items-center gap-2 text-primary text-sm font-semibold ${!prefersReducedMotion ? 'transition-colors' : ''}`}>
                      <span>View case study</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`${!prefersReducedMotion ? 'transition-transform duration-300 group-hover:translate-x-1' : ''}`}
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  )
}
