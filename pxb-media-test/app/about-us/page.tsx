import { Metadata } from 'next';
import AboutUsClientPage from './AboutUsClientPage';

export const metadata: Metadata = {
  title: 'About PXB Media | Our Team and Mission',
  description: 'Learn about PXB Media, our talented team, and our mission to deliver innovative solutions in production, event staffing, and development.',
  keywords: 'PXB Media, about us, production team, event staffing experts, web development team, esports production',
  openGraph: {
    title: 'About PXB Media | Our Team and Mission',
    description: 'Learn about PXB Media, our talented team, and our mission to deliver innovative solutions in production, event staffing, and development.',
    images: [
      {
        url: '/subzero1.jpg',
        width: 1200,
        height: 630,
        alt: 'PXB Media Team',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About PXB Media | Our Team and Mission',
    description: 'Learn about PXB Media, our talented team, and our mission to deliver innovative solutions in production, event staffing, and development.',
    images: ['/subzero1.jpg'],
  }
};

export default function AboutUsPage() {
  return <AboutUsClientPage />;
}
