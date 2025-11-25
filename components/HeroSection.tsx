import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
              Maximera värdet vid försäljning av bolag
              <span className="block text-slate-500 text-2xl lg:text-3xl mt-2 font-sans font-light">
                (25–300 MSEK)
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              Vi hjälper ägare att sälja till rätt köpare, för rätt pris och på rätt villkor. 
              En trygg process med full sekretess – från värdering till signatur.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Hitta dolda värden som höjer köpeskillingen",
                "Tillgång till internationellt köparnätverk",
                "Du driver verksamheten – vi driver försäljningen"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-amber-700 shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('diagnosis')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Gör en gratis Exit-Diagnos
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Boka konfidentiellt möte
              </Button>
            </div>
            
            <p className="mt-4 text-sm text-slate-400 font-medium">
              100 % konfidentiellt. Inga förpliktelser.
            </p>
          </motion.div>

          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             {/* Abstract Premium Graphics using CSS/SVG */}
             <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                
                <h3 className="font-serif text-xl mb-6">Värdeökning över tid</h3>
                {/* Simulated Chart */}
                <div className="h-64 flex items-end justify-between gap-2 px-2">
                   {[40, 45, 35, 55, 60, 75, 80, 95].map((h, i) => (
                      <div key={i} className="w-full bg-slate-100 rounded-t-sm relative group">
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                            className="absolute bottom-0 w-full bg-slate-900 rounded-t-sm group-hover:bg-amber-700 transition-colors"
                          />
                      </div>
                   ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-slate-400 font-medium uppercase tracking-wider">
                  <span>Start</span>
                  <span>Optimering</span>
                  <span>Exit</span>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Genomsnittlig premie</p>
                    <p className="text-2xl font-bold text-slate-900">+35%</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700">
                    <ArrowRight size={20} />
                  </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};