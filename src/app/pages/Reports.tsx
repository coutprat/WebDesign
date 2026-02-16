import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { 
  FileText, Download, Calendar, TrendingUp, 
  Filter, Search, ChevronRight 
} from 'lucide-react';

export function Reports() {
  const reports = [
    {
      title: 'Monthly Compliance Summary',
      type: 'Executive Summary',
      date: 'January 2025',
      status: 'Ready',
      pages: 24,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Q4 2024 Trend Analysis',
      type: 'Quarterly Report',
      date: 'December 2024',
      status: 'Ready',
      pages: 48,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Annual Regulatory Intelligence',
      type: 'Annual Report',
      date: '2024',
      status: 'Ready',
      pages: 156,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Top Risk Companies Analysis',
      type: 'Custom Report',
      date: 'January 15, 2025',
      status: 'Ready',
      pages: 32,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Investigator Profile Report',
      type: 'Custom Report',
      date: 'January 10, 2025',
      status: 'Ready',
      pages: 18,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'System Breakdown Deep Dive',
      type: 'Technical Report',
      date: 'January 8, 2025',
      status: 'Ready',
      pages: 42,
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  const templates = [
    'Monthly Executive Summary',
    'Quarterly Trend Analysis',
    'Annual Compliance Report',
    'Custom Company Analysis',
    'Risk Forecast Report',
    'CAPA Effectiveness Study',
  ];

  return (
    <div className="min-h-screen bg-[#F6F9FC] pb-12">
      <div className="max-w-[1920px] mx-auto px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Reports Center</h1>
            <p className="text-[#64748B]">Generate, export, and share compliance intelligence reports</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all">
            <FileText size={18} />
            <span>Generate New Report</span>
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#0EA5E9]/10 to-[#06B6D4]/10">
                <FileText className="text-[#0EA5E9]" size={24} />
              </div>
            </div>
            <div className="text-2xl font-bold text-[#0F172A] mb-1">127</div>
            <div className="text-sm text-[#64748B]">Total Reports</div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#10B981]/10 to-[#06B6D4]/10">
                <TrendingUp className="text-[#10B981]" size={24} />
              </div>
            </div>
            <div className="text-2xl font-bold text-[#0F172A] mb-1">42</div>
            <div className="text-sm text-[#64748B]">This Month</div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#8B5CF6]/10 to-[#B794F4]/10">
                <Download className="text-[#8B5CF6]" size={24} />
              </div>
            </div>
            <div className="text-2xl font-bold text-[#0F172A] mb-1">892</div>
            <div className="text-sm text-[#64748B]">Downloads</div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#F59E0B]/10 to-[#EF4444]/10">
                <Calendar className="text-[#F59E0B]" size={24} />
              </div>
            </div>
            <div className="text-2xl font-bold text-[#0F172A] mb-1">18</div>
            <div className="text-sm text-[#64748B]">Scheduled</div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Reports List */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" size={18} />
                <input
                  type="text"
                  placeholder="Search reports..."
                  className="w-full pl-12 pr-4 py-2.5 bg-white border border-[#E6EEF5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E6EEF5] hover:border-[#0EA5E9]/30 transition-all">
                <Filter size={18} className="text-[#64748B]" />
                <span className="text-sm font-semibold text-[#0F172A]">Filter</span>
              </button>
            </div>

            {reports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <GlassCard className="p-6 group cursor-pointer" hover>
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${report.gradient} group-hover:scale-110 transition-transform shrink-0`}>
                      <FileText className="text-white" size={28} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-[#0F172A] mb-1 group-hover:text-[#0EA5E9] transition-colors">
                            {report.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-[#64748B]">
                            <span className="px-2 py-1 rounded-lg bg-[#F6F9FC] text-xs font-semibold">
                              {report.type}
                            </span>
                            <span>•</span>
                            <span>{report.pages} pages</span>
                            <span>•</span>
                            <span>{report.date}</span>
                          </div>
                        </div>
                        <span className="px-3 py-1.5 rounded-lg bg-green-100 text-green-600 text-xs font-semibold">
                          {report.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#E6EEF5]">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all">
                          <Download size={16} />
                          <span>Download PDF</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F6F9FC] text-sm font-semibold text-[#0F172A] hover:bg-white transition-all">
                          <span>View Report</span>
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Templates Sidebar */}
          <div className="space-y-6">
            <GlassCard className="p-6">
              <h3 className="font-bold text-[#0F172A] mb-4">Report Templates</h3>
              <div className="space-y-2">
                {templates.map((template, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#F6F9FC] transition-all text-left group"
                  >
                    <span className="text-sm text-[#64748B] group-hover:text-[#0F172A] transition-colors">
                      {template}
                    </span>
                    <ChevronRight size={16} className="text-[#64748B] group-hover:text-[#0EA5E9] transition-colors" />
                  </button>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="font-bold text-[#0F172A] mb-4">Scheduled Reports</h3>
              <div className="space-y-3">
                {[
                  { name: 'Monthly Summary', schedule: 'Every 1st of month' },
                  { name: 'Weekly Brief', schedule: 'Every Monday' },
                  { name: 'Quarterly Review', schedule: 'End of quarter' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5]">
                    <div className="font-semibold text-sm text-[#0F172A] mb-1">{item.name}</div>
                    <div className="text-xs text-[#64748B]">{item.schedule}</div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 bg-gradient-to-br from-[#0EA5E9]/10 to-[#06B6D4]/10 border-[#0EA5E9]/20">
              <h3 className="font-bold text-[#0F172A] mb-2">Need Help?</h3>
              <p className="text-sm text-[#64748B] mb-4">
                Learn how to create custom reports and automate your compliance documentation.
              </p>
              <button className="text-sm text-[#0EA5E9] font-semibold hover:underline">
                View Documentation →
              </button>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
