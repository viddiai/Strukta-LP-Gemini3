import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export const StickyMobileCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden flex gap-3">
      <a 
        href="tel:081234567" 
        className="flex flex-col items-center justify-center min-w-[4rem] text-slate-600 hover:text-slate-900"
      >
        <Phone size={20} />
        <span className="text-[10px] font-medium mt-1">Ring</span>
      </a>
      <button 
        className="flex-grow bg-slate-900 text-white rounded-md font-medium text-sm flex items-center justify-center gap-2 active:bg-slate-800"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <Calendar size={18} />
        Boka möte
      </button>
    </div>
  );
};