import { Metadata } from 'next';
import CasesClientPage from './CasesClientPage';

export const metadata: Metadata = {
  title: 'Our Cases | PXB Media',
  description: 'Explore our portfolio of successful projects and see how we helped our clients achieve their goals in production, event staffing, and development.',
  keywords: 'case studies, portfolio, esports production, event staffing, web development, broadcast services, PXB Media projects',
  openGraph: {
    title: 'Our Cases | PXB Media',
    description: 'Explore our portfolio of successful projects and see how we helped our clients achieve their goals in production, event staffing, and development.',
    images: [
      {
        url: '/dh1.jpg',
        width: 1200,
        height: 630,
        alt: 'PXB Media Case Studies',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Cases | PXB Media',
    description: 'Explore our portfolio of successful projects and see how we helped our clients achieve their goals in production, event staffing, and development.',
    images: ['/dh1.jpg'],
  }
};

export default function CasesPage() {
  return <CasesClientPage />;
}