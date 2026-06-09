import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaLinkedin, FaGithub, FaHandshake, FaUsers } from 'react-icons/fa';
import gsap from 'gsap';
import AnimatedButton from '../ui/AnimatedButton';

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/adithya-ashok12', label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaGithub, href: 'https://github.com/ADITHYA-ASHOK', label: 'GitHub', color: '#fff' },
  { icon: FaUsers, href: 'https://mulearn.org', label: 'MuLearn', color: '#2563EB' },
];

export default function HeroSection() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  const [resumeUrl, setResumeUrl] = useState('');

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL;

    // Fetch active resume
    fetch(`${API}/api/resume/active`)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('No active resume');
      })
      .then(data => {
        if (data && data.fileUrl) {
          setResumeUrl(`${API}${data.fileUrl}`);
        }
      })
      .catch(err => console.log('Resume fetch error:', err));

    // GSAP animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 1.2, ease: 'back.out(1.7)', delay: 0.3 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center section-padding pt-28"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Profile Image */}
          <motion.div className="flex-shrink-0" ref={imageRef}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-30 blur-xl animate-pulse-glow" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-primary/40 p-1">
                <img src="/profile.jpg" alt="Adithya Ashok" className="w-full h-full object-cover rounded-full bg-surface" />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -right-2 glass rounded-xl px-3 py-1.5 text-xs font-semibold text-secondary border border-secondary/30"
              >
                🚀 Open to Work
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 leading-tight"
            >
              Hi, I&apos;m <span className="gradient-text">Adithya Ashok</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-text-secondary mb-4 h-10"
            >
              <TypeAnimation
                sequence={[
                  'Aspiring Software Engineer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Open Source Contributor',
                  2000,
                  'Technology Enthusiast',
                  2000,
                ]}
                repeat={Infinity}
                speed={50}
                deletionSpeed={40}
                className="text-secondary"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-text-secondary text-base sm:text-lg max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              Building innovative software solutions and transforming ideas into impactful digital products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              {resumeUrl ? (
                <>
                  <AnimatedButton href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    <FaDownload /> View Resume
                  </AnimatedButton>

                  <AnimatedButton href={resumeUrl} download variant="secondary">
                    <FaDownload /> Download PDF
                  </AnimatedButton>
                </>
              ) : (
                <AnimatedButton href="/resume.pdf" download>
                  <FaDownload /> Download Resume
                </AnimatedButton>
              )}

              <AnimatedButton variant="accent" onClick={scrollToContact}>
                <FaHandshake /> Hire Me
              </AnimatedButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-secondary transition-colors duration-200"
                  onMouseEnter={(e) => (e.currentTarget.style.color = social.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0], y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}