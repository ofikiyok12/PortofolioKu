import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import NeoButton from '../ui/NeoButton'
import { useInView } from '../../hooks/useInView'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [ref, isInView] = useInView()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch('https://formsubmit.co/ajax/taufiqandrian99@gmail.com', {
        method: 'POST',
        body: data,
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28" style={{ backgroundColor: 'var(--cr-accent)' }}>
      <div className="absolute inset-0 grid-bg opacity-[0.04]" />
      <div className="absolute inset-0 stripe-pattern" />
      <div className="relative max-w-3xl mx-auto px-8 sm:px-10 lg:px-12">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" color="bg-primary" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-6 sm:p-8 lg:p-10 space-y-5 sm:space-y-6"
            style={{
              backgroundColor: 'var(--cr-bg-card)',
              border: '3px solid var(--cr-border)',
              boxShadow: '6px 6px 0px var(--cr-border)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label className="font-body font-bold text-xs sm:text-sm uppercase mb-1.5 sm:mb-2 block" style={{ color: 'var(--cr-text)' }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl font-body text-sm focus:outline-none"
                    style={{
                      backgroundColor: 'var(--cr-bg)',
                      border: '3px solid var(--cr-border)',
                      color: 'var(--cr-text)',
                    }}
                  />
              </div>
              <div>
                <label className="font-body font-bold text-xs sm:text-sm uppercase mb-1.5 sm:mb-2 block" style={{ color: 'var(--cr-text)' }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl font-body text-sm focus:outline-none"
                    style={{
                      backgroundColor: 'var(--cr-bg)',
                      border: '3px solid var(--cr-border)',
                      color: 'var(--cr-text)',
                    }}
                  />
              </div>
            </div>

            <div>
              <label className="font-body font-bold text-xs sm:text-sm uppercase mb-1.5 sm:mb-2 block" style={{ color: 'var(--cr-text)' }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl font-body text-sm focus:outline-none"
                  style={{
                    backgroundColor: 'var(--cr-bg)',
                    border: '3px solid var(--cr-border)',
                    color: 'var(--cr-text)',
                  }}
                />
            </div>

            <div>
              <label className="font-body font-bold text-xs sm:text-sm uppercase mb-1.5 sm:mb-2 block" style={{ color: 'var(--cr-text)' }}>Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl font-body text-sm focus:outline-none resize-none"
                  style={{
                    backgroundColor: 'var(--cr-bg)',
                    border: '3px solid var(--cr-border)',
                    color: 'var(--cr-text)',
                  }}
                />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2">
              <NeoButton
                type="submit"
                bg="bg-dark"
                textColor="text-white"
                icon={FaPaperPlane}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </NeoButton>

              <div className="min-h-[2rem] flex items-center">
                {status === 'success' && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 font-body font-bold text-sm"
                    style={{ color: 'var(--cr-green)' }}
                  >
                    <FaCheckCircle /> Message sent!
                  </motion.span>
                )}
                {status === 'error' && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 font-body font-bold text-sm"
                    style={{ color: '#ef4444' }}
                  >
                    <FaExclamationCircle /> Something went wrong. Try again.
                  </motion.span>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
