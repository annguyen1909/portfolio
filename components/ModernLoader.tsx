'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ModernLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 12 }}
          className="mb-6"
        >
          <div className="w-16 h-16 mx-auto relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border-3 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-1 border-3 border-transparent border-b-cyan-500 border-l-indigo-500 rounded-full"
            />
            <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">A</span>
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl font-display font-bold mb-2 gradient-text"
        >
          An Nguyen
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-400 font-body text-sm tracking-wide"
        >
          Loading Portfolio...
        </motion.p>
      </div>

      {/* Simple background effect - SSR safe */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: `${20 + (i * 10)}%`,
                y: `${30 + (i * 8)}%`,
                opacity: 0
              }}
              animate={{ 
                opacity: [0, 0.3, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3 + (i % 2),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ModernLoader;
