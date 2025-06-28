'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Zap, Globe, Users, RefreshCw, AlertTriangle } from 'lucide-react';

const WorldResetAnalysis = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [animatedEvents, setAnimatedEvents] = useState<any[]>([]);

  const events = [
    {
      id: 1,
      name: "Toba Supervolcanic Eruption",
      year: "~74,000 BCE",
      type: "natural",
      category: "volcanic",
      impact: "Near-extinction of humans - population bottleneck to ~10,000 individuals",
      resetPattern: "Species-level reset",
      description: "Massive volcanic winter lasting 6-10 years, genetic bottleneck still visible in human DNA today",
      lessons: "Nature's ultimate population control mechanism"
    },
    {
      id: 2,
      name: "End-Permian Mass Extinction",
      year: "~252 million years ago",
      type: "natural",
      category: "extinction",
      impact: "96% of marine species extinct, 70% of terrestrial species",
      resetPattern: "Biosphere reset",
      description: "The Great Dying - cleared evolutionary stage for new life forms",
      lessons: "Complete ecosystem collapse allows for evolutionary innovation"
    },
    {
      id: 3,
      name: "Asteroid Impact (K-T Boundary)",
      year: "~66 million years ago",
      type: "natural",
      category: "cosmic",
      impact: "End of dinosaur era, rise of mammals",
      resetPattern: "Evolutionary reset",
      description: "Chicxulub impact created new ecological niches for small mammals",
      lessons: "Sudden catastrophe can shift dominant life forms entirely"
    },
    {
      id: 4,
      name: "Black Death",
      year: "1347-1351 CE",
      type: "natural",
      category: "pandemic",
      impact: "30-60% of Europe's population died",
      resetPattern: "Social/economic reset",
      description: "Labor shortage led to end of feudalism, rise of middle class, wage increases",
      lessons: "Population collapse can break rigid social structures"
    },
    {
      id: 5,
      name: "Little Ice Age",
      year: "1300-1850 CE",
      type: "natural",
      category: "climate",
      impact: "Agricultural crisis, political upheaval, exploration push",
      resetPattern: "Civilizational adaptation",
      description: "Drove technological innovation, exploration, and social change",
      lessons: "Climate pressure forces innovation and expansion"
    },
    {
      id: 6,
      name: "1815 Mount Tambora Eruption",
      year: "1815 CE",
      type: "natural",
      category: "volcanic",
      impact: "Year Without a Summer, global crop failures, migrations",
      resetPattern: "Global economic reset",
      description: "Led to westward migration in US, invention of bicycle, Mary Shelley's Frankenstein",
      lessons: "Natural disasters can trigger unexpected innovations"
    },
    {
      id: 7,
      name: "World War I",
      year: "1914-1918",
      type: "artificial",
      category: "war",
      impact: "End of empires, redrawing of world map, social revolution",
      resetPattern: "Geopolitical reset",
      description: "Collapsed Ottoman, Austro-Hungarian, German, Russian empires",
      lessons: "Large-scale conflict reshuffles global power structures"
    },
    {
      id: 8,
      name: "1918 Flu Pandemic",
      year: "1918-1919",
      type: "natural",
      category: "pandemic",
      impact: "50-100 million deaths, changed public health forever",
      resetPattern: "Health system reset",
      description: "Led to modern public health infrastructure and mask-wearing culture",
      lessons: "Pandemics force rapid adaptation of social behaviors"
    },
    {
      id: 9,
      name: "World War II & Nuclear Age",
      year: "1939-1945",
      type: "artificial",
      category: "war",
      impact: "Reshaped global order, nuclear deterrence, UN formation",
      resetPattern: "World order reset",
      description: "Created bipolar world, nuclear balance of terror, decolonization wave",
      lessons: "Technology can create entirely new rules of international relations"
    },
    {
      id: 10,
      name: "COVID-19 Pandemic",
      year: "2020-2023",
      type: "natural",
      category: "pandemic",
      impact: "Remote work revolution, supply chain reset, digital acceleration",
      resetPattern: "Behavioral/technological reset",
      description: "Accelerated digital transformation by decades in months",
      lessons: "Modern pandemics can rapidly reshape work and social patterns"
    }
  ];

  const resetPatterns = [
    {
      pattern: "Population Bottleneck",
      description: "Massive population reduction forces evolutionary or social adaptation",
      examples: ["Toba eruption", "Black Death", "World Wars"],
      mechanism: "Survivor selection creates new genetic/cultural baselines"
    },
    {
      pattern: "Ecosystem Collapse & Renewal",
      description: "Complete breakdown allows new dominant species/systems to emerge",
      examples: ["Mass extinctions", "Civilizational collapses"],
      mechanism: "Vacant niches get filled by previously marginal groups"
    },
    {
      pattern: "Technological Acceleration",
      description: "Crisis drives rapid innovation and adoption of new technologies",
      examples: ["Wars", "Pandemics", "Climate pressures"],
      mechanism: "Necessity breaks resistance to change"
    },
    {
      pattern: "Social Structure Reset",
      description: "Existing hierarchies collapse, new power structures emerge",
      examples: ["Plagues", "Revolutions", "Economic crises"],
      mechanism: "Old elites weakened, new opportunities for social mobility"
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.type === selectedCategory);

  useEffect(() => {
    // Reset animation when category changes
    setAnimatedEvents([]);
  }, [selectedCategory]);

  useEffect(() => {
    // Animate events appearing one by one
    if (animatedEvents.length < filteredEvents.length) {
      const timer = setTimeout(() => {
        setAnimatedEvents(prev => [...prev, filteredEvents[prev.length]]);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [animatedEvents.length, filteredEvents]);

  return (
    <>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-in {
          from { 
            opacity: 0; 
            transform: translateX(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes grow-vertical {
          from { height: 0; }
          to { height: 100%; }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-grow-vertical {
          animation: grow-vertical 2s ease-out;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 text-blue-400">World Reset Events</h1>
          <p className="text-slate-300">Major events that fundamentally changed the course of history</p>
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-slate-800 p-1 rounded-lg animate-slide-up">
            {['all', 'natural', 'artificial'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md capitalize transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {category === 'all' ? 'All Events' : `${category} Events`}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-400 animate-slide-up">Timeline of Reset Events</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full animate-grow-vertical"></div>
            <div className="space-y-8">
              {animatedEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`flex items-center animate-slide-in ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div
                      className={`bg-slate-800 p-4 rounded-lg border-2 cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 hover:rotate-1 hover:-translate-y-2 hover:bg-slate-700 group ${
                        event.type === 'natural' ? 'border-green-500 hover:border-green-300 hover:shadow-green-500/30' : 'border-red-500 hover:border-red-300 hover:shadow-red-500/30'
                      } ${selectedEvent?.id === event.id ? 'ring-2 ring-blue-400 scale-105 shadow-xl shadow-blue-500/30' : ''}`}
                      onClick={() => setSelectedEvent(selectedEvent?.id === event.id ? null : event)}
                    >
                      <h3 className="font-bold text-lg mb-1 group-hover:text-blue-300 transition-colors duration-300">{event.name}</h3>
                      <p className="text-sm text-slate-400 mb-2 group-hover:text-slate-300 transition-colors duration-300">{event.year}</p>
                      <p className="text-sm group-hover:text-white transition-colors duration-300">{event.impact}</p>
                      <div className="flex items-center justify-end mt-2">
                        {event.type === 'natural' ? (
                          <Globe className="w-4 h-4 text-green-500 animate-spin-slow group-hover:scale-125 group-hover:text-green-300 transition-all duration-300" />
                        ) : (
                          <Users className="w-4 h-4 text-red-500 group-hover:scale-125 group-hover:text-red-300 transition-all duration-300" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 flex items-center justify-center z-10 animate-bounce-gentle">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Event Details */}
        {selectedEvent && (
          <div className="mb-12 bg-slate-800 rounded-lg p-6 border-2 border-blue-500 animate-fade-in shadow-xl shadow-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-400 animate-slide-in">{selectedEvent.name}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
                <h4 className="font-bold mb-2 text-green-400">Description</h4>
                <p className="text-slate-300 mb-4">{selectedEvent.description}</p>
                <h4 className="font-bold mb-2 text-yellow-400">Reset Pattern</h4>
                <p className="text-slate-300">{selectedEvent.resetPattern}</p>
              </div>
              <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <h4 className="font-bold mb-2 text-red-400">Key Lessons</h4>
                <p className="text-slate-300">{selectedEvent.lessons}</p>
              </div>
            </div>
          </div>
        )}

        {/* Reset Patterns Analysis */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-400 animate-slide-up">
            <RefreshCw className="inline-block mr-2 animate-spin-slow" />
            Nature's Reset Patterns
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resetPatterns.map((pattern, index) => (
              <div 
                key={index} 
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 animate-fade-in hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-bold mb-3 text-yellow-400">{pattern.pattern}</h3>
                <p className="text-slate-300 mb-4">{pattern.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-green-400 mb-2">Examples:</h4>
                  <p className="text-sm text-slate-400">{pattern.examples.join(", ")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Mechanism:</h4>
                  <p className="text-sm text-slate-300">{pattern.mechanism}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-lg animate-fade-in shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-center text-white animate-slide-up">
            <AlertTriangle className="inline-block mr-2" />
            Key Insights: Nature's Reset Mechanisms
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-black bg-opacity-30 p-4 rounded animate-slide-in hover:bg-opacity-40 transition-all duration-300" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-bold text-green-400 mb-2">Cyclical Patterns</h3>
              <p>Major resets occur roughly every 60-80 years for human societies, longer for biological systems</p>
            </div>
            <div className="bg-black bg-opacity-30 p-4 rounded animate-slide-in hover:bg-opacity-40 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-bold text-yellow-400 mb-2">Acceleration Effect</h3>
              <p>Each reset tends to speed up the pace of change and reduce time between subsequent resets</p>
            </div>
            <div className="bg-black bg-opacity-30 p-4 rounded animate-slide-in hover:bg-opacity-40 transition-all duration-300" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-bold text-red-400 mb-2">Preparation Paradox</h3>
              <p>The better we prepare for the last reset, the more vulnerable we become to the next type</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldResetAnalysis;