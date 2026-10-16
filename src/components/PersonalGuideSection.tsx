import React, { useState } from 'react';
import { PERSONAL_GUIDES, LOCATION_CONCIERGE_TIPS } from '../data/guides';
import { PersonalGuide, GuideBookingInquiry } from '../types';
import { formatCurrency } from '../utils/currency';
import { 
  UserCheck, Globe2, MapPin, Award, Star, CheckCircle, Shield, 
  Languages, Clock, Calendar, Sparkles, MessageSquare, PhoneCall, 
  Search, X, Send, Check, Heart, ExternalLink 
} from 'lucide-react';

interface PersonalGuideSectionProps {
  currency: string;
}

export const PersonalGuideSection: React.FC<PersonalGuideSectionProps> = ({ currency }) => {
  // Audience mode: 'international' or 'domestic'
  const [audienceMode, setAudienceMode] = useState<'international' | 'domestic'>('international');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [guideSearch, setGuideSearch] = useState<string>('');

  // Modals state
  const [selectedGuideForBooking, setSelectedGuideForBooking] = useState<PersonalGuide | null>(null);
  const [selectedGuideDetails, setSelectedGuideDetails] = useState<PersonalGuide | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingRefId, setBookingRefId] = useState<string>('');

  // AI Concierge Chat / QA state
  const [activeConciergeLocation, setActiveConciergeLocation] = useState<string>('Jaipur');
  const [customQuestion, setCustomQuestion] = useState<string>('');
  const [customAnswer, setCustomAnswer] = useState<string | null>(null);
  const [isAsking, setIsAsking] = useState<boolean>(false);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState<GuideBookingInquiry>({
    guideId: '',
    guideName: '',
    travelerName: '',
    travelerEmail: '',
    travelerPhone: '',
    travelerOrigin: audienceMode === 'international' ? 'International' : 'Domestic (Indian)',
    countryOrState: '',
    preferredLanguage: 'English',
    serviceType: 'Full-Day (8 Hours)',
    date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    partySize: 2,
    specialRequests: ''
  });

  const locations = ['All', 'Jaipur', 'Agra', 'Varanasi (Kashi)', 'Kochi & Alleppey', 'New Delhi & Old Delhi', 'Leh-Ladakh', 'Goa', 'Hampi'];
  const specialties = ['All', 'Architecture', 'Photography', 'Food', 'Spiritual', 'Wildlife & Trek'];

  // Filter guides
  const filteredGuides = PERSONAL_GUIDES.filter((guide) => {
    // Location match
    if (selectedLocation !== 'All' && !guide.location.toLowerCase().includes(selectedLocation.split(' ')[0].toLowerCase())) {
      return false;
    }

    // Specialty match
    if (selectedSpecialty !== 'All') {
      const match = guide.specialties.some(s => s.toLowerCase().includes(selectedSpecialty.toLowerCase()));
      if (!match) return false;
    }

    // Search query
    if (guideSearch.trim()) {
      const q = guideSearch.toLowerCase();
      const matchName = guide.name.toLowerCase().includes(q);
      const matchLoc = guide.location.toLowerCase().includes(q);
      const matchLang = guide.languages.some(l => l.toLowerCase().includes(q));
      const matchSpec = guide.specialties.some(s => s.toLowerCase().includes(q));
      if (!matchName && !matchLoc && !matchLang && !matchSpec) return false;
    }

    return true;
  });

  const handleOpenBooking = (guide: PersonalGuide) => {
    setSelectedGuideForBooking(guide);
    setBookingForm({
      ...bookingForm,
      guideId: guide.id,
      guideName: guide.name,
      preferredLanguage: guide.languages[0].split(' ')[0],
      travelerOrigin: audienceMode === 'international' ? 'International' : 'Domestic (Indian)'
    });
    setBookingConfirmed(false);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `IND-GUIDE-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRefId(ref);
    setBookingConfirmed(true);
  };

  const handleAskConcierge = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!customQuestion.trim()) return;

    setIsAsking(true);
    setTimeout(() => {
      let ans = '';
      const q = customQuestion.toLowerCase();
      if (audienceMode === 'international') {
        ans = `[International Tourist Advisor for ${activeConciergeLocation}]: Regarding "${customQuestion}":
1. Safety & Pricing: Always take pre-paid booths or use Uber/Ola for fixed transparent pricing. Avoid street touts claiming monuments are closed.
2. Digital Payments: Use Cheq UPI or UPI One World on your phone for instant QR payments with zero foreign markup.
3. Cultural Etiquette: Remove shoes at temple/monument steps (carry clean socks for sun-heated marble). Dress with shoulders and knees covered.
4. Food & Water: Stick to sealed bottled water (Bisleri, Aquafina) and high-turnover hot restaurants.`;
      } else {
        ans = `[Domestic Traveler Guide for ${activeConciergeLocation}]: Regarding "${customQuestion}":
1. Darshan & Entry: For temples and major monuments, book government online portal tickets to bypass 2-hour holiday lines.
2. Regional Food: Ask locals for traditional thali institutions away from main highway tourist stops for authentic regional taste and fair pricing.
3. Language & Transport: Local auto drivers will quote high rates for outstation tourists; speak calmly and negotiate with "Meter se chalo" or book via apps.`;
      }
      setCustomAnswer(ans);
      setIsAsking(false);
    }, 600);
  };

  const activeConciergeTip = LOCATION_CONCIERGE_TIPS.find(
    t => t.location.toLowerCase().includes(activeConciergeLocation.toLowerCase())
  ) || LOCATION_CONCIERGE_TIPS[0];

  return (
    <section className="py-12 bg-linear-to-b from-white via-slate-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-linear-to-r from-orange-500/10 to-amber-500/10 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
            <UserCheck className="w-3.5 h-3.5 text-orange-600" />
            <span>Certified Personal Tour Guides & Concierge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Personal Local Guide Directory & Concierge
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Connect with licensed Ministry of Tourism and ASI certified personal guides specialized in both <strong>International Visitors</strong> and <strong>Domestic Indian Travelers</strong>.
          </p>

          {/* DUAL MODE TOGGLE: Domestic vs International */}
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-xs mt-6">
            <button
              onClick={() => {
                setAudienceMode('international');
                setBookingForm(prev => ({ ...prev, travelerOrigin: 'International' }));
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                audienceMode === 'international'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe2 className="w-4 h-4 text-sky-400" />
              <span>International Tourist Mode</span>
              <span className="text-[10px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded-md hidden sm:inline">
                Multi-Lingual
              </span>
            </button>

            <button
              onClick={() => {
                setAudienceMode('domestic');
                setBookingForm(prev => ({ ...prev, travelerOrigin: 'Domestic (Indian)' }));
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                audienceMode === 'domestic'
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Domestic Indian Traveler Mode</span>
              <span className="text-[10px] bg-orange-700/50 text-white px-1.5 py-0.5 rounded-md hidden sm:inline">
                Vernacular
              </span>
            </button>
          </div>
        </div>

        {/* Audience Mode Banner Explanation */}
        <div className={`mb-8 p-5 rounded-2xl border flex items-start gap-3 transition-colors ${
          audienceMode === 'international' 
            ? 'bg-sky-50/70 border-sky-200 text-sky-950' 
            : 'bg-orange-50/70 border-orange-200 text-orange-950'
        }`}>
          <div className={`p-2 rounded-xl text-white shrink-0 ${
            audienceMode === 'international' ? 'bg-sky-600' : 'bg-orange-600'
          }`}>
            {audienceMode === 'international' ? <Globe2 className="w-5 h-5" /> : <Award className="w-5 h-5" />}
          </div>
          <div className="flex-1 text-xs">
            {audienceMode === 'international' ? (
              <>
                <strong className="text-sm block text-sky-900 mb-0.5 font-bold">
                  International Visitor Experience Focus
                </strong>
                Guides specialize in fluent foreign languages (English, French, Spanish, German, Russian, Italian), scam protection, cultural interpretation, airport transfers, foreign credit cards, and UPI One World setup.
              </>
            ) : (
              <>
                <strong className="text-sm block text-orange-900 mb-0.5 font-bold">
                  Domestic Indian Traveler Experience Focus
                </strong>
                Guides provide vernacular language fluency (Hindi, Bengali, Tamil, Telugu, Gujarati, Marathi), VIP temple Darshan protocol, family-friendly pacing, pure vegetarian/Jain cuisine vetting, and wholesale bazaar bargaining.
              </>
            )}
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={guideSearch}
                onChange={(e) => setGuideSearch(e.target.value)}
                placeholder="Search guide by name, city, languages (e.g. French, German, Tamil), or specialties..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-hidden focus:border-orange-500"
              />
              {guideSearch && (
                <button
                  onClick={() => setGuideSearch('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Specialty dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs text-slate-400 shrink-0">Specialty:</span>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-hidden w-full md:w-auto"
              >
                {specialties.map(s => (
                  <option key={s} value={s}>{s === 'All' ? 'All Specialties' : s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Location Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs text-slate-400 shrink-0 mr-1">Location:</span>
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                  selectedLocation === loc
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6">
                
                {/* Guide Profile Header */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={guide.photo}
                    alt={guide.name}
                    className="w-20 h-20 rounded-2xl object-cover shrink-0 border-2 border-white shadow-md"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-black text-slate-900">{guide.name}</h3>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{guide.rating}</span>
                        <span className="text-slate-400 font-normal">({guide.reviewsCount})</span>
                      </div>
                    </div>
                    <div className="text-xs text-orange-600 font-semibold">{guide.title}</div>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{guide.location}, {guide.state}</span>
                      <span>•</span>
                      <span>{guide.experienceYears} Years Exp</span>
                    </div>
                  </div>
                </div>

                {/* Badge and License */}
                <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    <span>{guide.badge}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                    Lic: {guide.licenseNumber}
                  </span>
                </div>

                {/* Spoken Languages */}
                <div className="mb-4">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Languages className="w-3.5 h-3.5 text-slate-400" />
                    <span>Spoken Languages</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {guide.languages.map((lang) => (
                      <span key={lang} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bio snippet */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {guide.bio}
                </p>

                {/* Tailored Highlights based on Domestic vs International */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-orange-600" />
                    <span>
                      {audienceMode === 'international' ? 'International Visitor Perks' : 'Domestic Pilgrim & Family Perks'}
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {(audienceMode === 'international' 
                      ? (guide.internationalHighlights || guide.includedServices.slice(0, 2))
                      : (guide.domesticHighlights || guide.includedServices.slice(0, 2))
                    ).map((h, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Price & Book CTA */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Standard Daily Fee (8h)</div>
                  <div className="text-base font-black text-slate-900">
                    {formatCurrency(guide.dailyRateInr, currency)}
                    <span className="text-[10px] font-normal text-slate-500"> /day</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    or {formatCurrency(guide.hourlyRateInr, currency)}/hour
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedGuideDetails(guide)}
                    className="px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-white text-xs font-semibold cursor-pointer"
                  >
                    Credentials
                  </button>
                  <button
                    onClick={() => handleOpenBooking(guide)}
                    className="px-4 py-2 rounded-xl bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold shadow-md cursor-pointer flex items-center gap-1"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Inquire / Hire</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Location Concierge QA Section (Domestic vs International) */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden relative mb-12">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                  Location Concierge Radar
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mt-2">
                  Location-Specific Expert Advice
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  Compare advice tailored specifically for domestic versus international travelers across major Indian tourist corridors.
                </p>
              </div>

              {/* Location Selector for Concierge */}
              <div className="flex flex-wrap gap-1.5">
                {['Jaipur', 'Varanasi', 'Agra', 'Alleppey & Kochi', 'Leh-Ladakh'].map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setActiveConciergeLocation(loc);
                      setCustomAnswer(null);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-colors ${
                      activeConciergeLocation === loc
                        ? 'bg-amber-500 text-slate-950 font-black'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Side by Side Domestic vs International Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
              <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
                {activeConciergeTip.category} • {activeConciergeTip.location}
              </div>
              <h4 className="text-lg font-bold text-white mb-4">
                "{activeConciergeTip.question}"
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-orange-950/40 border border-orange-500/30">
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>Domestic Indian Traveler Protocol</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {activeConciergeTip.domesticAnswer}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-500/30">
                  <div className="text-xs font-bold text-sky-400 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                    <Globe2 className="w-4 h-4" />
                    <span>International Tourist Protocol</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {activeConciergeTip.internationalAnswer}
                  </p>
                </div>
              </div>
            </div>

            {/* Live Interactive Ask Question Box */}
            <form onSubmit={handleAskConcierge} className="flex gap-2">
              <input
                type="text"
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                placeholder={`Ask our smart concierge any question about ${activeConciergeLocation}...`}
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-hidden focus:border-amber-400"
              />
              <button
                type="submit"
                disabled={isAsking}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isAsking ? <Sparkles className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>Ask</span>
              </button>
            </form>

            {/* Answer Display */}
            {customAnswer && (
              <div className="mt-4 p-4 rounded-xl bg-white/10 border border-white/20 text-xs text-slate-200 whitespace-pre-line leading-relaxed animate-in fade-in">
                {customAnswer}
              </div>
            )}

          </div>
        </div>

        {/* BOOKING / INQUIRY MODAL */}
        {selectedGuideForBooking && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600">
                    Official Guide Reservation
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    Inquire / Book {selectedGuideForBooking.name}
                  </h3>
                  <p className="text-xs text-slate-500">{selectedGuideForBooking.location} • {selectedGuideForBooking.badge}</p>
                </div>
                <button
                  onClick={() => setSelectedGuideForBooking(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!bookingConfirmed ? (
                <form onSubmit={handleConfirmBooking} className="space-y-4 text-xs">
                  
                  {/* Origin selector */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setBookingForm({ ...bookingForm, travelerOrigin: 'International' })}
                      className={`p-2.5 rounded-xl border text-center font-bold cursor-pointer transition-colors ${
                        bookingForm.travelerOrigin === 'International'
                          ? 'bg-sky-50 border-sky-300 text-sky-900'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      🌍 International Tourist
                    </button>
                    <button
                      type="button"
                      onClick={() => setBookingForm({ ...bookingForm, travelerOrigin: 'Domestic (Indian)' })}
                      className={`p-2.5 rounded-xl border text-center font-bold cursor-pointer transition-colors ${
                        bookingForm.travelerOrigin === 'Domestic (Indian)'
                          ? 'bg-orange-50 border-orange-300 text-orange-900'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      🇮🇳 Domestic Indian Traveler
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Smith or Rahul Sharma"
                        value={bookingForm.travelerName}
                        onChange={(e) => setBookingForm({ ...bookingForm, travelerName: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Country / State of Origin</label>
                      <input
                        type="text"
                        required
                        placeholder={bookingForm.travelerOrigin === 'International' ? 'e.g. USA, UK, Germany' : 'e.g. Maharashtra, Tamil Nadu'}
                        value={bookingForm.countryOrState}
                        onChange={(e) => setBookingForm({ ...bookingForm, countryOrState: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={bookingForm.travelerEmail}
                        onChange={(e) => setBookingForm({ ...bookingForm, travelerEmail: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">WhatsApp / Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 555-0192 or +91 9876543210"
                        value={bookingForm.travelerPhone}
                        onChange={(e) => setBookingForm({ ...bookingForm, travelerPhone: e.target.value })}
                        className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Date</label>
                      <input
                        type="date"
                        required
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full p-2 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Duration</label>
                      <select
                        value={bookingForm.serviceType}
                        onChange={(e) => setBookingForm({ ...bookingForm, serviceType: e.target.value as any })}
                        className="w-full p-2 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden"
                      >
                        <option value="Half-Day (4 Hours)">Half-Day (4h)</option>
                        <option value="Full-Day (8 Hours)">Full-Day (8h)</option>
                        <option value="Multi-Day (Full Trip)">Multi-Day (Full Trip)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Party Size</label>
                      <input
                        type="number"
                        min={1}
                        max={20}
                        value={bookingForm.partySize}
                        onChange={(e) => setBookingForm({ ...bookingForm, partySize: parseInt(e.target.value, 10) || 1 })}
                        className="w-full p-2 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Preferred Language</label>
                    <select
                      value={bookingForm.preferredLanguage}
                      onChange={(e) => setBookingForm({ ...bookingForm, preferredLanguage: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden"
                    >
                      {selectedGuideForBooking.languages.map(l => (
                        <option key={l} value={l.split(' ')[0]}>{l}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Special Requirements (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Elderly parents needing slow walking pace, dietary needs, airport pickup, photography focus..."
                      value={bookingForm.specialRequests}
                      onChange={(e) => setBookingForm({ ...bookingForm, specialRequests: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-hidden text-xs"
                    />
                  </div>

                  {/* Pricing estimation */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Estimated Service Fee</span>
                      <span className="font-extrabold text-slate-900 text-sm">
                        {bookingForm.serviceType.includes('Half-Day')
                          ? formatCurrency(selectedGuideForBooking.hourlyRateInr * 4, currency)
                          : formatCurrency(selectedGuideForBooking.dailyRateInr, currency)}
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-1 rounded-md">
                      ✓ No advance deposit required
                    </span>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedGuideForBooking(null)}
                      className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold shadow-md cursor-pointer flex items-center gap-1.5"
                    >
                      <Check className="w-4 h-4" />
                      <span>Submit Guide Inquiry</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900">Inquiry Confirmed!</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Your booking reference is <strong className="font-mono text-orange-600">{bookingRefId}</strong>.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5">
                    <div><strong>Assigned Guide:</strong> {selectedGuideForBooking.name}</div>
                    <div><strong>Date & Duration:</strong> {bookingForm.date} ({bookingForm.serviceType})</div>
                    <div><strong>Traveler:</strong> {bookingForm.travelerName} ({bookingForm.travelerOrigin})</div>
                    <div><strong>Preferred Language:</strong> {bookingForm.preferredLanguage}</div>
                    <div><strong>Confirmation Sent To:</strong> {bookingForm.travelerEmail} & {bookingForm.travelerPhone}</div>
                  </div>

                  <p className="text-[11px] text-slate-400">
                    The certified guide will reach out via WhatsApp / Email within 2 hours to coordinate meeting point & monument entry tickets.
                  </p>

                  <button
                    onClick={() => setSelectedGuideForBooking(null)}
                    className="px-6 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}

            </div>
          </div>
        )}

        {/* FULL CREDENTIALS MODAL */}
        {selectedGuideDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div>
                  <h3 className="text-xl font-black text-slate-900">{selectedGuideDetails.name}</h3>
                  <p className="text-xs text-slate-500">{selectedGuideDetails.title}</p>
                </div>
                <button
                  onClick={() => setSelectedGuideDetails(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedGuideDetails.photo}
                    alt={selectedGuideDetails.name}
                    className="w-16 h-16 rounded-2xl object-cover"
                  />
                  <div>
                    <div className="font-bold text-slate-800">{selectedGuideDetails.badge}</div>
                    <div className="text-slate-500 font-mono">License: {selectedGuideDetails.licenseNumber}</div>
                    <div className="text-orange-600 font-semibold">{selectedGuideDetails.experienceYears} Years Active Experience</div>
                  </div>
                </div>

                <div>
                  <strong className="text-slate-900 block mb-1">Biography:</strong>
                  <p className="text-slate-600 leading-relaxed">{selectedGuideDetails.bio}</p>
                </div>

                <div>
                  <strong className="text-slate-900 block mb-1">Included Services:</strong>
                  <ul className="space-y-1">
                    {selectedGuideDetails.includedServices.map((svc, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div><strong>Domestic Traveler Focus:</strong> {selectedGuideDetails.domesticHighlights?.join(' • ') || 'Family pacing and darshan rituals'}</div>
                  <div><strong>International Traveler Focus:</strong> {selectedGuideDetails.internationalHighlights?.join(' • ') || 'Foreign language commentary and scam shield'}</div>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setSelectedGuideDetails(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-semibold cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const g = selectedGuideDetails;
                    setSelectedGuideDetails(null);
                    handleOpenBooking(g);
                  }}
                  className="px-5 py-2 rounded-xl bg-orange-600 text-white font-bold cursor-pointer"
                >
                  Hire This Guide
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
