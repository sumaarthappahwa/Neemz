
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-[#82BC24] p-1.5 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl leading-none">DN</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[#82BC24] font-bold text-xl leading-none tracking-tight">DR. NEEMZ</span>
        <span className="text-[#1A237E] font-semibold text-xs tracking-[0.2em] -mt-1">DENTISTRY</span>
      </div>
    </div>
  );
};

export default Logo;
