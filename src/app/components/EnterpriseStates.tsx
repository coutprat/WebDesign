import React from 'react';
import { motion } from 'motion/react';
import {
  AlertTriangle, RefreshCw, Search, Lock, Database,
  FileQuestion, WifiOff, X, CheckCircle
} from 'lucide-react';

// Loading Skeleton with Shimmer
export function LoadingSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="bg-white rounded-2xl p-6 border border-[#E6EEF5]">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F6F9FC] via-[#E6EEF5] to-[#F6F9FC] animate-shimmer bg-[length:400%_100%]" />
            <div className="flex-1 space-y-3">
              <div className="h-5 bg-gradient-to-r from-[#F6F9FC] via-[#E6EEF5] to-[#F6F9FC] rounded animate-shimmer bg-[length:400%_100%] w-3/4" />
              <div className="h-4 bg-gradient-to-r from-[#F6F9FC] via-[#E6EEF5] to-[#F6F9FC] rounded animate-shimmer bg-[length:400%_100%] w-1/2" />
              <div className="flex gap-2">
                <div className="h-6 w-20 bg-gradient-to-r from-[#F6F9FC] via-[#E6EEF5] to-[#F6F9FC] rounded-full animate-shimmer bg-[length:400%_100%]" />
                <div className="h-6 w-24 bg-gradient-to-r from-[#F6F9FC] via-[#E6EEF5] to-[#F6F9FC] rounded-full animate-shimmer bg-[length:400%_100%]" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Empty State
interface EmptyStateProps {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  icon: Icon = FileQuestion,
  title,
  description,
  actionLabel,
  onAction
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 px-6"
    >
      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#F6F9FC] to-[#E6EEF5] flex items-center justify-center mb-6">
        <Icon size={48} className="text-[#64748B]" />
      </div>
      <h3 className="text-xl font-bold text-[#0F172A] mb-2">{title}</h3>
      <p className="text-[#64748B] text-center max-w-md mb-6">{description}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all"
        >
          {actionLabel}
        </button>
      )}
    </motion.div>
  );
}

// No Results Found
export function NoResults({ searchQuery, onClearFilters }: { searchQuery?: string; onClearFilters?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl border border-[#E6EEF5] p-12 text-center"
    >
      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#F6F9FC] to-[#E6EEF5] flex items-center justify-center mx-auto mb-6">
        <Search size={48} className="text-[#64748B]" />
      </div>
      <h3 className="text-xl font-bold text-[#0F172A] mb-2">No results found</h3>
      {searchQuery ? (
        <p className="text-[#64748B] mb-6">
          We couldn't find anything matching <span className="font-semibold text-[#0F172A]">"{searchQuery}"</span>
        </p>
      ) : (
        <p className="text-[#64748B] mb-6">
          No items match your current filters. Try adjusting your search criteria.
        </p>
      )}
      {onClearFilters && (
        <button
          onClick={onClearFilters}
          className="px-6 py-3 rounded-xl border border-[#E6EEF5] bg-white text-[#0F172A] font-semibold hover:bg-[#F6F9FC] transition-all"
        >
          Clear all filters
        </button>
      )}
    </motion.div>
  );
}

// Error State
interface ErrorStateProps {
  title?: string;
  message?: string;
  errorCode?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = 'Something went wrong',
  message = 'We encountered an error while processing your request. Please try again.',
  errorCode,
  onRetry
}: ErrorStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl border border-red-200 p-12 text-center"
    >
      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center mx-auto mb-6">
        <AlertTriangle size={48} className="text-red-500" />
      </div>
      <h3 className="text-xl font-bold text-[#0F172A] mb-2">{title}</h3>
      <p className="text-[#64748B] max-w-md mx-auto mb-6">{message}</p>
      {errorCode && (
        <div className="inline-block px-3 py-1.5 rounded-lg bg-red-50 border border-red-200 text-xs font-mono text-red-600 mb-6">
          Error: {errorCode}
        </div>
      )}
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all inline-flex items-center gap-2"
        >
          <RefreshCw size={18} />
          <span>Try Again</span>
        </button>
      )}
    </motion.div>
  );
}

// Permission Denied (RBAC)
export function PermissionDenied({ resource = 'this resource' }: { resource?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl border border-orange-200 p-12 text-center"
    >
      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center mx-auto mb-6">
        <Lock size={48} className="text-orange-500" />
      </div>
      <h3 className="text-xl font-bold text-[#0F172A] mb-2">Access Denied</h3>
      <p className="text-[#64748B] max-w-md mx-auto mb-6">
        You don't have permission to access {resource}. Please contact your administrator if you believe this is an error.
      </p>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 border border-orange-200 text-sm text-orange-700">
        <Lock size={16} />
        <span>Role-based access control enabled</span>
      </div>
    </motion.div>
  );
}

// Offline/Connection Error
export function OfflineState({ onRetry }: { onRetry?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl border border-[#E6EEF5] p-12 text-center"
    >
      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#F6F9FC] to-[#E6EEF5] flex items-center justify-center mx-auto mb-6">
        <WifiOff size={48} className="text-[#64748B]" />
      </div>
      <h3 className="text-xl font-bold text-[#0F172A] mb-2">Connection Lost</h3>
      <p className="text-[#64748B] max-w-md mx-auto mb-6">
        Unable to connect to the server. Please check your internet connection and try again.
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white font-semibold hover:shadow-lg hover:shadow-[#0EA5E9]/25 transition-all inline-flex items-center gap-2"
        >
          <RefreshCw size={18} />
          <span>Reconnect</span>
        </button>
      )}
    </motion.div>
  );
}

// Success Toast/Banner
interface SuccessToastProps {
  message: string;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function SuccessToast({ message, onClose, action }: SuccessToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-6 right-6 z-50 max-w-md"
    >
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-[#E6EEF5] shadow-2xl p-4 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#10B981] to-[#059669]" />
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669]">
            <CheckCircle className="text-white" size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#0F172A]">{message}</p>
            {action && (
              <button
                onClick={action.onClick}
                className="mt-2 text-xs text-[#0EA5E9] hover:text-[#0284c7] font-semibold"
              >
                {action.label}
              </button>
            )}
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-[#F6F9FC] transition-all"
            >
              <X size={16} className="text-[#64748B]" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Data Loading State (for specific sections)
export function DataLoading({ message = 'Loading data...' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 rounded-full border-4 border-[#E6EEF5] border-t-[#0EA5E9] mb-4"
      />
      <p className="text-sm text-[#64748B] font-semibold">{message}</p>
    </div>
  );
}

// Maintenance Mode
export function MaintenanceMode() {
  return (
    <div className="min-h-screen bg-[#F6F9FC] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-white rounded-3xl border border-[#E6EEF5] p-12 text-center shadow-xl"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] flex items-center justify-center mx-auto mb-8">
          <Database size={64} className="text-white" />
        </div>
        <h1 className="text-3xl font-bold text-[#0F172A] mb-4">Scheduled Maintenance</h1>
        <p className="text-lg text-[#64748B] mb-8">
          iPharmaAI is currently undergoing scheduled maintenance to improve your experience. 
          We'll be back online shortly.
        </p>
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F6F9FC] border border-[#E6EEF5]">
          <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
          <span className="text-sm font-semibold text-[#0F172A]">Expected downtime: 30 minutes</span>
        </div>
      </motion.div>
    </div>
  );
}
