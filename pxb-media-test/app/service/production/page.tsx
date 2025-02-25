import { Metadata } from 'next';
import ProductionClientPage from './ProductionClientPage';

export const metadata: Metadata = {
  title: 'Live Broadcast Production Services | PXB Media',
  description: 'Elevate your content with professional live broadcasting services. Our team combines cutting-edge technology with creative storytelling to bring your vision to life.',
  keywords: 'live broadcast, production services, streaming, video production, esports production, event broadcasting',
  openGraph: {
    title: 'Live Broadcast Production Services | PXB Media',
    description: 'Elevate your content with professional live broadcasting services. Our team combines cutting-edge technology with creative storytelling to bring your vision to life.',
    images: [
      {
        url: '/dh2.jpg',
        width: 1200,
        height: 630,
        alt: 'PXB Media Live Broadcast Production',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Broadcast Production Services | PXB Media',
    description: 'Elevate your content with professional live broadcasting services. Our team combines cutting-edge technology with creative storytelling to bring your vision to life.',
    images: ['/dh2.jpg'],
  }
};

export default function ProductionPage() {
  return <ProductionClientPage />;
}