'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating modern, responsive user interfaces",
      skills: [
        { name: "React.js", experience: "2+ years", projects: "10+ projects", description: "Building complex SPAs and component libraries" },
        { name: "Next.js", experience: "1.5+ years", projects: "6+ projects", description: "Full-stack applications with SSR/SSG" },
        { name: "TypeScript", experience: "2+ years", projects: "8+ projects", description: "Type-safe development and large codebases" },
        { name: "TailwindCSS", experience: "2+ years", projects: "12+ projects", description: "Rapid UI development and design systems" },
        { name: "JavaScript", experience: "3+ years", projects: "15+ projects", description: "ES6+, DOM manipulation, async programming" },
        { name: "HTML/CSS", experience: "3+ years", projects: "20+ projects", description: "Semantic markup, responsive design, animations" }
      ],
      color: "text-[var(--text-muted)]"
    },
    {
      title: "Backend & Database",
      description: "Server-side development and data management",
      skills: [
        { name: "Node.js", experience: "1.5+ years", projects: "5+ projects", description: "RESTful APIs, authentication, middleware" },
        { name: "PostgreSQL", experience: "1+ year", projects: "4+ projects", description: "Database design, queries, optimization" },
        { name: "MySQL", experience: "1+ year", projects: "3+ projects", description: "Relational databases and data modeling" },
        { name: "Prisma", experience: "8+ months", projects: "3+ projects", description: "Type-safe database access and migrations" }
      ],
      color: "text-[var(--text-muted)]"
    },
    {
      title: "3D & Interactive Media",
      description: "Immersive experiences and visual programming",
      skills: [
        { name: "Three.js/WebGL", experience: "1+ year", projects: "4+ projects", description: "3D web experiences, shaders, animations" },
        { name: "Blender", experience: "1+ year", projects: "6+ models", description: "3D modeling, texturing, basic animation" },
        { name: "TouchDesigner", experience: "1.5+ years", projects: "3+ installations", description: "Real-time visual effects, live performances" },
        { name: "OSC Protocol", experience: "1+ year", projects: "3+ systems", description: "Real-time communication for interactive systems" }
      ],
      color: "text-[var(--text-muted)]"
    },
    {
      title: "Programming & Tools",
      description: "Core programming languages and development tools",
      skills: [
        { name: "C++", experience: "2+ years", projects: "Academic projects", description: "Data structures, algorithms, system programming" },
        { name: "Java", experience: "1.5+ years", projects: "Academic projects", description: "OOP principles, algorithms, desktop applications" },
        { name: "Python", experience: "1+ year", projects: "3+ projects", description: "Scripting, data analysis, AI/ML basics" },
        { name: "Git/GitHub", experience: "3+ years", projects: "All projects", description: "Version control, collaboration, CI/CD basics" }
      ],
      color: "from-yellow-400 to-orange-400"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-none p-8 card-glow"
            >
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{category.description}</p>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/50 rounded-none p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
                      <div className="flex flex-col items-end text-right">
                        <span className={`text-sm font-medium bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {skill.experience}
                        </span>
                        <span className="text-xs text-gray-500">{skill.projects}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 glass-effect rounded-none p-8 card-glow"
        >
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
            Tools & Additional Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "UI/UX Design", description: "User-centered design principles, prototyping" },
              { name: "AI Integration", description: "OpenAI API, prompt engineering, AI workflows" },
              { name: "Performance Optimization", description: "Web vitals, lazy loading, code splitting" },
              { name: "Responsive Design", description: "Mobile-first approach, cross-device compatibility" },
              { name: "Stripe Integration", description: "Payment processing, webhooks, checkout flows" },
              { name: "Real-time Systems", description: "WebSockets, live updates, collaborative features" },
              { name: "Heroku Deployment", description: "Cloud deployment, environment management" },
              { name: "Agile Development", description: "Scrum methodology, sprint planning, teamwork" },
              { name: "Problem Solving", description: "Analytical thinking, debugging, optimization" }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 rounded-none p-4 border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <h4 className="text-white font-semibold mb-2">{skill.name}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning & Development Approach */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="glass-effect rounded-none p-8 card-glow text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Rapid Learning</h3>
            <p className="text-gray-400 leading-relaxed">
              I adapt quickly to new technologies and frameworks, constantly expanding 
              my skillset through hands-on projects and real-world applications.
            </p>
          </div>

          <div className="glass-effect rounded-none p-8 card-glow text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Practical Focus</h3>
            <p className="text-gray-400 leading-relaxed">
              Every skill I develop is immediately applied to real projects, 
              ensuring practical knowledge and problem-solving experience.
            </p>
          </div>

          <div className="glass-effect rounded-none p-8 card-glow text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Quality Driven</h3>
            <p className="text-gray-400 leading-relaxed">
              I focus on writing clean, maintainable code and following 
              best practices to deliver high-quality, scalable solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
