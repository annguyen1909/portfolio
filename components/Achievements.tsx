'use client';

import { motion } from 'framer-motion';
import { Award, Star, Users, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Festival Recognition",
      description: "Featured at Hue Festival of Light 2024",
      year: "2024",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Bachelor of IT - RMIT University",
      year: "2025",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led 8-member technical team",
      year: "2024",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Star,
      title: "Client Satisfaction",
      description: "100% positive project feedback",
      year: "2023-2025",
      color: "from-green-400 to-blue-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-none p-6 card-glow text-center group"
            >
              <div className={`inline-flex p-4 rounded-none bg-gradient-to-r ${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="text-white" size={32} />
              </div>
              
              <h3 className="font-bold text-lg mb-2 text-white group-hover:text-blue-400 transition-colors">
                {achievement.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                {achievement.description}
              </p>
              
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.color} text-white`}>
                {achievement.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
