import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

export default function InternshipSection() {
  return (
    <section id="internship" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Experience & Internships"
          subtitle="Professional experience gained through industry internships and training"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* NeST Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard hover={false} className="relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-l" />

              <div className="pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <FaBriefcase className="text-primary" /> Full Stack Developer Intern
                    </h3>
                    <p className="text-primary-light font-medium mt-1">NeST Technologies</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-1.5 text-text-muted text-sm">
                      <FaCalendar className="text-secondary" /> June 2025 – July 2025
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                    Skills & Competencies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['MERN Stack', 'REST APIs', 'Database Management', 'Frontend Backend Integration', 'Team Collaboration'].map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-text-secondary text-sm"
                      >
                        <FaCheckCircle className="text-green-400 flex-shrink-0" size={12} />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Experion Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GlassCard hover={false} className="relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-accent rounded-l" />

              <div className="pl-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <FaBriefcase className="text-secondary" /> Industrial Visit Trainee
                    </h3>
                    <p className="text-secondary-light font-medium mt-1">Experion Technologies</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                    Skills & Competencies
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['Industry Exposure', 'AI Applications', 'Software Development Workflows', 'Team Collaboration'].map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-text-secondary text-sm"
                      >
                        <FaCheckCircle className="text-green-400 flex-shrink-0" size={12} />
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
