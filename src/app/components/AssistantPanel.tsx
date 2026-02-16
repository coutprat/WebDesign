import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Sparkles, Copy, Plus, Pin, Download, Lock, 
  ChevronRight, TrendingUp, AlertTriangle, Building2,
  BarChart3, FileText, Wrench, Database, Shield
} from 'lucide-react';

interface AssistantPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AssistantPanel({ isOpen, onClose }: AssistantPanelProps) {
  const location = useLocation();
  const params = useParams();
  const [mode, setMode] = useState<'summarize' | 'ask'>('summarize');
  const [selectedContext, setSelectedContext] = useState<string[]>(['All Data']);
  const [generating, setGenerating] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowSummary(false);
      setMode('summarize');
    }
  }, [isOpen, location.pathname]);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setShowSummary(true);
    }, 1500);
  };

  // Get page context
  const getPageContext = () => {
    const path = location.pathname;
    
    if (path === '/') {
      return {
        page: 'Dashboard',
        icon: BarChart3,
        color: '#0EA5E9',
        entity: null,
        contextChips: ['Q4 2024', 'All Systems', 'All Companies'],
        quickActions: [
          { label: 'Summarize executive insights', icon: Sparkles },
          { label: 'Explain risk score drivers', icon: TrendingUp },
          { label: 'What changed vs last year?', icon: BarChart3 },
          { label: 'Generate leadership brief', icon: FileText },
        ],
        summaryBlocks: [
          {
            title: 'Executive Overview',
            type: 'executive',
            icon: Sparkles,
            content: [
              'Overall risk score: 68/100 (Moderate)',
              'Total observations: 3,847 across 156 companies',
              'Most impacted system: Quality System (29.9% of observations)',
              'Hot spot region: New Jersey with 156 observations'
            ]
          },
          {
            title: 'Top Drivers This Quarter',
            type: 'technical',
            icon: TrendingUp,
            content: [
              'Investigation procedure gaps: +34% incidents YoY',
              'CAPA effectiveness concerns: +28% recurrence rate',
              'Laboratory control deviations: +19% findings',
              'Aseptic processing issues trending upward'
            ]
          },
          {
            title: 'Recommended Next Actions',
            type: 'action',
            icon: ChevronRight,
            content: [
              'Review Quality System compliance in top 10 companies',
              'Investigate New Jersey region concentration patterns',
              'Generate comparative analysis vs Q3 2024',
              'Schedule executive briefing on investigation procedures'
            ]
          }
        ]
      };
    } else if (path === '/database') {
      return {
        page: '483 Database',
        icon: Database,
        color: '#8B5CF6',
        entity: 'Filtered View',
        contextChips: ['156 Companies', '2022-2024', 'Quality System'],
        quickActions: [
          { label: 'Summarize filtered results', icon: Database },
          { label: 'Top recurring systems', icon: TrendingUp },
          { label: 'Highest-risk companies in view', icon: AlertTriangle },
          { label: 'Create saved view suggestion', icon: Pin },
        ],
        summaryBlocks: [
          {
            title: 'Filtered Results Summary',
            type: 'executive',
            icon: Database,
            content: [
              'Total companies: 156 matching current filters',
              'Total observations: 1,234 in selected timeframe',
              'Average risk score: 64/100 (Moderate)',
              'Date range: 2022-2024 (3 years)'
            ]
          },
          {
            title: 'Top 3 Recurring Systems',
            type: 'technical',
            icon: AlertTriangle,
            content: [
              'Quality System: 370 observations (29.9%)',
              'Production & Process Controls: 296 observations (24.0%)',
              'Laboratory Controls: 222 observations (18.0%)',
            ]
          },
          {
            title: 'Highest-Risk Companies',
            type: 'technical',
            icon: Building2,
            content: [
              'Pharma Global Inc. - Risk Score: 89 (Critical)',
              'MediCare Manufacturing - Risk Score: 85 (High)',
              'BioTech Solutions Ltd. - Risk Score: 82 (High)',
            ]
          },
          {
            title: 'Filter Refinement Suggestion',
            type: 'action',
            icon: Sparkles,
            content: [
              'Try adding "Repeat Observations" filter to identify recurring issues',
              'Consider narrowing to "High Risk" companies for focused review',
              'Add "FDA District" filter to analyze regional patterns'
            ]
          }
        ]
      };
    } else if (path.startsWith('/company/')) {
      return {
        page: 'Company Intelligence',
        icon: Building2,
        color: '#10B981',
        entity: 'Pharma Global Inc.',
        contextChips: ['New Jersey', '2020-2024', '8 Observations'],
        quickActions: [
          { label: 'Executive company summary', icon: Building2 },
          { label: 'Key observation patterns', icon: TrendingUp },
          { label: 'Probable root causes', icon: AlertTriangle },
          { label: 'Suggested CAPA outline', icon: FileText },
          { label: 'Compare with similar companies', icon: BarChart3 },
        ],
        summaryBlocks: [
          {
            title: 'Company Risk Overview',
            type: 'executive',
            icon: Shield,
            content: [
              'Overall risk score: 68/100 (Moderate)',
              'Total observations: 8 in last 4 years',
              'Recurrence probability: 34% (Above average)',
              'Last inspection: March 2024'
            ]
          },
          {
            title: 'Repeat Issues Detected',
            type: 'technical',
            icon: AlertTriangle,
            content: [
              'Investigation procedures: 3 occurrences (2020, 2022, 2024)',
              'CAPA effectiveness: 2 occurrences (2021, 2023)',
              'Laboratory controls: 2 occurrences (2022, 2024)',
            ]
          },
          {
            title: 'CAPA Themes',
            type: 'action',
            icon: FileText,
            content: [
              'Strengthen investigation SOP documentation',
              'Implement CAPA tracking dashboard with metrics',
              'Enhance laboratory deviation response protocols',
              'Increase training frequency for quality investigators'
            ]
          },
          {
            title: 'Peer Comparison Snapshot',
            type: 'technical',
            icon: BarChart3,
            content: [
              'Peer average risk score: 62/100 (This company: 68)',
              'Peer average observations: 6.2 (This company: 8)',
              'Similar companies with lower risk: 12 identified',
              'Benchmarking opportunity: CAPA management systems'
            ]
          }
        ]
      };
    } else if (path === '/tools') {
      return {
        page: 'Technical Tools',
        icon: Wrench,
        color: '#F59E0B',
        entity: null,
        contextChips: ['6 Tools', 'ANDA 73% Complete'],
        quickActions: [
          { label: 'Explain tool purpose', icon: Sparkles },
          { label: 'Guide tool selection', icon: ChevronRight },
          { label: 'Check ANDA progress', icon: BarChart3 },
          { label: 'Validate inputs', icon: Shield },
        ],
        summaryBlocks: [
          {
            title: 'Available Tools Overview',
            type: 'executive',
            icon: Wrench,
            content: [
              'ANDA Review Checklist: 73% complete',
              'DMF Validation: Ready to start',
              'APQR Compliance Tool: In progress',
              '483 Response Builder: 2 drafts saved'
            ]
          },
          {
            title: 'Recommended Next Steps',
            type: 'action',
            icon: ChevronRight,
            content: [
              'Complete remaining ANDA sections (27%)',
              'Review DMF validation requirements',
              'Finalize APQR compliance documentation',
              'Submit 483 response draft for review'
            ]
          }
        ]
      };
    } else if (path === '/analytics') {
      return {
        page: 'Advanced Analytics',
        icon: BarChart3,
        color: '#8B5CF6',
        entity: null,
        contextChips: ['2020-2024', 'All Systems', 'Trend Analysis'],
        quickActions: [
          { label: 'Explain year-over-year trends', icon: TrendingUp },
          { label: 'Identify system patterns', icon: AlertTriangle },
          { label: 'Risk forecast interpretation', icon: Sparkles },
          { label: 'Generate insights report', icon: FileText },
        ],
        summaryBlocks: [
          {
            title: 'Year-Over-Year Trends',
            type: 'executive',
            icon: TrendingUp,
            content: [
              'Total observations increased 12% from 2023 to 2024',
              'Quality System observations up 23% YoY',
              'Laboratory Controls down 8% YoY',
              'Production issues stable (±2% variance)'
            ]
          },
          {
            title: 'System Pattern Analysis',
            type: 'technical',
            icon: AlertTriangle,
            content: [
              'Quality System consistently highest (5-year trend)',
              'Seasonal spike in Q1 for aseptic processing',
              'Investigation procedures show upward trajectory',
              'CAPA-related findings increasing since 2022'
            ]
          },
          {
            title: 'Risk Forecast (2025)',
            type: 'action',
            icon: Sparkles,
            content: [
              'Predicted 15% increase in Quality System observations',
              'Aseptic processing remains high-risk area',
              'Investigation procedures likely to continue trending up',
              'Recommended proactive measures for top 20 companies'
            ]
          }
        ]
      };
    }

    return {
      page: 'Current Page',
      icon: Sparkles,
      color: '#0EA5E9',
      entity: null,
      contextChips: [],
      quickActions: [
        { label: 'Summarize this page', icon: Sparkles },
        { label: 'Get AI guidance', icon: ChevronRight },
      ],
      summaryBlocks: []
    };
  };

  const context = getPageContext();
  const PageIcon = context.icon;

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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />

          {/* Slide-over Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-2xl bg-[#F6F9FC] shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-white/90 backdrop-blur-xl border-b border-[#E6EEF5] p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#B794F4]">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#0F172A]">AI Assistant</h2>
                    <p className="text-sm text-[#64748B]">Context-aware intelligence</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-[#F6F9FC] transition-all"
                >
                  <X size={20} className="text-[#64748B]" />
                </button>
              </div>

              {/* Context Dock */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#F6F9FC] to-white border border-[#E6EEF5]">
                <div className="flex items-center gap-2 mb-3">
                  <PageIcon size={16} style={{ color: context.color }} />
                  <span className="text-sm font-semibold text-[#64748B]">You're viewing:</span>
                  <span className="text-sm font-bold text-[#0F172A]">{context.page}</span>
                  {context.entity && (
                    <>
                      <span className="text-sm text-[#64748B]">/</span>
                      <span className="text-sm font-semibold text-[#0EA5E9]">{context.entity}</span>
                    </>
                  )}
                </div>

                {/* Context Chips */}
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  {context.contextChips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white border border-[#E6EEF5] text-xs font-semibold text-[#64748B]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Mode Toggle */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMode('summarize')}
                    className={`flex-1 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                      mode === 'summarize'
                        ? 'bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white shadow-lg shadow-[#0EA5E9]/25'
                        : 'bg-white text-[#64748B] hover:bg-[#F6F9FC]'
                    }`}
                  >
                    Summarize this page
                  </button>
                  <button
                    onClick={() => setMode('ask')}
                    className={`flex-1 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                      mode === 'ask'
                        ? 'bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white shadow-lg shadow-[#0EA5E9]/25'
                        : 'bg-white text-[#64748B] hover:bg-[#F6F9FC]'
                    }`}
                  >
                    Ask AI
                  </button>
                </div>
              </div>

              {/* Privacy/Security Indicators */}
              <div className="flex items-center gap-3 mt-3 px-3">
                <div className="flex items-center gap-1.5">
                  <Lock size={12} className="text-[#64748B]" />
                  <span className="text-xs text-[#64748B]">Secure session</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield size={12} className="text-[#10B981]" />
                  <span className="text-xs text-[#64748B]">Export controls enabled</span>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6">
              {mode === 'summarize' ? (
                <>
                  {/* Quick Actions */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-[#0F172A] mb-3">Quick Actions</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {context.quickActions.map((action, idx) => {
                        const ActionIcon = action.icon;
                        return (
                          <button
                            key={idx}
                            onClick={handleGenerate}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-[#E6EEF5] hover:border-[#0EA5E9]/30 hover:shadow-md transition-all group text-left"
                          >
                            <div className="p-2 rounded-lg bg-[#0EA5E9]/10 group-hover:bg-[#0EA5E9]/20 transition-all">
                              <ActionIcon size={18} className="text-[#0EA5E9]" />
                            </div>
                            <span className="flex-1 font-medium text-sm text-[#0F172A]">{action.label}</span>
                            <ChevronRight size={18} className="text-[#64748B] group-hover:text-[#0EA5E9] transition-all" />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Generated Summary */}
                  <AnimatePresence>
                    {generating && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mb-6"
                      >
                        <div className="p-6 rounded-2xl bg-white border border-[#E6EEF5]">
                          <div className="flex items-center gap-3 mb-4">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                              <Sparkles className="text-[#8B5CF6]" size={24} />
                            </motion.div>
                            <span className="text-sm font-semibold text-[#64748B]">Generating AI summary...</span>
                          </div>
                          {/* Loading skeleton */}
                          <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="h-4 bg-gradient-to-r from-[#F6F9FC] via-[#E6EEF5] to-[#F6F9FC] rounded animate-pulse" />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {showSummary && !generating && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-bold text-[#0F172A]">AI Summary</h3>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                            <span className="text-xs text-[#64748B]">95% confidence</span>
                          </div>
                        </div>

                        {context.summaryBlocks.map((block, idx) => {
                          const BlockIcon = block.icon;
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="p-5 rounded-2xl bg-white border border-[#E6EEF5] hover:shadow-lg transition-all"
                            >
                              {/* Block Header */}
                              <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  <div className={`p-2 rounded-lg ${
                                    block.type === 'executive' ? 'bg-gradient-to-br from-[#8B5CF6] to-[#B794F4]' :
                                    block.type === 'technical' ? 'bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4]' :
                                    'bg-gradient-to-br from-[#10B981] to-[#059669]'
                                  }`}>
                                    <BlockIcon className="text-white" size={18} />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-bold text-[#0F172A]">{block.title}</h4>
                                    <div className="flex items-center gap-2 mt-0.5">
                                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                                        block.type === 'executive' ? 'bg-purple-100 text-purple-600' :
                                        block.type === 'technical' ? 'bg-blue-100 text-blue-600' :
                                        'bg-green-100 text-green-600'
                                      }`}>
                                        {block.type === 'executive' ? 'Executive' : block.type === 'technical' ? 'Technical' : 'Action'}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-1">
                                  <button className="p-2 rounded-lg hover:bg-[#F6F9FC] transition-all" title="Copy">
                                    <Copy size={16} className="text-[#64748B]" />
                                  </button>
                                  <button className="p-2 rounded-lg hover:bg-[#F6F9FC] transition-all" title="Add to report">
                                    <Plus size={16} className="text-[#64748B]" />
                                  </button>
                                  <button className="p-2 rounded-lg hover:bg-[#F6F9FC] transition-all" title="Pin">
                                    <Pin size={16} className="text-[#64748B]" />
                                  </button>
                                </div>
                              </div>

                              {/* Block Content */}
                              <div className="space-y-2">
                                {block.content.map((item, itemIdx) => (
                                  <div key={itemIdx} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] mt-2 shrink-0" />
                                    <span className="text-sm text-[#64748B] leading-relaxed">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          );
                        })}

                        {/* Footer Info */}
                        <div className="p-4 rounded-xl bg-gradient-to-br from-[#F6F9FC] to-white border border-[#E6EEF5] text-xs text-[#64748B]">
                          <div className="flex items-center justify-between">
                            <span>Based on current page context</span>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-[#F6F9FC] border border-[#E6EEF5] font-semibold transition-all">
                              <Download size={14} />
                              Export Summary
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                /* Ask AI Mode */
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-white border border-[#E6EEF5]">
                    <h3 className="text-sm font-bold text-[#0F172A] mb-3">Ask a Question</h3>
                    <textarea
                      placeholder="Ask about this page, company, system, or compliance topic..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all resize-none"
                    />
                    <button className="mt-3 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all flex items-center justify-center gap-2">
                      <Sparkles size={18} />
                      <span>Ask AI</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-br from-[#F6F9FC] to-white border border-[#E6EEF5]">
                    <div className="text-xs text-[#64748B] mb-2 font-semibold">Example questions:</div>
                    <div className="space-y-1">
                      <div className="text-xs text-[#64748B]">• What are the key risks for this company?</div>
                      <div className="text-xs text-[#64748B]">• How does this compare to industry averages?</div>
                      <div className="text-xs text-[#64748B]">• What CAPA actions should be prioritized?</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
