
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#82BC24] font-bold text-sm tracking-widest uppercase">Service</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A237E] mt-4">What We Offer</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We offer a full spectrum of dental services tailored to meet the unique needs of each patient.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border-b-4 border-transparent hover:border-[#82BC24] hover:shadow-2xl transition-all duration-300 group cursor-pointer text-center">
              <div className="w-16 h-16 bg-[#E8F5E9] rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A237E] mb-3 group-hover:text-[#82BC24] transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Camp Section */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <span className="text-[#82BC24] font-bold text-sm tracking-widest uppercase">Camp</span>
            <h2 className="text-4xl font-extrabold text-[#1A237E] mt-4">Free Dental Camp</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden shadow-lg group">
                <img 
                  src={`https://picsum.photos/id/${i+20}/600/340`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  alt={`Camp ${i}`}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:bg-red-700 transition-colors">
                     <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-lg flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-[#82BC24] flex items-center justify-center text-white font-bold text-xs">DN</div>
                   <div className="flex-1 overflow-hidden">
                     <p className="font-bold text-xs truncate">Free Dental Camp Highlights | Dr. Neemz</p>
                     <p className="text-[10px] text-gray-500">2.4k views • 2 months ago</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
