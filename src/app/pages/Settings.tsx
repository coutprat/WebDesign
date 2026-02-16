import React, { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import {
  LoadingSkeleton,
  EmptyState,
  NoResults,
  ErrorState,
  PermissionDenied,
  OfflineState,
  SuccessToast,
  DataLoading,
  MaintenanceMode
} from '../components/EnterpriseStates';
import { AnimatePresence } from 'motion/react';
import { FileText, Database, Settings as SettingsIcon } from 'lucide-react';

export function Settings() {
  const [showToast, setShowToast] = useState(false);
  const [activeDemo, setActiveDemo] = useState<string>('loading');

  const demos = [
    { id: 'loading', label: 'Loading Skeleton', icon: '⏳' },
    { id: 'empty', label: 'Empty State', icon: '📭' },
    { id: 'no-results', label: 'No Results', icon: '🔍' },
    { id: 'error', label: 'Error State', icon: '⚠️' },
    { id: 'permission', label: 'Permission Denied', icon: '🔒' },
    { id: 'offline', label: 'Offline State', icon: '📡' },
    { id: 'data-loading', label: 'Data Loading', icon: '💫' },
  ];

  const renderDemo = () => {
    switch (activeDemo) {
      case 'loading':
        return <LoadingSkeleton rows={3} />;
      case 'empty':
        return (
          <EmptyState
            icon={FileText}
            title="No documents found"
            description="Get started by creating your first regulatory intelligence report or importing existing data."
            actionLabel="Create Report"
            onAction={() => alert('Create report')}
          />
        );
      case 'no-results':
        return (
          <NoResults
            searchQuery="Pharma XYZ Corp"
            onClearFilters={() => alert('Clear filters')}
          />
        );
      case 'error':
        return (
          <ErrorState
            title="Failed to load data"
            message="We couldn't fetch the latest compliance data. This might be a temporary issue."
            errorCode="ERR_API_500"
            onRetry={() => alert('Retry')}
          />
        );
      case 'permission':
        return <PermissionDenied resource="advanced analytics reports" />;
      case 'offline':
        return <OfflineState onRetry={() => alert('Reconnect')} />;
      case 'data-loading':
        return <DataLoading message="Analyzing compliance data..." />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F9FC] pb-12">
      <div className="max-w-[1920px] mx-auto px-6 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Enterprise States Demo</h1>
          <p className="text-[#64748B]">Preview all enterprise UI states and components</p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Sidebar - State Selector */}
          <div>
            <GlassCard className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <SettingsIcon className="text-[#0EA5E9]" size={20} />
                <h3 className="font-bold text-[#0F172A]">UI States</h3>
              </div>

              <div className="space-y-2">
                {demos.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => setActiveDemo(demo.id)}
                    className={`w-full px-4 py-3 rounded-xl text-left transition-all flex items-center gap-3 ${
                      activeDemo === demo.id
                        ? 'bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white shadow-lg shadow-[#0EA5E9]/25'
                        : 'bg-white border border-[#E6EEF5] text-[#0F172A] hover:border-[#0EA5E9]'
                    }`}
                  >
                    <span className="text-xl">{demo.icon}</span>
                    <span className="text-sm font-semibold">{demo.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-[#E6EEF5]">
                <button
                  onClick={() => setShowToast(true)}
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold hover:shadow-lg hover:shadow-[#10B981]/25 transition-all"
                >
                  Show Success Toast
                </button>
              </div>
            </GlassCard>
          </div>

          {/* Main Content - Demo Preview */}
          <div className="col-span-3">
            <GlassCard className="p-6">
              <div className="mb-4 pb-4 border-b border-[#E6EEF5]">
                <h2 className="text-xl font-bold text-[#0F172A] mb-1">
                  {demos.find((d) => d.id === activeDemo)?.label}
                </h2>
                <p className="text-sm text-[#64748B]">
                  Enterprise-grade UI state component
                </p>
              </div>

              <div className="min-h-[400px]">{renderDemo()}</div>
            </GlassCard>

            {/* Additional Info Card */}
            <GlassCard className="p-6 mt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#B794F4]">
                  <Database className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#0F172A] mb-2">Component Library</h3>
                  <p className="text-sm text-[#64748B] mb-3">
                    All enterprise states are built with consistent design patterns, animations,
                    and accessibility features. They're ready to be used across the entire application.
                  </p>
                  <div className="flex gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-[#F6F9FC] border border-[#E6EEF5] text-xs font-semibold text-[#64748B]">
                      Motion animations
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-[#F6F9FC] border border-[#E6EEF5] text-xs font-semibold text-[#64748B]">
                      Accessible
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-[#F6F9FC] border border-[#E6EEF5] text-xs font-semibold text-[#64748B]">
                      Responsive
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <SuccessToast
            message="Report exported successfully!"
            onClose={() => setShowToast(false)}
            action={{
              label: 'View report',
              onClick: () => {
                setShowToast(false);
                alert('View report');
              },
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
