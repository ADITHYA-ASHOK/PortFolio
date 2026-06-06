import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionHeading from '../ui/SectionHeading';
import { FaGraduationCap, FaBriefcase, FaAward, FaCertificate, FaCode } from 'react-icons/fa';

const timelineData = [
  {
    id: 1,
    title: 'Volunteer Secretary, NSS',
    subtitle: 'SJCET, Palai',
    description: 'Leading student volunteers in community service and social initiatives.',
    date: '2025 - 2026',
    category: 'achievement',
  },
  {
    id: 2,
    title: 'MERN Stack Intern',
    subtitle: 'NEST Cyber Campus',
    description: 'Gained hands-on experience in full-stack web development using MongoDB, Express, React, and Node.js.',
    date: '2024',
    category: 'experience',
  },
  {
    id: 3,
    title: 'Completed Multiple Certifications',
    subtitle: 'Infosys Springboard & Coursera',
    description: 'Earned certifications in Java Programming Fundamentals, Python, and Full Stack Web Development.',
    date: '2024',
    category: 'certification',
  },
  {
    id: 4,
    title: 'Developed MicroAlert & Skylitix',
    subtitle: 'Major Projects',
    description: 'Built comprehensive MERN stack applications for flood monitoring and data analytics.',
    date: '2023 - 2024',
    category: 'project',
  },
  {
    id: 5,
    title: 'B.Tech Computer Science Engineering',
    subtitle: "St. Joseph's College of Engineering and Technology, Palai",
    description: 'Pursuing Bachelor of Technology with focus on modern software development.',
    date: '2022 - 2026',
    category: 'education',
  },
];

const getIcon = (category) => {
  switch (category) {
    case 'education': return <FaGraduationCap />;
    case 'experience': return <FaBriefcase />;
    case 'certification': return <FaCertificate />;
    case 'project': return <FaCode />;
    case 'achievement': return <FaAward />;
    default: return <FaAward />;
  }
};

const getColor = (category) => {
  switch (category) {
    case 'education': return '#7C3AED'; // Primary
    case 'experience': return '#06B6D4'; // Secondary
    case 'certification': return '#8B5CF6'; // Accent
    case 'project': return '#22D3EE';
    case 'achievement': return '#F59E0B';
    default: return '#7C3AED';
  }
};

export default function TimelineSection() {
  return (
    <section id="timeline" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My Journey"
          subtitle="Education, experience, and milestones along the way"
        />

        <div className="mt-12">
          <VerticalTimeline lineColor="rgba(124, 58, 237, 0.2)">
            {timelineData.map((item) => (
              <VerticalTimelineElement
                key={item.id}
                className="vertical-timeline-element"
                contentStyle={{
                  background: 'rgba(17, 19, 54, 0.6)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(124, 58, 237, 0.2)',
                  color: '#fff',
                  borderRadius: '1rem',
                }}
                contentArrowStyle={{ borderRight: '7px solid rgba(124, 58, 237, 0.4)' }}
                date={item.date}
                dateClassName="text-secondary font-medium tracking-wide mx-4 lg:mx-0"
                iconStyle={{
                  background: '#050816',
                  color: getColor(item.category),
                  boxShadow: `0 0 0 4px rgba(124, 58, 237, 0.2), inset 0 2px 0 rgba(255,255,255,0.1), 0 0 20px ${getColor(item.category)}40`,
                }}
                icon={getIcon(item.category)}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-primary-light font-medium text-sm mb-4">
                  {item.subtitle}
                </h4>
                <p className="text-text-secondary leading-relaxed text-sm font-light">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
