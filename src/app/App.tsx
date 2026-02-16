import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { CommandPalette } from './components/CommandPalette';
import { FloatingAssistant } from './components/FloatingAssistant';
import { Dashboard } from './pages/Dashboard';
import { Database } from './pages/Database';
import { CompanyIntelligence } from './pages/CompanyIntelligence';
import { AIAssistant } from './pages/AIAssistant';
import { TechnicalTools } from './pages/TechnicalTools';
import { Analytics } from './pages/Analytics';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';

export default function App() {
  const [showCommandPalette, setShowCommandPalette] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowCommandPalette(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F6F9FC]">
        <Header />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/database" element={<Database />} />
            <Route path="/company/:id" element={<CompanyIntelligence />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/tools" element={<TechnicalTools />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <CommandPalette 
          isOpen={showCommandPalette} 
          onClose={() => setShowCommandPalette(false)} 
        />
        <FloatingAssistant />
      </div>
    </BrowserRouter>
  );
}