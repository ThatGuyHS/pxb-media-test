import { Metadata } from 'next';
import AdminEquipmentClientPage from './AdminEquipmentClientPage';

export const metadata: Metadata = {
  title: 'Equipment Management | Admin | PXB Media',
  description: 'Admin panel for managing production equipment inventory, pricing, and availability.',
  robots: 'noindex, nofollow', // Prevent search engines from indexing admin pages
};

export default function AdminEquipmentPage() {
  return <AdminEquipmentClientPage />;
} 