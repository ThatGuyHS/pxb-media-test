import { motion } from 'framer-motion'
import { ArrowRight, Users, Clock } from 'lucide-react'

interface Event {
  id: string
  name: string
  date: string
  viewership: number
  broadcastHours: number
  image: string
  description: string
  highlights: string[]
}

interface EventCardProps {
  event: Event
  onNext: () => void
}

export default function EventCard({ event, onNext }: EventCardProps) {
  return (
    <div 
      className="min-h-screen bg-cover bg-center relative flex flex-col justify-end"
      style={{ backgroundImage: `url(${event.image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 p-8 space-y-6 max-w-4xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {event.name}
        </motion.h2>
        <motion.p 
          className="text-2xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {event.date}
        </motion.p>
        <motion.p
          className="text-xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {event.description}
        </motion.p>
        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex items-center">
            <Users className="w-8 h-8 mr-2 text-[#3ABCF9]" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Total Viewership</h3>
              <p className="text-4xl font-bold">{event.viewership.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="w-8 h-8 mr-2 text-[#3ABCF9]" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Broadcast Hours</h3>
              <p className="text-4xl font-bold">{event.broadcastHours}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Highlights</h3>
          <ul className="list-disc list-inside text-xl space-y-2">
            {event.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </motion.div>
        <motion.button
          className="bg-[#3ABCF9] text-black px-6 py-3 rounded-full flex items-center justify-center text-xl font-semibold mt-8 hover:bg-[#151C38] hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
        >
          Next Event <ArrowRight className="ml-2" size={24} />
        </motion.button>
      </div>
    </div>
  )
}

