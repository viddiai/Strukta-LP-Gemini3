import React from 'react';
import { Section } from './ui/Section';
import { Search, FileText, Users, Scale, Handshake, Landmark } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Analys & Värdering",
      desc: "Vi sätter en realistisk prisbild och identifierar värdedrivare."
    },
    {
      icon: FileText,
      title: "Säljmaterial",
      desc: "Vi tar fram anonym teaser och djuplodande informationsmemorandum (IM)."
    },
    {
      icon: Users,
      title: "Bearbetning",
      desc: "Vi kontaktar handplockade köpare under strikt sekretess."
    },
    {
      icon: Scale,
      title: "Indikativa bud",
      desc: "Intresserade köpare lägger första bud. Vi väljer vilka vi går vidare med."
    },
    {
      icon: FileText, // Reusing icon for simplicity or use ClipboardCheck if available
      title: "Due Diligence",
      desc: "Köparen granskar bolaget. Vi hanterar datarum och frågor."
    },
    {
      icon: Handshake,
      title: "Slutförhandling",
      desc: "Vi maximerar villkoren innan avtalet skrivs på."
    },
    {
      icon: Landmark,
      title: "Tillträde",
      desc: "Köpeskillingen betalas och du lämnar över (eller stannar kvar enligt plan)."
    }
  ];

  return (
    <Section id="process" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Från beslut till bankkonto</h2>
        <p className="text-slate-600 text-lg">
          En genomsnittlig affär tar 6–12 månader. Vi håller i taktpinnen så att du kan fokusera på bolaget.
        </p>
      </div>

      <div className="relative">
        {/* Desktop Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

        <div className="space-y-12 lg:space-y-0">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className={`relative flex items-center lg:justify-between ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Mobile Line */}
                <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>

                {/* Empty Half for Desktop */}
                <div className="hidden lg:block w-5/12"></div>

                {/* Icon Circle */}
                <div className="z-10 absolute left-2 lg:left-1/2 lg:-translate-x-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-slate-900 border-4 border-white flex items-center justify-center text-white shadow-lg">
                  <step.icon size={20} />
                </div>

                {/* Content Card */}
                <div className="pl-16 lg:pl-0 w-full lg:w-5/12">
                   <div className={`bg-slate-50 p-6 rounded-lg border border-slate-100 hover:shadow-md transition-shadow ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                     <span className="text-amber-700 font-bold text-sm tracking-wider uppercase mb-1 block">Steg {index + 1}</span>
                     <h3 className="text-xl font-serif font-bold mb-2">{step.title}</h3>
                     <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};