import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | PXB Media - Solving all your event and broadcast needs',
    default: 'PXB Media - Solving all your event and broadcast needs',
  },
  metadataBase: new URL('https://pxbmedia.com/'),
  description: "Your partner for all things Live Production",
  openGraph: {
    type: 'website',
    siteName: 'PXB Media',
    images: ["/tf.connect-11.jpg"],
    title: 'PXB Media - Solving all your event and broadcast needs',
    description: "Your partner for all things Live Production",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter no-scrollbar">{children}</body>
    </html>
  );
}