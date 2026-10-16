import React, { useState, useMemo } from 'react';
import { DESTINATIONS } from '../data/destinations';
import { Destination, Region, TravelVibe } from '../types';
import { formatCurrency } from '../utils/currency';
import { DestinationDetailModal } from './DestinationDetailModal';
import { Heart, Sparkles, MapPin, Compass, ArrowUpRight, Calendar, Star } from 'lucide-react';

interface DestinationsSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  currency: string;
  savedDestinations: string[];
  onToggleSave: (destId: string) => void;
  onPlanTrip: (destName: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  searchQuery,
  setSearchQuery,
  currency,
  savedDestinations,
  onToggleSave,
  onPlanTrip
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedVibe, setSelectedVibe] = useState<string>('All');
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(null);

  const regions: string[] = ['All', 'North', 'South', 'West', 'East', 'Northeast'];
  const vibes: string[] = ['All', 'Heritage', 'Nature & Wildlife', 'Spiritual', 'Beach & Coastal', 'Himalayan Adventure', 'Culinary & Art'];

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((dest) => {
      // Region filter
      if (selectedRegion !== 'All' && dest.region !== selectedRegion) return false;

      // Vibe filter
      if (selectedVibe !== 'All' && !dest.vibe.includes(selectedVibe as TravelVibe)) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dest.name.toLowerCase().includes(query);
        const matchesState = dest.state.toLowerCase().includes(query);
        const matchesRegion = dest.region.toLowerCase().includes(query);
        const matchesTagline = dest.tagline.toLowerCase().includes(query);
        const matchesHighlights = dest.highlights.some(h => h.toLowerCase().includes(query));
        return matchesName || matchesState || matchesRegion || matchesTagline || matchesHighlights;
      }

      return true;
    });
  }, [selectedRegion, selectedVibe, searchQuery]);

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore India by Region & Vibe
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            From snowbound Himalayan monasteries and Rajasthani desert palaces to Kerala backwater lagoons and centuries-old living temples.
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-3 mb-8">
          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none justify-start sm:justify-center">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {reg === 'All' ? 'All Regions (India)' : `${reg} India`}
              </button>
            ))}
          </div>

          {/* Vibe Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {vibes.map((vibe) => (
              <button
                key={vibe}
                onClick={() => setSelectedVibe(vibe)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedVibe === vibe
                    ? 'bg-orange-600 text-white shadow-xs font-semibold'
                    : 'bg-white text-slate-600 hover:bg-orange-50 hover:text-orange-600 border border-slate-200/80'
                }`}
              >
                {vibe === 'All' ? 'All Travel Vibes' : vibe}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter & Search reset */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
          <span>Showing <strong>{filteredDestinations.length}</strong> destinations</span>
          {(selectedRegion !== 'All' || selectedVibe !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedRegion('All');
                setSelectedVibe('All');
                setSearchQuery('');
              }}
              className="text-orange-600 hover:underline font-semibold cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((dest) => {
              const isSaved = savedDestinations.includes(dest.id);
              return (
                <div
                  key={dest.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Save heart */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(dest.id);
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer ${
                        isSaved ? 'bg-red-500 text-white' : 'bg-black/40 hover:bg-black/60 text-white'
                      }`}
                      title={isSaved ? 'Remove from Saved' : 'Save to Bucket List'}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>

                    {/* Region badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 text-slate-800 backdrop-blur-xs">
                      {dest.region} • {dest.state}
                    </span>

                    {/* Overlay info */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center justify-between text-xs mb-0.5">
                        <span className="text-amber-300 flex items-center gap-1 font-semibold">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          {dest.rating}
                        </span>
                        <span className="text-[11px] bg-slate-900/70 px-2 py-0.5 rounded-md">
                          {dest.idealDays} Days Ideal
                        </span>
                      </div>
                      <h3 className="text-xl font-black">{dest.name}</h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-slate-500 mb-3 line-clamp-2">
                        {dest.tagline}
                      </p>

                      {/* Vibe tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {dest.vibe.map((v) => (
                          <span key={v} className="text-[10px] bg-orange-50 text-orange-800 border border-orange-100 px-2 py-0.5 rounded-full font-medium">
                            {v}
                          </span>
                        ))}
                      </div>

                      {/* Best Season & Highlights */}
                      <div className="space-y-1.5 text-xs text-slate-600 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-orange-600" />
                          <span>Best: {dest.bestSeason}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          ★ {dest.highlights.slice(0, 2).join(' • ')}
                        </div>
                      </div>
                    </div>

                    {/* Price and actions */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Avg. Daily Cost</div>
                        <div className="text-sm font-extrabold text-slate-900">
                          {formatCurrency(dest.avgDailyCostInr, currency)}
                          <span className="text-[10px] font-normal text-slate-500"> /day</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveModalDest(dest)}
                          className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold cursor-pointer"
                        >
                          Guide
                        </button>
                        <button
                          onClick={() => onPlanTrip(dest.name)}
                          className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Plan</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto">
            <Compass className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No destinations match your criteria</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try adjusting your region or vibe filters, or clear your search term.
            </p>
            <button
              onClick={() => {
                setSelectedRegion('All');
                setSelectedVibe('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Detail Modal */}
        <DestinationDetailModal
          destination={activeModalDest}
          onClose={() => setActiveModalDest(null)}
          currency={currency}
          isSaved={activeModalDest ? savedDestinations.includes(activeModalDest.id) : false}
          onToggleSave={onToggleSave}
          onPlanTrip={onPlanTrip}
        />

      </div>
    </section>
  );
};
