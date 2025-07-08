import { Metadata } from 'next';
import EquipmentClientPage from './EquipmentClientPage';

export const metadata: Metadata = {
  title: 'Equipment Rental | PXB Media',
  description: 'Browse our extensive collection of professional production equipment available for rent. From cameras and audio equipment to lighting and video production gear.',
  keywords: 'equipment rental, production equipment, camera rental, audio equipment, lighting rental, video production, broadcast equipment, PXB Media',
  openGraph: {
    title: 'Equipment Rental | PXB Media',
    description: 'Browse our extensive collection of professional production equipment available for rent. From cameras and audio equipment to lighting and video production gear.',
    images: [
      {
        url: '/equipment/sony-fx6.jpg',
        width: 1200,
        height: 630,
        alt: 'PXB Media Equipment Rental',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Equipment Rental | PXB Media',
    description: 'Browse our extensive collection of professional production equipment available for rent.',
    images: ['/equipment/sony-fx6.jpg'],
  }
};

export default function EquipmentPage() {
  return <EquipmentClientPage />;
} 