import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub,
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, SiC
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { BiCodeBlock, BiServer } from 'react-icons/bi';
import { MdSettingsApplications } from 'react-icons/md';

const skillCategories = [
  {
    title: 'Programming',
    icon: BiCodeBlock,
    color: '#7C3AED',
    skills: [
      { name: 'Java', icon: FaJava, level: 85 },
      { name: 'Python', icon: FaPython, level: 75 },
      { name: 'JavaScript', icon: SiJavascript, level: 85 },
      { name: 'SQL', icon: FaDatabase, level: 80 },
      { name: 'C', icon: SiC, level: 70 },
    ],
  },
  {
    title: 'Frontend',
    icon: MdSettingsApplications,
    color: '#06B6D4',
    skills: [
      { name: 'HTML', icon: FaHtml5, level: 90 },
      { name: 'CSS', icon: FaCss3Alt, level: 85 },
      { name: 'React.js', icon: FaReact, level: 85 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: BiServer,
    color: '#8B5CF6',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 80 },
      { name: 'Express.js', icon: SiExpress, level: 80 },
    ],
  },
  {
    title: 'Database',
    icon: FaDatabase,
    color: '#22D3EE',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 80 },
      { name: 'MySQL', icon: SiMysql, level: 75 },
    ],
  },
  {
    title: 'Tools',
    icon: VscCode,
    color: '#F59E0B',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 85 },
      { name: 'GitHub', icon: FaGithub, level: 85 },
      { name: 'VS Code', icon: VscCode, level: 90 },
      { name: 'Postman', icon: SiPostman, level: 80 },
    ],
  },
  {
    title: 'Concepts',
    icon: BiCodeBlock,
    color: '#EC4899',
    skills: [
      { name: 'OOP', icon: BiCodeBlock, level: 85 },
      { name: 'REST APIs', icon: BiServer, level: 85 },
      { name: 'DBMS', icon: FaDatabase, level: 80 },
      { name: 'DSA', icon: BiCodeBlock, level: 75 },
      { name: 'UML Modeling', icon: MdSettingsApplications, level: 75 },
      { name: 'GUI Design', icon: MdSettingsApplications, level: 80 },
      { name: 'Mobile App Dev', icon: MdSettingsApplications, level: 70 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies, tools, and concepts I've mastered"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full group">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <category.icon size={20} style={{ color: category.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2 text-text-secondary group-hover:text-white transition-colors">
                          <skill.icon size={14} className="opacity-70" />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full relative"
                          style={{ backgroundColor: category.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                          viewport={{ once: true }}
                        >
                          <div className="absolute inset-0 bg-white/20 w-full animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
