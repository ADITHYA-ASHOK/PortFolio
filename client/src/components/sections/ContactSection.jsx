import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import AnimatedButton from '../ui/AnimatedButton';
import { FaLaptopCode, FaBriefcase, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Placement Readiness"
          subtitle="Let's connect and discuss opportunities"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column: Placement Readiness Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <GlassCard hover={false} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-2xl" />
              <h3 className="text-2xl font-bold text-white mb-6">Status & Availability</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-text-secondary">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Open to Full Stack Roles</p>
                    <p className="text-sm">Available for roles and internships</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-text-secondary">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary-light flex items-center justify-center">
                    <FaBriefcase />
                  </div>
                  <div>
                    <p className="text-white font-medium">Open to Software Engineering Roles</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-text-secondary">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary-light flex items-center justify-center">
                    <FaLaptopCode />
                  </div>
                  <div>
                    <p className="text-white font-medium">Open to MERN Stack Roles</p>
                    <p className="text-sm">& Open Source Contributor</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-text-secondary">
                  <FaEnvelope className="text-primary" />
                  <a href="mailto:adithyaashok91@gmail.com" className="hover:text-white transition-colors">adithyaashok91@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <FaPhoneAlt className="text-primary" />
                  <span>+91 7012155024</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>Palai, Kerala, India</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlassCard hover={false}>
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/20 text-white placeholder-text-muted outline-none focus:border-primary/50 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/20 text-white placeholder-text-muted outline-none focus:border-primary/50 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-text-secondary mb-1.5">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Job Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/20 text-white placeholder-text-muted outline-none focus:border-primary/50 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Hi Adithya, I'd like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-primary/20 text-white placeholder-text-muted outline-none focus:border-primary/50 transition-colors resize-none"
                    required
                  />
                </div>

                <AnimatedButton type="submit" className="w-full justify-center mt-2">
                  Send Message
                </AnimatedButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
