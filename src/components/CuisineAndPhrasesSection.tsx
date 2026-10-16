import React, { useState } from 'react';
import { REGIONAL_CUISINES } from '../data/cuisines';
import { ESSENTIAL_PHRASES } from '../data/phrases';
import { Phrase } from '../types';
import { Utensils, Volume2, ShieldCheck, Flame, BookOpen, Coffee, Award, Sparkles } from 'lucide-react';

export const CuisineAndPhrasesSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'cuisine' | 'phrases'>('cuisine');
  const [selectedCuisineId, setSelectedCuisineId] = useState<string>('rajasthan');
  const [selectedPhraseCategory, setSelectedPhraseCategory] = useState<string>('All');
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const activeCuisine = REGIONAL_CUISINES.find(c => c.id === selectedCuisineId) || REGIONAL_CUISINES[0];

  const phraseCategories = [
    'All',
    'Greetings & Etiquette',
    'Transit & Rickshaw',
    'Shopping & Bargaining',
    'Dining & Water',
    'Emergency & Direction'
  ];

  const filteredPhrases = ESSENTIAL_PHRASES.filter(p => {
    if (selectedPhraseCategory === 'All') return true;
    return p.category === selectedPhraseCategory;
  });

  const speakPhrase = (phrase: Phrase) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    setSpeakingId(phrase.id);
    const utterance = new SpeechSynthesisUtterance(phrase.hindi);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.85; // slightly slower for easy pronunciation learning
    utterance.pitch = 1;

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Utensils className="w-3.5 h-3.5 text-orange-700" />
            <span>Culture & Culinary Companion</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Indian Gastronomy & Audio Phrasebook
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Master regional food traditions, spice nuances, and essential Hindi phrases with natural text-to-speech audio pronunciation.
          </p>

          {/* Sub-tab Switcher */}
          <div className="inline-flex p-1 bg-white rounded-2xl border border-slate-200 shadow-xs mt-6">
            <button
              onClick={() => setActiveSubTab('cuisine')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubTab === 'cuisine'
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Regional Cuisines & Spice Guide
            </button>
            <button
              onClick={() => setActiveSubTab('phrases')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubTab === 'phrases'
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Audio Travel Phrasebook
            </button>
          </div>
        </div>

        {/* Cuisines Tab */}
        {activeSubTab === 'cuisine' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            
            {/* Region Selector Pills */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {REGIONAL_CUISINES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCuisineId(c.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedCuisineId === c.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {c.state} ({c.regionName.split(' ')[0]})
                </button>
              ))}
            </div>

            {/* Active Cuisine Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    {activeCuisine.state} Culinary Heritage
                  </span>
                  <h3 className="text-2xl font-black text-slate-900">{activeCuisine.regionName}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    {activeCuisine.specialityNotes}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                  <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs">
                    <span className="font-bold text-amber-900 block text-[10px] uppercase">Signature Sip</span>
                    <span className="text-amber-950 font-medium">{activeCuisine.beverage}</span>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-2xl border border-orange-200 text-xs">
                    <span className="font-bold text-orange-900 block text-[10px] uppercase">Sweet Treat</span>
                    <span className="text-orange-950 font-medium">{activeCuisine.sweetTreat}</span>
                  </div>
                </div>
              </div>

              {/* Iconic Dishes Grid */}
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                Iconic Regional Dishes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeCuisine.iconicDishes.map((dish) => (
                  <div
                    key={dish.name}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="font-bold text-slate-900 text-sm">{dish.name}</div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                          dish.diet === 'Vegetarian' ? 'bg-emerald-100 text-emerald-800' :
                          dish.diet === 'Vegan' ? 'bg-teal-100 text-teal-800' :
                          dish.diet === 'Jain-Friendly' ? 'bg-blue-100 text-blue-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {dish.diet}
                        </span>

                        {/* Spice Meter */}
                        <div className="flex items-center text-xs" title={`Spice Level: ${dish.spiceLevel}/5`}>
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <span key={idx} className={idx < dish.spiceLevel ? 'text-red-500' : 'text-slate-200'}>
                              🌶️
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Street Food Safety Protocol */}
            <div className="bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <h4 className="text-sm font-bold text-emerald-950 uppercase tracking-wide">
                  The Golden Rules of Safe Street Food in India
                </h4>
              </div>
              <p className="text-xs text-emerald-900 mb-4 max-w-3xl leading-relaxed">
                Indian street cuisine is world-renowned for unforgettable flavor. Follow these 4 simple traveler hygiene rules to enjoy street food with total confidence:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-emerald-950">
                <div className="bg-white/80 p-3 rounded-xl border border-emerald-100">
                  <strong>1. High Footfall Stalls:</strong> Eat where local families and women queue. High turnover means ingredients are cooked fresh constantly.
                </div>
                <div className="bg-white/80 p-3 rounded-xl border border-emerald-100">
                  <strong>2. Piping Hot Only:</strong> Choose sizzling, freshly deep-fried or grilled foods (e.g. fresh Dosa, hot Samosa, Tandoor skewers) where heat kills bacteria.
                </div>
                <div className="bg-white/80 p-3 rounded-xl border border-emerald-100">
                  <strong>3. Skip Pre-Cut Fruits:</strong> Avoid open watermelons or salads exposed on open carts. Eat peeled fruits like bananas, oranges, or fresh coconuts.
                </div>
                <div className="bg-white/80 p-3 rounded-xl border border-emerald-100">
                  <strong>4. Water in Pani Puri:</strong> Only eat Pani Puri where the vendor clearly advertises "RO Purified / Mineral Water" for the spiced water.
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Phrases Tab */}
        {activeSubTab === 'phrases' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            
            {/* Category filter pills */}
            <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {phraseCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedPhraseCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    selectedPhraseCategory === cat
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Phrases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPhrases.map((phrase) => {
                const isSpeaking = speakingId === phrase.id;
                return (
                  <div
                    key={phrase.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">
                          {phrase.category}
                        </span>

                        {/* Speech synthesis button */}
                        <button
                          onClick={() => speakPhrase(phrase)}
                          className={`p-2 rounded-xl transition-all cursor-pointer ${
                            isSpeaking
                              ? 'bg-orange-600 text-white scale-110 shadow-md animate-pulse'
                              : 'bg-slate-100 hover:bg-orange-50 hover:text-orange-600 text-slate-700'
                          }`}
                          title="Listen to Hindi pronunciation"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* English Meaning */}
                      <div className="text-sm font-extrabold text-slate-900 mb-2">
                        "{phrase.english}"
                      </div>

                      {/* Devanagari Script & Romanized */}
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-2">
                        <div className="text-base font-bold text-amber-900 font-hindi">
                          {phrase.hindi}
                        </div>
                        <div className="text-xs font-semibold text-slate-700 mt-0.5 italic">
                          "{phrase.romanized}"
                        </div>
                      </div>

                      <p className="text-[11px] text-slate-500 leading-tight">
                        {phrase.meaning}
                      </p>
                    </div>

                    {/* Regional alternative if available */}
                    {phrase.regionalAlternative && (
                      <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-600 flex items-center justify-between">
                        <span className="text-slate-400 font-medium">In {phrase.regionalAlternative.language}:</span>
                        <span className="font-semibold text-slate-800">{phrase.regionalAlternative.text}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl text-xs text-orange-950 text-center">
              💡 <strong>Speaker Tip:</strong> Click the speaker icon on any card to hear accurate Hindi pronunciation right from your browser.
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
