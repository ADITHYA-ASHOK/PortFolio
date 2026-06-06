import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

const highlights = [
  { name: 'Blood Donation Finder', stars: 12, forks: 4, url: 'https://github.com/adithyaashok/blood-donation-finder' },
  { name: 'MicroAlert', stars: 8, forks: 2, url: 'https://github.com/adithyaashok/microalert' },
  { name: 'Skylitix', stars: 15, forks: 5, url: 'https://github.com/adithyaashok/skylitix' },
];

export default function OpenSourceSection() {
  return (
    <section id="opensource" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Open Source"
          subtitle="Contributing to the developer community"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center">
                  <FaGithub size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">GitHub Activity</h3>
                  <p className="text-text-secondary">@adithyaashok</p>
                </div>
              </div>

              <p className="text-text-secondary leading-relaxed mb-6">
                I strongly believe in the power of open source software. I actively contribute to 
                various projects, share my own tools, and collaborate with developers worldwide.
              </p>

              {/* Simulated Heatmap */}
              <div className="bg-background-light/50 p-4 rounded-xl border border-primary/10">
                <p className="text-sm text-text-muted mb-3 flex justify-between">
                  <span>Contributions in the last year</span>
                  <span className="text-primary-light font-medium">500+ total</span>
                </p>
                <div className="flex gap-1 overflow-hidden opacity-80">
                  {Array.from({ length: 25 }).map((_, col) => (
                    <div key={col} className="flex flex-col gap-1">
                      {Array.from({ length: 7 }).map((_, row) => {
                        const intensity = Math.random();
                        const colorClass = intensity > 0.8 ? 'bg-primary' : 
                                         intensity > 0.5 ? 'bg-primary/60' : 
                                         intensity > 0.2 ? 'bg-primary/30' : 'bg-primary/10';
                        return (
                          <div 
                            key={`${col}-${row}`} 
                            className={`w-3 h-3 rounded-sm ${colorClass}`} 
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Repository Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <h3 className="text-xl font-bold text-white mb-6">Repository Highlights</h3>
              <div className="space-y-4">
                {highlights.map((repo, i) => (
                  <motion.a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="block p-4 rounded-xl bg-white/5 border border-primary/10 hover:bg-white/10 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-primary-light group-hover:text-primary transition-colors flex items-center gap-2">
                        <FaGithub /> {repo.name}
                      </h4>
                    </div>
                    <div className="flex gap-4 text-text-muted text-sm mt-3">
                      <span className="flex items-center gap-1.5"><FaStar className="text-yellow-500" /> {repo.stars}</span>
                      <span className="flex items-center gap-1.5"><FaCodeBranch /> {repo.forks}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
