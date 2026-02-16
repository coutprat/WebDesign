import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, Sparkles, Upload, FileText, BarChart3, 
  Database, Building2, TrendingUp, Copy, ThumbsUp 
} from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

interface Message {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  confidence?: number;
  citations?: string[];
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your AI Regulatory Assistant. I can help you with FDA 483 analysis, CAPA recommendations, risk assessments, and compliance strategy. How can I assist you today?',
      timestamp: new Date(),
      confidence: 100,
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const aiTools = [
    { icon: FileText, label: 'Generate CAPA', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Building2, label: 'Draft FDA Response', gradient: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, label: 'Risk Forecast', gradient: 'from-emerald-500 to-teal-500' },
    { icon: Database, label: 'Compare Companies', gradient: 'from-orange-500 to-red-500' },
    { icon: BarChart3, label: 'Create White Paper', gradient: 'from-indigo-500 to-purple-500' },
  ];

  const quickPrompts = [
    'Analyze recurring deficiencies for GlobalMed Solutions',
    'Generate CAPA recommendations for Quality System observations',
    'Compare risk profiles of top 3 high-risk companies',
    'Draft 483 response for production process deficiencies',
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        type: 'ai',
        content: `Based on my analysis of the FDA 483 database, I've identified several key insights related to your query:\n\n**Key Findings:**\n• Quality System observations have increased 23% over the past 12 months\n• Root cause patterns indicate systematic gaps in investigation procedures\n• Similar companies show 68% recurrence rate within 18 months\n\n**Recommendations:**\n1. Implement enhanced CAPA tracking system\n2. Strengthen investigation protocols\n3. Deploy comprehensive staff training program\n\nWould you like me to generate a detailed CAPA plan or draft a response letter?`,
        timestamp: new Date(),
        confidence: 94,
        citations: ['FDA 483 Database', 'Historical Trend Analysis', 'Comparative Company Data'],
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="h-[calc(100vh-88px)] bg-[#F6F9FC] flex">
      <div className="max-w-[1920px] w-full mx-auto p-8 flex gap-6">
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          <GlassCard className="flex-1 flex flex-col p-6 overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E6EEF5]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#B794F4]">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#0F172A]">AI Regulatory Assistant</h2>
                  <p className="text-sm text-[#64748B]">Powered by advanced compliance analytics</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-green-100 text-green-600 text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Online
                </span>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto mb-6 space-y-4 px-2">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`p-4 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] text-white'
                          : 'bg-white border border-[#E6EEF5]'
                      }`}
                    >
                      {message.type === 'ai' && (
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#B794F4]">
                            <Sparkles className="text-white" size={14} />
                          </div>
                          <span className="text-xs font-semibold text-[#64748B]">AI Assistant</span>
                        </div>
                      )}
                      <p className={`text-sm leading-relaxed whitespace-pre-line ${
                        message.type === 'user' ? 'text-white' : 'text-[#0F172A]'
                      }`}>
                        {message.content}
                      </p>
                      {message.confidence && (
                        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#E6EEF5]">
                          <span className="text-xs text-[#64748B]">Confidence: {message.confidence}%</span>
                          {message.citations && (
                            <div className="flex items-center gap-1">
                              <FileText size={12} className="text-[#64748B]" />
                              <span className="text-xs text-[#64748B]">{message.citations.length} sources</span>
                            </div>
                          )}
                        </div>
                      )}
                      {message.type === 'ai' && (
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#E6EEF5]">
                          <button className="p-1.5 rounded-lg hover:bg-[#F6F9FC] transition-all">
                            <Copy size={14} className="text-[#64748B]" />
                          </button>
                          <button className="p-1.5 rounded-lg hover:bg-[#F6F9FC] transition-all">
                            <ThumbsUp size={14} className="text-[#64748B]" />
                          </button>
                        </div>
                      )}
                    </div>
                    <div className={`text-xs text-[#64748B] mt-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-4 rounded-2xl bg-white border border-[#E6EEF5]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#0EA5E9] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-[#0EA5E9] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-[#0EA5E9] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Prompts */}
            {messages.length === 1 && (
              <div className="mb-4">
                <div className="text-xs text-[#64748B] mb-2 font-semibold">Quick Prompts:</div>
                <div className="grid grid-cols-2 gap-2">
                  {quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInput(prompt)}
                      className="p-3 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5] text-left text-sm text-[#64748B] hover:text-[#0F172A] hover:border-[#0EA5E9]/30 hover:bg-white transition-all"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="flex items-end gap-3">
              <button className="p-3 rounded-xl bg-[#F6F9FC] hover:bg-white border border-[#E6EEF5] transition-all">
                <Upload size={20} className="text-[#64748B]" />
              </button>
              <div className="flex-1 relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Ask me anything about FDA 483 observations, compliance, CAPA recommendations..."
                  className="w-full px-4 py-3 pr-12 bg-[#F6F9FC] border border-[#E6EEF5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all resize-none"
                  rows={1}
                />
              </div>
              <button
                onClick={handleSend}
                className="p-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all"
              >
                <Send size={20} className="text-white" />
              </button>
            </div>
          </GlassCard>
        </div>

        {/* AI Tools Panel */}
        <div className="w-80 space-y-4">
          <GlassCard className="p-6">
            <div className="mb-4">
              <h3 className="font-bold text-[#0F172A] mb-1">AI Tools</h3>
              <p className="text-xs text-[#64748B]">Specialized analysis modules</p>
            </div>
            <div className="space-y-3">
              {aiTools.map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <button
                    key={idx}
                    className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#F6F9FC] hover:bg-white border border-[#E6EEF5] hover:border-[#0EA5E9]/30 transition-all text-left group"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${tool.gradient} group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={18} />
                    </div>
                    <span className="text-sm font-semibold text-[#0F172A] group-hover:text-[#0EA5E9] transition-colors">
                      {tool.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="mb-4">
              <h3 className="font-bold text-[#0F172A] mb-1">Context</h3>
              <p className="text-xs text-[#64748B]">Current analysis scope</p>
            </div>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5]">
                <div className="text-xs text-[#64748B] mb-1">Database</div>
                <div className="text-sm font-semibold text-[#0F172A]">Full FDA 483 Archive</div>
              </div>
              <div className="p-3 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5]">
                <div className="text-xs text-[#64748B] mb-1">Time Range</div>
                <div className="text-sm font-semibold text-[#0F172A]">2019 - 2024</div>
              </div>
              <div className="p-3 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5]">
                <div className="text-xs text-[#64748B] mb-1">Companies</div>
                <div className="text-sm font-semibold text-[#0F172A]">4,852 Total</div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 bg-gradient-to-br from-[#8B5CF6]/10 to-[#B794F4]/10 border-[#8B5CF6]/20">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#B794F4]">
                <Sparkles className="text-white" size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] mb-1 text-sm">Pro Tip</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Ask me to compare multiple companies or generate predictive risk analysis for better strategic insights.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
