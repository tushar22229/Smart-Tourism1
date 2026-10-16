import React, { useState } from 'react';
import { CIRCUITS } from '../data/circuits';
import { Circuit } from '../types';
import { formatCurrency } from '../utils/currency';
import { Clock, Train, ArrowRight, CheckCircle2, X, Sparkles, MapPin } from 'lucide-react';

interface CircuitsSectionProps {
  currency: string;
  onPlanCircuit: (circuit: Circuit) => void;
}

export const CircuitsSection: React.FC<CircuitsSectionProps> = ({
  currency,
  onPlanCircuit
}) => {
  const [selectedCircuit, setSelectedCircuit] = useState<Circuit | null>(null);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
              <span>Curated Travel Routes</span>
              <span>•</span>
              <span>Indian Railways & Roadways</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Iconic India Travel Circuits
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Masterfully designed multi-city corridors connecting legendary forts, mountain passes, sacred rivers, and backwater lagoons with transit details.
            </p>
          </div>
        </div>

        {/* Circuits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CIRCUITS.map((circuit) => (
            <div
              key={circuit.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image banner */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={circuit.image}
                  alt={circuit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-slate-800 backdrop-blur-xs">
                  {circuit.duration}
                </span>

                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-white shadow-xs">
                  {circuit.region} Circuit
                </span>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs text-amber-300 font-medium">Best: {circuit.bestMonths}</div>
                  <h3 className="text-lg font-bold leading-snug">{circuit.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                    {circuit.subtitle}
                  </p>

                  {/* Route ribbon */}
                  <div className="mb-4 bg-orange-50/70 p-2.5 rounded-xl border border-orange-100">
                    <div className="text-[11px] font-bold text-orange-800 uppercase tracking-wide flex items-center gap-1 mb-1">
                      <Train className="w-3.5 h-3.5 text-orange-600" />
                      <span>Route Waypoints</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-700 font-medium">
                      {circuit.route.map((city, idx) => (
                        <React.Fragment key={city}>
                          <span className="bg-white px-2 py-0.5 rounded-md border border-orange-200/60 shadow-2xs">
                            {city}
                          </span>
                          {idx < circuit.route.length - 1 && (
                            <span className="text-orange-400 font-bold">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Ideal for tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {circuit.idealFor.map((tag) => (
                      <span key={tag} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer price & action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Est. Trip Cost</div>
                    <div className="text-base font-extrabold text-slate-900">
                      {formatCurrency(circuit.estimatedCostInr, currency)}
                      <span className="text-[10px] font-normal text-slate-500"> /person</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCircuit(circuit)}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-orange-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Details & Stops</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Circuit Detail Modal */}
        {selectedCircuit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 animate-in fade-in duration-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    {selectedCircuit.duration} • {selectedCircuit.region}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900">{selectedCircuit.title}</h3>
                  <p className="text-sm text-slate-500">{selectedCircuit.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedCircuit(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <img
                  src={selectedCircuit.image}
                  alt={selectedCircuit.title}
                  className="w-full h-52 object-cover rounded-2xl mb-4"
                />
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  {selectedCircuit.overview}
                </p>

                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2 mb-6">
                  <Train className="w-4 h-4 text-amber-700 shrink-0" />
                  <span><strong>Transit Mode:</strong> {selectedCircuit.transportMode}</span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>Itinerary Stops & Highlights</span>
                </h4>

                <div className="space-y-3">
                  {selectedCircuit.stops.map((stop, idx) => (
                    <div key={stop.city} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-bold text-slate-800 text-sm">{stop.city}, {stop.state}</div>
                          <span className="text-[11px] font-semibold text-orange-700 bg-orange-100/70 px-2 py-0.5 rounded-md">
                            {stop.days} {stop.days === 1 ? 'Day' : 'Days'}
                          </span>
                        </div>
                        <ul className="mt-2 space-y-1">
                          {stop.highlights.map((hl) => (
                            <li key={hl} className="text-xs text-slate-600 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <div className="text-xs text-slate-400">Estimated Total Cost</div>
                  <div className="text-xl font-black text-slate-900">
                    {formatCurrency(selectedCircuit.estimatedCostInr, currency)}
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedCircuit(null)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      onPlanCircuit(selectedCircuit);
                      setSelectedCircuit(null);
                    }}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Generate AI Itinerary</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
