import React from 'react';
import { Search, Sparkles, Compass, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onExploreCircuits: () => void;
  onLaunchPlanner: () => void;
  onSelectQuickTag: (tag: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  onExploreCircuits,
  onLaunchPlanner,
  onSelectQuickTag
}) => {
  const popularKeywords = ['Golden Triangle', 'Kerala Backwaters', 'Personal Guides', 'Jaipur', 'Varanasi Ghats', 'Ladakh Passes', 'Hampi Ruins'];

  return (
    <div className="relative overflow-hidden bg-slate-900 text-white py-16 sm:py-24">
      {/* Background imagery with subtle gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity filter blur-[0.5px]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-900/85 to-slate-950" />

      {/* Decorative ambient glowing circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Season alert banner */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linear-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-200 text-xs sm:text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Prime Travel Season: Oct – Mar is ideal for Rajasthan, Kerala & Ganges</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Experience <span className="bg-linear-to-r from-amber-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">Incredible India</span> With Smart Intelligence
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
          AI-powered day-by-day itineraries, verified personal guides for domestic & international tourists, iconic circuits, UNESCO heritage secrets, and UPI cashless travel.
        </p>

        {/* Central Search Box */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-2xl shadow-orange-950/40 border border-white/20">
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, temple, guide language, circuit, state..."
              className="w-full px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-hidden text-sm sm:text-base font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 mr-1"
              >
                Clear
              </button>
            )}
            <button
              onClick={onLaunchPlanner}
              className="bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shrink-0 shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Planner</span>
            </button>
          </div>

          {/* Quick search suggestions */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Popular:</span>
            {popularKeywords.map((kw) => (
              <button
                key={kw}
                onClick={() => onSelectQuickTag(kw)}
                className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700/60"
              >
                {kw}
              </button>
            ))}
          </div>
        </div>

        {/* Action Feature Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto pt-4">
          <div 
            onClick={onExploreCircuits} 
            className="p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 rounded-xl cursor-pointer transition-all text-left group"
          >
            <Compass className="w-5 h-5 text-amber-400 mb-1 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-semibold text-white">6 Iconic Circuits</div>
            <div className="text-[11px] text-slate-400">Vande Bharat & Roads</div>
          </div>

          <div 
            onClick={onLaunchPlanner} 
            className="p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 rounded-xl cursor-pointer transition-all text-left group"
          >
            <Sparkles className="w-5 h-5 text-orange-400 mb-1 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-semibold text-white">Smart AI Planner</div>
            <div className="text-[11px] text-slate-400">Custom day schedules</div>
          </div>

          <div 
            onClick={() => onSelectQuickTag('personal guides')} 
            className="p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 rounded-xl cursor-pointer transition-all text-left group"
          >
            <Sparkles className="w-5 h-5 text-emerald-400 mb-1 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-semibold text-white">Personal Guides</div>
            <div className="text-[11px] text-slate-400">Domestic & Intl</div>
          </div>

          <div 
            onClick={() => onSelectQuickTag('upi')} 
            className="p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 rounded-xl cursor-pointer transition-all text-left group"
          >
            <CreditCard className="w-5 h-5 text-teal-400 mb-1 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-semibold text-white">UPI for Tourists</div>
            <div className="text-[11px] text-slate-400">Cashless QR payments</div>
          </div>

          <div 
            onClick={() => onSelectQuickTag('safety')} 
            className="p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 rounded-xl cursor-pointer transition-all text-left group"
          >
            <ShieldCheck className="w-5 h-5 text-sky-400 mb-1 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-semibold text-white">Helpline 1363</div>
            <div className="text-[11px] text-slate-400">Scam radar & advice</div>
          </div>
        </div>

      </div>
    </div>
  );
};
