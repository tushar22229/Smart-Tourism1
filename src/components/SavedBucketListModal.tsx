import React, { useState } from 'react';
import { DESTINATIONS } from '../data/destinations';
import { PACKING_CHECKLIST } from '../data/travelEssentials';
import { GeneratedItinerary } from '../types';
import { formatCurrency } from '../utils/currency';
import { Heart, Bookmark, CheckSquare, Square, Trash2, X, Sparkles, MapPin, Printer } from 'lucide-react';

interface SavedBucketListModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedDestinations: string[];
  savedItineraries: GeneratedItinerary[];
  onRemoveDestination: (id: string) => void;
  onRemoveItinerary: (id: string) => void;
  onSelectDestination: (destName: string) => void;
  currency: string;
}

export const SavedBucketListModal: React.FC<SavedBucketListModalProps> = ({
  isOpen,
  onClose,
  savedDestinations,
  savedItineraries,
  onRemoveDestination,
  onRemoveItinerary,
  onSelectDestination,
  currency
}) => {
  const [activeTab, setActiveTab] = useState<'places' | 'itineraries' | 'packing'>('places');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const matchedDestinations = DESTINATIONS.filter(d => savedDestinations.includes(d.id));

  const toggleCheck = (item: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-orange-100 text-orange-600 rounded-xl">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">My Saved Trip Hub</h2>
              <p className="text-xs text-slate-500">Offline bucket list, itineraries & packing tracker</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-slate-100 px-6 pt-2 bg-slate-50/50">
          <button
            onClick={() => setActiveTab('places')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'places'
                ? 'border-orange-600 text-orange-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Saved Destinations ({matchedDestinations.length})
          </button>
          <button
            onClick={() => setActiveTab('itineraries')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'itineraries'
                ? 'border-orange-600 text-orange-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            AI Itineraries ({savedItineraries.length})
          </button>
          <button
            onClick={() => setActiveTab('packing')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'packing'
                ? 'border-orange-600 text-orange-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Packing Checklist
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          
          {/* TAB 1: PLACES */}
          {activeTab === 'places' && (
            <div>
              {matchedDestinations.length > 0 ? (
                <div className="space-y-3">
                  {matchedDestinations.map((dest) => (
                    <div
                      key={dest.id}
                      className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-3 hover:bg-white hover:shadow-xs transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={dest.image}
                          alt={dest.name}
                          className="w-14 h-14 rounded-xl object-cover shrink-0"
                        />
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{dest.name}</h4>
                          <span className="text-xs text-slate-500">{dest.region} India • {dest.state}</span>
                          <div className="text-[11px] text-orange-600 font-semibold mt-0.5">
                            {formatCurrency(dest.avgDailyCostInr, currency)}/day
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            onSelectDestination(dest.name);
                            onClose();
                          }}
                          className="px-3 py-1.5 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Plan</span>
                        </button>
                        <button
                          onClick={() => onRemoveDestination(dest.id)}
                          className="p-2 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 cursor-pointer"
                          title="Remove from saved"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500 text-xs">
                  <Heart className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p>You haven't saved any destinations yet.</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Click the heart icon on any destination card to save it here.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SAVED ITINERARIES */}
          {activeTab === 'itineraries' && (
            <div>
              {savedItineraries.length > 0 ? (
                <div className="space-y-4">
                  {savedItineraries.map((itinerary) => (
                    <div
                      key={itinerary.id}
                      className="p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:bg-white hover:shadow-xs transition-all space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">
                            {itinerary.durationDays} Days • {itinerary.budgetTier}
                          </span>
                          <h4 className="text-base font-extrabold text-slate-900 mt-1">
                            {itinerary.title}
                          </h4>
                        </div>
                        <button
                          onClick={() => onRemoveItinerary(itinerary.id)}
                          className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 cursor-pointer"
                          title="Delete saved itinerary"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {itinerary.summary}
                      </p>

                      <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
                        <span className="font-bold text-orange-600">
                          Est: {formatCurrency(itinerary.totalEstimatedInr, currency)}
                        </span>
                        <span className="text-[11px] text-slate-400">Created {itinerary.createdAt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-slate-500 text-xs">
                  <Bookmark className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p>No saved itineraries.</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Generate a trip in the AI Trip Planner and click "Save Trip" to keep it here.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: PACKING CHECKLIST */}
          {activeTab === 'packing' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Interactive checklist for India travel:</span>
                <button
                  onClick={() => window.print()}
                  className="text-orange-600 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Checklist</span>
                </button>
              </div>

              {PACKING_CHECKLIST.map((group) => (
                <div key={group.category} className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {group.category}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.items.map((item) => {
                      const isChecked = !!checkedItems[item];
                      return (
                        <div
                          key={item}
                          onClick={() => toggleCheck(item)}
                          className={`p-2.5 rounded-xl border text-xs cursor-pointer flex items-center gap-2.5 transition-colors ${
                            isChecked
                              ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900 line-through opacity-70'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                          <span>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 rounded-b-3xl text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
