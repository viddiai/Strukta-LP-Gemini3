import React, { useState } from 'react';
import { Section } from './ui/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-900">{question}</span>
        {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Hur garanterar ni sekretessen?",
      answer: "Vi använder strikta sekretessavtal (NDA) med alla intressenter innan de får veta namnet på ditt bolag. I första skedet är allt material anonymt."
    },
    {
      question: "Får min personal reda på att jag säljer?",
      answer: "Nej. Oftast informeras personalen först när affären är klar. Möten sker diskret utanför kontorstid."
    },
    {
      question: "Vad kostar det?",
      answer: "Vi arbetar med en mindre startavgift och ett framgångsbaserat arvode (success fee) på köpeskillingen. Vi tjänar pengar när du gör det."
    },
    {
      question: "Hur lång tid tar det?",
      answer: "Normalt 6–12 månader. Har du god ordning på papper kan det gå snabbare, men vi stressar aldrig fram en affär."
    },
    {
      question: "Måste jag sluta direkt?",
      answer: "Nej, många köpare ser gärna att du stannar kvar operativt eller i styrelsen under en övergångsperiod (1–3 år)."
    }
  ];

  return (
    <Section className="bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Vanliga frågor</h2>
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </Section>
  );
};