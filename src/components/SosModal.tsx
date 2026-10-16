import React from 'react';
import { EMERGENCY_NUMBERS } from '../data/safetyTips';
import { ShieldAlert, PhoneCall, X, MapPin, AlertCircle } from 'lucide-react';

interface SosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SosModal: React.FC<SosModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-red-200">
        
        {/* Banner */}
        <div className="p-6 bg-red-600 text-white rounded-t-3xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-xs">
              <ShieldAlert className="w-7 h-7 text-white animate-bounce" />
            </div>
            <div>
              <h2 className="text-xl font-black">Tourist Emergency SOS</h2>
              <p className="text-xs text-red-100">Pan-India 24x7 Multi-lingual Assistance</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          
          <div className="p-3.5 bg-red-50 rounded-2xl border border-red-200 text-xs text-red-950 flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block mb-0.5">When dialing in an emergency:</strong>
              State your exact city, state, nearest prominent landmark (railway station, hotel, or monument), and language preference.
            </div>
          </div>

          <div className="space-y-3">
            {EMERGENCY_NUMBERS.map((item) => (
              <div
                key={item.number}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 hover:bg-white hover:border-red-300 transition-colors"
              >
                <div>
                  <div className="font-extrabold text-slate-900 text-sm">{item.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{item.description}</div>
                </div>

                <a
                  href={`tel:${item.number.split('/')[0].trim()}`}
                  className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black tracking-wider flex items-center gap-1.5 shrink-0 shadow-md transition-transform hover:scale-105"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call {item.number.split('/')[0].trim()}</span>
                </a>
              </div>
            ))}
          </div>

        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 rounded-b-3xl text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold cursor-pointer"
          >
            Close Emergency Panel
          </button>
        </div>

      </div>
    </div>
  );
};
