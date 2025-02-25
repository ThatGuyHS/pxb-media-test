import { Metadata } from 'next';
import HomeClientPage from './HomeClientPage';

export const metadata: Metadata = {
  title: 'PXB Media | Live Broadcast Production, Event Staffing & Web Development',
  description: 'PXB Media provides professional services in live broadcast production, event staffing, and web development. Elevate your events with cutting-edge technology and expertise.',
  keywords: 'live broadcast, production services, event staffing, web development, esports production, streaming services',
  openGraph: {
    title: 'PXB Media | Live Broadcast Production, Event Staffing & Web Development',
    description: 'PXB Media provides professional services in live broadcast production, event staffing, and web development. Elevate your events with cutting-edge technology and expertise.',
    images: [
      {
        url: '/dh1.jpg',
        width: 1200,
        height: 630,
        alt: 'PXB Media Services',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PXB Media | Live Broadcast Production, Event Staffing & Web Development',
    description: 'PXB Media provides professional services in live broadcast production, event staffing, and web development. Elevate your events with cutting-edge technology and expertise.',
    images: ['/dh1.jpg'],
  }
};

export default function HomePage() {
  return <HomeClientPage />;
}
