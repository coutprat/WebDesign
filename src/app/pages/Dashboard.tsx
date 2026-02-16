import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, Building2, AlertTriangle, Users, 
  RefreshCw, ArrowUpRight, Sparkles, ChevronRight,
  MapPin, Zap, Target, Activity, FileText, Bot
} from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { RiskMeter } from '../components/RiskMeter';
import { complianceData, yearlyTrends, systemBreakdown, monthlyObservations, aiInsights } from '../data/mockData';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F6F9FC] pb-12">
      {/* Hero Intelligence Panel - Executive Grade */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0EA5E9]/5 via-[#06B6D4]/3 to-transparent">
        {/* Animated wave background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <motion.path
              initial={{ d: "M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,128C672,149,768,171,864,165.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
              animate={{ d: "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,170.7C960,160,1056,160,1152,165.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              fill="url(#wave-gradient)"
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative max-w-[1920px] mx-auto px-8 py-12"
        >
          <GlassCard className="p-10" gradient>
            <div className="flex items-start justify-between gap-12">
              <div className="flex-1">
                {/* Title Section */}
                <div className="mb-8">
                  <h1 className="text-4xl font-bold text-[#0F172A] mb-3">Regulatory Intelligence Overview</h1>
                  <div className="flex items-center gap-4">
                    <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0EA5E9]/10 to-[#06B6D4]/10 border border-[#0EA5E9]/20">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#0EA5E9] rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-[#0EA5E9]">Live Data</span>
                      </div>
                    </div>
                    <span className="text-sm text-[#64748B]">Last updated: 2 minutes ago</span>
                  </div>
                </div>

                {/* AI Insight Banner */}
                <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#B794F4]/10 border border-[#8B5CF6]/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#B794F4] shrink-0">
                      <Sparkles className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0F172A] mb-2">Executive AI Insight</h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        Quality System observations have increased 23% YoY, with concentration in investigation procedures. 
                        Predictive analysis indicates elevated risk in aseptic processing for Q1 2025. 
                        <span className="text-[#8B5CF6] font-semibold cursor-pointer hover:underline"> View full analysis →</span>
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs text-[#64748B] mb-1">Confidence</div>
                      <div className="text-2xl font-bold text-[#0F172A]">94%</div>
                    </div>
                  </div>
                </div>

                {/* Status Indicators Row */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="p-5 rounded-xl bg-gradient-to-br from-[#0EA5E9]/10 to-transparent border border-[#0EA5E9]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Activity className="text-[#0EA5E9]" size={20} />
                      <span className="text-sm font-semibold text-[#64748B]">Compliance Status</span>
                    </div>
                    <div className="text-2xl font-bold text-[#0F172A] mb-1">{complianceData.complianceStability}</div>
                    <div className="flex items-center gap-1 text-xs">
                      <TrendingUp size={14} className="text-[#0EA5E9]" />
                      <span className="text-[#0EA5E9] font-semibold">Monitor actively</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-br from-[#F59E0B]/10 to-transparent border border-[#F59E0B]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="text-[#F59E0B]" size={20} />
                      <span className="text-sm font-semibold text-[#64748B]">Risk Score</span>
                    </div>
                    <div className="text-2xl font-bold text-[#0F172A] mb-1">{complianceData.overallRiskScore}/100</div>
                    <div className="flex items-center gap-1 text-xs">
                      <AlertTriangle size={14} className="text-[#F59E0B]" />
                      <span className="text-[#F59E0B] font-semibold">Moderate level</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-br from-[#B794F4]/10 to-transparent border border-[#B794F4]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="text-[#B794F4]" size={20} />
                      <span className="text-sm font-semibold text-[#64748B]">Top Impact</span>
                    </div>
                    <div className="text-lg font-bold text-[#0F172A] mb-1">{complianceData.mostImpactedSystem}</div>
                    <div className="flex items-center gap-1 text-xs">
                      <RefreshCw size={14} className="text-[#B794F4]" />
                      <span className="text-[#B794F4] font-semibold">29.9% share</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-br from-[#10B981]/10 to-transparent border border-[#10B981]/20">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="text-[#10B981]" size={20} />
                      <span className="text-sm font-semibold text-[#64748B]">Hot Spot</span>
                    </div>
                    <div className="text-lg font-bold text-[#0F172A] mb-1">New Jersey</div>
                    <div className="flex items-center gap-1 text-xs">
                      <TrendingUp size={14} className="text-[#10B981]" />
                      <span className="text-[#10B981] font-semibold">156 observations</span>
                    </div>
                  </div>
                </div>

                {/* Top Drivers Mini Panel */}
                <div className="mt-6 p-5 rounded-xl bg-white/50 backdrop-blur-sm border border-[#E6EEF5]">
                  <h4 className="text-sm font-bold text-[#0F172A] mb-3">Top Drivers This Quarter</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-6 rounded-full bg-[#EF4444]" />
                      <span className="text-sm text-[#64748B]">Investigation procedure gaps (+34% incidents)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-6 rounded-full bg-[#F59E0B]" />
                      <span className="text-sm text-[#64748B]">CAPA effectiveness concerns (+28% recurrence)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-6 rounded-full bg-[#0EA5E9]" />
                      <span className="text-sm text-[#64748B]">Laboratory control deviations (+19% findings)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Risk Meter */}
              <div className="shrink-0 flex flex-col items-center gap-6">
                <RiskMeter score={complianceData.overallRiskScore} size="lg" />
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all flex items-center gap-2">
                  <Sparkles size={18} />
                  <span>Generate Full Report</span>
                </button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Floating Insight Cards */}
      <div className="max-w-[1920px] mx-auto px-8 -mt-6">
        <div className="grid grid-cols-5 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="p-6 group cursor-pointer" hover>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#0EA5E9]/10 to-[#06B6D4]/10 group-hover:from-[#0EA5E9]/20 group-hover:to-[#06B6D4]/20 transition-all">
                  <Building2 className="text-[#0EA5E9]" size={24} />
                </div>
                <div className="p-1.5 rounded-lg bg-green-100">
                  <ArrowUpRight size={14} className="text-green-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-[#0F172A] mb-1">{complianceData.totalCompanies.toLocaleString()}</div>
              <div className="text-sm text-[#64748B]">Total Companies</div>
              <div className="mt-3 pt-3 border-t border-[#E6EEF5]">
                <div className="text-xs text-[#0EA5E9]">+284 this month</div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-6 group cursor-pointer" hover>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#F59E0B]/10 to-[#EF4444]/10 group-hover:from-[#F59E0B]/20 group-hover:to-[#EF4444]/20 transition-all">
                  <AlertTriangle className="text-[#F59E0B]" size={24} />
                </div>
                <div className="p-1.5 rounded-lg bg-red-100">
                  <ArrowUpRight size={14} className="text-red-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-[#0F172A] mb-1">{complianceData.totalObservations.toLocaleString()}</div>
              <div className="text-sm text-[#64748B]">Total Observations</div>
              <div className="mt-3 pt-3 border-t border-[#E6EEF5]">
                <div className="text-xs text-[#F59E0B]">+12% vs last year</div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="p-6 group cursor-pointer" hover>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#B794F4]/10 group-hover:from-[#8B5CF6]/20 group-hover:to-[#B794F4]/20 transition-all">
                  <Users className="text-[#8B5CF6]" size={24} />
                </div>
                <div className="p-1.5 rounded-lg bg-purple-100">
                  <ArrowUpRight size={14} className="text-purple-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-[#0F172A] mb-1">{complianceData.activeInvestigators}</div>
              <div className="text-sm text-[#64748B]">Active Investigators</div>
              <div className="mt-3 pt-3 border-t border-[#E6EEF5]">
                <div className="text-xs text-[#8B5CF6]">+18 new this quarter</div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard className="p-6 group cursor-pointer" hover>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#10B981]/10 to-[#06B6D4]/10 group-hover:from-[#10B981]/20 group-hover:to-[#06B6D4]/20 transition-all">
                  <RefreshCw className="text-[#10B981]" size={24} />
                </div>
                <div className="p-1.5 rounded-lg bg-orange-100">
                  <ArrowUpRight size={14} className="text-orange-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-[#0F172A] mb-1">{complianceData.recurringDeficiencyIndex}%</div>
              <div className="text-sm text-[#64748B]">Recurring Deficiency Index</div>
              <div className="mt-3 pt-3 border-t border-[#E6EEF5]">
                <div className="text-xs text-[#F59E0B]">Monitor trend</div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard className="p-6 group cursor-pointer bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] border-none" hover>
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all">
                  <Sparkles className="text-white" size={24} />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">AI Ready</div>
              <div className="text-sm text-white/80">Generate Insights</div>
              <div className="mt-3 pt-3 border-t border-white/20">
                <div className="text-xs text-white flex items-center gap-1">
                  <span>Run analysis</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Advanced Data Visualizations */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {/* Year-wise Trend */}
          <GlassCard className="col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]">Observation Trends</h3>
                <p className="text-sm text-[#64748B]">Year-over-year analysis</p>
              </div>
              <select className="px-4 py-2 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5] text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30">
                <option>Last 6 Years</option>
                <option>Last 3 Years</option>
                <option>Last Year</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={yearlyTrends}>
                <defs>
                  <linearGradient id="colorObs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E6EEF5" />
                <XAxis dataKey="year" stroke="#64748B" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748B" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: '1px solid #E6EEF5',
                    borderRadius: '12px',
                    backdropFilter: 'blur(12px)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="observations" 
                  stroke="#0EA5E9" 
                  strokeWidth={3}
                  fill="url(#colorObs)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* System Breakdown */}
          <GlassCard className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#0F172A]">System Breakdown</h3>
              <p className="text-sm text-[#64748B]">By affected system</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={systemBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="count"
                >
                  {systemBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: '1px solid #E6EEF5',
                    borderRadius: '12px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {systemBreakdown.slice(0, 3).map((item) => (
                <div key={item.system} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[#64748B]">{item.system}</span>
                  </div>
                  <span className="font-semibold text-[#0F172A]">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Monthly Observations & AI Insights */}
        <div className="grid grid-cols-3 gap-6">
          {/* Monthly Bar Chart */}
          <GlassCard className="col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]">Monthly Observation Volume</h3>
                <p className="text-sm text-[#64748B]">2024 tracking</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyObservations}>
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
                <Bar dataKey="count" fill="#0EA5E9" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* AI Insights Panel */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#B794F4]">
                <Sparkles className="text-white" size={18} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]">AI Insights</h3>
                <p className="text-xs text-[#64748B]">Auto-generated</p>
              </div>
            </div>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {aiInsights.map((insight) => (
                <div
                  key={insight.id}
                  className="p-4 rounded-xl bg-gradient-to-br from-[#F6F9FC] to-white border border-[#E6EEF5] hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                      insight.priority === 'high' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {insight.priority === 'high' ? 'High' : 'Medium'}
                    </div>
                    <div className="text-xs text-[#64748B]">{insight.confidence}% confidence</div>
                  </div>
                  <h4 className="text-sm font-semibold text-[#0F172A] mb-1">{insight.title}</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Action Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <GlassCard className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-1">Quick Actions</h3>
                <p className="text-sm text-[#64748B]">Streamline your regulatory workflow</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#E6EEF5] hover:border-[#0EA5E9]/30 hover:shadow-md transition-all group">
                  <FileText className="text-[#0EA5E9] group-hover:scale-110 transition-transform" size={20} />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-[#0F172A]">Generate Report</div>
                    <div className="text-xs text-[#64748B]">Create comprehensive analysis</div>
                  </div>
                </button>
                
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#E6EEF5] hover:border-[#0EA5E9]/30 hover:shadow-md transition-all group">
                  <Building2 className="text-[#8B5CF6] group-hover:scale-110 transition-transform" size={20} />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-[#0F172A]">Compare Companies</div>
                    <div className="text-xs text-[#64748B]">Benchmark performance</div>
                  </div>
                </button>
                
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#E6EEF5] hover:border-[#0EA5E9]/30 hover:shadow-md transition-all group">
                  <Bot className="text-[#10B981] group-hover:scale-110 transition-transform" size={20} />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-[#0F172A]">Run AI Scan</div>
                    <div className="text-xs text-[#64748B]">Detect compliance patterns</div>
                  </div>
                </button>
                
                <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all group">
                  <TrendingUp className="group-hover:scale-110 transition-transform" size={20} />
                  <div className="text-left">
                    <div className="text-sm font-semibold">View Watchlist</div>
                    <div className="text-xs text-white/80">Monitor tracked items</div>
                  </div>
                </button>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}