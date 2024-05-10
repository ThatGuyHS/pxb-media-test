import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "PXB Media",
  metadataBase: new URL('https://pxb-media-test.vercel.app/'),
  description: "Your partner for all things Live Production",
  openGraph: {
    images: "/tf.connect-11.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-custom no-scrollbar">{children}</body>
    </html>
  );
}
