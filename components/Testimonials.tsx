'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "WorldMaxxing Team",
      role: "Project Stakeholder",
      company: "WorldMaxxing",
      content: "An delivered an exceptional eVisa platform that exceeded our expectations. The complex payment integration and dynamic forms work flawlessly. His attention to detail and technical expertise made the entire process smooth.",
      rating: 5,
      avatar: "WM"
    },
    {
      name: "AC3 Studio Team",
      role: "Technical Director",
      company: "AC3 Studio Vietnam",
      content: "Working with An on multiple lighting control systems was a pleasure. His ability to integrate hardware with web interfaces and handle real-time communication is impressive. The Festival of Light project was a huge success.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "RMIT Supervisor",
      role: "Academic Supervisor",
      company: "RMIT University",
      content: "An's work on the LLM vulnerability detection system demonstrates exceptional problem-solving skills and innovation. His approach to combining AI with cybersecurity shows great technical depth and research capability.",
      rating: 5,
      avatar: "RM"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Others <span className="gradient-text">Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Feedback from clients, colleagues, and collaborators I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-8 card-glow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-400/20">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={18} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-blue-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Want to share your experience working with me?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-full hover:border-blue-400 hover:text-white transition-all duration-300"
          >
            <span>Get In Touch</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
