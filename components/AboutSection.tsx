import React from 'react';
import { Section } from './ui/Section';
import { Phone } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const team = [
    { name: "Johan Andersson", role: "Senior Partner", phone: "070-123 45 67", img: "https://picsum.photos/200/200?random=1" },
    { name: "Eva Lindberg", role: "M&A Advisor", phone: "070-234 56 78", img: "https://picsum.photos/200/200?random=2" },
    { name: "Marcus Berg", role: "Analytiker", phone: "070-345 67 89", img: "https://picsum.photos/200/200?random=3" },
  ];

  return (
    <Section id="about">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Vi är på din sida av förhandlingsbordet</h2>
        <p className="text-lg text-slate-600">
          Affärer görs mellan människor. Vårt team består av seniora rådgivare som själva gjort resan som företagare. Vi vet vad som krävs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div key={i} className="text-center group">
            <div className="relative inline-block mb-4 overflow-hidden rounded-full w-40 h-40 border-4 border-slate-100 shadow-lg">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <h3 className="text-xl font-bold font-serif text-slate-900">{member.name}</h3>
            <p className="text-slate-500 mb-2">{member.role}</p>
            <a 
              href={`tel:${member.phone}`} 
              className="inline-flex items-center gap-2 text-amber-700 font-medium hover:underline"
            >
              <Phone size={14} /> {member.phone}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};