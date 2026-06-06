import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/ui/GlassCard';
import {
  FaProjectDiagram, FaCertificate, FaCode, FaLink,
  FaEnvelope, FaUser, FaSignOutAlt, FaBars, FaTimes,
  FaPlus, FaEdit, FaTrash, FaEye, FaUpload, FaAward
} from 'react-icons/fa';

const tabs = [
  { id: 'overview', label: 'Overview', icon: FaEye },
  { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
  { id: 'certifications', label: 'Certifications', icon: FaCertificate },
  { id: 'skills', label: 'Skills', icon: FaCode },
  { id: 'leadership', label: 'Leadership', icon: FaAward },
  { id: 'socials', label: 'Social Links', icon: FaLink },
  { id: 'messages', label: 'Messages', icon: FaEnvelope },
  { id: 'profile', label: 'Profile & Resume', icon: FaUser },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) navigate('/admin');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 glass-strong transform transition-transform duration-300 lg:translate-x-0 lg:relative ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold gradient-text">Admin Panel</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-text-secondary hover:text-white cursor-pointer"
            >
              <FaTimes />
            </button>
          </div>

          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-primary/20 text-white border border-primary/30'
                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-red-400 hover:bg-red-400/10 transition-colors cursor-pointer"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8">
        {/* Mobile header */}
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white p-2 cursor-pointer"
          >
            <FaBars size={20} />
          </button>
          <h1 className="text-2xl font-bold text-white capitalize">{activeTab}</h1>
          <div className="text-text-muted text-sm">
            Welcome, Admin
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'projects' && <CrudTab title="Projects" />}
          {activeTab === 'certifications' && <CrudTab title="Certifications" />}
          {activeTab === 'skills' && <CrudTab title="Skills" />}
          {activeTab === 'leadership' && <CrudTab title="Leadership & Volunteering" icon={<FaAward size={40} className="mx-auto mb-3 opacity-30" />} />}
          {activeTab === 'socials' && <CrudTab title="Social Links" />}
          {activeTab === 'messages' && <MessagesTab />}
          {activeTab === 'profile' && <ProfileTab />}
        </motion.div>
      </main>
    </div>
  );
}

function OverviewTab() {
  const stats = [
    { label: 'Total Projects', value: 3, color: '#7C3AED' },
    { label: 'Certifications', value: 4, color: '#06B6D4' },
    { label: 'Messages', value: 12, color: '#8B5CF6' },
    { label: 'Visitors', value: 1247, color: '#22D3EE' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <GlassCard key={s.label}>
          <p className="text-text-muted text-sm">{s.label}</p>
          <p className="text-3xl font-bold mt-1" style={{ color: s.color }}>
            {s.value}
          </p>
        </GlassCard>
      ))}
    </div>
  );
}

function CrudTab({ title, icon }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <p className="text-text-secondary">Manage your {title.toLowerCase()}</p>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors cursor-pointer shadow-lg shadow-primary/20">
            <FaPlus /> Add New
          </button>
        </div>
      </div>

      <GlassCard hover={false}>
        <div className="text-center py-12 text-text-muted">
          {icon || <FaProjectDiagram size={40} className="mx-auto mb-3 opacity-30" />}
          <p className="text-lg text-white mb-2">Connect to MongoDB to manage {title}</p>
          <p className="text-sm">Set up your MONGODB_URI in the .env file to enable full CRUD operations.</p>
        </div>
      </GlassCard>
    </div>
  );
}

function MessagesTab() {
  return (
    <GlassCard hover={false}>
      <div className="text-center py-12 text-text-muted">
        <FaEnvelope size={40} className="mx-auto mb-3 opacity-30" />
        <p>No messages yet</p>
        <p className="text-sm mt-1">Contact form submissions will appear here</p>
      </div>
    </GlassCard>
  );
}

function ProfileTab() {
  return (
    <div className="max-w-2xl space-y-6">
      <GlassCard hover={false}>
        <h3 className="text-lg font-semibold text-white mb-4">Profile Settings</h3>
        <div className="space-y-4">
          {['Full Name', 'Title', 'Bio', 'Email', 'Phone', 'Location'].map((field) => (
            <div key={field}>
              <label className="block text-sm text-text-secondary mb-1.5">{field}</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-primary/15 text-white outline-none focus:border-primary/50 transition-colors"
                placeholder={`Enter ${field.toLowerCase()}`}
              />
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard hover={false}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Upload Resume PDF</h3>
          <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">Active: resume.pdf</span>
        </div>
        <div className="border-2 border-dashed border-primary/20 rounded-xl p-8 text-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
          <FaUpload size={32} className="mx-auto mb-3 text-primary/50 group-hover:text-primary transition-colors" />
          <p className="text-text-secondary text-sm font-medium mb-1">Drop your new resume PDF here</p>
          <p className="text-text-muted text-xs">Maximum file size 5MB</p>
          <input type="file" accept=".pdf" className="hidden" id="resume-upload" />
          <label
            htmlFor="resume-upload"
            className="inline-block mt-5 px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-light transition-colors cursor-pointer shadow-lg shadow-primary/20"
          >
            Select PDF File
          </label>
        </div>
      </GlassCard>
    </div>
  );
}
