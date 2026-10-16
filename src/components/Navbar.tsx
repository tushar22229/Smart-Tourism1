import React, { useState } from 'react';
import { Compass, ShieldAlert, Heart, Menu, X, Sparkles, MapPin, IndianRupee, UserCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  savedCount: number;
  onOpenSaved: () => void;
  onOpenSos: () => void;
  currency: string;
  setCurrency: (c: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  onOpenSaved,
  onOpenSos,
  currency,
  setCurrency
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'explore', label: 'Destinations', icon: MapPin },
    { id: 'circuits', label: 'Circuits', icon: Compass },
    { id: 'planner', label: 'AI Planner', icon: Sparkles, badge: 'Smart' },
    { id: 'guides', label: 'Guides', icon: UserCheck, badge: 'Verified' },
    { id: 'unesco', label: 'UNESCO', icon: null },
    { id: 'culture', label: 'Cuisine', icon: null },
    { id: 'safety', label: 'Safety & UPI', icon: null },
    { id: 'budget', label: 'Budget', icon: IndianRupee },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-2 sm:gap-4">
          
          {/* Logo / Brand - Left */}
          <div 
            onClick={() => setActiveTab('explore')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-linear-to-tr from-amber-600 via-orange-500 to-emerald-600 flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform shrink-0">
              <span className="text-white font-black text-lg sm:text-xl tracking-tighter">भ</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-bold bg-linear-to-r from-amber-700 via-orange-600 to-emerald-700 bg-clip-text text-transparent whitespace-nowrap">
                  Smart Tourism
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.2 bg-orange-100 text-orange-800 rounded-full">
                  Bharat
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 hidden md:block whitespace-nowrap">Intelligent Travel Companion</p>
            </div>
          </div>

          {/* Desktop Nav - Centered & Justified */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-0.5 xl:gap-1 px-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                    isActive 
                      ? 'text-orange-600 bg-orange-50 font-semibold' 
                      : 'text-slate-600 hover:text-orange-600 hover:bg-slate-50'
                  }`}
                >
                  {Icon && <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-orange-600' : 'text-slate-400'}`} />}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] bg-linear-to-r from-amber-500 to-orange-500 text-white font-bold px-1 py-0.2 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-orange-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right utilities: Currency, Saved, SOS, Mobile menu - Right */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Currency selector */}
            <div className="hidden sm:flex items-center bg-slate-100 rounded-lg p-0.5 text-xs font-medium">
              {(['INR', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-1.5 sm:px-2 py-1 rounded-md transition-colors cursor-pointer text-[11px] sm:text-xs ${
                    currency === curr
                      ? 'bg-white text-orange-700 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {curr === 'INR' ? '₹' : curr === 'USD' ? '$' : curr === 'EUR' ? '€' : '£'} {curr}
                </button>
              ))}
            </div>

            {/* Saved list */}
            <button
              onClick={onOpenSaved}
              className="relative p-2 text-slate-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer"
              title="Saved Bucket List & Packing Checklist"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-orange-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Tourist SOS Emergency Helpline */}
            <button
              onClick={onOpenSos}
              className="px-2.5 sm:px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-xs whitespace-nowrap"
              title="Emergency SOS & Tourist Helpline 1363"
            >
              <ShieldAlert className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 animate-pulse" />
              <span>SOS 1363</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-100 space-y-1">
            {/* Mobile Currency bar */}
            <div className="flex sm:hidden items-center justify-between p-2 bg-slate-50 rounded-lg mb-2">
              <span className="text-xs font-semibold text-slate-500">Currency:</span>
              <div className="flex gap-1">
                {(['INR', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-2 py-0.5 rounded text-xs ${
                      currency === curr ? 'bg-orange-600 text-white font-bold' : 'bg-white text-slate-700'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between cursor-pointer ${
                    activeTab === item.id
                      ? 'text-orange-600 bg-orange-50 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4 text-slate-400" />}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};
