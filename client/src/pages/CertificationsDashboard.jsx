import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaFilter, FaExternalLinkAlt, FaDownload, FaCertificate } from 'react-icons/fa';
import GlassCard from '../components/ui/GlassCard';
import AnimatedButton from '../components/ui/AnimatedButton';

// Static fallback data in case DB is down
const fallbackCertifications = [
  { id: 1, title: 'Smart India Hackathon 24', issuer: 'MoE, Govt of India', category: 'Non-Technical', date: '2024', imageUrl: '/uploads/sih24.png', certificateUrl: '/uploads/sih24.png' },
  { id: 2, title: 'Java Programming Fundamentals', issuer: 'Infosys Springboard', category: 'Technical', date: 'Oct 2024', imageUrl: '/uploads/infosys_java.png', certificateUrl: '/uploads/infosys_java.png' },
  { id: 3, title: 'Data Structures', issuer: 'Infosys Springboard', category: 'Technical', date: 'Oct 2024', imageUrl: '/uploads/infosys_data_structures.png', certificateUrl: '/uploads/infosys_data_structures.png' },
  { id: 4, title: 'Privacy and Security in Online Social Media', issuer: 'NPTEL', category: 'Technical', date: 'Jan-Apr 2025', imageUrl: '/uploads/nptel_privacy.png', certificateUrl: '/uploads/nptel_privacy.png' },
  { id: 5, title: 'NeST Internship Certificate', issuer: 'NeST Cyber Campus', category: 'Internship', date: 'Jul 2025', imageUrl: '/uploads/nest_internship.png', certificateUrl: '/uploads/nest_internship.png' },
];

const categories = ['All', 'Technical', 'Internship', 'Non-Technical'];

export default function CertificationsDashboard() {
  const navigate = useNavigate();
  const [certifications, setCertifications] = useState([]);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/certifications')
      .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch'))
      .then(data => {
        setCertifications(data.length ? data : fallbackCertifications);
      })
      .catch(() => {
        setCertifications(fallbackCertifications);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const filteredCerts = certifications.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(search.toLowerCase()) || 
                          cert.issuer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || cert.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const techCount = certifications.filter(c => c.category === 'Technical').length;
  const internCount = certifications.filter(c => c.category === 'Internship').length;
  const nonTechCount = certifications.filter(c => c.category === 'Non-Technical').length;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-4"
          >
            <FaArrowLeft /> Back to Portfolio
          </button>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Certificate <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-text-secondary">View and verify all my professional certifications and achievements.</p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white/5 border border-primary/20 text-white placeholder-text-muted outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <div className="relative w-full sm:w-48">
            <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-surface border border-primary/20 text-white outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <GlassCard className="text-center py-4 px-2" hover={false}>
          <div className="text-2xl font-bold text-white">{certifications.length}</div>
          <div className="text-xs text-text-muted uppercase tracking-wider mt-1">Total</div>
        </GlassCard>
        <GlassCard className="text-center py-4 px-2" hover={false}>
          <div className="text-2xl font-bold text-primary-light">{techCount}</div>
          <div className="text-xs text-text-muted uppercase tracking-wider mt-1">Technical</div>
        </GlassCard>
        <GlassCard className="text-center py-4 px-2" hover={false}>
          <div className="text-2xl font-bold text-secondary-light">{internCount}</div>
          <div className="text-xs text-text-muted uppercase tracking-wider mt-1">Internship</div>
        </GlassCard>
        <GlassCard className="text-center py-4 px-2" hover={false}>
          <div className="text-2xl font-bold text-accent">{nonTechCount}</div>
          <div className="text-xs text-text-muted uppercase tracking-wider mt-1">Non-Technical</div>
        </GlassCard>
      </div>

      {/* Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCerts.map((cert) => {
              let imgSrc = cert.imageUrl;
              let fileSrc = cert.certificateUrl || cert.imageUrl;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={cert._id || cert.id}
                >
                  <GlassCard className="h-full flex flex-col group relative overflow-hidden !p-0">
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded border uppercase tracking-wider
                        ${cert.category === 'Technical' ? 'bg-primary/20 border-primary/30 text-primary-light' : 
                          cert.category === 'Internship' ? 'bg-secondary/20 border-secondary/30 text-secondary-light' : 
                          'bg-accent/20 border-accent/30 text-accent'}`}
                      >
                        {cert.category}
                      </span>
                    </div>

                    {/* Image Preview */}
                    <div className="h-56 relative overflow-hidden bg-background-light border-b border-white/5 flex items-center justify-center">
                      {imgSrc ? (
                        <img 
                          src={imgSrc} 
                          alt={cert.title} 
                          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
                        />
                      ) : (
                        <FaCertificate className="text-6xl text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm z-20">
                        {fileSrc && (
                          <>
                            <a href={fileSrc} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform" title="View">
                              <FaExternalLinkAlt />
                            </a>
                            <a href={fileSrc} download className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform" title="Download">
                              <FaDownload />
                            </a>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-white leading-tight mb-1 group-hover:text-primary-light transition-colors line-clamp-2">{cert.title}</h3>
                      <p className="text-text-secondary text-sm font-medium mb-3">{cert.issuer}</p>
                      
                      <div className="mt-auto flex gap-2">
                        {fileSrc && (
                          <a href={fileSrc} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider rounded bg-white/5 hover:bg-primary/20 text-white hover:text-primary-light transition-colors border border-white/10 hover:border-primary/30">
                            View
                          </a>
                        )}
                        {fileSrc && (
                          <a href={fileSrc} download className="flex-1 text-center py-2 text-xs font-bold uppercase tracking-wider rounded bg-primary/20 hover:bg-primary/40 text-primary-light transition-colors border border-primary/30">
                            Download
                          </a>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}

      {!isLoading && filteredCerts.length === 0 && (
        <div className="text-center py-20 text-text-muted">
          <FaSearch size={48} className="mx-auto mb-4 opacity-20" />
          <p className="text-xl">No certifications found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
