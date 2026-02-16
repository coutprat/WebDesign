import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X } from 'lucide-react';

interface AIAutoSuggestProps {
  show: boolean;
  message: string;
  onClose: () => void;
  onGenerate: () => void;
}

export function AIAutoSuggest({ show, message, onClose, onGenerate }: AIAutoSuggestProps) {
  useEffect(() => {
    if (show) {
      // Auto-dismiss after 8 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 right-6 z-30 w-96"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E6EEF5] shadow-2xl overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B5CF6] via-[#B794F4] to-[#0EA5E9]" />
            
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#B794F4] shrink-0">
                  <Sparkles className="text-white" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A] mb-0.5">AI Suggestion</h4>
                      <p className="text-xs text-[#64748B]">Smart assistant detected a change</p>
                    </div>
                    <button
                      onClick={onClose}
                      className="p-1 rounded-lg hover:bg-[#F6F9FC] transition-all"
                    >
                      <X size={16} className="text-[#64748B]" />
                    </button>
                  </div>
                  <p className="text-sm text-[#64748B] mb-3 leading-relaxed">
                    {message}
                  </p>
                  <button
                    onClick={() => {
                      onGenerate();
                      onClose();
                    }}
                    className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles size={16} />
                    <span>Generate Summary</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
