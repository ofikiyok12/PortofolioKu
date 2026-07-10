import { motion } from 'framer-motion'

export default function NeoButton({ children, onClick, href, bg = 'bg-primary', textColor = 'text-dark', className = '', icon: Icon, ...props }) {
  const Component = href ? motion.a : motion.button
  const extraProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Component
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-6 py-3 font-body font-bold text-sm sm:text-base uppercase ${className}`}
      style={{
        border: '3px solid var(--cr-border)',
        boxShadow: '4px 4px 0px var(--cr-border)',
        backgroundColor: bg === 'bg-dark' ? 'var(--cr-text)' : bg === 'bg-accent' ? 'var(--cr-accent)' : bg === 'bg-primary' ? 'var(--cr-primary)' : bg === 'bg-secondary' ? 'var(--cr-secondary)' : bg === 'bg-green' ? 'var(--cr-green)' : 'var(--cr-bg-card)',
        color: textColor === 'text-white' ? 'var(--cr-bg)' : 'var(--cr-text)',
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      {...extraProps}
      {...props}
    >
      {Icon && <Icon size={18} />}
      {children}
    </Component>
  )
}
