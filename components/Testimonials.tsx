'use client';

import { motion } from 'framer-motion';

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
    <section id="testimonials" className="section-padding editorial-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading section-heading--row"
        >
          <div><p className="section-label">05 / Feedback</p><h2 className="section-title">IN THEIR<br /><span>WORDS.</span></h2></div>
          <p className="section-subtitle">Feedback from people who worked alongside me on shipped products and technical projects.</p>
        </motion.div>

        <div className="quote-grid">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="quote-item"
            >
              <span className="quote-mark">“</span>
              <blockquote>{testimonial.content}</blockquote>
              <figcaption><strong>{testimonial.name}</strong><span>{testimonial.role} · {testimonial.company}</span></figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
