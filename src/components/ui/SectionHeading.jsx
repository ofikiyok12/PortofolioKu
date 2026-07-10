import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

export default function SectionHeading({ title, subtitle, align = 'center', color = 'bg-primary' }) {
  const [ref, isInView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <motion.span
          className="section-subtitle inline-block mb-2 px-4 py-1 rounded-full"
          style={{
            backgroundColor: 'var(--cr-text)',
            color: 'var(--cr-bg)',
          }}
          whileHover={{ scale: 1.05 }}
        >
          {subtitle}
        </motion.span>
      )}
      <h2 className="section-title relative inline-block">
        {title}
        <span
          className="absolute -bottom-2 left-0 right-0 h-4 -z-10 rounded-full opacity-40"
          style={{
            backgroundColor: color === 'bg-accent' ? 'var(--cr-accent)' : color === 'bg-secondary' ? 'var(--cr-secondary)' : color === 'bg-green' ? 'var(--cr-green)' : 'var(--cr-primary)',
          }}
        />
      </h2>
    </motion.div>
  )
}
