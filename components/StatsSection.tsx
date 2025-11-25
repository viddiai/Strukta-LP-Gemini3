import React from 'react';
import { Section } from './ui/Section';

export const StatsSection: React.FC = () => {
  const stats = [
    { label: "Transaktionsvärde", value: "3 Mdr+" },
    { label: "Genomförda ägarskiften", value: "100+" },
    { label: "Erfarenhet av M&A", value: "20 År" },
  ];

  return (
    <div className="bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="pt-8 md:pt-0 px-4">
              <p className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-2">{stat.value}</p>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-100">
          <p className="text-center text-sm text-slate-400 mb-6 font-medium">Trusted by leading financial institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60 grayscale">
            {/* Placeholder Logos using Text/SVG for demo purposes */}
            {['Nordea', 'SEB', 'Swedbank', 'Handelsbanken', 'Danske Bank'].map((bank) => (
               <span key={bank} className="text-xl font-serif font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-default">{bank}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};