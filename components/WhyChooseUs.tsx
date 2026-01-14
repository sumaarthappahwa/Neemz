
import React from 'react';
import { VALUE_PROPS } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#82BC24] font-bold text-sm tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A237E] mt-4 leading-tight">
              Caring for all your family's dental needs.
            </h2>
            <p className="text-gray-600 mt-6 text-lg">
              "Choose Dr Neemz Dentistry for our commitment to exceptional care, advanced technology, and personalized treatment plans designed with your comfort and goals in mind."
            </p>
            <button className="mt-8 bg-[#82BC24] text-white px-8 py-3 rounded-full font-bold shadow-xl hover:bg-[#6fa11e] transition-all">
              Discover More
            </button>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUE_PROPS.map((prop, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 min-w-[48px] bg-white shadow-lg rounded-lg flex items-center justify-center text-2xl border border-green-50">
                    {prop.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A237E]">{prop.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E8F5E9] rounded-full -z-10"></div>
            <img 
              src="https://picsum.photos/id/1/600/700" 
              alt="Professional Dentist" 
              className="rounded-3xl shadow-2xl border-8 border-white object-cover w-full h-[600px]"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
               <div className="flex items-center gap-4">
                 <div className="bg-[#82BC24] w-12 h-12 rounded-full flex items-center justify-center text-white">
                   <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10zm3 0a1 1 0 000 2h.01a1 1 0 100-2H13zM7 13a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10zm3 0a1 1 0 000 2h.01a1 1 0 100-2H13z" clipRule="evenodd" /></svg>
                 </div>
                 <div>
                   <p className="text-sm text-gray-500">Years Experience</p>
                   <p className="text-2xl font-bold text-[#1A237E]">15+ Years</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
