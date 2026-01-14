
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Logo className="h-14 brightness-0 invert" />
          <p className="leading-relaxed">
            We ensure comfortable, effective treatments tailored to your needs. Visit us for personalized care in a warm, welcoming environment. Your journey to a healthier smile begins with us at Dr Neemz Dentistry!
          </p>
          <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#82BC24] transition-all"><Facebook size={18}/></a>
             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#82BC24] transition-all"><Instagram size={18}/></a>
             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#82BC24] transition-all"><Youtube size={18}/></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-xl mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-[#82BC24]">Quick links</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-[#82BC24] transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-[#82BC24] transition-colors">About us</a></li>
            <li><a href="#services" className="hover:text-[#82BC24] transition-colors">Services</a></li>
            <li><a href="#doctors" className="hover:text-[#82BC24] transition-colors">Doctors</a></li>
            <li><a href="#contact" className="hover:text-[#82BC24] transition-colors">Contact us</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-white font-bold text-xl mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-[#82BC24]">Location</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
               <div className="flex gap-4">
                 <div className="p-2 bg-[#82BC24] rounded text-white h-fit"><MapPin size={20}/></div>
                 <div>
                   <h5 className="text-white font-bold mb-1">Salem Branch</h5>
                   <p className="text-sm">Dr Neemz Dentistry, No 29, Peramanur Main Rd, opp. Kavery furniture, Salem, Tamil Nadu 636007</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="p-2 bg-gray-800 rounded text-white h-fit"><MapPin size={20}/></div>
                 <div>
                   <h5 className="text-white font-bold mb-1">Namakkal Branch</h5>
                   <p className="text-sm">Coming Soon - Stay tuned for our new location details!</p>
                 </div>
               </div>
            </div>
            
            <div className="space-y-4">
               <a href="mailto:drneemzdentistry@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                 <Mail size={18} className="text-[#82BC24]"/> drneemzdentistry@gmail.com
               </a>
               <a href="tel:7448560350" className="flex items-center gap-3 hover:text-white transition-colors">
                 <Phone size={18} className="text-[#82BC24]"/> +91-7448560350
               </a>
               <a href="tel:9786560350" className="flex items-center gap-3 hover:text-white transition-colors">
                 <Phone size={18} className="text-[#82BC24]"/> +91-9786560350
               </a>
               <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                 <Clock size={18} className="text-[#82BC24]"/> 
                 <div>
                   <p className="text-sm text-white font-bold">Opening Hours</p>
                   <p className="text-xs">Mon - Sat: 9:00 AM - 9:00 PM</p>
                   <p className="text-xs">Sun: 10:00 AM - 1:00 PM</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-gray-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Copyright © {new Date().getFullYear()} Drneemzdentistry. All rights reserved.</p>
        <div className="flex items-center gap-6">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           <p>Powered by <span className="text-white font-medium">Surathna Digital Solution</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
