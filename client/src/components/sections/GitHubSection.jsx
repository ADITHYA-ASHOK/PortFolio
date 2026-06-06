import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { FaGithub, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa';

// Static fallback data (replaced by API when token is configured)
const fallbackStats = {
  repos: 15,
  stars: 8,
  contributions: 247,
  followers: 12,
};

const fallbackLanguages = [
  { name: 'JavaScript', percentage: 45, color: '#F7DF1E' },
  { name: 'Python', percentage: 20, color: '#3776AB' },
  { name: 'Java', percentage: 15, color: '#ED8B00' },
  { name: 'HTML/CSS', percentage: 12, color: '#E34F26' },
  { name: 'Other', percentage: 8, color: '#8B5CF6' },
];

function StatCard({ icon: Icon, label, value, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <GlassCard className="text-center">
        <Icon size={24} className="mx-auto mb-2" style={{ color }} />
        <motion.p
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {value}
        </motion.p>
        <p className="text-text-muted text-xs mt-1">{label}</p>
      </GlassCard>
    </motion.div>
  );
}

export default function GitHubSection() {
  const [stats] = useState(fallbackStats);
  const [languages] = useState(fallbackLanguages);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="GitHub Activity"
          subtitle="My open source contributions and coding journey"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard icon={FaCode} label="Repositories" value={stats.repos} color="#7C3AED" delay={0} />
          <StatCard icon={FaStar} label="Stars Earned" value={stats.stars} color="#FFC107" delay={0.1} />
          <StatCard icon={FaCodeBranch} label="Contributions" value={stats.contributions} color="#06B6D4" delay={0.2} />
          <StatCard icon={FaGithub} label="Followers" value={stats.followers} color="#8B5CF6" delay={0.3} />
        </div>

        {/* Contribution Graph Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <GlassCard hover={false} className="mb-10">
            <h3 className="text-lg font-semibold text-white mb-4">Contribution Graph</h3>
            {/* Simulated contribution graph */}
            <div className="grid grid-cols-[repeat(52,1fr)] gap-[3px] overflow-x-auto no-scrollbar">
              {Array.from({ length: 52 * 7 }, (_, i) => {
                const intensity = Math.random();
                let bg = 'bg-white/5';
                if (intensity > 0.8) bg = 'bg-primary';
                else if (intensity > 0.6) bg = 'bg-primary/60';
                else if (intensity > 0.4) bg = 'bg-primary/30';
                else if (intensity > 0.25) bg = 'bg-primary/15';
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-sm ${bg} transition-colors hover:ring-1 hover:ring-primary/50`}
                  />
                );
              })}
            </div>
          </GlassCard>
        </motion.div>

        {/* Language Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <GlassCard hover={false}>
            <h3 className="text-lg font-semibold text-white mb-6">Top Languages</h3>

            {/* Bar chart */}
            <div className="h-4 rounded-full overflow-hidden flex mb-6">
              {languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="h-full"
                  style={{ backgroundColor: lang.color }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-text-secondary text-sm">
                    {lang.name} ({lang.percentage}%)
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
