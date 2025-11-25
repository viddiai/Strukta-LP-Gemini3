import React, { useState } from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export const BuyerGuideSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Guide skickas till ${email}`);
    setEmail('');
  };

  return (
    <Section id="guide" className="bg-amber-50/50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Mockup PDF */}
        <div className="order-2 md:order-1 flex justify-center">
            <div className="relative w-64 h-80 bg-white shadow-2xl rotate-3 border border-slate-200 flex flex-col items-center justify-center p-8 text-center">
                <div className="absolute top-0 left-0 right-0 h-4 bg-slate-900"></div>
                <h3 className="font-serif font-bold text-2xl mb-2 text-slate-900">KÖPARGUIDEN</h3>
                <p className="text-xs text-slate-500 mb-8 uppercase tracking-widest">Skarpa Insights</p>
                <div className="w-16 h-16 rounded-full bg-amber-100 mb-4"></div>
                <div className="w-full h-2 bg-slate-100 mb-2"></div>
                <div className="w-2/3 h-2 bg-slate-100"></div>
            </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-serif font-bold mb-4">Tänk som en köpare – innan du möter dem</h2>
          <p className="text-slate-600 mb-8">
            Ladda ner vår guide och undvik misstagen som får köpare att backa eller pruta.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "3 saker som får köpare att betala extra",
              "Varför EBITDA inte är hela sanningen",
              "Förbered din Due Diligence utan stress"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="bg-green-100 text-green-700 rounded-full p-1">
                  <Check size={14} />
                </div>
                <span className="text-slate-800 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Din e-postadress"
              className="flex-grow px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">Ladda ner PDF</Button>
          </form>
          <p className="mt-3 text-xs text-slate-500">
            Vi skickar inte massutskick – bara relevant information kopplad till din företagsförsäljning.
          </p>
        </div>
      </div>
    </Section>
  );
};