import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import {
  FaGraduationCap, FaUsers, FaLightbulb, FaHandsHelping,
  FaCode, FaRocket,
} from 'react-icons/fa';

const highlights = [
  {
    icon: FaGraduationCap,
    title: 'B.Tech CSE',
    desc: "St. Joseph's College of Engineering and Technology, Palai. Expected Graduation: 2027",
    color: '#7C3AED',
  },
  {
    icon: FaCode,
    title: 'Full Stack Developer',
    desc: 'Building modern web applications with MERN Stack and seamless UI/UX.',
    color: '#06B6D4',
  },
  {
    icon: FaRocket,
    title: 'Open Source Contributor',
    desc: 'Contributing to open-source projects and building solutions for the community',
    color: '#8B5CF6',
  },
  {
    icon: FaLightbulb,
    title: 'AI & Robotics Enthusiast',
    desc: 'Passionate about Artificial Intelligence, Automation, and innovative tech.',
    color: '#22D3EE',
  },
];

const communities = [
  { name: 'MuLearn', desc: 'Active member and contributor in the MuLearn learning community' },
  { name: 'Rewriting Code', desc: 'Participating in collaborative coding and knowledge sharing' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Get to know the person behind the code"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard hover={false} className="space-y-5">
              <h3 className="text-xl font-bold text-white">
                Hi there! 👋
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I&apos;m <span className="text-white font-semibold">Adithya Ashok</span>, a passionate 
                Computer Science and Engineering student with strong foundations in Full Stack Development, 
                Software Engineering, Database Management, and Problem Solving.
              </p>
              
              {/* Interests */}
              <div className="pt-2">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                  Areas of Interest
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-text-secondary text-sm">
                  <div className="flex items-center gap-2"><span className="text-primary">▹</span> MERN Stack Development</div>
                  <div className="flex items-center gap-2"><span className="text-primary">▹</span> Software Engineering</div>
                  <div className="flex items-center gap-2"><span className="text-primary">▹</span> Artificial Intelligence</div>
                  <div className="flex items-center gap-2"><span className="text-primary">▹</span> Robotics & Automation</div>
                  <div className="flex items-center gap-2"><span className="text-primary">▹</span> User-Centric Product Dev</div>
                  <div className="flex items-center gap-2"><span className="text-primary">▹</span> Open Source Contributions</div>
                </div>
              </div>

              {/* Communities */}
              <div className="pt-2">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                  Communities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {communities.map((c, i) => (
                    <motion.div
                      key={c.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-primary/10"
                    >
                      <FaUsers className="text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium text-sm">{c.name}</p>
                        <p className="text-text-muted text-xs">{c.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right: Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="h-full text-center group">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
