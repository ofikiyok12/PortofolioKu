import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: 'color-mix(in srgb, var(--cr-text) 60%, transparent)' }}
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{
              backgroundColor: 'var(--cr-bg-card)',
              border: '3px solid var(--cr-border)',
              boxShadow: '8px 8px 0px var(--cr-border)',
            }}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-xl"
              style={{
                backgroundColor: 'var(--cr-bg)',
                border: '3px solid var(--cr-border)',
                color: 'var(--cr-text)',
              }}
            >
              <FaTimes size={16} />
            </button>

            <div className="relative h-52 sm:h-64 overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--cr-text) 60%, transparent), transparent)' }} />
              <span
                className="absolute top-4 left-4 px-3 py-1.5 rounded-xl font-body font-bold text-xs uppercase"
                style={{ backgroundColor: project.color, color: 'var(--cr-text)', border: '3px solid var(--cr-border)' }}
              >
                {project.category}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <h2 className="font-heading text-2xl sm:text-3xl" style={{ color: 'var(--cr-text)' }}>
                {project.title}
              </h2>

              <p className="font-body text-sm sm:text-base mt-4 leading-relaxed" style={{ color: 'var(--cr-text-muted)' }}>
                {project.description}
              </p>

              <div className="mt-6">
                <h4 className="font-body font-bold text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--cr-text-subtle)' }}>
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl font-body text-xs sm:text-sm font-bold"
                      style={{
                        backgroundColor: 'var(--cr-text)',
                        color: 'var(--cr-bg)',
                        border: '3px solid var(--cr-border)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-body font-bold text-sm uppercase"
                  style={{
                    backgroundColor: 'var(--cr-text)',
                    color: 'var(--cr-bg)',
                    border: '3px solid var(--cr-border)',
                    boxShadow: '4px 4px 0px var(--cr-border)',
                  }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaGithub size={16} /> Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-body font-bold text-sm uppercase"
                  style={{
                    backgroundColor: project.color || 'var(--cr-primary)',
                    color: 'var(--cr-text)',
                    border: '3px solid var(--cr-border)',
                    boxShadow: '4px 4px 0px var(--cr-border)',
                  }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaExternalLinkAlt size={14} /> Demo
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
