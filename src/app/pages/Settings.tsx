import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GlassCard } from '../components/GlassCard';
import { 
  Building2, Users, Lock, Key, CreditCard, 
  Shield, FileText, Activity, Bell, Palette 
} from 'lucide-react';

export function Settings() {
  const [activeTab, setActiveTab] = useState('organization');

  const tabs = [
    { id: 'organization', label: 'Organization', icon: Building2 },
    { id: 'users', label: 'Users & Roles', icon: Users },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'api', label: 'API Keys', icon: Key },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'audit', label: 'Audit Logs', icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-[#F6F9FC] pb-12">
      <div className="max-w-[1920px] mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Settings</h1>
          <p className="text-[#64748B]">Manage your organization, security, and preferences</p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white shadow-lg shadow-[#0EA5E9]/25'
                      : 'bg-white text-[#64748B] hover:text-[#0F172A] hover:bg-[#F6F9FC]'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-semibold text-sm">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="col-span-3">
            {activeTab === 'organization' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <GlassCard className="p-6">
                  <h3 className="font-bold text-[#0F172A] mb-6">Organization Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Organization Name
                      </label>
                      <input
                        type="text"
                        defaultValue="iCretegy Pharmaceuticals"
                        className="w-full px-4 py-2.5 bg-[#F6F9FC] border border-[#E6EEF5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                          Industry
                        </label>
                        <select className="w-full px-4 py-2.5 bg-[#F6F9FC] border border-[#E6EEF5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30">
                          <option>Pharmaceutical Manufacturing</option>
                          <option>Biotechnology</option>
                          <option>Medical Devices</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                          Company Size
                        </label>
                        <select className="w-full px-4 py-2.5 bg-[#F6F9FC] border border-[#E6EEF5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30">
                          <option>1-50 employees</option>
                          <option>51-200 employees</option>
                          <option>201-1000 employees</option>
                          <option>1000+ employees</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Primary Location
                      </label>
                      <input
                        type="text"
                        defaultValue="New Jersey, USA"
                        className="w-full px-4 py-2.5 bg-[#F6F9FC] border border-[#E6EEF5] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#E6EEF5]">
                    <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all">
                      Save Changes
                    </button>
                    <button className="px-6 py-2.5 rounded-xl bg-[#F6F9FC] text-[#0F172A] font-semibold hover:bg-white transition-all">
                      Cancel
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {activeTab === 'users' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <GlassCard className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-[#0F172A]">Team Members</h3>
                    <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all">
                      Invite User
                    </button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'John Doe', email: 'john.doe@icretegy.com', role: 'Admin', status: 'Active' },
                      { name: 'Sarah Chen', email: 'sarah.chen@icretegy.com', role: 'Analyst', status: 'Active' },
                      { name: 'Mike Johnson', email: 'mike.j@icretegy.com', role: 'Viewer', status: 'Active' },
                    ].map((user, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-[#0F172A]">{user.name}</div>
                            <div className="text-xs text-[#64748B]">{user.email}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-600 text-xs font-semibold">
                            {user.role}
                          </span>
                          <span className="px-3 py-1 rounded-lg bg-green-100 text-green-600 text-xs font-semibold">
                            {user.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                <GlassCard className="p-6">
                  <h3 className="font-bold text-[#0F172A] mb-4">Role Permissions</h3>
                  <div className="space-y-4">
                    {['Admin', 'Analyst', 'Viewer'].map((role) => (
                      <div key={role} className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5]">
                        <div className="font-semibold text-sm text-[#0F172A] mb-2">{role}</div>
                        <div className="text-xs text-[#64748B]">
                          {role === 'Admin' && 'Full access to all features and settings'}
                          {role === 'Analyst' && 'Can view and analyze data, generate reports'}
                          {role === 'Viewer' && 'Read-only access to dashboards and reports'}
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {activeTab === 'security' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <GlassCard className="p-6">
                  <h3 className="font-bold text-[#0F172A] mb-6">Security Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-[#F6F9FC]">
                      <div>
                        <div className="font-semibold text-sm text-[#0F172A] mb-1">
                          Two-Factor Authentication
                        </div>
                        <div className="text-xs text-[#64748B]">
                          Add an extra layer of security to your account
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0EA5E9]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0EA5E9]"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-[#F6F9FC]">
                      <div>
                        <div className="font-semibold text-sm text-[#0F172A] mb-1">
                          Session Timeout
                        </div>
                        <div className="text-xs text-[#64748B]">
                          Automatically log out after period of inactivity
                        </div>
                      </div>
                      <select className="px-3 py-1.5 bg-white border border-[#E6EEF5] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30">
                        <option>15 minutes</option>
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>Never</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-[#F6F9FC]">
                      <div>
                        <div className="font-semibold text-sm text-[#0F172A] mb-1">
                          Login Notifications
                        </div>
                        <div className="text-xs text-[#64748B]">
                          Get notified of new login attempts
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0EA5E9]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0EA5E9]"></div>
                      </label>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {activeTab === 'api' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <GlassCard className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-[#0F172A]">API Keys</h3>
                    <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all">
                      Generate New Key
                    </button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Production API Key', key: 'pk_live_••••••••••••5f2a', created: 'Jan 15, 2025', status: 'Active' },
                      { name: 'Development API Key', key: 'pk_test_••••••••••••8d9c', created: 'Jan 10, 2025', status: 'Active' },
                    ].map((apiKey, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5]">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-sm text-[#0F172A]">{apiKey.name}</div>
                          <span className="px-3 py-1 rounded-lg bg-green-100 text-green-600 text-xs font-semibold">
                            {apiKey.status}
                          </span>
                        </div>
                        <div className="text-xs text-[#64748B] mb-2 font-mono">{apiKey.key}</div>
                        <div className="text-xs text-[#64748B]">Created: {apiKey.created}</div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {activeTab === 'billing' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <GlassCard className="p-6">
                  <h3 className="font-bold text-[#0F172A] mb-6">Current Plan</h3>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-[#0EA5E9]/10 to-[#06B6D4]/10 border border-[#0EA5E9]/20">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-[#0F172A]">Enterprise Plan</h4>
                        <p className="text-sm text-[#64748B]">Unlimited access to all features</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-[#0F172A]">$999</div>
                        <div className="text-sm text-[#64748B]">per month</div>
                      </div>
                    </div>
                    <button className="w-full py-2.5 rounded-xl bg-white border border-[#E6EEF5] font-semibold text-sm hover:bg-[#F6F9FC] transition-all">
                      Manage Subscription
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {activeTab === 'audit' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <GlassCard className="p-6">
                  <h3 className="font-bold text-[#0F172A] mb-6">Audit Logs</h3>
                  <div className="space-y-2">
                    {[
                      { action: 'User login', user: 'John Doe', time: '2 hours ago', type: 'success' },
                      { action: 'Report generated', user: 'Sarah Chen', time: '3 hours ago', type: 'info' },
                      { action: 'Settings updated', user: 'John Doe', time: '5 hours ago', type: 'warning' },
                      { action: 'API key created', user: 'Mike Johnson', time: '1 day ago', type: 'info' },
                    ].map((log, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F6F9FC] transition-all">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            log.type === 'success' ? 'bg-green-500' :
                            log.type === 'warning' ? 'bg-orange-500' :
                            'bg-blue-500'
                          }`} />
                          <div>
                            <div className="text-sm font-semibold text-[#0F172A]">{log.action}</div>
                            <div className="text-xs text-[#64748B]">{log.user}</div>
                          </div>
                        </div>
                        <div className="text-xs text-[#64748B]">{log.time}</div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
