import { Metadata } from 'next';
import DevelopmentClientPage from './DevelopmentClientPage';

export const metadata: Metadata = {
  title: 'Web Development Services | PXB Media',
  description: 'Custom web development solutions to elevate your digital presence. From responsive designs to complex web applications, we deliver innovative solutions that drive your business forward.',
  keywords: 'web development, custom web applications, responsive design, e-commerce solutions, content management systems, API development',
  openGraph: {
    title: 'Web Development Services | PXB Media',
    description: 'Custom web development solutions to elevate your digital presence. From responsive designs to complex web applications, we deliver innovative solutions that drive your business forward.',
    images: [
      {
        url: '/tf.connect-11.jpg',
        width: 1200,
        height: 630,
        alt: 'PXB Media Web Development Services',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services | PXB Media',
    description: 'Custom web development solutions to elevate your digital presence. From responsive designs to complex web applications, we deliver innovative solutions that drive your business forward.',
    images: ['/tf.connect-11.jpg'],
  }
};

export default function DevelopmentPage() {
  return <DevelopmentClientPage />;
}