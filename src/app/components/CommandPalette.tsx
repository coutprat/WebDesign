import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, Command, BarChart3, FileText, Database, 
  Bot, Building2, TrendingUp, Settings, Users 
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = [
    { icon: BarChart3, label: 'Generate New Analysis', shortcut: 'N', category: 'Actions' },
    { icon: FileText, label: 'Generate Report', shortcut: 'R', category: 'Actions' },
    { icon: Database, label: 'Compare Companies', shortcut: 'C', category: 'Actions' },
    { icon: Bot, label: 'Run AI Scan', shortcut: 'A', category: 'Actions' },
    { icon: TrendingUp, label: 'Upload Document', shortcut: 'U', category: 'Actions' },
    { icon: Building2, label: 'Go to 483 Database', shortcut: 'D', category: 'Navigation' },
    { icon: Bot, label: 'Go to AI Assistant', shortcut: 'I', category: 'Navigation' },
    { icon: BarChart3, label: 'Go to Analytics', shortcut: 'Y', category: 'Navigation' },
    { icon: FileText, label: 'Go to Reports', shortcut: 'P', category: 'Navigation' },
    { icon: Settings, label: 'Go to Settings', shortcut: 'S', category: 'Navigation' },
    { icon: Users, label: 'View Recent Activity', shortcut: '', category: 'Tools' },
    { icon: Database, label: 'View Saved Views', shortcut: '', category: 'Tools' },
  ];

  const filteredCommands = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, typeof commands>);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        // Execute selected command
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, filteredCommands.length]);

  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
          />

          {/* Command Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-[101]"
          >
            <div className="mx-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E6EEF5] shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-[#E6EEF5]">
                <Search className="text-[#64748B]" size={20} />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent text-sm focus:outline-none text-[#0F172A]"
                  autoFocus
                />
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#E6EEF5]">
                  <span className="text-xs text-[#64748B] font-semibold">ESC</span>
                </div>
              </div>

              {/* Commands List */}
              <div className="max-h-96 overflow-y-auto p-2">
                {Object.entries(groupedCommands).map(([category, cmds]) => (
                  <div key={category} className="mb-4 last:mb-0">
                    <div className="px-3 py-2 text-xs font-semibold text-[#64748B]">{category}</div>
                    <div className="space-y-1">
                      {cmds.map((cmd, idx) => {
                        const Icon = cmd.icon;
                        const globalIndex = filteredCommands.indexOf(cmd);
                        return (
                          <button
                            key={idx}
                            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                              selectedIndex === globalIndex
                                ? 'bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white shadow-lg shadow-[#0EA5E9]/25'
                                : 'hover:bg-[#F6F9FC] text-[#0F172A]'
                            }`}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            onClick={onClose}
                          >
                            <div className="flex items-center gap-3">
                              <Icon size={18} className={selectedIndex === globalIndex ? 'text-white' : 'text-[#0EA5E9]'} />
                              <span className="text-sm font-medium">{cmd.label}</span>
                            </div>
                            {cmd.shortcut && (
                              <div className={`px-2 py-0.5 rounded text-xs font-semibold ${
                                selectedIndex === globalIndex
                                  ? 'bg-white/20 text-white'
                                  : 'bg-[#E6EEF5] text-[#64748B]'
                              }`}>
                                {cmd.shortcut}
                              </div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {filteredCommands.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-sm text-[#64748B]">No commands found</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-[#E6EEF5] bg-[#F6F9FC]">
                <div className="flex items-center gap-4 text-xs text-[#64748B]">
                  <div className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#E6EEF5] text-[10px]">↑</kbd>
                    <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#E6EEF5] text-[10px]">↓</kbd>
                    <span>Navigate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#E6EEF5] text-[10px]">↵</kbd>
                    <span>Select</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#64748B]">
                  <Command size={12} />
                  <span>Command Palette</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
