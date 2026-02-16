import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Search, Filter, Download, Save, TrendingDown, TrendingUp, 
  AlertTriangle, Building2, MapPin, Calendar, User, ChevronDown, 
  Grid3x3, List, ArrowUpDown, Minus, ChevronRight
} from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { RiskMeter } from '../components/RiskMeter';
import { AIAutoSuggest } from '../components/AIAutoSuggest';
import { companyDatabase } from '../data/mockData';

export function Database() {
  const [selectedSeverity, setSelectedSeverity] = useState([0, 100]);
  const [selectedYears, setSelectedYears] = useState([2019, 2024]);
  const [selectedSystems, setSelectedSystems] = useState<string[]>([]);
  const [showAutoSuggest, setShowAutoSuggest] = useState(false);
  const [filterChanged, setFilterChanged] = useState(false);

  // Show auto-suggest when filters change
  useEffect(() => {
    if (filterChanged) {
      setShowAutoSuggest(true);
      setFilterChanged(false);
    }
  }, [filterChanged]);

  const handleFilterChange = () => {
    setFilterChanged(true);
  };

  const systems = [
    'Quality System',
    'Production & Process',
    'Laboratory Controls',
    'Facility & Equipment',
    'Materials Management',
    'Packaging & Labeling',
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === 'increasing') return <TrendingUp size={16} className="text-red-500" />;
    if (trend === 'decreasing') return <TrendingDown size={16} className="text-green-500" />;
    return <Minus size={16} className="text-[#64748B]" />;
  };

  return (
    <div className="min-h-screen bg-[#F6F9FC] pb-12">
      <div className="max-w-[1920px] mx-auto px-6 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-2">FDA 483 Database</h1>
          <p className="text-[#64748B]">Comprehensive regulatory intelligence and compliance analytics</p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {/* Advanced Smart Filters Panel */}
          <GlassCard className="p-4 h-fit sticky top-20">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="text-[#0EA5E9]" size={20} />
              <h3 className="font-bold text-[#0F172A]">Smart Filters</h3>
            </div>

            {/* Search */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-[#0F172A] mb-2 block">Search Companies</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]" size={16} />
                <input
                  type="text"
                  placeholder="Company name..."
                  className="w-full pl-10 pr-4 py-2 bg-[#F6F9FC] border border-[#E6EEF5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
                />
              </div>
            </div>

            {/* Risk Score Range */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-[#0F172A] mb-2 block">
                Risk Score Range: {selectedSeverity[0]} - {selectedSeverity[1]}
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={selectedSeverity[1]}
                  onChange={(e) => setSelectedSeverity([selectedSeverity[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gradient-to-r from-green-200 via-yellow-200 to-red-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #10B981 0%, #F59E0B 50%, #EF4444 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-[#64748B]">
                  <span>Low Risk</span>
                  <span>High Risk</span>
                </div>
              </div>
            </div>

            {/* Year Range */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-[#0F172A] mb-2 block">
                Year Range: {selectedYears[0]} - {selectedYears[1]}
              </label>
              <div className="flex gap-2">
                <select 
                  className="flex-1 px-3 py-2 bg-[#F6F9FC] border border-[#E6EEF5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
                  value={selectedYears[0]}
                  onChange={(e) => setSelectedYears([parseInt(e.target.value), selectedYears[1]])}
                >
                  {[2019, 2020, 2021, 2022, 2023, 2024].map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <select 
                  className="flex-1 px-3 py-2 bg-[#F6F9FC] border border-[#E6EEF5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
                  value={selectedYears[1]}
                  onChange={(e) => setSelectedYears([selectedYears[0], parseInt(e.target.value)])}
                >
                  {[2019, 2020, 2021, 2022, 2023, 2024].map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Affected Systems */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-[#0F172A] mb-2 block">Affected Systems</label>
              <div className="space-y-1.5">
                {systems.map((system) => (
                  <label key={system} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedSystems.includes(system)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedSystems([...selectedSystems, system]);
                        } else {
                          setSelectedSystems(selectedSystems.filter(s => s !== system));
                        }
                      }}
                      className="w-4 h-4 rounded border-[#E6EEF5] text-[#0EA5E9] focus:ring-[#0EA5E9]/30"
                    />
                    <span className="text-sm text-[#64748B] group-hover:text-[#0F172A] transition-colors">{system}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Compliance Status */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-[#0F172A] mb-2 block">Compliance Status</label>
              <div className="space-y-1.5">
                {['Critical', 'Moderate', 'Stable', 'Good'].map((status) => (
                  <label key={status} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-[#E6EEF5] text-[#0EA5E9] focus:ring-[#0EA5E9]/30"
                    />
                    <span className="text-sm text-[#64748B] group-hover:text-[#0F172A] transition-colors">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full py-2 bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all" onClick={handleFilterChange}>
              Apply Filters
            </button>
          </GlassCard>

          {/* Results - Smart Company Intelligence Cards */}
          <div className="col-span-3 space-y-3">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">{companyDatabase.length} Companies Found</div>
                <div className="text-sm text-[#64748B]">Sorted by risk score (highest first)</div>
              </div>
              <select className="px-4 py-2 bg-white border border-[#E6EEF5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30">
                <option>Risk Score (High to Low)</option>
                <option>Risk Score (Low to High)</option>
                <option>Most Recent</option>
                <option>Observation Count</option>
              </select>
            </div>

            {companyDatabase.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <GlassCard className="p-4 group cursor-pointer" hover>
                  <div className="flex items-start gap-4">
                    {/* Risk Meter */}
                    <div className="shrink-0">
                      <RiskMeter score={company.riskScore} size="sm" showLabel={false} />
                    </div>

                    {/* Company Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-[#0F172A] mb-1 group-hover:text-[#0EA5E9] transition-colors">
                            {company.name}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-[#64748B]">
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>{company.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>Last inspection: {new Date(company.lastInspection).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {getTrendIcon(company.trend)}
                          <span className={`text-xs font-semibold ${
                            company.trend === 'increasing' ? 'text-red-500' :
                            company.trend === 'decreasing' ? 'text-green-500' :
                            'text-[#64748B]'
                          }`}>
                            {company.trend}
                          </span>
                        </div>
                      </div>

                      {/* Metrics Row */}
                      <div className="grid grid-cols-4 gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-[#F6F9FC]">
                          <div className="text-xs text-[#64748B] mb-1">Observations</div>
                          <div className="text-lg font-bold text-[#0F172A]">{company.totalObservations}</div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#F6F9FC]">
                          <div className="text-xs text-[#64748B] mb-1">Type</div>
                          <div className="text-sm font-semibold text-[#0F172A]">{company.type}</div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#F6F9FC]">
                          <div className="text-xs text-[#64748B] mb-1">Recurrence</div>
                          <div className="text-lg font-bold text-[#0F172A]">{company.recurrenceProbability}%</div>
                        </div>
                        <div className={`p-3 rounded-xl ${
                          company.complianceStability === 'Critical' ? 'bg-red-50' :
                          company.complianceStability === 'Moderate' ? 'bg-orange-50' :
                          company.complianceStability === 'Stable' ? 'bg-blue-50' :
                          'bg-green-50'
                        }`}>
                          <div className="text-xs text-[#64748B] mb-1">Status</div>
                          <div className={`text-sm font-semibold ${
                            company.complianceStability === 'Critical' ? 'text-red-600' :
                            company.complianceStability === 'Moderate' ? 'text-orange-600' :
                            company.complianceStability === 'Stable' ? 'text-blue-600' :
                            'text-green-600'
                          }`}>
                            {company.complianceStability}
                          </div>
                        </div>
                      </div>

                      {/* Affected Systems Tags */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs text-[#64748B] font-semibold">Affected Systems:</span>
                        <div className="flex flex-wrap gap-2">
                          {company.affectedSystems.map((system) => (
                            <span
                              key={system}
                              className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#0EA5E9]/10 to-[#06B6D4]/10 text-xs font-medium text-[#0EA5E9] border border-[#0EA5E9]/20"
                            >
                              {system}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Mini Sparkline (mock) */}
                      <div className="flex items-center justify-between pt-4 border-t border-[#E6EEF5]">
                        <div className="flex items-center gap-4">
                          <div className="h-8 w-32 bg-gradient-to-r from-[#0EA5E9]/20 to-transparent rounded" />
                          <span className="text-xs text-[#64748B]">Observation trend last 12 months</span>
                        </div>
                        <Link
                          to={`/company/${company.id}`}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all"
                        >
                          <span>View Intelligence</span>
                          <ChevronRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Auto-Suggest Toast */}
      <AIAutoSuggest
        show={showAutoSuggest}
        message="AI can summarize this filtered view — click to generate insights based on your current selection."
        onClose={() => setShowAutoSuggest(false)}
        onGenerate={() => {
          // This would trigger the AI assistant
          console.log('Generate AI summary');
        }}
      />
    </div>
  );
}