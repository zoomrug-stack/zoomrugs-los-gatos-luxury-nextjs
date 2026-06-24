import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 text-ivory text-center">
      <div className="container mx-auto px-4">
        <Link href="/" className="text-2xl font-bold text-gold serif mb-4 inline-block">
          ZOOM RUGS
        </Link>
        <p className="text-sm mb-2">Master Conservators | 801 W California Ave, Sunnyvale, CA 94086</p>
        <p className="text-sm mb-2">
          Phone: <a href="tel:+14084726086" className="text-gold hover:underline">408-472-6086</a>
        </p>
        <p className="text-sm mb-4">
          Email: <a href="mailto:info@zoomrugs.com" className="text-gold hover:underline">info@zoomrugs.com</a>
        </p>
        <p className="text-sm">&copy; 2026 Zoom Rugs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
