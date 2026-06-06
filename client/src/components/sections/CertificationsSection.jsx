import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import AnimatedButton from '../ui/AnimatedButton';
import { FaCertificate, FaArrowRight, FaLaptopCode, FaBriefcase, FaAward } from 'react-icons/fa';

export default function CertificationsSection() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    technical: 4,
    internship: 1,
    nonTechnical: 1,
    total: 6
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/certifications')
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => {
        if (data && data.length > 0) {
          const tech = data.filter(c => c.category === 'Technical').length;
          const intern = data.filter(c => c.category === 'Internship').length;
          const nonTech = data.filter(c => c.category === 'Non-Technical').length;
          setStats({ technical: tech, internship: intern, nonTechnical: nonTech, total: data.length });
        }
      })
      .catch(() => console.log('Using fallback cert stats'));
  }, []);

  const certStats = [
    { icon: FaLaptopCode, label: 'Technical', count: stats.technical, color: '#7C3AED' },
    { icon: FaBriefcase, label: 'Internship', count: stats.internship, color: '#06B6D4' },
    { icon: FaAward, label: 'Non-Technical', count: stats.nonTechnical, color: '#8B5CF6' },
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and courses I've completed"
        />

        {/* Stats Overview */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard hover={false} className="text-center">
              {/* Total count */}
              <div className="mb-8">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                  <FaCertificate size={32} className="text-primary" />
                </div>
                <motion.p
                  className="text-5xl font-extrabold gradient-text"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {stats.total}+
                </motion.p>
                <p className="text-text-secondary mt-2">Certifications Earned</p>
              </div>

              {/* Category breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {certStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-white/5 border border-primary/10"
                  >
                    <stat.icon size={24} className="mx-auto mb-2" style={{ color: stat.color }} />
                    <p className="text-2xl font-bold text-white">{stat.count}</p>
                    <p className="text-text-muted text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* View All Button */}
              <AnimatedButton onClick={() => navigate('/certifications')}>
                View All Certifications <FaArrowRight />
              </AnimatedButton>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
