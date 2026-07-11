import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function GalleryModal({ images, selectedIndex, onClose, onPrev, onNext }) {
  const image = images[selectedIndex]

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {image && (
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

          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-6 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl"
            style={{
              backgroundColor: 'var(--cr-bg-card)',
              border: '3px solid var(--cr-border)',
              color: 'var(--cr-text)',
              boxShadow: '4px 4px 0px var(--cr-border)',
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft size={18} />
          </button>

          <button
            onClick={onNext}
            className="absolute right-2 sm:right-6 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl"
            style={{
              backgroundColor: 'var(--cr-bg-card)',
              border: '3px solid var(--cr-border)',
              color: 'var(--cr-text)',
              boxShadow: '4px 4px 0px var(--cr-border)',
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight size={18} />
          </button>

          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl"
            style={{
              backgroundColor: 'var(--cr-bg-card)',
              border: '3px solid var(--cr-border)',
              boxShadow: '12px 12px 0px var(--cr-border)',
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

            <div className="flex items-center justify-center max-h-[80vh] p-2 sm:p-3">
              <img
                src={image.src}
                alt={image.alt}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>

            <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-center">
              <p className="font-fun text-sm sm:text-base" style={{ color: 'var(--cr-text)' }}>
                {image.caption}
              </p>
              <p className="font-body text-xs mt-1" style={{ color: 'var(--cr-text-subtle)' }}>
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
