import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Clock, Calendar, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Event {
  id: string
  name: string
  date: string
  viewership: number
  broadcastHours: number
  image: string
}

interface SummaryProps {
  events: Event[]
  onReset: () => void
}

export default function Summary({ events, onReset }: SummaryProps) {
  const totalViewership = events.reduce((sum, event) => sum + event.viewership, 0)
  const totalBroadcastHours = events.reduce((sum, event) => sum + event.broadcastHours, 0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#040407] p-8">
      <div className="max-w-4xl w-full space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/vertical_logo.svg"
            alt="PXB Media Logo"
            width={200}
            height={100}
            className="mb-8"
          />
          <h2 className="text-5xl font-bold mb-12 text-center text-[#3ABCF9]">
            Your 2024 PXB Media Wrapped
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="text-center flex flex-col items-center">
            <Calendar className="w-12 h-12 mb-4 text-[#3ABCF9]" />
            <h3 className="text-2xl font-semibold mb-2 text-[#3ABCF9]">Total Events</h3>
            <p className="text-5xl font-bold">{events.length}</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Users className="w-12 h-12 mb-4 text-[#3ABCF9]" />
            <h3 className="text-2xl font-semibold mb-2 text-[#3ABCF9]">Total Viewership</h3>
            <p className="text-5xl font-bold">{totalViewership.toLocaleString()}</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <Clock className="w-12 h-12 mb-4 text-[#3ABCF9]" />
            <h3 className="text-2xl font-semibold mb-2 text-[#3ABCF9]">Total Broadcast Hours</h3>
            <p className="text-5xl font-bold">{totalBroadcastHours}</p>
          </div>
        </motion.div>
        <motion.div
          className="text-center text-2xl font-semibold mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p>Thank you for an amazing year with PXB Media!</p>
          <p className="mt-4">Here's to even greater success in the coming year.</p>
        </motion.div>
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button
            onClick={onReset}
            className="bg-[#3ABCF9] text-black hover:bg-[#151C38] hover:text-white transition-colors duration-300 text-lg px-6 py-3 rounded-full flex items-center"
          >
            <Home className="mr-2" size={24} />
            Back to start
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
