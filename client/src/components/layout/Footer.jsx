import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const socialLinks = [
  { icon: FaLinkedin, href: 'https://linkedin.com/in/adithyaashok', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/adithyaashok', label: 'GitHub' },
  { icon: SiLeetcode, href: 'https://leetcode.com/adithyaashok', label: 'LeetCode' },
  { icon: SiHackerrank, href: 'https://hackerrank.com/adithyaashok', label: 'HackerRank' },
  { icon: FaInstagram, href: 'https://instagram.com/adithyaashok', label: 'Instagram' },
];

const techStack = ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Three.js', 'Framer Motion'];

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-3">
              {'<'} Adithya Ashok {'/>'}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              B.Tech CSE Student & MERN Stack Developer passionate about building 
              impactful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Projects', 'Certifications', 'Timeline', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-text-secondary hover:text-primary transition-colors text-sm text-left cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-secondary hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-10 pt-6 border-t border-primary/10">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="text-xs text-text-muted">Built with</span>
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full glass text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-center text-sm text-text-muted">
            © {new Date().getFullYear()} Adithya Ashok. Made with{' '}
            <FaHeart className="inline text-primary mx-1" size={12} />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
