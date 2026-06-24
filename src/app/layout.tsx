import type { Metadata } from "next";
// Removed Geist font imports as we're using custom Google Fonts
import "./globals.css";

import NavBar from "@/components/NavBar";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zoom Rugs | Luxury Estate Rug Restoration",
  description: "Experience unparalleled luxury rug cleaning, repair, and restoration services for discerning clients. Zoom Rugs offers white-glove service, master artisans, and museum-grade care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-ivory font-sans">
        <NavBar />
        <main className="flex-grow mt-[72px]"> {/* Adjust mt to match NavBar height */}
          {children}
        </main>
        <FloatingActionButtons />
        <Footer />
      </body>
    </html>
  );
}
