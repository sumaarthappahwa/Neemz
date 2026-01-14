
import React from 'react';
import { VIDEO_REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#82BC24] font-bold text-sm tracking-widest uppercase">Reviews</span>
          <h2 className="text-4xl font-extrabold text-[#1A237E] mt-4">What Patient Speaks</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEO_REVIEWS.map((review) => (
            <div key={review.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mb-4">
                <img 
                  src={review.thumbnail} 
                  alt={review.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center">
                   <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition-transform">
                     <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current ml-1"><path d="M8 5v14l11-7z"/></svg>
                   </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                   <p className="text-white font-bold text-lg leading-tight">{review.title}</p>
                   <div className="flex gap-1 mt-2">
                     {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-yellow-400 text-sm">★</span>)}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Help */}
        <div className="mt-24 relative overflow-hidden bg-[#1A237E] rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-20 pointer-events-none">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
          </div>
          
          <div className="z-10 lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-5xl font-extrabold mb-6">Need Help?</h2>
            <p className="text-xl text-blue-100 max-w-lg mb-8">
              Please, call our customer service or get an appointment with our doctor
            </p>
            <button className="flex items-center gap-3 bg-[#82BC24] text-white px-8 py-4 rounded-full font-bold text-xl shadow-xl hover:bg-[#6fa11e] transition-all group mx-auto lg:mx-0">
              <span className="p-2 bg-white/20 rounded-full group-hover:rotate-12 transition-transform">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </span>
              Contact Us
            </button>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#82BC24]/20 rounded-full blur-3xl"></div>
              <img 
                src="https://picsum.photos/id/1027/500/500" 
                alt="Doctor with patient" 
                className="relative rounded-2xl w-full max-w-sm border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
