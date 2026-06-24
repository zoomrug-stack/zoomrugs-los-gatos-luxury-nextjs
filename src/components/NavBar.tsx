import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-black via-charcoal to-black p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gold serif">
          ZOOM RUGS
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="nav-link text-ivory hover:text-gold transition-colors duration-300">
            Home
          </Link>
          <Link href="/cleaning" className="nav-link text-ivory hover:text-gold transition-colors duration-300">
            Cleaning
          </Link>
          <Link href="/repair" className="nav-link text-ivory hover:text-gold transition-colors duration-300">
            Repair
          </Link>
          <div className="relative group">
            <button className="nav-link text-ivory hover:text-gold transition-colors duration-300 cursor-default flex items-center">
              Rug Collection <span className="ml-1">▼</span>
            </button>
            <div className="group-hover:block absolute left-0 mt-2 w-48 bg-charcoal rounded shadow-lg hidden">
              <Link href="/product-category/sale/pure-silk-collection" className="block px-4 py-2 text-ivory hover:bg-panel">
                Exclusive Rugs
              </Link>
              <Link href="/product-category/sale/pure-silk-collection" className="block px-4 py-2 text-ivory hover:bg-panel">
                Silk Rugs
              </Link>
              <Link href="/product-category/momeni-rugs" className="block px-4 py-2 text-ivory hover:bg-panel">
                Momeni Rugs
              </Link>
            </div>
          </div>
          <Link href="/gallery" className="nav-link text-ivory hover:text-gold transition-colors duration-300">
            Gallery
          </Link>
          <Link href="/contact" className="nav-link text-ivory hover:text-gold transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
