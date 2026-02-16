import React from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function GlassCard({ children, className = '', hover = false, gradient = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      className={`
        bg-white/90 backdrop-blur-xl rounded-[20px] 
        border border-[#E6EEF5]/50 
        shadow-[0_8px_32px_rgba(15,23,42,0.08)]
        ${gradient ? 'relative overflow-hidden' : ''}
        ${className}
      `}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/5 to-[#06B6D4]/5 pointer-events-none" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
