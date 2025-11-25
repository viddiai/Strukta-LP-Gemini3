import React from 'react';
import { Section } from './ui/Section';
import { Quote } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const cases = [
    {
      industry: "IT-konsult",
      location: "Stockholm",
      size: "60 MSEK",
      challenge: "Ägarna ville trappa ner men säkra personalens framtid.",
      result: "Sålt till industriell köpare. Priset blev 40 % över första indikationen tack vare konkurrens.",
      quote: "Skarpa skötte allt helt osynligt tills avtalet var klart."
    },
    {
      industry: "Tillverkande industri",
      location: "Småland",
      size: "120 MSEK",
      challenge: "Generationsskifte utan efterträdare i familjen.",
      result: "Sålt till investmentbolag. Ägaren tryggade pensionen och bolaget fick muskler att växa.",
    },
    {
      industry: "B2B SaaS",
      location: "Göteborg",
      size: "35 MSEK",
      challenge: "Behövde kapital och nätverk för internationell expansion.",
      result: "Delexit till strategisk partner. Grundarna kvar med stor uppsida.",
    }
  ];

  return (
    <Section>
      <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center mb-12">Resultat från verkligheten</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((c, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full mb-3">
                {c.industry}
              </div>
              <h3 className="text-xl font-bold font-serif mb-1">{c.industry}, {c.location}</h3>
              <p className="text-amber-700 font-medium">{c.size} Omsättning</p>
            </div>
            
            <div className="space-y-4 mb-6 flex-grow">
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold">Utmaning</p>
                <p className="text-slate-700 text-sm">{c.challenge}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold">Resultat</p>
                <p className="text-slate-900 font-medium text-sm">{c.result}</p>
              </div>
            </div>

            {c.quote && (
              <div className="mt-auto pt-6 border-t border-slate-50 relative">
                <Quote className="absolute top-4 left-0 text-slate-200 -z-10 h-8 w-8" />
                <p className="text-slate-500 italic text-sm relative z-0 pl-4">"{c.quote}"</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};