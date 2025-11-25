import React from 'react';
import { Section } from './ui/Section';
import { Check, X } from 'lucide-react';

export const FitSection: React.FC = () => {
  return (
    <Section className="bg-white">
      <h2 className="text-3xl font-serif font-bold text-center mb-12">Är vi rätt partner för dig?</h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Good Fit */}
        <div className="bg-slate-50 p-8 rounded-xl border-t-4 border-green-600 shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-green-600">Skarpa är rätt om:</span>
          </h3>
          <ul className="space-y-4">
            {[
              "Du driver ett svenskt AB med 25–300 MSEK i omsättning.",
              "Du vill sälja hela eller delar av bolaget inom 6–24 månader.",
              "Du bryr dig om både prislappen och bolagets framtid."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="text-green-600 shrink-0 mt-1" size={20} />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bad Fit */}
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm opacity-80">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
             <span className="text-slate-400">Vi är troligen inte rätt om:</span>
          </h3>
          <ul className="space-y-4">
            {[
              "Bolaget omsätter under 15 MSEK (vi rekommenderar företagsmäklare).",
              "Du vill sälja till \"kompispris\" utan process.",
              "Bolaget är i akut kris eller konkursmässigt."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <X className="text-slate-400 shrink-0 mt-1" size={20} />
                <span className="text-slate-500">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};