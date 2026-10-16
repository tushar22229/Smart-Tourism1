import React from 'react';
import { ShieldCheck, PhoneCall, Heart, Compass, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenSos: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenSos }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top brand & motto */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-amber-500 via-orange-500 to-emerald-500 flex items-center justify-center text-white font-black text-lg">
                भ
              </div>
              <div>
                <span className="text-xl font-bold text-white">Smart Tourism</span>
                <span className="ml-2 text-[10px] uppercase font-bold px-1.5 py-0.5 bg-orange-950 text-orange-400 border border-orange-800 rounded-full">
                  Incredible Bharat
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Your intelligent, AI-guided companion for experiencing the profound cultural tapestry, royal fortresses, sacred rivers, Himalayan heights, and tropical backwaters of India.
            </p>

            <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-2xl max-w-md flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Cultural Philosophy</div>
                <div className="text-xs font-bold text-amber-300">"अतिथि देवो भव" (Atithi Devo Bhava)</div>
                <div className="text-[11px] text-slate-400">The guest is revered as divine.</div>
              </div>
              <button
                onClick={onOpenSos}
                className="px-3 py-1.5 bg-red-600/30 text-red-300 hover:bg-red-600 hover:text-white border border-red-500/40 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5 text-red-400" />
                <span>Helpline 1363</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore Bharat
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => setActiveTab('explore')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Top Destinations by Region
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('circuits')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  The Golden Triangle & Circuits
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('planner')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  AI Smart Itinerary Generator
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('guides')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Personal Guides (Domestic & Intl)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('unesco')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  42 UNESCO World Heritage Sites
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('culture')} className="hover:text-orange-400 transition-colors cursor-pointer">
                  Audio Phrasebook & Cuisines
                </button>
              </li>
            </ul>
          </div>

          {/* Official Portals & Verified Sources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Official Indian Portals
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="https://www.incredibleindia.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 flex items-center gap-1"
                >
                  <span>Incredible India (Govt. of India)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://indianvisaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 flex items-center gap-1"
                >
                  <span>Official E-Visa Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.irctc.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 flex items-center gap-1"
                >
                  <span>IRCTC Indian Railways</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://asi.payumoney.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 flex items-center gap-1"
                >
                  <span>ASI Monument E-Tickets</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Smart Tourism. Built for seamless travel across Incredible Bharat.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Tourist Helpline: 1363 (24x7)</span>
            <span>•</span>
            <span>Emergency: 112</span>
            <span>•</span>
            <span>Police: 100</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
