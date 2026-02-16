import React from 'react';
import { motion } from 'motion/react';

interface RiskMeterProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function RiskMeter({ score, size = 'md', showLabel = true }: RiskMeterProps) {
  const getColor = (score: number) => {
    if (score >= 80) return { primary: '#EF4444', secondary: '#FEE2E2', label: 'Critical' };
    if (score >= 60) return { primary: '#F59E0B', secondary: '#FEF3C7', label: 'Moderate' };
    return { primary: '#10B981', secondary: '#D1FAE5', label: 'Good' };
  };

  const sizeMap = {
    sm: { diameter: 80, strokeWidth: 6, fontSize: 'text-lg' },
    md: { diameter: 120, strokeWidth: 8, fontSize: 'text-2xl' },
    lg: { diameter: 160, strokeWidth: 10, fontSize: 'text-4xl' },
  };

  const { diameter, strokeWidth, fontSize } = sizeMap[size];
  const radius = (diameter - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const colors = getColor(score);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: diameter, height: diameter }}>
        <svg width={diameter} height={diameter} className="transform -rotate-90">
          <circle
            cx={diameter / 2}
            cy={diameter / 2}
            r={radius}
            fill="none"
            stroke={colors.secondary}
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={diameter / 2}
            cy={diameter / 2}
            r={radius}
            fill="none"
            stroke={colors.primary}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={`${fontSize} font-bold text-[#0F172A]`}
            >
              {score}
            </motion.div>
            {showLabel && size !== 'sm' && (
              <div className="text-xs text-[#64748B] font-medium">Risk Score</div>
            )}
          </div>
        </div>
      </div>
      {showLabel && (
        <div className="text-center">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{ backgroundColor: colors.secondary, color: colors.primary }}
          >
            {colors.label}
          </div>
        </div>
      )}
    </div>
  );
}
