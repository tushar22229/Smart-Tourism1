import React, { useState } from 'react';
import { formatCurrency } from '../utils/currency';
import { IndianRupee, Calculator, Coins, TrendingUp, Info, HelpCircle } from 'lucide-react';

interface BudgetCalculatorSectionProps {
  currency: string;
}

export const BudgetCalculatorSection: React.FC<BudgetCalculatorSectionProps> = ({ currency }) => {
  const [foreignAmount, setForeignAmount] = useState<number>(100);
  const [foreignCurrency, setForeignCurrency] = useState<string>('USD');

  // Trip estimator states
  const [cityTier, setCityTier] = useState<'metro' | 'heritage' | 'town'>('heritage');
  const [tierStyle, setTierStyle] = useState<'backpacker' | 'comfort' | 'luxury'>('comfort');
  const [travelers, setTravelers] = useState<number>(2);
  const [days, setDays] = useState<number>(7);

  // Conversion rates baseline to INR
  const conversionRates: Record<string, { rate: number; symbol: string; name: string }> = {
    USD: { rate: 83.5, symbol: '$', name: 'US Dollar' },
    EUR: { rate: 90.2, symbol: '€', name: 'Euro' },
    GBP: { rate: 106.5, symbol: '£', name: 'British Pound' },
    AUD: { rate: 54.8, symbol: 'A$', name: 'Australian Dollar' },
    CAD: { rate: 61.2, symbol: 'C$', name: 'Canadian Dollar' },
    AED: { rate: 22.7, symbol: 'AED', name: 'UAE Dirham' },
    SGD: { rate: 62.1, symbol: 'S$', name: 'Singapore Dollar' },
    JPY: { rate: 0.55, symbol: '¥', name: 'Japanese Yen' }
  };

  const selectedRate = conversionRates[foreignCurrency] || conversionRates['USD'];
  const convertedInr = Math.round(foreignAmount * selectedRate.rate);

  // Daily costs per person in INR
  const baseCostPerPersonPerDay: Record<string, Record<string, { stay: number; food: number; transit: number; tickets: number; misc: number }>> = {
    metro: {
      backpacker: { stay: 900, food: 600, transit: 300, tickets: 200, misc: 200 },
      comfort: { stay: 2800, food: 1400, transit: 700, tickets: 500, misc: 500 },
      luxury: { stay: 12000, food: 4000, transit: 2500, tickets: 1200, misc: 1500 }
    },
    heritage: {
      backpacker: { stay: 750, food: 500, transit: 250, tickets: 350, misc: 150 },
      comfort: { stay: 2400, food: 1200, transit: 600, tickets: 600, misc: 400 },
      luxury: { stay: 10500, food: 3500, transit: 2200, tickets: 1200, misc: 1200 }
    },
    town: {
      backpacker: { stay: 600, food: 400, transit: 150, tickets: 150, misc: 100 },
      comfort: { stay: 1800, food: 900, transit: 400, tickets: 300, misc: 300 },
      luxury: { stay: 7500, food: 2500, transit: 1500, tickets: 800, misc: 800 }
    }
  };

  const breakdown = baseCostPerPersonPerDay[cityTier][tierStyle];
  const dailyTotalPerPerson = breakdown.stay + breakdown.food + breakdown.transit + breakdown.tickets + breakdown.misc;
  const grandTotalInr = dailyTotalPerPerson * travelers * days;

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Coins className="w-3.5 h-3.5 text-emerald-700" />
            <span>Smart Currency & Expense Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            India Travel Budget & INR Converter
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Accurate live conversion rates and itemized expense estimators across major metro cities, royal heritage hubs, and peaceful scenic towns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left: Quick Converter */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-emerald-600" />
                  <span>Live Foreign Currency to INR</span>
                </h3>
                <span className="text-[10px] text-slate-400 font-medium">Real-time benchmark</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Select Foreign Currency</label>
                  <select
                    value={foreignCurrency}
                    onChange={(e) => setForeignCurrency(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 focus:outline-hidden"
                  >
                    {Object.entries(conversionRates).map(([code, data]) => (
                      <option key={code} value={code}>
                        {code} - {data.name} ({data.symbol})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    Amount in {foreignCurrency}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-sm font-bold text-slate-400">
                      {selectedRate.symbol}
                    </span>
                    <input
                      type="number"
                      min={1}
                      value={foreignAmount}
                      onChange={(e) => setForeignAmount(parseFloat(e.target.value) || 0)}
                      className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm font-extrabold text-slate-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Conversion Display */}
                <div className="p-5 bg-linear-to-br from-emerald-500 to-teal-700 text-white rounded-2xl shadow-md text-center mt-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-100">
                    Equals Indian Rupees
                  </div>
                  <div className="text-3xl font-black my-1">
                    ₹{convertedInr.toLocaleString('en-IN')}
                  </div>
                  <div className="text-xs text-emerald-100">
                    1 {foreignCurrency} = ₹{selectedRate.rate} INR
                  </div>
                </div>

                {/* What can this buy in India? */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-2">
                    What does ₹{convertedInr.toLocaleString('en-IN')} buy in India?
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {convertedInr >= 15000 ? (
                      <>
                        <li>✓ 2 to 3 nights in a 4-star royal heritage haveli or luxury hotel</li>
                        <li>✓ Multi-day private chauffeur AC car rental</li>
                      </>
                    ) : convertedInr >= 4000 ? (
                      <>
                        <li>✓ 1 night comfortable mid-range boutique stay + dining for two</li>
                        <li>✓ Executive Class Vande Bharat train ticket between major cities</li>
                      </>
                    ) : (
                      <>
                        <li>✓ Full day of hearty meals and delicious street foods</li>
                        <li>✓ Multiple city auto-rickshaw rides and museum entry tickets</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 text-[11px] text-slate-400 text-center">
              *Exchange rates based on standard international retail banking benchmarks.
            </div>
          </div>

          {/* Right: Comprehensive Trip Budget Calculator */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md">
            <h3 className="text-lg font-extrabold text-slate-900 mb-1 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-600" />
              <span>Interactive Trip Expense Estimator</span>
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Configure city type, comfort level, travelers, and days to calculate real-world travel costs.
            </p>

            {/* Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* City Tier */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Destination Profile</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'metro', label: 'Tier 1 Metro', desc: 'Delhi/Mumbai' },
                    { id: 'heritage', label: 'Heritage', desc: 'Jaipur/Agra' },
                    { id: 'town', label: 'Scenic Town', desc: 'Hampi/Rishikesh' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setCityTier(t.id as any)}
                      className={`p-2 rounded-xl text-center cursor-pointer transition-all border ${
                        cityTier === t.id
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="text-xs font-bold">{t.label}</div>
                      <div className="text-[10px] opacity-75">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Style Tier */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Travel Style</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'backpacker', label: 'Backpacker', desc: 'Hostels/Buses' },
                    { id: 'comfort', label: 'Comfort', desc: '3-4★/Cabs' },
                    { id: 'luxury', label: 'Palace 5★', desc: 'Regal Luxury' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setTierStyle(s.id as any)}
                      className={`p-2 rounded-xl text-center cursor-pointer transition-all border ${
                        tierStyle === s.id
                          ? 'bg-orange-600 text-white border-orange-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="text-xs font-bold">{s.label}</div>
                      <div className="text-[10px] opacity-75">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sliders for Party & Days */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>Number of Travelers</span>
                  <span className="text-orange-600">{travelers} {travelers === 1 ? 'Person' : 'People'}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={6}
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value, 10))}
                  className="w-full accent-orange-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>Trip Duration</span>
                  <span className="text-orange-600">{days} Days</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={21}
                  value={days}
                  onChange={(e) => setDays(parseInt(e.target.value, 10))}
                  className="w-full accent-orange-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Estimated Breakdown Table */}
            <div className="space-y-2 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Itemized Daily Estimate (Per Person)
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[10px] text-slate-400">Stay & Hotel</div>
                  <div className="font-bold text-slate-800">₹{breakdown.stay}</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[10px] text-slate-400">Food & Dining</div>
                  <div className="font-bold text-slate-800">₹{breakdown.food}</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[10px] text-slate-400">Cabs / Metro</div>
                  <div className="font-bold text-slate-800">₹{breakdown.transit}</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[10px] text-slate-400">ASI Monuments</div>
                  <div className="font-bold text-slate-800">₹{breakdown.tickets}</div>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[10px] text-slate-400">Misc & SIM</div>
                  <div className="font-bold text-slate-800">₹{breakdown.misc}</div>
                </div>
              </div>
            </div>

            {/* Grand Total Bar */}
            <div className="p-5 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wide block">
                  Grand Total for {travelers} {travelers === 1 ? 'Traveler' : 'Travelers'} • {days} Days
                </span>
                <span className="text-2xl sm:text-3xl font-black text-amber-400">
                  ₹{grandTotalInr.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-300 ml-2">
                  (approx {formatCurrency(grandTotalInr, currency)})
                </span>
              </div>

              <div className="text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-xl font-medium">
                ₹{dailyTotalPerPerson.toLocaleString('en-IN')} /person/day
              </div>
            </div>

          </div>
        </div>

        {/* Tipping & Gratuity Culture in India */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
          <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
            <Info className="w-4 h-4 text-orange-600" />
            <span>Tipping Etiquette Guide in India (Baksheesh Norms)</span>
          </h3>
          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
            Tipping in India is appreciated but generally discretionary unless an explicit 5-10% service charge is already added to your restaurant bill:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-700">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="text-slate-900 block mb-0.5">Dining & Cafes:</strong>
              Check bill for "Service Charge". If not included, 7% to 10% is standard in seated restaurants; leave small change at cafes.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="text-slate-900 block mb-0.5">Hotel Bellhop:</strong>
              ₹50 to ₹100 per bag carried to your room is considered generous and polite.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="text-slate-900 block mb-0.5">Private Tour Guides:</strong>
              ₹300 to ₹600 per day for an outstanding, certified government tourist guide.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
              <strong className="text-slate-900 block mb-0.5">Taxis & Autos:</strong>
              Not expected to tip heavily; simply round up to the nearest ₹20 or ₹50 note.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
