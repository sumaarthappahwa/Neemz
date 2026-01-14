
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Visual Part */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[500px] lg:min-h-[600px] items-center">
        <div className="lg:col-span-7 py-12 lg:py-0 z-10">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#1A237E] leading-tight">
              Close Teeth Gaps & <br />
              <span className="text-[#82BC24]">Straighten Your Teeth</span> <br />
              Effortlessly With
            </h1>
            <div className="inline-block bg-[#82BC24] text-white px-8 py-2 rounded-full font-bold text-2xl lg:text-3xl shadow-lg mt-4">
              BRACES
            </div>
            
            <div className="mt-8 space-y-2">
              <p className="text-2xl lg:text-3xl font-bold text-[#1A237E]">No Cost EMI</p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="bg-gray-800 text-white px-6 py-3 rounded-lg font-bold text-xl border-2 border-white">
                  FLAT 5000 OFFER
                </div>
                <button className="bg-[#82BC24] text-white px-8 py-4 rounded-lg font-bold text-xl shadow-xl hover:bg-[#6fa11e] transition-all">
                  BOOK AN APPOINTMENT
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 mt-12">
            <div className="w-3 h-3 rounded-full bg-[#82BC24]"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-full flex justify-center items-center py-8 lg:py-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E8F5E9] rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="relative w-full aspect-square max-w-[500px] overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
             <img 
               src="https://picsum.photos/id/400/800/800" 
               alt="Happy Patient with Braces" 
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-4 right-4 bg-[#82BC24] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-xl">
               Limited Time Offer
             </div>
          </div>
        </div>
      </div>

      {/* Appointment Lead Form Bar */}
      <div id="booking" className="w-full bg-[#82BC24] py-8 lg:py-12 mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Book an Appointment</h2>
            <p className="text-white/90 italic mt-2">"Your Journey to a Healthy Smile Starts Here"</p>
          </div>
          
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-4 py-3 rounded-full border-none focus:ring-2 focus:ring-white outline-none"
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              className="w-full px-4 py-3 rounded-full border-none focus:ring-2 focus:ring-white outline-none"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-3 rounded-full border-none focus:ring-2 focus:ring-white outline-none"
            />
            <input 
              type="date" 
              className="w-full px-4 py-3 rounded-full border-none focus:ring-2 focus:ring-white outline-none text-gray-500"
            />
            <button className="w-full bg-[#1A237E] text-white py-3 rounded-full font-bold hover:bg-blue-900 transition-all uppercase tracking-wider">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
