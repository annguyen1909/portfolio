'use client';

import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const quickActions = [
    { label: 'Email Me', href: 'mailto:nguyentruongan0919@gmail.com', icon: '📧' },
    { label: 'LinkedIn', href: '#', icon: '💼' },
    { label: 'GitHub', href: '#', icon: '🔗' },
    { label: 'Phone', href: 'tel:+84905941752', icon: '📱' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Actions */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="absolute bottom-16 right-0 space-y-3"
        >
          {quickActions.map((action, index) => (
            <motion.a
              key={action.label}
              href={action.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3 glass-effect text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-900/50 transition-all duration-300 whitespace-nowrap font-creative border border-blue-600/30"
            >
              <span className="text-xl">{action.icon}</span>
              <span className="text-sm font-medium">{action.label}</span>
            </motion.a>
          ))}
        </motion.div>
      )}

      {/* Main Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center pulse-glow"
      >
        {isExpanded ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default FloatingContactButton;
