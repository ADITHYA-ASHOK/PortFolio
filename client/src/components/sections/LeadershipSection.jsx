import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { FaHandsHelping, FaUniversity, FaCalendarAlt, FaCheckCircle, FaAward } from 'react-icons/fa';

const fallbackLeadership = [
  {
    _id: '1',
    title: 'Volunteer Secretary',
    organization: 'NSS Unit, SJCET',
    duration: 'Current',
    description: 'Leading student volunteers in impactful social initiatives, coordinating community service activities, and organizing social awareness camps.',
    highlights: ['Team Leadership', 'Event Coordination', 'Social Awareness'],
  },
  {
    _id: '2',
    title: 'ASTRA Volunteer',
    organization: "St. Joseph's College of Engineering and Technology",
    duration: '2024',
    description: 'Event volunteering and coordination for ASTRA tech fest, ensuring smooth execution of technical and non-technical events.',
    highlights: ['Event Management', 'Public Relations', 'Logistics'],
  },
];

export default function LeadershipSection() {
  const [leadershipData, setLeadershipData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/leadership')
      .then((res) => (res.ok ? res.json() : Promise.reject('Failed to fetch')))
      .then((data) => {
        setLeadershipData(data.length ? data : fallbackLeadership);
      })
      .catch(() => {
        setLeadershipData(fallbackLeadership);
      });
  }, []);

  return (
    <section id="leadership" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Leadership & Volunteering"
          subtitle="Non-technical leadership roles, responsibilities, and community involvement"
        />

        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Timeline Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent -translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {leadershipData.map((role, i) => {
              const isEven = i % 2 === 0;

              return (
                <div key={role._id} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-8 w-12 h-12 bg-background border-4 border-primary rounded-full -translate-x-1/2 items-center justify-center z-10 shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                    <FaAward className="text-primary-light" size={16} />
                  </div>

                  {/* Content Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-full md:w-[45%] ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}
                  >
                    <GlassCard hover={false} className={`relative overflow-hidden group border-t-2 ${isEven ? 'border-t-primary' : 'border-t-secondary'}`}>
                      {/* Decorative Background Glow */}
                      <div className={`absolute -top-20 ${isEven ? '-right-20' : '-left-20'} w-40 h-40 rounded-full blur-3xl opacity-20 ${isEven ? 'bg-primary' : 'bg-secondary'}`} />

                      <div className="relative z-10">
                        <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 ${isEven ? 'text-primary' : 'text-secondary'}`}>
                            {i === 0 ? <FaHandsHelping size={24} /> : <FaUniversity size={24} />}
                          </div>
                          <div className={isEven ? 'md:text-right' : ''}>
                            <h3 className="text-xl font-bold text-white">{role.title}</h3>
                            <p className={`font-medium ${isEven ? 'text-primary-light' : 'text-secondary-light'}`}>
                              {role.organization}
                            </p>
                          </div>
                        </div>

                        <div className={`flex items-center gap-2 text-text-muted text-sm mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                          <FaCalendarAlt /> <span>{role.duration}</span>
                        </div>

                        <p className="text-text-secondary leading-relaxed text-sm mb-6">
                          {role.description}
                        </p>

                        {/* Achievement Highlights */}
                        {role.highlights && role.highlights.length > 0 && (
                          <div>
                            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Key Highlights</h4>
                            <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                              {role.highlights.map(highlight => (
                                <span key={highlight} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/5 text-text-secondary border border-white/10 group-hover:border-white/20 transition-colors">
                                  <FaCheckCircle className={isEven ? 'text-primary' : 'text-secondary'} size={10} />
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
