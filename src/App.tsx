import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CircuitsSection } from './components/CircuitsSection';
import { DestinationsSection } from './components/DestinationsSection';
import { AiPlannerSection } from './components/AiPlannerSection';
import { PersonalGuideSection } from './components/PersonalGuideSection';
import { UnescoSection } from './components/UnescoSection';
import { CuisineAndPhrasesSection } from './components/CuisineAndPhrasesSection';
import { SafetyAndUpiSection } from './components/SafetyAndUpiSection';
import { BudgetCalculatorSection } from './components/BudgetCalculatorSection';
import { SavedBucketListModal } from './components/SavedBucketListModal';
import { SosModal } from './components/SosModal';
import { Footer } from './components/Footer';
import { Circuit, GeneratedItinerary } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('explore');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currency, setCurrency] = useState<string>('INR');
  const [plannerDestination, setPlannerDestination] = useState<string>('Golden Triangle (Delhi-Agra-Jaipur)');

  // Local storage persisted state
  const [savedDestinations, setSavedDestinations] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('smart_india_saved_destinations');
      return stored ? JSON.parse(stored) : ['jaipur', 'alleppey'];
    } catch {
      return ['jaipur', 'alleppey'];
    }
  });

  const [savedItineraries, setSavedItineraries] = useState<GeneratedItinerary[]>(() => {
    try {
      const stored = localStorage.getItem('smart_india_saved_itineraries');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [isSosModalOpen, setIsSosModalOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('smart_india_saved_destinations', JSON.stringify(savedDestinations));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [savedDestinations]);

  useEffect(() => {
    try {
      localStorage.setItem('smart_india_saved_itineraries', JSON.stringify(savedItineraries));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [savedItineraries]);

  const handleToggleSaveDestination = (destId: string) => {
    setSavedDestinations(prev =>
      prev.includes(destId) ? prev.filter(id => id !== destId) : [...prev, destId]
    );
  };

  const handleSaveItinerary = (itinerary: GeneratedItinerary) => {
    setSavedItineraries(prev => {
      const exists = prev.some(item => item.id === itinerary.id);
      if (exists) {
        return prev.filter(item => item.id !== itinerary.id);
      }
      return [itinerary, ...prev];
    });
  };

  const isItinerarySaved = (id: string) => {
    return savedItineraries.some(item => item.id === id);
  };

  const handlePlanDestination = (destName: string) => {
    setPlannerDestination(destName);
    setActiveTab('planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlanCircuit = (circuit: Circuit) => {
    setPlannerDestination(circuit.title);
    setActiveTab('planner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickTagSelect = (tag: string) => {
    if (tag.toLowerCase() === 'safety') {
      setActiveTab('safety');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (tag.toLowerCase() === 'upi') {
      setActiveTab('safety');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (tag.toLowerCase().includes('circuit') || tag.toLowerCase().includes('golden triangle')) {
      setActiveTab('circuits');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (tag.toLowerCase().includes('guide')) {
      setActiveTab('guides');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setSearchQuery(tag);
    setActiveTab('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        savedCount={savedDestinations.length + savedItineraries.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
        onOpenSos={() => setIsSosModalOpen(true)}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Main Content Area based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'explore' && (
          <>
            <Hero
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onExploreCircuits={() => {
                setActiveTab('circuits');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onLaunchPlanner={() => {
                setActiveTab('planner');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectQuickTag={handleQuickTagSelect}
            />

            <DestinationsSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              currency={currency}
              savedDestinations={savedDestinations}
              onToggleSave={handleToggleSaveDestination}
              onPlanTrip={handlePlanDestination}
            />
          </>
        )}

        {activeTab === 'circuits' && (
          <CircuitsSection
            currency={currency}
            onPlanCircuit={handlePlanCircuit}
          />
        )}

        {activeTab === 'planner' && (
          <AiPlannerSection
            initialDestination={plannerDestination}
            currency={currency}
            onSaveItinerary={handleSaveItinerary}
            isItinerarySaved={isItinerarySaved}
          />
        )}

        {activeTab === 'guides' && (
          <PersonalGuideSection currency={currency} />
        )}

        {activeTab === 'unesco' && (
          <UnescoSection />
        )}

        {activeTab === 'culture' && (
          <CuisineAndPhrasesSection />
        )}

        {activeTab === 'safety' && (
          <SafetyAndUpiSection />
        )}

        {activeTab === 'budget' && (
          <BudgetCalculatorSection currency={currency} />
        )}
      </main>

      {/* Modals */}
      <SavedBucketListModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedDestinations={savedDestinations}
        savedItineraries={savedItineraries}
        onRemoveDestination={(id) => setSavedDestinations(prev => prev.filter(item => item !== id))}
        onRemoveItinerary={(id) => setSavedItineraries(prev => prev.filter(item => item.id !== id))}
        onSelectDestination={handlePlanDestination}
        currency={currency}
      />

      <SosModal
        isOpen={isSosModalOpen}
        onClose={() => setIsSosModalOpen(false)}
      />

      {/* Global Footer */}
      <Footer
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSos={() => setIsSosModalOpen(true)}
      />
    </div>
  );
}
