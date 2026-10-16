import React, { useState } from 'react';
import { EMERGENCY_NUMBERS, SAFETY_TIPS } from '../data/safetyTips';
import { TRAVEL_ESSENTIALS } from '../data/travelEssentials';
import { 
  ShieldCheck, AlertTriangle, PhoneCall, Smartphone, Wifi, 
  Train, FileCheck, CheckCircle2, QrCode, ArrowRight, ShieldAlert 
} from 'lucide-react';

export const SafetyAndUpiSection: React.FC = () => {
  const [selectedScamTab, setSelectedScamTab] = useState<string>('All');

  const scamCategories = ['All', 'Scam Alert', 'Transit', 'Digital & Payments', 'Health & Water', 'Cultural Respect'];

  const filteredSafetyTips = SAFETY_TIPS.filter(tip => {
    if (selectedScamTab === 'All') return true;
    return tip.category === selectedScamTab;
  });

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldAlert className="w-3.5 h-3.5 text-red-700" />
            <span>Smart Tourist Protection & Digital Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Safety Radar, Helplines & UPI Cashless Guide
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Verified protocols from the Ministry of Tourism, cyber-safety precautions, 24x7 multi-lingual helplines, and UPI QR payments for international travelers.
          </p>
        </div>

        {/* 24x7 Emergency Helplines Grid */}
        <div className="mb-12">
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-red-600" />
            <span>Official Pan-India 24x7 Emergency Helplines</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EMERGENCY_NUMBERS.map((item) => (
              <div
                key={item.number}
                className="p-5 rounded-2xl bg-linear-to-b from-slate-50 to-white border border-slate-200 hover:border-red-300 transition-colors flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-900">{item.title}</span>
                    <a
                      href={`tel:${item.number.split('/')[0].trim()}`}
                      className="px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-black tracking-wider flex items-center gap-1 shadow-2xs"
                    >
                      <PhoneCall className="w-3 h-3" />
                      <span>{item.number}</span>
                    </a>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-emerald-700 font-semibold">
                  ✓ Free toll-free call from any mobile network
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Cashless Superpower: UPI Guide */}
        <div className="mb-12 bg-linear-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                  Revolutionary Travel Tech
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mt-2">
                  UPI Cashless Guide for International Tourists
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  In India, street food vendors, tuk-tuk drivers, and five-star boutiques all accept instant digital payments via QR codes. You don't need an Indian bank account to use it.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center shrink-0">
                <QrCode className="w-10 h-10 text-emerald-400 mx-auto mb-1" />
                <div className="text-xs font-bold text-white">Scan & Pay Anywhere</div>
                <div className="text-[10px] text-slate-300">0% Foreign Markup Fees</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center mb-2">
                  1
                </div>
                <h4 className="text-xs font-bold text-white mb-1">Pre-Trip / Airport Kiosk</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Download <strong>Cheq UPI</strong> app or visit the <strong>UPI One World</strong> counter at Delhi IGI / Mumbai CSMIA airport arrivals.
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center mb-2">
                  2
                </div>
                <h4 className="text-xs font-bold text-white mb-1">Passport Verification</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Verify using your physical passport and printed Indian e-Visa. Complete automated video KYC or counter verification.
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center mb-2">
                  3
                </div>
                <h4 className="text-xs font-bold text-white mb-1">Load Indian Rupees</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Top up your digital wallet using your international Visa, Mastercard, or foreign cash at competitive bank exchange rates.
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center mb-2">
                  4
                </div>
                <h4 className="text-xs font-bold text-white mb-1">Scan Any Merchant QR</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Point phone camera at PhonePe, Google Pay, or Paytm QR codes at any roadside tea stall, taxi, or market. Pay exact INR!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tourist Scam Radar & Safe Practices */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <span>Tourist Scam Radar & Street Savvy Guide</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Know common street tactics in advance to navigate tourist hubs with complete confidence.
              </p>
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {scamCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedScamTab(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                    selectedScamTab === c
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSafetyTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                      {tip.category}
                    </span>
                    <span className="text-[10px] bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-md">
                      Safety Alert
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-slate-900 mb-2">
                    {tip.title}
                  </h4>

                  <p className="text-xs text-slate-700 leading-relaxed mb-3">
                    {tip.tip}
                  </p>

                  {tip.scamWarning && (
                    <div className="p-3 bg-red-50/80 rounded-xl border border-red-200 text-xs text-red-900 mb-3">
                      <strong>The Trap:</strong> {tip.scamWarning}
                    </div>
                  )}
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong>Smart Response:</strong> {tip.whatToDo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
