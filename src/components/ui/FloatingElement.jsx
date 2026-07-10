import { motion, useReducedMotion } from 'framer-motion'

export default function FloatingElement({ children, className = '', delay = 0, duration = 6, xOffset = 10, yOffset = -10 }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={`absolute pointer-events-none ${className}`}>{children}</div>
  }

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, yOffset, 0],
        x: [0, xOffset, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
