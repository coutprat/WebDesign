import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { technicalTools } from '../data/mockData';
import { 
  FileCheck, Shield, BarChart3, Mail, 
  FileText, Database, ChevronRight 
} from 'lucide-react';

const iconMap: Record<string, any> = {
  FileCheck,
  Shield,
  BarChart3,
  Mail,
  FileText,
  Database,
};

export function TechnicalTools() {
  return (
    <div className="min-h-screen bg-[#F6F9FC] pb-12">
      <div className="max-w-[1920px] mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Technical Tools Hub</h1>
          <p className="text-[#64748B]">Interactive regulatory compliance and documentation tools</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {technicalTools.map((tool, index) => {
            const Icon = iconMap[tool.icon] || FileCheck;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 group cursor-pointer h-full" hover>
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${tool.gradient} mb-6`} />
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${tool.gradient} group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <span className="px-3 py-1.5 rounded-lg bg-[#F6F9FC] text-xs font-semibold text-[#64748B]">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0EA5E9] transition-colors">
                    {tool.name}
                  </h3>
                  
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    {tool.description}
                  </p>

                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all">
                    <span>Open Tool</span>
                    <ChevronRight size={18} />
                  </button>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Recent Activity</h2>
          <div className="grid grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <h3 className="font-bold text-[#0F172A] mb-4">Recently Used</h3>
              <div className="space-y-3">
                {technicalTools.slice(0, 3).map((tool) => {
                  const Icon = iconMap[tool.icon] || FileCheck;
                  return (
                    <div
                      key={tool.id}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F6F9FC] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${tool.gradient}`}>
                          <Icon className="text-white" size={16} />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-[#0F172A]">{tool.name}</div>
                          <div className="text-xs text-[#64748B]">Last used 2 hours ago</div>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-[#64748B]" />
                    </div>
                  );
                })}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="font-bold text-[#0F172A] mb-4">Generated Documents</h3>
              <div className="space-y-3">
                {[
                  { name: '483 Response - GlobalMed Solutions', date: 'Today, 3:45 PM' },
                  { name: 'ANDA Review Checklist - BioGenix', date: 'Yesterday, 2:30 PM' },
                  { name: 'APQR Report Q4 2024', date: 'Jan 12, 2025' },
                ].map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F6F9FC] transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#0EA5E9]/10">
                        <FileText className="text-[#0EA5E9]" size={16} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[#0F172A]">{doc.name}</div>
                        <div className="text-xs text-[#64748B]">{doc.date}</div>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-[#64748B]" />
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
