import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X } from 'lucide-react';
import { AssistantPanel } from './AssistantPanel';

export function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuickPeek, setShowQuickPeek] = useState(false);
  const [hasNewInsights, setHasNewInsights] = useState(true);
  const [showFirstVisitPulse, setShowFirstVisitPulse] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Hide pulse after 3 seconds
    const timer = setTimeout(() => setShowFirstVisitPulse(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Close panel when route changes
    setIsOpen(false);
    // Show new insights badge when page changes
    setHasNewInsights(true);
  }, [location.pathname]);

  // Get page-specific quick peek insights
  const getQuickPeekInsights = () => {
    const path = location.pathname;
    
    if (path === '/') {
      return {
        insights: [
          'Risk score increased 5% this quarter',
          'Quality System observations trending up',
          'New Jersey remains hot spot region'
        ],
        action: 'Generate executive brief'
      };
    } else if (path === '/database') {
      return {
        insights: [
          '156 companies in filtered view',
          'Top system: Quality (29.9%)',
          '23% are repeat observations'
        ],
        action: 'Summarize filtered results'
      };
    } else if (path.startsWith('/company/')) {
      return {
        insights: [
          'Moderate risk score: 68/100',
          '8 observations in last 2 years',
          'CAPA effectiveness concerns'
        ],
        action: 'Generate company summary'
      };
    } else if (path === '/ai-assistant') {
      return {
        insights: [
          'Analysis workspace ready',
          'Connect data sources',
          'Run compliance scan'
        ],
        action: 'Start AI analysis'
      };
    } else if (path === '/tools') {
      return {
        insights: [
          '6 compliance tools available',
          'ANDA checklist 73% complete',
          'DMF validation pending'
        ],
        action: 'Guide tool selection'
      };
    } else if (path === '/analytics') {
      return {
        insights: [
          'Year-over-year trends detected',
          'System patterns identified',
          'Risk forecast available'
        ],
        action: 'Explain analytics'
      };
    }
    
    return {
      insights: [
        'Context-aware insights',
        'Smart summaries',
        'Guided actions'
      ],
      action: 'Get AI help'
    };
  };

  const quickPeek = getQuickPeekInsights();

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-40"
        onMouseEnter={() => setShowQuickPeek(true)}
        onMouseLeave={() => setShowQuickPeek(false)}
      >
        {/* Quick Peek Card */}
        <AnimatePresence>
          {showQuickPeek && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="absolute bottom-full right-0 mb-4 w-80"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E6EEF5] shadow-2xl p-5 overflow-hidden">
                {/* Gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B5CF6] via-[#B794F4] to-[#0EA5E9]" />
                
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#B794F4] shrink-0">
                    <Sparkles className="text-white" size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#0F172A] mb-1">Quick Insights</h4>
                    <p className="text-xs text-[#64748B]">AI-powered context analysis</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {quickPeek.insights.map((insight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[#64748B]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] mt-1.5 shrink-0" />
                      <span className="flex-1">{insight}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all flex items-center justify-center gap-2">
                  <Sparkles size={16} />
                  <span>{quickPeek.action}</span>
                </button>

                <div className="mt-3 pt-3 border-t border-[#E6EEF5] flex items-center justify-between">
                  <div className="text-xs text-[#64748B]">Based on current page</div>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-[#10B981]" />
                    <span className="text-xs text-[#64748B]">95% confidence</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button */}
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setHasNewInsights(false);
          }}
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulse animation for first visit */}
          {showFirstVisitPulse && (
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#B794F4] opacity-75"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.75, 0, 0.75],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}

          {/* Main button */}
          <div className="relative w-16 h-16 rounded-full bg-white/90 backdrop-blur-xl border-2 border-[#E6EEF5] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center">
            {/* Gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#B794F4] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity" style={{ padding: '2px' }}>
              <div className="w-full h-full rounded-full bg-white" />
            </div>
            
            {/* Icon */}
            <div className="relative z-10">
              <Sparkles className="text-[#8B5CF6] group-hover:text-[#0EA5E9] transition-colors" size={28} />
            </div>

            {/* New insights badge */}
            {hasNewInsights && !isOpen && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-[#EF4444] to-[#DC2626] rounded-full border-2 border-white shadow-lg"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-full h-full rounded-full bg-[#EF4444]"
                />
              </motion.div>
            )}
          </div>

          {/* Hover tooltip (simple) */}
          <AnimatePresence>
            {!showQuickPeek && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              >
                <div className="px-3 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-medium shadow-lg">
                  Need help? Ask AI
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                    <div className="w-0 h-0 border-l-4 border-l-[#0F172A] border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Assistant Panel */}
      <AssistantPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
