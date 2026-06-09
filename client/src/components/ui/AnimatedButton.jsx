import { motion } from 'framer-motion';

export default function AnimatedButton({
  children,
  variant = 'primary',
  className = '',
  href,
  download,
  onClick,
  ...props
}) {
  // Apply default padding only if the caller hasn't specified custom padding
  const hasCustomPadding = /\bpx-\S+/.test(className) || /\bpy-\S+/.test(className);
  const defaultPadding = hasCustomPadding ? '' : 'px-6 py-3';

  const base = `relative inline-flex items-center gap-2 ${defaultPadding} rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 cursor-pointer`;

  const variants = {
    primary:
      'bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-[1.03]',
    secondary:
      'border border-primary/40 text-white hover:bg-primary/10 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]',
    accent:
      'bg-gradient-to-r from-secondary to-secondary-light text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-[1.03]',
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href
    ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer', download }
    : {};

  return (
    <Component
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...linkProps}
      {...props}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
}
