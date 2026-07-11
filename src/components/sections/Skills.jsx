import { useMemo, useRef } from 'react'
import { motion, useReducedMotion, useInView } from 'framer-motion'

import SectionHeading from '../ui/SectionHeading'
import { skills } from '../../data/skills'

const floatConfigs = skills.map(() => ({
  yOffset: -3 - Math.random() * 6,
  duration: 3 + Math.random() * 3,
  delay: Math.random() * 3,
}))

export default function Skills() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const configs = useMemo(() => floatConfigs, [])

  return (
    <section id="skills" className="relative py-20 sm:py-28" style={{ backgroundColor: 'var(--cr-primary)' }}>
      <div className="absolute inset-0 grid-bg opacity-[0.05]" />
      <div className="absolute inset-0 stripe-pattern" />
      <div className="relative max-w-6xl mx-auto px-8 sm:px-10 lg:px-12">
        <SectionHeading title="Skills & Tools" subtitle="What I Know" color="bg-accent" />

        <div
          ref={ref}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5"
        >
          {skills.map((skill, index) => {
            const { yOffset, duration, delay } = configs[index]

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                animate={
                  isInView
                    ? reduce
                      ? { opacity: 1, y: 0 }
                      : { opacity: 1, y: [0, yOffset, 0] }
                    : {}
                }
                transition={
                  reduce
                    ? { duration: 0.3, delay: index * 0.03 }
                    : {
                        opacity: { duration: 0.3, delay: index * 0.03 },
                        y: {
                          duration,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: delay + index * 0.03,
                        },
                      }
                }
                whileHover={{ scale: 1.06, y: -4 }}
                className="rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 flex flex-col items-center justify-center gap-2 sm:gap-3 cursor-pointer"
                style={{
                  backgroundColor: 'var(--cr-bg-card)',
                  border: '3px solid var(--cr-border)',
                  boxShadow: '6px 6px 0px var(--cr-border)',
                }}
              >
                <skill.Icon
                  className="text-2xl sm:text-3xl lg:text-4xl"
                  style={{ color: skill.color }}
                />
                <span className="font-body font-bold text-[10px] sm:text-xs lg:text-sm text-center leading-tight" style={{ color: 'var(--cr-text)' }}>
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
