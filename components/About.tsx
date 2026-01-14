
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#82BC24] font-bold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A237E] mt-4 max-w-3xl mx-auto leading-tight">
            Best Dental Clinic in Salem and <br className="hidden md:block"/> Business Iconic Award 2024
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="https://picsum.photos/id/10/800/450" 
              alt="Dental Clinic Award" 
              className="w-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A237E]/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-[#82BC24] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Achievement</span>
              <p className="text-white font-bold text-xl mt-2">TAMILNADU BUSINESS ICONIC AWARDS 2024</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-600">
            <p className="text-lg leading-relaxed">
              We are proud to announce that <strong className="text-[#82BC24]">Dr. Neemz Dentistry</strong> has been honored with the 
              <strong className="text-[#1A237E]"> Business Iconic Award 2024</strong> for being the <strong>Best Dental Clinic in Salem</strong>.
            </p>
            <p className="leading-relaxed">
              This prestigious recognition reflects our unwavering commitment to exceptional dental care, advanced technology, and patient-first service. The award celebrates our dedication to maintaining the highest standards in dental health, hygiene, and customer satisfaction.
            </p>
            <p className="leading-relaxed font-medium text-[#1A237E]">
              At Dr. Neemz Dentistry, we continue to strive for excellence—bringing smiles to life every day.
            </p>
            <div className="pt-4">
              <button className="border-2 border-[#82BC24] text-[#82BC24] hover:bg-[#82BC24] hover:text-white px-8 py-3 rounded-full font-bold transition-all">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
