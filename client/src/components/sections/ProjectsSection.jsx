import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'MicroAlert',
    description:
      'Hyperlocal disaster management and real-time alert platform with geo-tagged reporting, AI-assisted risk verification, and emergency support.',
    detailedDescription:
      'MicroAlert is a comprehensive hyperlocal disaster management platform designed to protect communities. It features real-time geo-tagged reporting, AI-assisted risk verification for rapid emergency response, and localized support mechanisms. The platform empowers users with actionable data and timely notifications during critical situations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Firebase', 'REST APIs', 'AI Verification'],
    github: 'https://github.com/ADITHYA-ASHOK/MicroAlert.git',
    live: '',
    image: '/projects/microalert.png',
    features: [
      'Geo-Tagged Reporting',
      'Real-Time Alerts',
      'AI-Assisted Risk Verification',
      'Emergency Support System',
    ],
  },
  {
    id: 2,
    title: 'SkyLytix',
    description:
      'Weather intelligence platform using NASA Earth observation data to provide environmental insights and analytics.',
    detailedDescription:
      'SkyLytix is an advanced weather intelligence and analytics platform that leverages NASA Earth observation data. It provides users with deep environmental insights, interactive data visualization, and powerful forecasting analytics to make informed decisions regarding environmental conditions.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'NASA APIs', 'Chart.js'],
    github: 'https://github.com/ADITHYASHOK/Skylytix.git',
    live: '',
    image: '/projects/skylytix.png',
    features: [
      'NASA Earth Data Integration',
      'Environmental Analytics',
      'Interactive Visualizations',
      'Performance Insights',
    ],
  },
  {
    id: 3,
    title: 'FindMyDonor',
    description:
      'Blood donation platform connecting donors and recipients through location and blood-group-based matching.',
    detailedDescription:
      'FindMyDonor bridges the critical gap between blood donors and those in need. It features a robust matching algorithm based on location and blood group, enabling fast and efficient connections during medical emergencies. Features include donor profiles, emergency request broadcasting, and seamless hospital integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/ADITHYA-ASHOK/FindMyDonor.git',
    live: '',
    image: '/projects/findmydonor.png',
    features: [
      'Location-Based Matching',
      'Blood Group Filtering',
      'Emergency Broadcasting',
      'Donor Management',
    ],
  },
  {
    id: 4,
    title: 'Library Management System',
    description:
      'Menu-driven Library Management System developed in C using file handling concepts.',
    detailedDescription:
      'A robust terminal-based Library Management System built with C. It utilizes advanced file handling concepts to persistently store book records, member details, and transaction history. The menu-driven interface allows easy navigation for administrators to manage the library inventory and user borrowing activities.',
    technologies: ['C Programming', 'File Handling', 'Data Structures'],
    github: 'https://github.com/ADITHYA-ASHOK/Libmanage.git',
    live: '',
    image: '/projects/libmanage.png',
    features: [
      'Menu-Driven Interface',
      'Persistent File Storage',
      'Book Inventory Management',
      'User Transaction Tracking',
    ],
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications I've built to solve meaningful problems"
        />

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setSelected}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="glass-strong rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-white transition-colors cursor-pointer z-10"
                >
                  <FaTimes />
                </button>

                {/* Header */}
                <div
                  className="h-48 rounded-xl mb-6 flex items-center justify-center"
                  style={{
                    background: selected.image
                      ? `url(${selected.image}) center/cover`
                      : 'linear-gradient(135deg, #7C3AED22, #06B6D422)',
                  }}
                >
                  <span className="text-5xl font-bold gradient-text opacity-40">
                    {selected.title.charAt(0)}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">{selected.title}</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {selected.detailedDescription}
                </p>

                {/* Key Features */}
                {selected.features && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selected.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-text-secondary text-sm">
                          <span className="text-primary">▹</span> {f}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1.5 rounded-lg bg-primary/10 text-primary-light border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-white hover:text-primary transition-colors text-sm font-medium"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                  {selected.live && (
                    <a
                      href={selected.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white hover:bg-primary-light transition-colors text-sm font-medium"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
