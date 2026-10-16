import React, { useState } from 'react';
import { TripPlannerFormState, GeneratedItinerary, TravelVibe } from '../types';
import { generateSmartItineraryWithAI } from '../services/aiPlanner';
import { formatCurrency } from '../utils/currency';
import { 
  Sparkles, Calendar, Clock, MapPin, Users, Wallet, Utensils, 
  Share2, Bookmark, Check, Printer, ArrowRight, Loader2, Compass, ShieldCheck 
} from 'lucide-react';

interface AiPlannerSectionProps {
  initialDestination?: string;
  currency: string;
  onSaveItinerary: (itinerary: GeneratedItinerary) => void;
  isItinerarySaved: (id: string) => boolean;
}

export const AiPlannerSection: React.FC<AiPlannerSectionProps> = ({
  initialDestination = 'Golden Triangle (Delhi-Agra-Jaipur)',
  currency,
  onSaveItinerary,
  isItinerarySaved
}) => {
  const [form, setForm] = useState<TripPlannerFormState>({
    destination: initialDestination,
    durationDays: 5,
    travelerType: 'Couple',
    vibe: 'Heritage',
    budgetTier: 'Comfort Explorer',
    dietPreference: 'Vegetarian Only',
    monthOfTravel: 'November',
    customNotes: ''
  });

  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState('');
  const [itinerary, setItinerary] = useState<GeneratedItinerary | null>(null);
  const [copied, setCopied] = useState(false);

  // Quick suggestion destinations
  const popularPicks = [
    'Golden Triangle (Delhi-Agra-Jaipur)',
    'Jaipur',
    'Varanasi (Kashi)',
    'Kerala Backwaters & Munnar',
    'Leh-Ladakh Himalayas',
    'Hampi & Karnataka Ruins',
    'Goa Beaches & Old Churches',
    'Meghalaya Living Root Bridges'
  ];

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);

    const steps = [
      'Analyzing seasonal weather & transit corridors...',
      'Mapping authentic heritage monuments & local crafts...',
      'Curating regional cuisines & dietary preferences...',
      'Synthesizing optimized day-by-day itinerary...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setLoadingStep(steps[currentStep]);
        currentStep++;
      }
    }, 450);

    try {
      const result = await generateSmartItineraryWithAI(form);
      clearInterval(interval);
      setItinerary(result);
    } catch (err) {
      clearInterval(interval);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!itinerary) return;
    const text = `${itinerary.title}\n\n${itinerary.summary}\n\nTotal Estimated Budget: ${formatCurrency(itinerary.totalEstimatedInr, currency)}\n\n` +
      itinerary.days.map(d => `${d.title}\n- Morning: ${d.morning}\n- Afternoon: ${d.afternoon}\n- Evening: ${d.evening}\n- Meals: ${d.recommendedMeals.join(' | ')}\n- Transit: ${d.transportAdvice}\n`).join('\n\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-12 bg-linear-to-b from-white via-orange-50/30 to-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-linear-to-r from-orange-500/10 to-amber-500/10 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>AI Itinerary Architect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Design Your Bespoke India Journey
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Custom-built daily schedules tailored to your duration, diet, budget tier, and travel vibe with practical transit logistics and timing.
          </p>
        </div>

        {/* Input Form Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl shadow-orange-950/5 mb-10">
          <form onSubmit={handleGenerate} className="space-y-6">
            
            {/* Destination Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-600" />
                <span>Destination or Circuit in India</span>
              </label>
              <input
                type="text"
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
                required
                placeholder="e.g. Golden Triangle, Jaipur, Varanasi, Kerala, Ladakh..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-sm font-medium"
              />

              {/* Quick pills */}
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {popularPicks.map((pick) => (
                  <button
                    type="button"
                    key={pick}
                    onClick={() => setForm({ ...form, destination: pick })}
                    className={`text-[11px] px-2.5 py-1 rounded-full transition-colors cursor-pointer border ${
                      form.destination === pick
                        ? 'bg-orange-600 text-white border-orange-600 font-semibold'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    {pick}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of parameters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Duration Slider */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-orange-600" />
                    <span>Duration</span>
                  </span>
                  <span className="text-orange-600 font-extrabold text-sm">{form.durationDays} Days</span>
                </label>
                <input
                  type="range"
                  min={2}
                  max={14}
                  value={form.durationDays}
                  onChange={(e) => setForm({ ...form, durationDays: parseInt(e.target.value, 10) })}
                  className="w-full accent-orange-600 cursor-pointer mt-2"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>2 Days (Weekend)</span>
                  <span>14 Days (Grand Tour)</span>
                </div>
              </div>

              {/* Traveler Type */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-orange-600" />
                  <span>Traveler Party</span>
                </label>
                <select
                  value={form.travelerType}
                  onChange={(e) => setForm({ ...form, travelerType: e.target.value as any })}
                  className="w-full px-3 py-2 mt-1 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-hidden"
                >
                  <option value="Solo">Solo Traveler</option>
                  <option value="Couple">Couple / Romantic</option>
                  <option value="Family with Kids">Family with Kids</option>
                  <option value="Friends Group">Friends Group</option>
                  <option value="Senior Travelers">Senior Travelers</option>
                </select>
              </div>

              {/* Budget Tier */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
                  <Wallet className="w-3.5 h-3.5 text-orange-600" />
                  <span>Budget Tier</span>
                </label>
                <select
                  value={form.budgetTier}
                  onChange={(e) => setForm({ ...form, budgetTier: e.target.value as any })}
                  className="w-full px-3 py-2 mt-1 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-hidden"
                >
                  <option value="Economy Backpacker">Economy Backpacker (~₹1,800/d)</option>
                  <option value="Comfort Explorer">Comfort Explorer (~₹4,200/d)</option>
                  <option value="Royal Luxury">Royal Luxury Palace (~₹14,000/d)</option>
                </select>
              </div>

              {/* Dietary Preferences */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
                  <Utensils className="w-3.5 h-3.5 text-orange-600" />
                  <span>Diet & Food</span>
                </label>
                <select
                  value={form.dietPreference}
                  onChange={(e) => setForm({ ...form, dietPreference: e.target.value as any })}
                  className="w-full px-3 py-2 mt-1 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-hidden"
                >
                  <option value="Vegetarian Only">Pure Vegetarian (Shuddh Shakahari)</option>
                  <option value="Jain (No Root Veg)">Jain (No Root Vegetables / No Onion/Garlic)</option>
                  <option value="All Foods">All Foods (Vegetarian & Non-Veg)</option>
                  <option value="Vegan">Vegan (Plant Based)</option>
                  <option value="Mild Spice Only">Mild Spice Only (Sensitive Stomach)</option>
                </select>
              </div>

            </div>

            {/* Travel Vibe & Month */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Trip Vibe & Theme
                </label>
                <div className="flex flex-wrap gap-2">
                  {(['Heritage', 'Nature & Wildlife', 'Spiritual', 'Beach & Coastal', 'Himalayan Adventure', 'Culinary & Art'] as TravelVibe[]).map((v) => (
                    <button
                      type="button"
                      key={v}
                      onClick={() => setForm({ ...form, vibe: v })}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer border ${
                        form.vibe === v
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Travel Month
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
                  {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((m) => (
                    <button
                      type="button"
                      key={m}
                      onClick={() => setForm({ ...form, monthOfTravel: m })}
                      className={`py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer border ${
                        form.monthOfTravel === m
                          ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-linear-to-r from-orange-600 via-amber-600 to-emerald-600 hover:from-orange-500 hover:to-emerald-500 text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-orange-600/25 transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Architecting Trip ({loadingStep || 'Crafting...'})</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Generate Smart Itinerary</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

        {/* Generated Itinerary Display */}
        {itinerary && (
          <div id="itinerary-print-area" className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl p-6 sm:p-10 animate-in fade-in duration-300">
            
            {/* Header & Meta */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-800">
                    {itinerary.durationDays} Days Tour
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                    {itinerary.vibe}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    {itinerary.budgetTier}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {itinerary.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
                  {itinerary.summary}
                </p>
              </div>

              {/* Total Cost & Actions */}
              <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-left md:text-right">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Total Estimated Budget</div>
                  <div className="text-2xl font-black text-orange-600">
                    {formatCurrency(itinerary.totalEstimatedInr, currency)}
                  </div>
                  <div className="text-[10px] text-slate-500">Includes stay, meals & internal transit</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSaveItinerary(itinerary)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isItinerarySaved(itinerary.id)
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{isItinerarySaved(itinerary.id) ? 'Saved' : 'Save Trip'}</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                    title="Copy Itinerary to Clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={handlePrint}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                    title="Print / Save PDF"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Packing Advice Banner */}
            {itinerary.packingSuggestions?.length > 0 && (
              <div className="my-6 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>Recommended Packing Essentials for this Route</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {itinerary.packingSuggestions.map((item, idx) => (
                    <span key={idx} className="text-xs bg-white text-amber-950 px-2.5 py-1 rounded-lg border border-amber-200 shadow-2xs">
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Daily Timeline */}
            <div className="space-y-6 mt-6">
              {itinerary.days.map((day) => (
                <div
                  key={day.dayNumber}
                  className="bg-slate-50/80 rounded-2xl border border-slate-200 p-5 sm:p-6 transition-all hover:bg-white hover:shadow-md"
                >
                  {/* Day Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200/80 gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                        {day.dayNumber}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900">{day.title}</h4>
                    </div>
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 self-start sm:self-auto">
                      Daily Est: {formatCurrency(day.budgetEstimateInr, currency)}
                    </span>
                  </div>

                  {/* 3 Phases: Morning, Afternoon, Evening */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-2xs">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1 mb-1">
                        <span>🌅 Morning</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">
                        {day.morning}
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-2xs">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-orange-600 flex items-center gap-1 mb-1">
                        <span>☀️ Afternoon</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">
                        {day.afternoon}
                      </p>
                    </div>

                    <div className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-2xs">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-1 mb-1">
                        <span>🌙 Evening & Sunset</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-normal">
                        {day.evening}
                      </p>
                    </div>
                  </div>

                  {/* Food & Transit sub-bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                    <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100 flex items-start gap-2">
                      <Utensils className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-900 block mb-0.5">Recommended Meals</span>
                        <ul className="space-y-0.5 text-slate-700">
                          {day.recommendedMeals.map((m, i) => (
                            <li key={i}>{m}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 flex items-start gap-2">
                      <Compass className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-emerald-900 block mb-0.5">Internal Transit Logistics</span>
                        <p className="text-slate-700">{day.transportAdvice}</p>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Created for Smart Tourism • Emergency Helpline 1363
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  Adjust Preferences & Regenerate
                </button>
                <button
                  onClick={() => onSaveItinerary(itinerary)}
                  className="px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold shadow-md cursor-pointer"
                >
                  {isItinerarySaved(itinerary.id) ? 'Saved in Bucket List' : 'Save This Itinerary'}
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
