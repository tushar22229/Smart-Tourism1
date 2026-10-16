import React, { useState } from 'react';
import { UNESCO_SITES } from '../data/unesco';
import { UNESCOSite } from '../types';
import { Landmark, Camera, Clock, Ticket, ShieldCheck, Sparkles, Filter } from 'lucide-react';

export const UnescoSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [selectedSite, setSelectedSite] = useState<UNESCOSite | null>(null);

  const categories = ['All', 'Cultural', 'Natural'];

  const filteredSites = UNESCO_SITES.filter(site => {
    if (filterCategory === 'All') return true;
    return site.category === filterCategory;
  });

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Landmark className="w-3.5 h-3.5 text-amber-700" />
            <span>Archaeological Survey of India (ASI)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            UNESCO World Heritage Wonders of India
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            India is home to 42 recognized UNESCO World Heritage sites spanning rock-cut monolithic caves, medieval astronomical observatories, Mughal mausoleums, and pristine bio-reserves.
          </p>

          {/* Category filter */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Heritage Sites' : `${cat} Heritage`}
              </button>
            ))}
          </div>
        </div>

        {/* Official ASI Ticket Advisory Banner */}
        <div className="mb-8 p-4 bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl flex items-start sm:items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
          <div className="text-xs text-blue-950 flex-1">
            <strong>Official ASI E-Ticket Advisory:</strong> Always book your tickets online directly on the Archaeological Survey of India (ASI) portal (<code className="bg-white/80 px-1 py-0.5 rounded text-blue-700">asi.payumoney.com</code>) or the QR code at monument entry gates. Never purchase from unauthorized street touts.
          </div>
        </div>

        {/* UNESCO Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSites.map((site) => (
            <div
              key={site.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/90 text-slate-800">
                  Inscribed {site.yearInscribed}
                </span>

                <span className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold text-white ${
                  site.category === 'Natural' ? 'bg-emerald-600' : 'bg-amber-600'
                }`}>
                  {site.category}
                </span>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] text-amber-300 font-medium">{site.state}</div>
                  <h3 className="text-base font-bold leading-tight">{site.name}</h3>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-slate-500 font-medium mb-2">
                    Era: {site.historicalEra}
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-3 mb-3 leading-relaxed">
                    {site.description}
                  </p>

                  <div className="space-y-1.5 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-3">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{site.openingHours}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Ticket className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <span>Fee: {site.entryFee.indian} (IN) / {site.entryFee.foreigner} (Intl)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                    <Camera className="w-3 h-3 text-emerald-600" />
                    <span>Photo Tip Available</span>
                  </div>
                  <button
                    onClick={() => setSelectedSite(site)}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold cursor-pointer"
                  >
                    View Tips
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo & Historical Details Modal */}
        {selectedSite && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    UNESCO {selectedSite.category} Heritage • {selectedSite.yearInscribed}
                  </span>
                  <h3 className="text-xl font-black text-slate-900">{selectedSite.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedSite(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <img
                src={selectedSite.image}
                alt={selectedSite.name}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />

              <div className="space-y-3 text-xs text-slate-700 mb-6">
                <div>
                  <strong className="text-slate-900 block mb-0.5">Historical Significance:</strong>
                  <p className="leading-relaxed">{selectedSite.description}</p>
                </div>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-2.5">
                  <Camera className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-900 block mb-0.5">Insider Photography & Lighting Tip:</strong>
                    <p className="text-amber-950 leading-relaxed">{selectedSite.photographyTip}</p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div><strong>Timings:</strong> {selectedSite.openingHours}</div>
                  <div><strong>Entry Fees:</strong> Indian Citizens: {selectedSite.entryFee.indian} | International Tourists: {selectedSite.entryFee.foreigner}</div>
                  <div><strong>Location:</strong> {selectedSite.state}</div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedSite(null)}
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
