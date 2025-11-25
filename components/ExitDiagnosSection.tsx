import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ClipboardCheck } from 'lucide-react';

export const ExitDiagnosSection: React.FC = () => {
  return (
    <Section id="diagnosis" dark className="relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <ClipboardCheck size={400} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 text-white">
          Hur säljklar är ditt bolag idag?
        </h2>
        <p className="text-lg lg:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Gör vår kostnadsfria analys på 10 minuter. Du får en samlad bedömning och ser var du har störst förbättringspotential.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
           <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
             <span className="text-amber-500 text-xl font-bold block mb-2">1</span>
             <p className="text-slate-200 font-medium">Vad drar ner bolagets värde?</p>
           </div>
           <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
             <span className="text-amber-500 text-xl font-bold block mb-2">2</span>
             <p className="text-slate-200 font-medium">Är bolaget för beroende av dig?</p>
           </div>
           <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
             <span className="text-amber-500 text-xl font-bold block mb-2">3</span>
             <p className="text-slate-200 font-medium">3 konkreta åtgärdsförslag</p>
           </div>
        </div>

        <Button size="lg" variant="secondary" onClick={() => alert("Öppnar Exit-Diagnos formulär...")}>
          Starta din Exit-Diagnos
        </Button>
        <p className="mt-4 text-sm text-slate-400">
          Du behöver inte ha exakta siffror – din uppskattning räcker. Svaret skickas via e-post.
        </p>
      </div>
    </Section>
  );
};