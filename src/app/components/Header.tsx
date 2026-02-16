import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { 
  Search, Bell, Plus, ChevronDown, Building2, 
  LayoutDashboard, Database, Bot, Wrench, 
  BarChart3, FileText, Settings, AlertTriangle,
  TrendingUp, Users, Clock, Star, Command
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { recentNotifications } from '../data/mockData';

export function Header() {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showQuickAction, setShowQuickAction] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState<string | null>(null);
  const [showOrgSwitcher, setShowOrgSwitcher] = useState(false);
  const [searchChips, setSearchChips] = useState<string[]>([]);

  const navItems = [
    { 
      path: '/', 
      label: 'Dashboard', 
      icon: LayoutDashboard,
      hasDropdown: false 
    },
    { 
      path: '/database', 
      label: '483 Database', 
      icon: Database,
      hasDropdown: true,
      dropdownItems: [
        { label: 'Observations', icon: AlertTriangle, path: '/database?view=observations', recent: true },
        { label: 'Warning Letters', icon: FileText, path: '/database?view=letters' },
        { label: 'Companies', icon: Building2, path: '/database?view=companies', pinned: true },
        { label: 'Investigators', icon: Users, path: '/database?view=investigators' },
      ]
    },
    { 
      path: '/ai-assistant', 
      label: 'AI Assistant', 
      icon: Bot,
      hasDropdown: false 
    },
    { 
      path: '/tools', 
      label: 'Technical Tools', 
      icon: Wrench,
      hasDropdown: true,
      dropdownItems: [
        { label: 'ANDA Review Checklist', icon: FileText, path: '/tools', recent: true },
        { label: 'DMF Validation', icon: Database, path: '/tools' },
        { label: 'APQR Compliance Tool', icon: BarChart3, path: '/tools', pinned: true },
        { label: '483 Response Builder', icon: Wrench, path: '/tools', recent: true },
      ]
    },
    { 
      path: '/analytics', 
      label: 'Analytics', 
      icon: BarChart3,
      hasDropdown: false 
    },
    { 
      path: '/reports', 
      label: 'Reports', 
      icon: FileText,
      hasDropdown: false 
    },
  ];

  const quickActions = [
    { label: 'New Analysis', icon: BarChart3, shortcut: 'N' },
    { label: 'Generate Report', icon: FileText, shortcut: 'R' },
    { label: 'Compare Companies', icon: Building2, shortcut: 'C' },
    { label: 'Run AI Scan', icon: Bot, shortcut: 'A' },
    { label: 'Upload Document', icon: TrendingUp, shortcut: 'U' },
  ];

  const organizations = [
    { id: 1, name: 'iCretegy Pharmaceuticals', type: 'Primary' },
    { id: 2, name: 'BioTech Division', type: 'Division' },
    { id: 3, name: 'Quality Assurance Team', type: 'Team' },
  ];

  const filterChips = ['Company', 'Year', 'System', 'Investigator'];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-[#E6EEF5]/50 shadow-sm"
      >
        <div className="max-w-[1920px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-[#0EA5E9]/25">
                <span className="text-white font-bold text-lg">iP</span>
              </div>
              <div>
                <div className="text-lg font-bold text-[#0F172A]">iPharmaAI</div>
                <div className="text-[10px] text-[#64748B] -mt-0.5 tracking-wide">Regulatory Intelligence Suite</div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-1 flex-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path || 
                                (item.hasDropdown && location.pathname.startsWith(item.path));
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setShowMegaMenu(item.label)}
                    onMouseLeave={() => setShowMegaMenu(null)}
                  >
                    <Link
                      to={item.path}
                      className={`
                        flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all relative
                        ${isActive 
                          ? 'bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white shadow-lg shadow-[#0EA5E9]/25' 
                          : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F6F9FC]'
                        }
                      `}
                    >
                      <Icon size={18} />
                      <span className="font-medium text-sm">{item.label}</span>
                      {item.hasDropdown && <ChevronDown size={14} className="ml-1" />}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4]"
                        />
                      )}
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {item.hasDropdown && showMegaMenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E6EEF5] shadow-xl p-4"
                        >
                          <div className="grid grid-cols-1 gap-1">
                            {/* Recent items */}
                            {item.dropdownItems?.some(i => i.recent) && (
                              <>
                                <div className="text-xs font-semibold text-[#64748B] mb-2 px-3">Recent</div>
                                {item.dropdownItems.filter(i => i.recent).map((dropItem, idx) => {
                                  const DropIcon = dropItem.icon;
                                  return (
                                    <Link
                                      key={`recent-${dropItem.label}-${idx}`}
                                      to={dropItem.path}
                                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F6F9FC] transition-all group"
                                    >
                                      <div className="p-2 rounded-lg bg-[#0EA5E9]/10 group-hover:bg-[#0EA5E9]/20 transition-all">
                                        <DropIcon size={16} className="text-[#0EA5E9]" />
                                      </div>
                                      <div className="flex-1">
                                        <div className="text-sm font-semibold text-[#0F172A]">{dropItem.label}</div>
                                      </div>
                                      <Clock size={14} className="text-[#64748B]" />
                                    </Link>
                                  );
                                })}
                              </>
                            )}

                            {/* Pinned items */}
                            {item.dropdownItems?.some(i => i.pinned) && (
                              <>
                                <div className="text-xs font-semibold text-[#64748B] mb-2 px-3 mt-3">Pinned</div>
                                {item.dropdownItems.filter(i => i.pinned).map((dropItem, idx) => {
                                  const DropIcon = dropItem.icon;
                                  return (
                                    <Link
                                      key={`pinned-${dropItem.label}-${idx}`}
                                      to={dropItem.path}
                                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F6F9FC] transition-all group"
                                    >
                                      <div className="p-2 rounded-lg bg-[#B794F4]/10 group-hover:bg-[#B794F4]/20 transition-all">
                                        <DropIcon size={16} className="text-[#B794F4]" />
                                      </div>
                                      <div className="flex-1">
                                        <div className="text-sm font-semibold text-[#0F172A]">{dropItem.label}</div>
                                      </div>
                                      <Star size={14} className="text-[#B794F4]" fill="#B794F4" />
                                    </Link>
                                  );
                                })}
                              </>
                            )}

                            {/* All items */}
                            <div className="text-xs font-semibold text-[#64748B] mb-2 px-3 mt-3">All</div>
                            {item.dropdownItems?.filter(i => !i.recent && !i.pinned).map((dropItem, idx) => {
                              const DropIcon = dropItem.icon;
                              return (
                                <Link
                                  key={`all-${dropItem.label}-${idx}`}
                                  to={dropItem.path}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F6F9FC] transition-all group"
                                >
                                  <div className="p-2 rounded-lg bg-[#64748B]/10 group-hover:bg-[#64748B]/20 transition-all">
                                    <DropIcon size={16} className="text-[#64748B]" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-sm font-semibold text-[#0F172A]">{dropItem.label}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Search Bar with Filter Chips */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" size={18} />
                <div className="flex items-center gap-2 pl-12 pr-4 py-2.5 bg-[#F6F9FC] border border-[#E6EEF5] rounded-xl focus-within:ring-2 focus-within:ring-[#0EA5E9]/30 focus-within:border-[#0EA5E9] transition-all">
                  {searchChips.map((chip, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-lg bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-semibold flex items-center gap-1 cursor-pointer hover:bg-[#0EA5E9]/20 transition-all"
                      onClick={() => setSearchChips(searchChips.filter((_, i) => i !== idx))}
                    >
                      {chip}
                      <span className="text-[10px]">×</span>
                    </span>
                  ))}
                  <input
                    type="text"
                    placeholder={searchChips.length === 0 ? "Search company, investigator, system, year, keyword..." : ""}
                    className="flex-1 bg-transparent text-sm focus:outline-none min-w-[100px]"
                    onKeyDown={(e) => {
                      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                        e.preventDefault();
                        // Command palette trigger
                      }
                    }}
                  />
                  <div className="flex items-center gap-1">
                    {filterChips.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => !searchChips.includes(filter) && setSearchChips([...searchChips, filter])}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                          searchChips.includes(filter)
                            ? 'bg-[#0EA5E9]/10 text-[#0EA5E9]'
                            : 'bg-transparent text-[#64748B] hover:bg-[#E6EEF5]'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-0.5 rounded bg-[#E6EEF5]">
                  <Command size={10} className="text-[#64748B]" />
                  <span className="text-[10px] text-[#64748B] font-semibold">K</span>
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Organization Switcher */}
              <div className="relative">
                <button
                  onClick={() => setShowOrgSwitcher(!showOrgSwitcher)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F6F9FC] hover:bg-white border border-[#E6EEF5] transition-all"
                >
                  <Building2 size={16} className="text-[#64748B]" />
                  <span className="text-sm font-semibold text-[#0F172A]">iCretegy</span>
                  <ChevronDown size={14} className="text-[#64748B]" />
                </button>

                <AnimatePresence>
                  {showOrgSwitcher && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowOrgSwitcher(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 top-14 w-72 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E6EEF5] shadow-xl overflow-hidden z-50"
                      >
                        <div className="p-3">
                          <div className="text-xs font-semibold text-[#64748B] mb-2 px-2">Switch Organization</div>
                          {organizations.map((org) => (
                            <button
                              key={org.id}
                              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#F6F9FC] transition-all text-left"
                            >
                              <div>
                                <div className="text-sm font-semibold text-[#0F172A]">{org.name}</div>
                                <div className="text-xs text-[#64748B]">{org.type}</div>
                              </div>
                              {org.id === 1 && (
                                <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                              )}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2.5 rounded-xl hover:bg-[#F6F9FC] transition-all"
                >
                  <Bell size={20} className="text-[#64748B]" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#EF4444] rounded-full border-2 border-white" />
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowNotifications(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 top-14 w-96 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E6EEF5] shadow-xl overflow-hidden z-50"
                      >
                        <div className="p-4 border-b border-[#E6EEF5] flex items-center justify-between">
                          <h3 className="font-semibold text-[#0F172A]">Notifications</h3>
                          <div className="flex items-center gap-2">
                            <button className="text-xs text-[#0EA5E9] font-semibold hover:underline">
                              Mark all read
                            </button>
                          </div>
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                          {recentNotifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`p-4 border-b border-[#E6EEF5]/50 hover:bg-[#F6F9FC]/50 transition-all cursor-pointer ${
                                !notification.read ? 'bg-[#0EA5E9]/5' : ''
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <div className={`p-2 rounded-lg ${
                                  notification.type === 'alert' ? 'bg-red-100 text-red-600' :
                                  notification.type === 'insight' ? 'bg-blue-100 text-blue-600' :
                                  notification.type === 'update' ? 'bg-green-100 text-green-600' :
                                  'bg-purple-100 text-purple-600'
                                }`}>
                                  <Bell size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-sm text-[#0F172A] mb-0.5">
                                    {notification.title}
                                  </div>
                                  <div className="text-xs text-[#64748B] mb-1">
                                    {notification.message}
                                  </div>
                                  <div className="text-xs text-[#0EA5E9]">{notification.time}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Quick Action */}
              <div className="relative">
                <button
                  onClick={() => setShowQuickAction(!showQuickAction)}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all"
                >
                  <Plus size={20} className="text-white" />
                </button>

                <AnimatePresence>
                  {showQuickAction && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowQuickAction(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 top-14 w-72 bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E6EEF5] shadow-xl overflow-hidden z-50"
                      >
                        <div className="p-3">
                          <div className="text-xs font-semibold text-[#64748B] mb-2 px-2">Quick Actions</div>
                          {quickActions.map((action, idx) => {
                            const Icon = action.icon;
                            return (
                              <button
                                key={idx}
                                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#F6F9FC] transition-all text-left group"
                              >
                                <div className="flex items-center gap-3">
                                  <Icon size={18} className="text-[#0EA5E9]" />
                                  <span className="text-sm font-medium text-[#0F172A]">{action.label}</span>
                                </div>
                                <div className="px-1.5 py-0.5 rounded bg-[#E6EEF5] text-[10px] font-semibold text-[#64748B]">
                                  {action.shortcut}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Profile */}
              <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-[#F6F9FC] transition-all">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#B794F4] to-[#8B5CF6] flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">JD</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-[#0F172A]">John Doe</div>
                  <div className="text-xs text-[#64748B]">Admin</div>
                </div>
                <ChevronDown size={16} className="text-[#64748B]" />
              </button>

              {/* Settings */}
              <Link
                to="/settings"
                className="p-2.5 rounded-xl hover:bg-[#F6F9FC] transition-all"
              >
                <Settings size={20} className="text-[#64748B]" />
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Command Palette Hint */}
      <AnimatePresence>
        {location.pathname === '/' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
            className="fixed top-24 right-8 z-40"
          >
            <div className="px-4 py-2 rounded-xl bg-white/95 backdrop-blur-xl border border-[#E6EEF5] shadow-lg flex items-center gap-2">
              <Command size={14} className="text-[#0EA5E9]" />
              <span className="text-xs text-[#64748B]">Press</span>
              <kbd className="px-2 py-0.5 rounded bg-[#E6EEF5] text-xs font-semibold text-[#0F172A]">⌘K</kbd>
              <span className="text-xs text-[#64748B]">for quick access</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}