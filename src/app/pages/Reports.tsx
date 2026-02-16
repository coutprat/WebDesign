import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText, Plus, Download, Eye, Trash2, GripVertical, Check,
  Calendar, User, Building2, TrendingUp, AlertTriangle, Shield,
  Lock, ChevronDown, Copy, Save, Share2, Printer, X, Sparkles
} from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

interface ReportSection {
  id: string;
  type: 'insight' | 'observation' | 'analytics' | 'custom';
  title: string;
  content: string[];
  icon?: any;
}

export function Reports() {
  const [sections, setSections] = useState<ReportSection[]>([
    {
      id: '1',
      type: 'insight',
      title: 'Executive Overview',
      content: [
        'Overall risk score: 68/100 (Moderate)',
        'Total observations: 3,847 across 156 companies',
        'Most impacted system: Quality System (29.9% of observations)',
        'Hot spot region: New Jersey with 156 observations'
      ],
      icon: Sparkles
    },
    {
      id: '2',
      type: 'analytics',
      title: 'Year-Over-Year Trends',
      content: [
        'Total observations increased 12% from 2023 to 2024',
        'Quality System observations up 23% YoY',
        'Laboratory Controls down 8% YoY',
        'Production issues stable (±2% variance)'
      ],
      icon: TrendingUp
    }
  ]);

  const [showAddSection, setShowAddSection] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [reportTitle, setReportTitle] = useState('FDA 483 Compliance Analysis Report');
  const [reportSubtitle, setReportSubtitle] = useState('Quarterly Regulatory Intelligence Summary');

  const availableSections = [
    { type: 'insight', title: 'AI Executive Summary', icon: Sparkles, color: '#8B5CF6' },
    { type: 'observation', title: 'Key Observations', icon: AlertTriangle, color: '#F59E0B' },
    { type: 'analytics', title: 'Trend Analysis', icon: TrendingUp, color: '#0EA5E9' },
    { type: 'custom', title: 'Custom Section', icon: FileText, color: '#64748B' },
  ];

  const handleAddSection = (type: string, title: string) => {
    const newSection: ReportSection = {
      id: Date.now().toString(),
      type: type as any,
      title,
      content: ['Add content here...']
    };
    setSections([...sections, newSection]);
    setShowAddSection(false);
  };

  const handleRemoveSection = (id: string) => {
    setSections(sections.filter(s => s.id !== id));
  };

  const handleMoveSection = (index: number, direction: 'up' | 'down') => {
    const newSections = [...sections];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= sections.length) return;
    [newSections[index], newSections[targetIndex]] = [newSections[targetIndex], newSections[index]];
    setSections(newSections);
  };

  return (
    <div className="min-h-screen bg-[#F6F9FC] pb-12">
      <div className="max-w-[1920px] mx-auto px-6 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Report Builder</h1>
              <p className="text-[#64748B]">Create comprehensive regulatory intelligence reports with AI-powered insights</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-xl border border-[#E6EEF5] bg-white text-[#0F172A] font-semibold hover:bg-[#F6F9FC] transition-all flex items-center gap-2">
                <Save size={18} />
                <span>Save Draft</span>
              </button>
              <button
                onClick={() => setShowPreview(true)}
                className="px-4 py-2 rounded-xl border border-[#E6EEF5] bg-white text-[#0F172A] font-semibold hover:bg-[#F6F9FC] transition-all flex items-center gap-2"
              >
                <Eye size={18} />
                <span>Preview</span>
              </button>
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all flex items-center gap-2">
                <Download size={18} />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Report Builder */}
          <div className="col-span-2 space-y-4">
            {/* Report Header */}
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4]">
                  <FileText className="text-white" size={20} />
                </div>
                <h3 className="font-bold text-[#0F172A]">Report Header</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-[#0F172A] mb-2 block">Report Title</label>
                  <input
                    type="text"
                    value={reportTitle}
                    onChange={(e) => setReportTitle(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F6F9FC] border border-[#E6EEF5] rounded-xl text-[#0F172A] font-semibold focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#0F172A] mb-2 block">Subtitle</label>
                  <input
                    type="text"
                    value={reportSubtitle}
                    onChange={(e) => setReportSubtitle(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#F6F9FC] border border-[#E6EEF5] rounded-xl text-sm text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-[#64748B] mb-2 block">Report Date</label>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white border border-[#E6EEF5] rounded-xl text-sm">
                      <Calendar size={16} className="text-[#64748B]" />
                      <span className="text-[#0F172A]">Feb 16, 2026</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#64748B] mb-2 block">Generated By</label>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white border border-[#E6EEF5] rounded-xl text-sm">
                      <User size={16} className="text-[#64748B]" />
                      <span className="text-[#0F172A]">AI Assistant</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#64748B] mb-2 block">Version</label>
                    <div className="flex items-center gap-2 px-3 py-2 bg-white border border-[#E6EEF5] rounded-xl text-sm">
                      <Shield size={16} className="text-[#64748B]" />
                      <span className="text-[#0F172A]">v1.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Report Sections */}
            <div className="space-y-3">
              <AnimatePresence>
                {sections.map((section, index) => {
                  const SectionIcon = section.icon || FileText;
                  return (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      layout
                    >
                      <GlassCard className="p-5">
                        <div className="flex items-start gap-3">
                          {/* Drag Handle */}
                          <div className="flex flex-col gap-1 mt-1 cursor-move">
                            <button
                              onClick={() => handleMoveSection(index, 'up')}
                              disabled={index === 0}
                              className="p-1 rounded hover:bg-[#F6F9FC] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <GripVertical size={16} className="text-[#64748B]" />
                            </button>
                          </div>

                          <div className="flex-1">
                            {/* Section Header */}
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${
                                  section.type === 'insight' ? 'bg-purple-100' :
                                  section.type === 'analytics' ? 'bg-blue-100' :
                                  section.type === 'observation' ? 'bg-orange-100' :
                                  'bg-gray-100'
                                }`}>
                                  <SectionIcon size={18} className={
                                    section.type === 'insight' ? 'text-purple-600' :
                                    section.type === 'analytics' ? 'text-blue-600' :
                                    section.type === 'observation' ? 'text-orange-600' :
                                    'text-gray-600'
                                  } />
                                </div>
                                <div>
                                  <input
                                    type="text"
                                    value={section.title}
                                    onChange={(e) => {
                                      const newSections = [...sections];
                                      newSections[index].title = e.target.value;
                                      setSections(newSections);
                                    }}
                                    className="font-bold text-[#0F172A] bg-transparent border-none focus:outline-none focus:ring-0 p-0"
                                  />
                                  <span className={`text-xs px-2 py-0.5 rounded ${
                                    section.type === 'insight' ? 'bg-purple-100 text-purple-600' :
                                    section.type === 'analytics' ? 'bg-blue-100 text-blue-600' :
                                    section.type === 'observation' ? 'bg-orange-100 text-orange-600' :
                                    'bg-gray-100 text-gray-600'
                                  }`}>
                                    {section.type}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-1">
                                <button className="p-2 rounded-lg hover:bg-[#F6F9FC] transition-all" title="Copy">
                                  <Copy size={16} className="text-[#64748B]" />
                                </button>
                                <button
                                  onClick={() => handleRemoveSection(section.id)}
                                  className="p-2 rounded-lg hover:bg-red-50 transition-all"
                                  title="Remove"
                                >
                                  <Trash2 size={16} className="text-red-500" />
                                </button>
                              </div>
                            </div>

                            {/* Section Content */}
                            <div className="space-y-2">
                              {section.content.map((item, itemIdx) => (
                                <div key={itemIdx} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] mt-2 shrink-0" />
                                  <textarea
                                    value={item}
                                    onChange={(e) => {
                                      const newSections = [...sections];
                                      newSections[index].content[itemIdx] = e.target.value;
                                      setSections(newSections);
                                    }}
                                    rows={2}
                                    className="flex-1 text-sm text-[#64748B] leading-relaxed bg-transparent border-none focus:outline-none focus:ring-0 resize-none p-0"
                                  />
                                </div>
                              ))}
                            </div>

                            <button
                              onClick={() => {
                                const newSections = [...sections];
                                newSections[index].content.push('New point...');
                                setSections(newSections);
                              }}
                              className="mt-3 text-xs text-[#0EA5E9] hover:text-[#0284c7] font-semibold flex items-center gap-1"
                            >
                              <Plus size={14} />
                              <span>Add point</span>
                            </button>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Add Section Button */}
              <button
                onClick={() => setShowAddSection(!showAddSection)}
                className="w-full py-4 rounded-2xl border-2 border-dashed border-[#E6EEF5] hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/5 transition-all flex items-center justify-center gap-2 text-[#64748B] hover:text-[#0EA5E9] font-semibold"
              >
                <Plus size={20} />
                <span>Add Section</span>
              </button>

              {/* Add Section Options */}
              <AnimatePresence>
                {showAddSection && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <GlassCard className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {availableSections.map((section) => {
                          const Icon = section.icon;
                          return (
                            <button
                              key={section.type}
                              onClick={() => handleAddSection(section.type, section.title)}
                              className="p-4 rounded-xl border border-[#E6EEF5] hover:border-[#0EA5E9] hover:shadow-md transition-all text-left group"
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <div
                                  className="p-2 rounded-lg"
                                  style={{ backgroundColor: `${section.color}20` }}
                                >
                                  <Icon size={18} style={{ color: section.color }} />
                                </div>
                                <span className="font-semibold text-sm text-[#0F172A] group-hover:text-[#0EA5E9]">{section.title}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </GlassCard>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar - Export Options & Audit Log */}
          <div className="space-y-4">
            {/* Export Pack */}
            <GlassCard className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <Download className="text-[#0EA5E9]" size={20} />
                <h3 className="font-bold text-[#0F172A]">Export Options</h3>
              </div>

              <div className="space-y-3">
                <button className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6EEF5] hover:border-[#0EA5E9] hover:shadow-md transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-[#64748B] group-hover:text-[#0EA5E9]" />
                    <div className="text-left">
                      <div className="text-sm font-semibold text-[#0F172A]">Microsoft Word</div>
                      <div className="text-xs text-[#64748B]">.docx format</div>
                    </div>
                  </div>
                  <Download size={16} className="text-[#64748B]" />
                </button>

                <button className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6EEF5] hover:border-[#0EA5E9] hover:shadow-md transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-[#64748B] group-hover:text-[#0EA5E9]" />
                    <div className="text-left">
                      <div className="text-sm font-semibold text-[#0F172A]">PDF Document</div>
                      <div className="text-xs text-[#64748B]">.pdf format</div>
                    </div>
                  </div>
                  <Download size={16} className="text-[#64748B]" />
                </button>

                <button className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6EEF5] hover:border-[#0EA5E9] hover:shadow-md transition-all flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-[#64748B] group-hover:text-[#0EA5E9]" />
                    <div className="text-left">
                      <div className="text-sm font-semibold text-[#0F172A]">CSV Data</div>
                      <div className="text-xs text-[#64748B]">.csv format</div>
                    </div>
                  </div>
                  <Download size={16} className="text-[#64748B]" />
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-[#E6EEF5]">
                <div className="flex items-center gap-2 mb-2">
                  <Lock size={14} className="text-[#64748B]" />
                  <span className="text-xs text-[#64748B]">Watermark Options</span>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-[#E6EEF5] text-[#0EA5E9]" />
                  <span className="text-sm text-[#64748B]">Add "Confidential" watermark</span>
                </label>
              </div>
            </GlassCard>

            {/* Audit Log */}
            <GlassCard className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="text-[#10B981]" size={20} />
                <h3 className="font-bold text-[#0F172A]">Audit Log</h3>
              </div>

              <div className="space-y-3">
                <div className="pb-3 border-b border-[#E6EEF5] last:border-0 last:pb-0">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#10B981] mt-1.5" />
                    <div className="flex-1">
                      <div className="text-sm text-[#0F172A] font-semibold">Report created</div>
                      <div className="text-xs text-[#64748B]">Feb 16, 2026 at 10:23 AM</div>
                      <div className="text-xs text-[#64748B]">by AI Assistant</div>
                    </div>
                  </div>
                </div>

                <div className="pb-3 border-b border-[#E6EEF5] last:border-0 last:pb-0">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#0EA5E9] mt-1.5" />
                    <div className="flex-1">
                      <div className="text-sm text-[#0F172A] font-semibold">Section added</div>
                      <div className="text-xs text-[#64748B]">Feb 16, 2026 at 10:25 AM</div>
                      <div className="text-xs text-[#64748B]">Executive Overview</div>
                    </div>
                  </div>
                </div>

                <div className="pb-3 border-b border-[#E6EEF5] last:border-0 last:pb-0">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#F59E0B] mt-1.5" />
                    <div className="flex-1">
                      <div className="text-sm text-[#0F172A] font-semibold">Draft saved</div>
                      <div className="text-xs text-[#64748B]">Feb 16, 2026 at 10:30 AM</div>
                      <div className="text-xs text-[#64748B]">Version 1.0</div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Share Options */}
            <GlassCard className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <Share2 className="text-[#8B5CF6]" size={20} />
                <h3 className="font-bold text-[#0F172A]">Share Report</h3>
              </div>

              <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#B794F4] text-white font-semibold hover:shadow-lg hover:shadow-[#8B5CF6]/25 transition-all flex items-center justify-center gap-2">
                <Share2 size={18} />
                <span>Generate Shareable Link</span>
              </button>

              <div className="mt-3 p-3 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5]">
                <div className="text-xs text-[#64748B] mb-1">Current permissions</div>
                <div className="text-sm text-[#0F172A] font-semibold">Organization only</div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPreview(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-8 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
            >
              {/* Preview Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#E6EEF5]">
                <div className="flex items-center gap-3">
                  <Eye className="text-[#0EA5E9]" size={24} />
                  <div>
                    <h2 className="text-xl font-bold text-[#0F172A]">Report Preview</h2>
                    <p className="text-sm text-[#64748B]">Final layout with watermark</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 rounded-xl border border-[#E6EEF5] bg-white text-[#0F172A] font-semibold hover:bg-[#F6F9FC] transition-all flex items-center gap-2">
                    <Printer size={18} />
                    <span>Print</span>
                  </button>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="p-2 rounded-xl hover:bg-[#F6F9FC] transition-all"
                  >
                    <X size={20} className="text-[#64748B]" />
                  </button>
                </div>
              </div>

              {/* Preview Content */}
              <div className="flex-1 overflow-y-auto p-12 bg-[#F6F9FC]">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12 relative">
                  {/* Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                    <div className="text-8xl font-bold text-[#0F172A] transform -rotate-45">
                      CONFIDENTIAL
                    </div>
                  </div>

                  {/* Report Content */}
                  <div className="relative z-10">
                    <div className="mb-8">
                      <h1 className="text-4xl font-bold text-[#0F172A] mb-2">{reportTitle}</h1>
                      <p className="text-xl text-[#64748B]">{reportSubtitle}</p>
                    </div>

                    <div className="flex items-center gap-6 mb-8 pb-6 border-b border-[#E6EEF5]">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-[#64748B]" />
                        <span className="text-sm text-[#64748B]">Feb 16, 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-[#64748B]" />
                        <span className="text-sm text-[#64748B]">AI Assistant</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield size={16} className="text-[#64748B]" />
                        <span className="text-sm text-[#64748B]">Version 1.0</span>
                      </div>
                    </div>

                    {sections.map((section, index) => (
                      <div key={section.id} className="mb-8">
                        <h2 className="text-2xl font-bold text-[#0F172A] mb-4">{section.title}</h2>
                        <div className="space-y-2">
                          {section.content.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-[#0EA5E9] mt-2 shrink-0" />
                              <p className="text-[#64748B] leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
