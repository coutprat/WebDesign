import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useParams } from 'react-router';
import { 
  MapPin, Building2, Download, Share2, Printer, 
  AlertTriangle, TrendingUp, ChevronDown, ChevronUp,
  Lightbulb, FileCheck, Calendar 
} from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { RiskMeter } from '../components/RiskMeter';
import { companies, observations, systemBreakdown } from '../data/mockData';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function CompanyIntelligence() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('observations');
  const [expandedObs, setExpandedObs] = useState<number | null>(null);

  const company = companies.find(c => c.id === parseInt(id || '1')) || companies[0];

  const historicalData = [
    { month: 'Jan', observations: 2 },
    { month: 'Feb', observations: 3 },
    { month: 'Mar', observations: 4 },
    { month: 'Apr', observations: 2 },
    { month: 'May', observations: 5 },
    { month: 'Jun', observations: 3 },
    { month: 'Jul', observations: 4 },
    { month: 'Aug', observations: 6 },
    { month: 'Sep', observations: 3 },
    { month: 'Oct', observations: 2 },
  ];

  const tabs = [
    { id: 'observations', label: 'Observations' },
    { id: 'systems', label: 'System Breakdown' },
    { id: 'historical', label: 'Historical Trend' },
    { id: 'ai-analysis', label: 'AI Root Cause Analysis' },
    { id: 'capa', label: 'CAPA Suggestions' },
  ];

  return (
    <div className="min-h-screen bg-[#F6F9FC] pb-12">
      <div className="max-w-[1920px] mx-auto px-8 py-8">
        {/* Company Header */}
        <GlassCard className="p-8 mb-6" gradient>
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4]">
                  <Building2 className="text-white" size={28} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-[#0F172A]">{company.name}</h1>
                  <div className="flex items-center gap-4 text-[#64748B] mt-1">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{company.location}</span>
                    </div>
                    <span>•</span>
                    <span>{company.type}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm">
                  <div className="text-sm text-[#64748B] mb-1">Overall Risk Score</div>
                  <div className="text-2xl font-bold text-[#0F172A]">{company.riskScore}/100</div>
                </div>
                <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm">
                  <div className="text-sm text-[#64748B] mb-1">Recurrence Probability</div>
                  <div className="text-2xl font-bold text-[#0F172A]">{company.recurrenceProbability}%</div>
                </div>
                <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm">
                  <div className="text-sm text-[#64748B] mb-1">Total Observations</div>
                  <div className="text-2xl font-bold text-[#0F172A]">{company.totalObservations}</div>
                </div>
                <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm">
                  <div className="text-sm text-[#64748B] mb-1">Last Inspection</div>
                  <div className="text-lg font-bold text-[#0F172A]">
                    {new Date(company.lastInspection).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center gap-4">
              <RiskMeter score={company.riskScore} size="lg" />
              <div className="flex items-center gap-2">
                <button className="p-2.5 rounded-xl bg-white/50 hover:bg-white transition-all">
                  <Download size={18} className="text-[#64748B]" />
                </button>
                <button className="p-2.5 rounded-xl bg-white/50 hover:bg-white transition-all">
                  <Share2 size={18} className="text-[#64748B]" />
                </button>
                <button className="p-2.5 rounded-xl bg-white/50 hover:bg-white transition-all">
                  <Printer size={18} className="text-[#64748B]" />
                </button>
              </div>
            </div>
          </div>
        </GlassCard>

        <div className="grid grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="col-span-2">
            <GlassCard className="p-6">
              {/* Tabs */}
              <div className="flex items-center gap-2 mb-6 border-b border-[#E6EEF5] pb-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 font-semibold text-sm transition-all relative ${
                      activeTab === tab.id
                        ? 'text-[#0EA5E9]'
                        : 'text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4]"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[500px]">
                {activeTab === 'observations' && (
                  <div className="space-y-3">
                    {observations.map((obs) => (
                      <motion.div
                        key={obs.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="border border-[#E6EEF5] rounded-xl overflow-hidden"
                      >
                        <div
                          className={`flex items-center justify-between p-4 cursor-pointer hover:bg-[#F6F9FC] transition-all ${
                            obs.severity === 'Critical' ? 'border-l-4 border-l-red-500' :
                            obs.severity === 'High' ? 'border-l-4 border-l-orange-500' :
                            'border-l-4 border-l-yellow-500'
                          }`}
                          onClick={() => setExpandedObs(expandedObs === obs.id ? null : obs.id)}
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                                obs.severity === 'Critical' ? 'bg-red-100 text-red-600' :
                                obs.severity === 'High' ? 'bg-orange-100 text-orange-600' :
                                'bg-yellow-100 text-yellow-600'
                              }`}>
                                {obs.severity}
                              </span>
                              <span className="px-3 py-1 rounded-lg bg-[#0EA5E9]/10 text-xs font-semibold text-[#0EA5E9]">
                                {obs.system}
                              </span>
                              <span className="text-xs text-[#64748B]">Citation: {obs.citation}</span>
                            </div>
                            <h4 className="font-semibold text-[#0F172A]">Observation #{obs.id}</h4>
                          </div>
                          {expandedObs === obs.id ? (
                            <ChevronUp className="text-[#64748B]" />
                          ) : (
                            <ChevronDown className="text-[#64748B]" />
                          )}
                        </div>
                        
                        {expandedObs === obs.id && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="border-t border-[#E6EEF5] p-4 bg-[#F6F9FC]/50"
                          >
                            <p className="text-sm text-[#64748B] leading-relaxed mb-4">{obs.description}</p>
                            <div className="flex items-center gap-4 text-xs text-[#64748B]">
                              <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                <span>{new Date(obs.date).toLocaleDateString()}</span>
                              </div>
                              <span>•</span>
                              <span>Investigator: {obs.investigator}</span>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'systems' && (
                  <div className="space-y-4">
                    {company.affectedSystems.map((system) => {
                      const systemData = systemBreakdown.find(s => s.system === system);
                      return (
                        <div key={system} className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5]">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-[#0F172A]">{system}</h4>
                            <span className="text-sm font-bold text-[#0EA5E9]">
                              {systemData?.percentage || 0}% of total
                            </span>
                          </div>
                          <div className="h-2 bg-[#E6EEF5] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4]"
                              style={{ width: `${systemData?.percentage || 0}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {activeTab === 'historical' && (
                  <div>
                    <h3 className="font-bold text-[#0F172A] mb-4">Observation Trend - Last 10 Months</h3>
                    <ResponsiveContainer width="100%" height={350}>
                      <LineChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E6EEF5" />
                        <XAxis dataKey="month" stroke="#64748B" style={{ fontSize: '12px' }} />
                        <YAxis stroke="#64748B" style={{ fontSize: '12px' }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid #E6EEF5',
                            borderRadius: '12px'
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="observations"
                          stroke="#0EA5E9"
                          strokeWidth={3}
                          dot={{ fill: '#0EA5E9', r: 5 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                )}

                {activeTab === 'ai-analysis' && (
                  <div className="space-y-4">
                    <div className="p-6 rounded-xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#B794F4]/10 border border-[#8B5CF6]/20">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#B794F4]">
                          <Lightbulb className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#0F172A] mb-2">Primary Root Cause Analysis</h3>
                          <p className="text-sm text-[#64748B] leading-relaxed mb-3">
                            AI analysis indicates systematic gaps in documentation and review procedures, 
                            with recurring patterns in investigation protocols. The organization appears to 
                            lack robust deviation management systems and trending analysis capabilities.
                          </p>
                          <div className="flex items-center gap-2 text-xs">
                            <span className="px-3 py-1 rounded-lg bg-white text-[#8B5CF6] font-semibold">
                              92% Confidence
                            </span>
                            <span className="text-[#64748B]">Based on 34 observations</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-[#E6EEF5]">
                        <h4 className="font-semibold text-[#0F172A] mb-2">Contributing Factors</h4>
                        <ul className="space-y-2 text-sm text-[#64748B]">
                          <li className="flex items-start gap-2">
                            <span className="text-[#0EA5E9]">•</span>
                            <span>Inadequate staff training programs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#0EA5E9]">•</span>
                            <span>Insufficient quality oversight</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#0EA5E9]">•</span>
                            <span>Weak document control systems</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl border border-[#E6EEF5]">
                        <h4 className="font-semibold text-[#0F172A] mb-2">Risk Areas</h4>
                        <ul className="space-y-2 text-sm text-[#64748B]">
                          <li className="flex items-start gap-2">
                            <span className="text-[#F59E0B]">•</span>
                            <span>Quality system procedures</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#F59E0B]">•</span>
                            <span>Laboratory control processes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-[#F59E0B]">•</span>
                            <span>Production process controls</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'capa' && (
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Strengthen Investigation Procedures',
                        description: 'Implement comprehensive investigation protocols with clear escalation criteria and root cause analysis methodologies.',
                        priority: 'High',
                        timeline: '30-60 days'
                      },
                      {
                        title: 'Enhance CAPA Tracking System',
                        description: 'Deploy digital CAPA management system with automated tracking, trending, and effectiveness verification.',
                        priority: 'High',
                        timeline: '60-90 days'
                      },
                      {
                        title: 'Implement Advanced Training Program',
                        description: 'Develop role-specific training modules with periodic assessments and competency verification.',
                        priority: 'Medium',
                        timeline: '90-120 days'
                      },
                    ].map((capa, idx) => (
                      <div key={idx} className="p-5 rounded-xl border border-[#E6EEF5] hover:border-[#0EA5E9]/30 transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-[#0EA5E9]/10 to-[#06B6D4]/10">
                              <FileCheck className="text-[#0EA5E9]" size={20} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-[#0F172A]">{capa.title}</h4>
                              <p className="text-xs text-[#64748B] mt-1">{capa.description}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#E6EEF5]">
                          <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                            capa.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                          }`}>
                            {capa.priority} Priority
                          </span>
                          <span className="text-xs text-[#64748B]">Timeline: {capa.timeline}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </GlassCard>
          </div>

          {/* AI Insight Sidebar */}
          <div className="space-y-6">
            <GlassCard className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#B794F4]">
                  <Lightbulb className="text-white" size={18} />
                </div>
                <h3 className="font-bold text-[#0F172A]">AI Insights</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#0EA5E9]/5 to-[#06B6D4]/5 border border-[#0EA5E9]/20">
                  <h4 className="font-semibold text-[#0F172A] text-sm mb-2">Root Cause Summary</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Systematic quality system deficiencies with emphasis on investigation procedures and CAPA effectiveness. 
                    Recommend immediate corrective action focus.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-[#8B5CF6]/5 to-[#B794F4]/5 border border-[#8B5CF6]/20">
                  <h4 className="font-semibold text-[#0F172A] text-sm mb-2">Suggested Actions</h4>
                  <ul className="space-y-2 text-xs text-[#64748B]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5CF6]">✓</span>
                      <span>Review and strengthen investigation procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5CF6]">✓</span>
                      <span>Implement enhanced CAPA tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B5CF6]">✓</span>
                      <span>Deploy staff training programs</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-[#10B981]/5 to-[#06B6D4]/5 border border-[#10B981]/20">
                  <h4 className="font-semibold text-[#0F172A] text-sm mb-2">Similar Companies</h4>
                  <p className="text-xs text-[#64748B] mb-3">
                    3 similar companies with comparable patterns:
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs text-[#0EA5E9] hover:underline cursor-pointer">
                      BioGenix Corporation
                    </div>
                    <div className="text-xs text-[#0EA5E9] hover:underline cursor-pointer">
                      PharmaCore Industries
                    </div>
                    <div className="text-xs text-[#0EA5E9] hover:underline cursor-pointer">
                      MediTech Laboratories
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
