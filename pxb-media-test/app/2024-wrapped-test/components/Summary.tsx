import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Clock, Calendar, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Event {
  id: string;
  name: string;
  date: string;
  viewership: number;
  broadcastHours: number;
  image: string;
}

interface SummaryProps {
  events: Event[];
  onReset: () => void;
}

const Summary = ({ events, onReset }: SummaryProps) => {
  const totalViewership = events.reduce((sum, event) => sum + event.viewership, 0);
  const totalBroadcastHours = events.reduce((sum, event) => sum + event.broadcastHours, 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen w-full bg-slate-950">
      <div className="container mx-auto p-8 flex items-center justify-center min-h-screen">
        <div className="w-full space-y-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
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
            <h2 className="text-5xl font-bold mb-12 text-center text-blue-400">
              Your 2024 PXB Media Wrapped
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <StatCard
              icon={<Calendar className="w-12 h-12 mb-4 text-blue-400" />}
              title="Total Events"
              value={events.length}
            />
            <StatCard
              icon={<Users className="w-12 h-12 mb-4 text-blue-400" />}
              title="Total Viewership"
              value={totalViewership.toLocaleString()}
            />
            <StatCard
              icon={<Clock className="w-12 h-12 mb-4 text-blue-400" />}
              title="Total Broadcast Hours"
              value={totalBroadcastHours}
            />
          </motion.div>

          <motion.div
            className="text-center text-2xl font-semibold mt-12"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p>Thank you for an amazing year with PXB Media!</p>
            <p className="mt-4">Here&apos;s to even greater success in the coming year.</p>
          </motion.div>

          <motion.div
            className="flex justify-center mt-8"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button
              onClick={onReset}
              className="bg-blue-400 text-black hover:bg-slate-800 hover:text-white transition-colors duration-300 text-lg px-6 py-3 rounded-full flex items-center"
            >
              <Home className="mr-2" size={24} />
              Back to start
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: number | string }) => (
  <motion.div
    className="text-center flex flex-col items-center"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
  >
    {icon}
    <h3 className="text-2xl font-semibold mb-2 text-blue-400">{title}</h3>
    <p className="text-5xl font-bold">{value}</p>
  </motion.div>
);

export default Summary;