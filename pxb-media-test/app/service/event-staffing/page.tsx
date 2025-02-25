import { Metadata } from 'next';
import EventStaffingClientPage from './EventStaffingClientPage';

export const metadata: Metadata = {
  title: 'Event Staffing Services | PXB Media',
  description: 'Professional event staffing services for esports tournaments and gaming events. From tournament administrators to broadcast technicians, we provide the expertise you need.',
  keywords: 'event staffing, esports staffing, tournament administrators, player managers, broadcast staff, technical support, gaming events',
  openGraph: {
    title: 'Event Staffing Services | PXB Media',
    description: 'Professional event staffing services for esports tournaments and gaming events. From tournament administrators to broadcast technicians, we provide the expertise you need.',
    images: [
      {
        url: '/tf.connect-11.jpg',
        width: 1200,
        height: 630,
        alt: 'PXB Media Event Staffing Services',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Staffing Services | PXB Media',
    description: 'Professional event staffing services for esports tournaments and gaming events. From tournament administrators to broadcast technicians, we provide the expertise you need.',
    images: ['/tf.connect-11.jpg'],
  }
};

export default function EventStaffingPage() {
  return <EventStaffingClientPage />;
}