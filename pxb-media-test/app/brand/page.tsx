import { Metadata } from 'next';
import BrandClientPage from './BrandClientPage';

export const metadata: Metadata = {
  title: 'Brand Guidelines | PXB Media',
  description: 'Official brand guidelines for PXB Media. Learn how to properly use our logo, colors, typography, and other brand elements.',
  keywords: 'PXB Media, brand guidelines, logo usage, color palette, typography, brand assets, visual identity',
  openGraph: {
    title: 'Brand Guidelines | PXB Media',
    description: 'Official brand guidelines for PXB Media. Learn how to properly use our logo, colors, typography, and other brand elements.',
    images: [
      {
        url: '/pxbsite.png',
        width: 1200,
        height: 630,
        alt: 'PXB Media Brand Guidelines',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Guidelines | PXB Media',
    description: 'Official brand guidelines for PXB Media. Learn how to properly use our logo, colors, typography, and other brand elements.',
    images: ['/pxbmediasite.png'],
  }
};

export default function BrandPage() {
  return <BrandClientPage />;
} 