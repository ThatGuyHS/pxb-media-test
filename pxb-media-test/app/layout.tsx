import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "PXB Media",
  description: "Your partner for all things Live Production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-custom">{children}</body>
    </html>
  );
}
