import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const ContactSection: React.FC = () => {
  return (
    <div id="contact" className="bg-slate-900 text-white">
      <Section dark className="pb-12 border-b border-slate-800">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Boka ett konfidentiellt möte</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Låt oss ta en kaffe eller ett videomöte. Vi lyssnar på dina tankar och ger en första indikation på vad som är möjligt.
            </p>
            <div className="space-y-4 text-slate-300">
               <p><strong className="text-white">Adress:</strong> Strandvägen 1, 114 51 Stockholm</p>
               <p><strong className="text-white">E-post:</strong> info@skarpa.se</p>
               <p><strong className="text-white">Telefon:</strong> 08-123 45 67</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 text-slate-900 shadow-2xl">
             <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Tack för din förfrågan!'); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Förnamn</label>
                    <input type="text" className="w-full rounded-md border-slate-300 border px-3 py-2 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Efternamn</label>
                    <input type="text" className="w-full rounded-md border-slate-300 border px-3 py-2 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500" required />
                  </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Företag</label>
                    <input type="text" className="w-full rounded-md border-slate-300 border px-3 py-2 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">E-post</label>
                    <input type="email" className="w-full rounded-md border-slate-300 border px-3 py-2 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500" required />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Meddelande</label>
                    <textarea rows={3} className="w-full rounded-md border-slate-300 border px-3 py-2 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500"></textarea>
                </div>
                
                <Button fullWidth size="lg">Boka möte</Button>
                <p className="text-xs text-center text-slate-400">Vi svarar normalt inom fyra timmar på vardagar. Allt stannar mellan oss.</p>
             </form>
          </div>
        </div>
      </Section>

      <footer className="py-8 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">© {new Date().getFullYear()} Skarpa M&A Advisors AB. Alla rättigheter förbehållna.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Integritetspolicy</a>
            <a href="#" className="hover:text-white transition-colors">Villkor</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};