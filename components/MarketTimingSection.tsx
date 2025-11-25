import React from 'react';
import { Section } from './ui/Section';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from './ui/Button';

const data = [
  { name: '2019', quality: 4000, average: 2400 },
  { name: '2020', quality: 3000, average: 1398 },
  { name: '2021', quality: 9800, average: 5000 },
  { name: '2022', quality: 7500, average: 3000 },
  { name: '2023', quality: 8500, average: 2800 },
  { name: '2024', quality: 9200, average: 3100 },
  { name: '2025', quality: 9900, average: 3200 },
];

export const MarketTimingSection: React.FC = () => {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Är det rätt läge att sälja nu?</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Många tvekar på grund av ränteläget, men kapitalstarka köpare söker aktivt efter välskötta bolag. 
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            <strong className="text-slate-900 font-semibold">Kvalitet säljs alltid till en premie</strong>, oavsett konjunktur. 
            Gapet mellan "bäst i klassen" och genomsnittet har aldrig varit större. 
            Att vänta kan innebära missade möjligheter.
          </p>
          <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
            Få en bedömning av läget för ditt bolag
          </Button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
          <h3 className="text-lg font-semibold mb-4 text-center">Värderingsutveckling: Kvalitet vs Genomsnitt</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorQuality" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0f172a" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0f172a" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  itemStyle={{ fontSize: '14px', fontWeight: 500 }}
                />
                <Area type="monotone" dataKey="quality" name="Kvalitetsbolag" stroke="#0f172a" fillOpacity={1} fill="url(#colorQuality)" strokeWidth={2} />
                <Area type="monotone" dataKey="average" name="Genomsnitt" stroke="#94a3b8" fillOpacity={1} fill="url(#colorAverage)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4 text-sm font-medium">
             <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-900"></span> Kvalitetsbolag
             </div>
             <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-slate-400"></span> Genomsnitt
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};