import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiSearch } from 'react-icons/hi'
import SectionHeading from '../ui/SectionHeading'
import ProjectModal from '../ui/ProjectModal'
import { projects, projectCategories } from '../../data/projects'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory
      const matchesSearch = searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <section id="projects" className="relative py-20 sm:py-28" style={{ backgroundColor: 'var(--cr-bg)' }}>
      <div className="max-w-6xl mx-auto px-8 sm:px-10 lg:px-12">
        <SectionHeading title="My Projects" subtitle="Recent Work" />

        <div className="mb-8 sm:mb-10 space-y-4">
          <div className="relative max-w-md mx-auto">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg sm:text-xl" style={{ color: 'color-mix(in srgb, var(--cr-text) 50%, transparent)' }} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-xl font-body text-sm sm:text-base focus:outline-none"
              style={{
                backgroundColor: 'var(--cr-bg-card)',
                border: '3px solid var(--cr-border)',
                color: 'var(--cr-text)',
              }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {projectCategories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-body font-bold text-xs sm:text-sm uppercase transition-colors ${
                  activeCategory === cat ? '' : 'hover-bg-primary-60'
                }`}
                style={{
                  border: '3px solid var(--cr-border)',
                  backgroundColor: activeCategory === cat ? 'var(--cr-text)' : 'var(--cr-bg-card)',
                  color: activeCategory === cat ? 'var(--cr-bg)' : 'var(--cr-text)',
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                onClick={() => setSelectedProject(project)}
                className="rounded-2xl group cursor-pointer"
                style={{
                  backgroundColor: 'var(--cr-bg-card)',
                  border: '3px solid var(--cr-border)',
                  boxShadow: '6px 6px 0px var(--cr-border)',
                }}
              >
                <div className="relative overflow-hidden rounded-t-2xl h-40 sm:h-44 lg:h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--cr-text) 50%, transparent), transparent)' }} />
                  <span
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-lg font-body font-bold text-[10px] sm:text-xs uppercase"
                    style={{ backgroundColor: project.color, color: 'var(--cr-text)', border: '2px solid var(--cr-border)' }}
                  >
                    {project.category}
                  </span>
                </div>

                <div className="p-4 sm:p-5 text-center">
                  <h3 className="font-heading text-lg sm:text-xl" style={{ color: 'var(--cr-text)' }}>{project.title}</h3>
                  <p className="font-body text-xs sm:text-sm mt-1.5 sm:mt-2 line-clamp-2" style={{ color: 'var(--cr-text-muted)' }}>{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 justify-center">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 sm:py-1 rounded-lg font-body text-[10px] sm:text-xs font-bold"
                        style={{
                          backgroundColor: 'var(--cr-text)',
                          color: 'var(--cr-bg)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-5">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-body font-bold rounded-lg"
                      style={{
                        backgroundColor: 'var(--cr-text)',
                        color: 'var(--cr-bg)',
                        border: '3px solid var(--cr-border)',
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaGithub className="text-sm" /> Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-body font-bold rounded-lg"
                      style={{
                        backgroundColor: 'var(--cr-primary)',
                        color: 'var(--cr-text)',
                        border: '3px solid var(--cr-border)',
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaExternalLinkAlt className="text-sm" /> Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="font-body text-base sm:text-lg" style={{ color: 'color-mix(in srgb, var(--cr-text) 50%, transparent)' }}>No projects found.</p>
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
