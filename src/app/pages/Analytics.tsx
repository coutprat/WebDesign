import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { Download, Share2, Filter, Calendar } from 'lucide-react';
import { systemBreakdown, yearlyTrends, topInvestigators } from '../data/mockData';
import { 
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, ScatterChart, 
  Scatter, ZAxis, Cell 
} from 'recharts';

export function Analytics() {
  const heatmapData = [
    { system: 'Quality', 2019: 820, 2020: 920, 2021: 1050, 2022: 1180, 2023: 1240, 2024: 1290 },
    { system: 'Production', 2019: 640, 2020: 710, 2021: 820, 2022: 900, 2023: 940, 2024: 970 },
    { system: 'Laboratory', 2019: 480, 2020: 540, 2021: 610, 2022: 680, 2023: 720, 2024: 750 },
    { system: 'Facility', 2019: 420, 2020: 470, 2021: 530, 2022: 590, 2023: 620, 2024: 650 },
    { system: 'Materials', 2019: 320, 2020: 360, 2021: 410, 2022: 450, 2023: 480, 2024: 500 },
  ];

  const riskForecast = [
    { month: 'Feb', actual: 1250, predicted: 1255, confidence: 95 },
    { month: 'Mar', actual: null, predicted: 1320, confidence: 92 },
    { month: 'Apr', actual: null, predicted: 1380, confidence: 88 },
    { month: 'May', actual: null, predicted: 1425, confidence: 85 },
    { month: 'Jun', actual: null, predicted: 1470, confidence: 82 },
  ];

  return (
    <div className="min-h-screen bg-[#F6F9FC] pb-12">
      <div className="max-w-[1920px] mx-auto px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Advanced Analytics</h1>
            <p className="text-[#64748B]">Executive-level compliance intelligence and predictive insights</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E6EEF5] hover:border-[#0EA5E9]/30 transition-all">
              <Filter size={18} className="text-[#64748B]" />
              <span className="text-sm font-semibold text-[#0F172A]">Filters</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E6EEF5] hover:border-[#0EA5E9]/30 transition-all">
              <Calendar size={18} className="text-[#64748B]" />
              <span className="text-sm font-semibold text-[#0F172A]">2019 - 2024</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all">
              <Download size={18} />
              <span className="text-sm font-semibold">Export Report</span>
            </button>
          </div>
        </div>

        {/* System vs Year Heatmap */}
        <GlassCard className="p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">System Impact Heatmap</h3>
              <p className="text-sm text-[#64748B]">Observation distribution by system and year</p>
            </div>
            <button className="p-2 rounded-lg hover:bg-[#F6F9FC] transition-all">
              <Share2 size={18} className="text-[#64748B]" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E6EEF5]">
                  <th className="text-left p-3 text-sm font-semibold text-[#64748B]">System</th>
                  {[2019, 2020, 2021, 2022, 2023, 2024].map(year => (
                    <th key={year} className="text-center p-3 text-sm font-semibold text-[#64748B]">{year}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {heatmapData.map((row) => (
                  <tr key={row.system} className="border-b border-[#E6EEF5]/50">
                    <td className="p-3 font-semibold text-sm text-[#0F172A]">{row.system}</td>
                    {[2019, 2020, 2021, 2022, 2023, 2024].map(year => {
                      const value = row[year as keyof typeof row] as number;
                      const intensity = Math.min((value / 1500) * 100, 100);
                      return (
                        <td key={year} className="p-3 text-center">
                          <div
                            className="rounded-lg p-3 font-semibold text-sm transition-all hover:scale-110 cursor-pointer"
                            style={{
                              backgroundColor: `rgba(14, 165, 233, ${intensity / 100})`,
                              color: intensity > 50 ? '#FFFFFF' : '#0F172A',
                            }}
                          >
                            {value}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Investigator Influence Matrix */}
          <GlassCard className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#0F172A]">Investigator Influence Matrix</h3>
              <p className="text-sm text-[#64748B]">Top investigators by inspection volume and severity</p>
            </div>
            <div className="space-y-3">
              {topInvestigators.map((inv, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5] hover:border-[#0EA5E9]/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-semibold text-[#0F172A]">{inv.name}</div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded-lg bg-[#0EA5E9]/10 text-xs font-semibold text-[#0EA5E9]">
                        Severity: {inv.avgSeverity}/10
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-[#64748B] mb-1">Inspections</div>
                      <div className="text-lg font-bold text-[#0F172A]">{inv.inspections}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#64748B] mb-1">Findings</div>
                      <div className="text-lg font-bold text-[#0F172A]">{inv.findings}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 bg-[#E6EEF5] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4]"
                        style={{ width: `${(inv.avgSeverity / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Risk Forecast */}
          <GlassCard className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-[#0F172A]">Risk Forecast Model</h3>
              <p className="text-sm text-[#64748B]">AI-powered predictive analysis for Q1 2025</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={riskForecast}>
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
                <Legend />
                <Bar dataKey="actual" fill="#0EA5E9" radius={[8, 8, 0, 0]} name="Actual" />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="#B794F4"
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  name="Predicted"
                  dot={{ fill: '#B794F4', r: 5 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#B794F4]/10 border border-[#8B5CF6]/20">
              <div className="text-xs text-[#64748B] mb-1">Model Confidence</div>
              <div className="text-lg font-bold text-[#0F172A]">88% Average</div>
            </div>
          </GlassCard>
        </div>

        {/* Recurring Deficiency Clustering */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">Recurring Deficiency Clustering Map</h3>
              <p className="text-sm text-[#64748B]">Pattern analysis of repeat observations</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E6EEF5" />
              <XAxis
                type="number"
                dataKey="x"
                name="Frequency"
                stroke="#64748B"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                type="number"
                dataKey="y"
                name="Severity"
                stroke="#64748B"
                style={{ fontSize: '12px' }}
              />
              <ZAxis type="number" dataKey="z" range={[100, 1000]} name="Impact" />
              <Tooltip
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #E6EEF5',
                  borderRadius: '12px'
                }}
              />
              <Scatter
                name="Deficiency Clusters"
                data={[
                  { x: 12, y: 8.5, z: 450, name: 'Quality System' },
                  { x: 8, y: 7.2, z: 320, name: 'Production' },
                  { x: 15, y: 9.1, z: 580, name: 'Laboratory' },
                  { x: 6, y: 6.8, z: 280, name: 'Facility' },
                  { x: 10, y: 7.8, z: 390, name: 'Materials' },
                  { x: 4, y: 5.5, z: 180, name: 'Packaging' },
                ]}
                fill="#0EA5E9"
              >
                {[0, 1, 2, 3, 4, 5].map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={['#0EA5E9', '#06B6D4', '#8B5CF6', '#B794F4', '#10B981', '#F59E0B'][index]}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-6 gap-3 mt-4">
            {['Quality System', 'Production', 'Laboratory', 'Facility', 'Materials', 'Packaging'].map((label, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: ['#0EA5E9', '#06B6D4', '#8B5CF6', '#B794F4', '#10B981', '#F59E0B'][idx] }}
                />
                <span className="text-xs text-[#64748B]">{label}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
