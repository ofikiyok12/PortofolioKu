import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'
import { useInView } from '../../hooks/useInView'

export default function Services() {
  const [ref, isInView] = useInView()

  return (
    <section id="services" className="relative py-20 sm:py-28" style={{ backgroundColor: 'var(--cr-green)' }}>
      <div className="absolute inset-0 grid-bg opacity-[0.04]" />
      <div className="absolute inset-0 stripe-pattern" />
      <div className="relative max-w-6xl mx-auto px-8 sm:px-10 lg:px-12">
        <SectionHeading title="Services" subtitle="What I Do" color="bg-secondary" />

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
        >
          {services.slice(0, 1).map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="lg:col-span-2 rounded-2xl p-6 sm:p-8 relative group"
              style={{
                backgroundColor: 'var(--cr-bg-card)',
                border: '3px solid var(--cr-border)',
                boxShadow: '6px 6px 0px var(--cr-border)',
              }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, -8, 0] }}
                  transition={{ duration: 0.4 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: service.color,
                    border: '3px solid var(--cr-border)',
                  }}
                >
                  <service.Icon className="text-3xl sm:text-4xl" style={{ color: 'var(--cr-text)' }} />
                </motion.div>
                <div className="text-center sm:text-left">
                  <h3 className="font-heading text-xl sm:text-2xl" style={{ color: 'var(--cr-text)' }}>{service.title}</h3>
                  <p className="font-body text-sm sm:text-base mt-2 leading-relaxed" style={{ color: 'var(--cr-text-muted)' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {services.slice(1).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-5 sm:p-6 lg:p-8 text-center group"
              style={{
                backgroundColor: 'var(--cr-bg-card)',
                border: '3px solid var(--cr-border)',
                boxShadow: '6px 6px 0px var(--cr-border)',
              }}
            >
              <motion.div
                whileHover={{ rotate: [0, -8, 8, -8, 0] }}
                transition={{ duration: 0.4 }}
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 sm:mb-5"
                style={{
                  backgroundColor: service.color,
                  border: '3px solid var(--cr-border)',
                }}
              >
                <service.Icon className="text-2xl sm:text-3xl" style={{ color: 'var(--cr-text)' }} />
              </motion.div>
              <h3 className="font-heading text-lg sm:text-xl" style={{ color: 'var(--cr-text)' }}>{service.title}</h3>
              <p className="font-body text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed" style={{ color: 'var(--cr-text-muted)' }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
