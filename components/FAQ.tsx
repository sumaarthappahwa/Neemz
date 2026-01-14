
import React, { useState } from 'react';
import { ChevronUp, ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#82BC24] font-bold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-4xl font-extrabold text-[#1A237E] mt-4">Frequently Ask Questions</h2>
          <p className="text-gray-500 mt-4">If you have any additional questions, feel free to reach out to our friendly team for assistance!</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${openIndex === index ? 'bg-[#82BC24] text-white' : 'hover:bg-gray-50'}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4">
                   <HelpCircle size={20} className={openIndex === index ? 'text-white' : 'text-[#82BC24]'} />
                   <span className="font-bold text-lg">{faq.question}</span>
                </div>
                {openIndex === index ? <ChevronUp /> : <ChevronDown className="text-gray-400" />}
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
