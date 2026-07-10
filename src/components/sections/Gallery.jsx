import { useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { galleryImages } from '../../data/gallery'
import { useInView } from '../../hooks/useInView'

const rotations = [0, 3, -2, 4, -3, 2]

export default function Gallery() {
  const [ref, isInView] = useInView()

  const imagesWithRotation = useMemo(() => {
    return galleryImages.map((img, i) => ({
      ...img,
      rotation: rotations[i % rotations.length],
    }))
  }, [])

  return (
    <section id="gallery" className="relative py-20 sm:py-28" style={{ backgroundColor: 'var(--cr-bg)' }}>
      <div className="absolute inset-0 grid-bg opacity-[0.02]" />
      <div className="relative max-w-6xl mx-auto px-8 sm:px-10 lg:px-12">
        <SectionHeading title="Gallery" subtitle="Snapshots" />

        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {imagesWithRotation.map((image, index) => {
              const isMiddle = index === Math.floor(imagesWithRotation.length / 2)

              return (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  style={{
                    transform: `rotate(${image.rotation}deg)`,
                    backgroundColor: 'var(--cr-bg-card)',
                    border: '3px solid var(--cr-border)',
                    boxShadow: '6px 6px 0px var(--cr-border)',
                  }}
                  whileHover={{ scale: 1.04, rotate: 0, zIndex: 10, transition: { duration: 0.2 } }}
                  className={`p-2.5 pb-10 sm:p-3 sm:pb-12 rounded-2xl relative group ${
                    isMiddle ? 'lg:translate-y-6' : ''
                  }`}
                >
                  <div className="scrapbook-tape -top-3 left-1/2 -translate-x-1/2" />
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <p className="font-fun text-center mt-2 sm:mt-3 text-xs sm:text-sm" style={{ color: 'var(--cr-text)' }}>
                    {image.caption}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
