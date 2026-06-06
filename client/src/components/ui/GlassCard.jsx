import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 ${hover ? 'glass-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
