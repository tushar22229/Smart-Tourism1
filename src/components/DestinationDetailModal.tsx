import React from 'react';
import { Destination } from '../types';
import { formatCurrency } from '../utils/currency';
import { X, MapPin, Plane, Train, Sparkles, Utensils, Lightbulb, Thermometer, Heart, CheckCircle } from 'lucide-react';

interface DestinationDetailModalProps {
  destination: Destination | null;
  onClose: () => void;
  currency: string;
  isSaved: boolean;
  onToggleSave: (destId: string) => void;
  onPlanTrip: (destName: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
  currency,
  isSaved,
  onToggleSave,
  onPlanTrip
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Banner */}
        <div className="relative h-64 sm:h-72 w-full">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-xs transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={() => onToggleSave(destination.id)}
            className={`absolute top-4 right-16 p-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer ${
              isSaved ? 'bg-red-500 text-white' : 'bg-black/40 hover:bg-black/60 text-white'
            }`}
            title={isSaved ? 'Remove from Saved' : 'Save to Bucket List'}
          >
            <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-600 text-white">
                {destination.region} India
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/20 backdrop-blur-xs">
                {destination.state}
              </span>
              <span className="text-amber-400 font-bold text-xs">★ {destination.rating}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">{destination.name}</h2>
            <p className="text-slate-200 text-xs sm:text-sm mt-0.5">{destination.tagline}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Recommended Time</div>
              <div className="text-sm font-bold text-slate-800">{destination.idealDays} Days</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Best Season</div>
              <div className="text-sm font-bold text-slate-800">{destination.bestSeason}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Avg Daily Cost</div>
              <div className="text-sm font-bold text-orange-600">{formatCurrency(destination.avgDailyCostInr, currency)}/day</div>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400">Weather Profile</div>
              <div className="text-xs font-semibold text-slate-700">{destination.weatherOverview.tempRange.split('|')[0]}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Overview</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Top Highlights */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Key Highlights & Sights</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {destination.highlights.map((hl) => (
                <div key={hl} className="p-2.5 bg-orange-50/50 rounded-xl border border-orange-100/70 text-xs text-slate-700 font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Food Delicacies */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-amber-600" />
              <span>Must-Try Local Flavors</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {destination.localFood.map((food) => (
                <span key={food} className="px-3 py-1 bg-amber-50 text-amber-900 border border-amber-200/60 rounded-lg text-xs font-semibold">
                  {food}
                </span>
              ))}
            </div>
          </div>

          {/* Connectivity */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Transit & Getting There</h3>
            <div className="text-xs text-slate-600 flex items-start gap-2">
              <Plane className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span><strong>Airport:</strong> {destination.nearestAirport}</span>
            </div>
            <div className="text-xs text-slate-600 flex items-start gap-2">
              <Train className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Train / Rail:</strong> {destination.nearestRailway}</span>
            </div>
          </div>

          {/* Insider Tip */}
          <div className="p-4 bg-linear-to-r from-amber-50 to-orange-50 border border-orange-200 rounded-2xl flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">Smart Insider Tip</div>
              <p className="text-xs text-amber-950 mt-0.5 leading-relaxed font-medium">
                {destination.insiderTip}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Saved to local bucket list for offline reference
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-white cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onPlanTrip(destination.name);
                onClose();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate AI Itinerary for {destination.name}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
