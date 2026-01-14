
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Facebook, Instagram, Youtube, Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full relative z-50">
      {/* Top Bar */}
      <div className="bg-white border-b py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium text-gray-600">
          <div className="flex gap-6 items-center">
            <a href="tel:7448560350" className="flex items-center gap-2 hover:text-[#82BC24] transition-colors">
              <Phone size={14} className="text-[#82BC24]" /> 7448560350
            </a>
            <a href="tel:9786560350" className="flex items-center gap-2 hover:text-[#82BC24] transition-colors">
              <Phone size={14} className="text-[#82BC24]" /> 9786560350
            </a>
            <a href="mailto:drneemzdentistry@gmail.com" className="flex items-center gap-2 hover:text-[#82BC24] transition-colors">
              <Mail size={14} className="text-[#82BC24]" /> drneemzdentistry@gmail.com
            </a>
          </div>
          <div className="flex gap-4">
            <Facebook size={18} className="cursor-pointer hover:text-blue-600" />
            <Instagram size={18} className="cursor-pointer hover:text-pink-600" />
            <Youtube size={18} className="cursor-pointer hover:text-red-600" />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-white shadow-md py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 text-sm font-semibold text-gray-700">
              <li><a href="#" className="text-[#82BC24] border-b-2 border-[#82BC24]">Home</a></li>
              <li><a href="#about" className="hover:text-[#82BC24] transition-colors">About us</a></li>
              <li className="group relative">
                <a href="#services" className="flex items-center gap-1 hover:text-[#82BC24] transition-colors cursor-pointer">
                  Services <ChevronDown size={14} />
                </a>
                <div className="absolute top-full left-0 hidden group-hover:block pt-4 w-48">
                  <div className="bg-white shadow-xl rounded-lg overflow-hidden py-2 text-sm border">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Root Canal</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dental Implants</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Braces</a>
                  </div>
                </div>
              </li>
              <li><a href="#doctors" className="hover:text-[#82BC24] transition-colors">Doctors</a></li>
              <li><a href="#contact" className="hover:text-[#82BC24] transition-colors">Contact us</a></li>
            </ul>
            <div className="flex items-center gap-4">
              <div className="flex gap-2 md:hidden lg:flex">
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-[#82BC24] hover:text-white transition-all"><Facebook size={14} /></a>
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-[#82BC24] hover:text-white transition-all"><Instagram size={14} /></a>
                <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-[#82BC24] hover:text-white transition-all"><Youtube size={14} /></a>
              </div>
              <button className="bg-[#82BC24] text-white px-5 py-2.5 rounded-md text-sm font-bold shadow-lg shadow-green-200 hover:bg-[#6fa11e] transition-all whitespace-nowrap">
                Book An Appointment
              </button>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] pt-20 px-6 md:hidden">
          <button className="absolute top-6 right-6" onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
          <ul className="flex flex-col gap-8 text-2xl font-bold text-gray-800">
            <li><a href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About us</a></li>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#doctors" onClick={() => setIsMobileMenuOpen(false)}>Doctors</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact us</a></li>
          </ul>
          <div className="mt-12">
             <button className="w-full bg-[#82BC24] text-white py-4 rounded-xl text-lg font-bold shadow-xl">
                Book An Appointment
              </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
